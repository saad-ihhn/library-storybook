import {
  Component,
  inject,
  ChangeDetectionStrategy,
  signal,
} from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  LibEncryptDecryptService,
  LibHttpService,
} from '@saad-ihhn/ihhn-host-lib/services';
import { LibMatFlatButtonComponent } from '@saad-ihhn/ihhn-host-lib/lib-buttons';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';

/**
 * User authentication response interface
 */
export interface IUserAuthResponse {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: 'male' | 'female' | 'other';
  image?: string;
  accessToken?: string;
  refreshToken?: string;
  address?: { city?: string; state?: string; country?: string };
}

/**
 * Dummy users API response interface
 */
interface DummyUsersResponse {
  users: IUserAuthResponse[];
  total: number;
  skip: number;
  limit: number;
}

@Component({
  selector: 'app-toSignal',
  standalone: true,
  imports: [LibMatFlatButtonComponent, FormsModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .container {
        max-width: 1400px;
      }

      .line-clamp-1 {
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      input::placeholder,
      textarea::placeholder {
        color: #9ca3af;
        font-size: 0.875rem;
      }

      .overflow-y-auto::-webkit-scrollbar {
        width: 6px;
      }

      .overflow-y-auto::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 3px;
      }

      .overflow-y-auto::-webkit-scrollbar-thumb {
        background: #c1c1c1;
        border-radius: 3px;
      }

      .overflow-y-auto::-webkit-scrollbar-thumb:hover {
        background: #a1a1a1;
      }

      .transition-shadow {
        transition: box-shadow 0.2s ease-in-out;
      }

      input:focus,
      textarea:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
      }

      .status-badge {
        padding: 0.25rem 0.5rem;
        border-radius: 0.375rem;
        font-size: 0.75rem;
        font-weight: 500;
      }

      .status-loading,
      .status-idle {
        background-color: #dbeafe;
        color: #1e40af;
      }

      .status-error {
        background-color: #fee2e2;
        color: #b91c1c;
      }

      .status-success,
      .status-completed {
        background-color: #dcfce7;
        color: #166534;
      }

      .card {
        background-color: #ffffff;
        border-radius: 0.5rem;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
        border: 1px solid #e5e7eb;
      }

      .warning-box {
        background-color: #fef3c7;
        border: 1px solid #f59e0b;
        color: #92400e;
      }
    `,
  ],
  template: `
    <div class="min-h-screen p-4 bg-gray-50">
      <div class="container mx-auto">
        <!-- Header -->
        <div class="text-center mb-8">
          <h1 class="text-3xl font-semibold text-gray-800 mb-2">
            To Signal API Demo
          </h1>
          <p class="text-gray-600">
            Professional API Data Management Interface
          </p>
        </div>

        <div class="grid grid-cols-1 gap-6">

          <!-- Column 2: To Signal -->
          <div class="space-y-6">
            <h2 class="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
              List To Signal
            </h2>

            <div class="card p-5 max-h-full">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-medium text-gray-800">Users</h3>
                <div class="flow items-center space-x-2">
                  <span
                    [ngClass]="getStatusBadgeClass(status())">
                    {{
                      status()
                    }}
                  </span>
                  <lib-mat-flat-button
                    (matClick)="refreshAllData()"
                    size="small"
                    class="text-sm"
                  >
                    Refresh
                  </lib-mat-flat-button>
                </div>
              </div>

              <div class="max-h-[1350px] overflow-y-auto space-y-3">
                @for(user of usersSignal()?.users || [];
                track user.id) {
                <div
                  class="bg-gray-50 p-3 rounded-md border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                  <div class="flex items-center space-x-3">
                    <img
                      [src]="user.image"
                      [alt]="user.firstName"
                      class="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                    <div class="flex-1 min-w-0">
                      <p class="font-medium text-sm text-gray-800 truncate">
                        {{ user.firstName }} {{ user.lastName }}
                      </p>
                      <p class="text-gray-500 text-xs truncate">
                        {{ user.email }}
                      </p>
                    </div>
                  </div>
                </div>
                }
              </div>
            </div>
          </div>
        </div>

        <div class="mt-8 text-center space-x-4">
          <lib-mat-flat-button (matClick)="refreshAllData()"
            >Refresh All Data</lib-mat-flat-button
          >
          <lib-mat-flat-button (matClick)="logout()"
            >Logout</lib-mat-flat-button
          >
        </div>
      </div>
    </div>
  `,
})
export class ToSignalComponent {
  // Region: Dependency Injection
  private $httpService = inject(LibHttpService);
  private $authService = inject(AuthService);
  private $encryptDecrypt = inject(LibEncryptDecryptService);


  // Region: Signals
  readonly status = this.$httpService.status;

  // Trigger for refresh
  private refreshTrigger = signal(0);

  // Convert trigger signal to observable
  private refresh$ = toObservable(this.refreshTrigger);

  // Map trigger HTTP call
  private usersObs$ = this.refresh$.pipe(
    switchMap(() =>
      this.$httpService.get<DummyUsersResponse>('https://dummyjson.com/users')
    )
  );

  usersSignal = toSignal(this.usersObs$, { initialValue: null });

  refreshAllData(): void {
    this.refreshTrigger.update(v => v + 1);

  }

  constructor() {
  }

  // Region: Authentication Methods
  /**
   * Logs out the current user and clears encrypted data
   */
  logout(): void {
    this.$authService.logout();
    this.$encryptDecrypt.clearAllData();
  }

  getStatusBadgeClass = (
    status: 'idle' | 'loading' | 'success' | 'error' | 'completed'
  ): string => {
    switch (status) {
      case 'loading':
        return 'status-badge status-loading';
      case 'error':
        return 'status-badge status-error';
      case 'success':
        return 'status-badge status-success';
      case 'completed':
        return 'status-badge status-completed';
      case 'idle':
      default:
        return 'status-badge status-idle';
    }
  };

}