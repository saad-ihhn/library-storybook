import { CommonModule } from '@angular/common';
import {
  Component,
  ChangeDetectionStrategy,
  inject,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LibMatFlatButtonComponent } from '@saad-ihhn/ihhn-host-lib/lib-buttons';
import {
  LibHttpService,
  LibEncryptDecryptService,
} from '@saad-ihhn/ihhn-host-lib/services';
import { AuthService } from '../../core/auth/auth.service';
import { HttpResourceOptions } from '@angular/common/http';

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

/**
 * Single user response interface for httpResource demo
 */
interface SingleUserResponse {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: 'male' | 'female' | 'other';
  image: string;
  address: {
    address: string;
    city: string;
    state: string;
    country: string;
  };
}

@Component({
  selector: 'app-resourse',
  standalone: true,
  imports: [LibMatFlatButtonComponent, FormsModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="min-h-screen p-4 bg-gray-50">
      <div class="container mx-auto">
        <div class="text-center mb-8">
          <h1 class="text-3xl font-semibold text-gray-800 mb-2">
            Resource API Demo
          </h1>
          <p class="text-gray-600">
            Professional API Data Management Interface
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Column 1: Standard getResource -->
          <div class="space-y-6">
            <h2 class="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
              Standard getResource
            </h2>

            <div class="card p-5">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-medium text-gray-800">Users List</h3>
                <div class="flow items-center space-x-2">
                  <span [ngClass]="getStatusBadgeClass(status())">
                    {{ status() }}
                  </span>
                  <lib-mat-flat-button
                    (matClick)="users.reload()"
                    size="small"
                    class="text-sm"
                  >
                    Refresh
                  </lib-mat-flat-button>
                </div>
              </div>

              <!-- Loading state -->
              @if (users.loading()) {
              <div class="status-badge status-loading">Loading users...</div>
              }

              <!-- Error state -->
              @if (users.error()) {
              <div class="status-badge status-error">
                {{ users.error()?.message }}
              </div>
              }

              <!-- Data state -->
              @if (users.data()?.users) {
              <div class="max-h-[400px] overflow-y-auto space-y-3">
                @for(user of users.data()?.users || []; track user.id) {
                <div
                  class="bg-gray-50 p-3 rounded-md border border-gray-200 hover:shadow-md transition-shadow"
                >
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
                    <button
                      (click)="selectUser(user.id)"
                      class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded hover:bg-blue-200 cursor-pointer"
                    >
                      View
                    </button>
                  </div>
                </div>
                }
              </div>
              }
            </div>
          </div>

          <!-- Column 2: httpResource with dynamic URL -->
          <div class="space-y-6">
            <h2 class="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
              Dynamic httpResource
            </h2>

            <div class="card p-5">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-medium text-gray-800">User Details</h3>
                <div class="flow items-center space-x-2">
                  <span [ngClass]="getStatusBadgeClass(singleUserStatus())">
                    {{ singleUserStatus() }}
                  </span>
                  <lib-mat-flat-button
                    (matClick)="singleUserResource.reload()"
                    size="small"
                    class="text-sm"
                    [disabled]="!selectedUserId()"
                  >
                    Refresh
                  </lib-mat-flat-button>
                </div>
              </div>

              <!-- User selection -->
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Select User ID:
                </label>
                <input
                  type="number"
                  [ngModel]="selectedUserId()"
                  (ngModelChange)="onUserIdChange($event)"
                  min="1"
                  max="100"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter user ID (1-100)"
                />
              </div>

              <!-- Loading state -->
              @if (singleUserResource.isLoading()){
              <div class="status-badge status-loading mb-4">
                Loading user details...
              </div>
              }

              <!-- Error state -->
              @if(singleUserResource.error()) {
              <div class="status-badge status-error mb-4">
                {{ singleUserResource.error()?.message }}
              </div>
              }

              <!-- Data state -->
              @if(singleUserResource.value()) {
              <div class="bg-white p-4 rounded-lg border border-gray-200">
                <div class="flex items-center space-x-4 mb-4">
                  <img
                    [src]="singleUserResource.value()?.image"
                    [alt]="singleUserResource.value()?.firstName"
                    class="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                  <div>
                    <h4 class="font-semibold text-gray-800">
                      {{ singleUserResource.value()?.firstName }}
                      {{ singleUserResource.value()?.lastName }}
                    </h4>
                    <p class="text-gray-600 text-sm">
                      {{ singleUserResource.value()?.email }}
                    </p>
                    <p class="text-gray-500 text-xs">
                      {{ singleUserResource.value()?.username }}
                    </p>
                  </div>
                </div>

                <div class="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span class="font-medium text-gray-700">Gender:</span>
                    <span class="text-gray-600 capitalize">
                      {{ singleUserResource.value()?.gender }}</span
                    >
                  </div>
                  <div>
                    <span class="font-medium text-gray-700">ID:</span>
                    <span class="text-gray-600">
                      {{ singleUserResource.value()?.id }}</span
                    >
                  </div>
                </div>
                @if (singleUserResource.value()?.address) {
                <div class="mt-4 p-3 bg-gray-50 rounded-md">
                  <h5 class="font-medium text-gray-700 mb-2">Address:</h5>
                  <p class="text-gray-600 text-sm">
                    {{ singleUserResource.value()?.address?.address }},<br />
                    {{ singleUserResource.value()?.address?.city }},<br />
                    {{ singleUserResource.value()?.address?.state }},
                    {{ singleUserResource.value()?.address?.country }}
                  </p>
                </div>
                }
              </div>
              }

              <!-- No selection message -->
               @if (!selectedUserId()) {
                 <div
                   class="text-center text-gray-500 py-8"
                 >
                   <p>Select a user ID to view details</p>
                 </div>
               }
            </div>
          </div>
        </div>

        <!-- Global Refresh All Button -->
        <div class="mt-8 text-center space-x-4">
          <lib-mat-flat-button (matClick)="refreshAll()">
            Refresh All Data
          </lib-mat-flat-button>
          <lib-mat-flat-button (matClick)="logout()"
            >Logout</lib-mat-flat-button
          >
        </div>
      </div>
    </div>
  `,
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
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
          0 1px 2px 0 rgba(0, 0, 0, 0.06);
        border: 1px solid #e5e7eb;
      }

      .warning-box {
        background-color: #fef3c7;
        border: 1px solid #f59e0b;
        color: #92400e;
      }
    `,
  ],
})
export class ResourseComponent {
  private $httpService = inject(LibHttpService);
  private $authService = inject(AuthService);
  private $encryptDecrypt = inject(LibEncryptDecryptService);

  readonly status = this.$httpService.status;
  selectedUserId = signal<number | null>(null);
  singleUserStatus = signal<
    'idle' | 'loading' | 'success' | 'error' | 'completed'
  >('idle');

  // Standard getResource example
  users = this.$httpService.getResource<DummyUsersResponse>(
    'https://dummyjson.com/users'
  );

  // httpResource example with dynamic URL
  singleUserResource = this.$httpService.httpResource<SingleUserResponse>(
    () =>
      this.selectedUserId()
        ? `https://dummyjson.com/users/${this.selectedUserId()}`
        : undefined,
    {
      // Optional: You can add parsing logic here
      parse: (data: any) => {
        // Transform the data if needed
        return {
          ...data,
          // Ensure address is always an object
          address: data.address || {},
        };
      },
      // Optional: Default value while loading or on error
      defaultValue: undefined,
      // Optional: You can add onSuccess and onError handlers
      onSuccess: (data: any) => {
        console.log('User data loaded successfully:', data);
        this.singleUserStatus.set('success');
      },
      onError: (error: any) => {
        console.error('Failed to load user data:', error);
        this.singleUserStatus.set('error');
      },
      onLoading: (loading: any) => {
        this.singleUserStatus.set(loading ? 'loading' : 'idle');
      },
    } as HttpResourceOptions<SingleUserResponse, unknown>
  );

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

  onUserIdChange(userId: number | null): void {
    this.selectedUserId.set(userId);
    if (userId) {
      this.singleUserStatus.set('loading');
    } else {
      this.singleUserStatus.set('idle');
    }
  }

  selectUser(userId: number): void {
    this.selectedUserId.set(userId);
    this.singleUserStatus.set('loading');
  }

  refreshAll(): void {
    this.users.reload();
    if (this.selectedUserId()) {
      this.singleUserResource.reload();
    }
  }

  logout(): void {
    this.$authService.logout();
    this.$encryptDecrypt.clearAllData();
  }
}
