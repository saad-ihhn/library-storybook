import {
  Component,
  inject,
  effect,
  ChangeDetectionStrategy,
  signal,
  WritableSignal,
} from '@angular/core';
import { LibStatePermissionsService } from '@saad-ihhn/ihhn-host-lib/permissions';
import { AuthService } from '../../core/auth/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  LibEncryptDecryptService,
  LibHttpService,
} from '@saad-ihhn/ihhn-host-lib/services';
import { LibMatFlatButtonComponent } from '@saad-ihhn/ihhn-host-lib/lib-buttons';

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
  selector: 'app-fetch-subscribe',
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

      .status-loading {
        background-color: #dbeafe;
        color: #1e40af;
      }

      .status-error {
        background-color: #fee2e2;
        color: #b91c1c;
      }

      .status-success {
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
            Fetch & Subscribe API Demo
          </h1>
          <p class="text-gray-600">
            Professional API Data Management Interface
          </p>
        </div>

        <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <!-- Column 1: CRUD Operations -->
          <div class="space-y-6">
            <h2 class="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
              CRUD Operations
            </h2>

            <!-- Create User Card -->
            <div class="card p-5">
              <h3 class="text-lg font-medium text-gray-800 mb-4">
                Create User
              </h3>

              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2"
                    >Username</label
                  >
                  <input
                    [(ngModel)]="createForm.username"
                    name="username"
                    type="text"
                    placeholder="Enter username"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2"
                    >Email</label
                  >
                  <input
                    [(ngModel)]="createForm.email"
                    name="email"
                    type="email"
                    placeholder="Enter email address"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div class="grid grid-cols-2 gap-3">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >First Name</label
                    >
                    <input
                      [(ngModel)]="createForm.firstName"
                      name="firstName"
                      type="text"
                      placeholder="First name"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Last Name</label
                    >
                    <input
                      [(ngModel)]="createForm.lastName"
                      name="lastName"
                      type="text"
                      placeholder="Last name"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2"
                    >Gender</label
                  >
                  <select
                    [(ngModel)]="createForm.gender"
                    name="gender"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2"
                    >Profile Image URL</label
                  >
                  <input
                    [(ngModel)]="createForm.image"
                    name="image"
                    type="text"
                    placeholder="https://example.com/image.jpg"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <lib-mat-flat-button
                  (matClick)="createNewUser()"
                  class="w-full"
                  [disabled]="!isCreateFormValid()"
                >
                  Submit User
                </lib-mat-flat-button>
              </div>
            </div>

            <!-- Update User Card -->
            <div class="card p-5">
              <h3 class="text-lg font-medium text-gray-800 mb-4">
                Update User
              </h3>

              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2"
                    >ID</label
                  >
                  <input
                    [(ngModel)]="updateForm.id"
                    name="updateId"
                    type="number"
                    min="1"
                    placeholder="User ID"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2"
                    >Username</label
                  >
                  <input
                    [(ngModel)]="updateForm.username"
                    name="updateUsername"
                    type="text"
                    placeholder="Enter username"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2"
                    >Email</label
                  >
                  <input
                    [(ngModel)]="updateForm.email"
                    name="updateEmail"
                    type="email"
                    placeholder="Enter email address"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div class="grid grid-cols-2 gap-3">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >First Name</label
                    >
                    <input
                      [(ngModel)]="updateForm.firstName"
                      name="updateFirstName"
                      type="text"
                      placeholder="First name"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Last Name</label
                    >
                    <input
                      [(ngModel)]="updateForm.lastName"
                      name="updateLastName"
                      type="text"
                      placeholder="Last name"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2"
                    >Gender</label
                  >
                  <select
                    [(ngModel)]="updateForm.gender"
                    name="updateGender"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2"
                    >Profile Image URL</label
                  >
                  <input
                    [(ngModel)]="updateForm.image"
                    name="updateImage"
                    type="text"
                    placeholder="https://example.com/image.jpg"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <lib-mat-flat-button
                  (matClick)="submitUpdateUser()"
                  class="w-full"
                  [disabled]="!isUpdateFormValid()"
                >
                  Update User
                </lib-mat-flat-button>
              </div>
            </div>

            <!-- Delete User Card -->
            <div class="card p-5">
              <h3 class="text-lg font-medium text-gray-800 mb-4">
                Delete User
              </h3>

              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2"
                    >User ID</label
                  >
                  <input
                    [ngModel]="deleteUserId()"
                    (ngModelChange)="deleteUserId.set($event)"
                    type="number"
                    min="1"
                    placeholder="Enter user ID to delete"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <lib-mat-flat-button
                  (matClick)="deleteUser()"
                  [disabled]="!deleteUserId()"
                >
                  Delete User
                </lib-mat-flat-button>

                @if(deleteUserId()) {
                <div class="warning-box rounded-md p-3">
                  <p class="text-sm font-medium">
                    Warning: This action cannot be undone!
                  </p>
                  <p class="text-xs">
                    User ID: {{ deleteUserId() }} will be permanently deleted.
                  </p>
                </div>
                }
              </div>
            </div>
          </div>

          <!-- Column 2: Data Resources -->
          <div class="space-y-6">
            <h2 class="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
              List Resource
            </h2>

            <div class="card p-5 max-h-full">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-medium text-gray-800">Users</h3>
                <div class="flex items-center space-x-2">
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
                @for(user of usersResource()?.users || [];
                track user.id) {
                <div
                  class="bg-gray-50 p-3 rounded-md border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
                  (click)="prefillUpdateUser(user.id);">
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
                  <lib-mat-flat-button class="!flex justify-end" (click)="$event.stopPropagation();" (matClick)="detailUser(user.id);">Detail User</lib-mat-flat-button>
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
export class FetchSubscribeComponent {
  // Region: Dependency Injection
  private $httpService = inject(LibHttpService);
  private $authService = inject(AuthService);
  private $encryptDecrypt = inject(LibEncryptDecryptService);
  readonly $permission = inject(LibStatePermissionsService);

  // Region: Signals
  readonly status = this.$httpService.status;
  selectedUserId = signal(1);
  nativeResourceEnabled = signal(false);
  multipleApiResults = signal<any[] | null>(null);
  deleteUserId = signal<number | null>(null);

  // Region: Form Models
  createForm: IUserAuthResponse = {
    id: 0,
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    gender: 'male',
    image: '',
    address: { city: '', state: '', country: '' },
  };

  updateForm: IUserAuthResponse = {
    id: 0,
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    gender: 'male',
    image: '',
    address: { city: '', state: '', country: '' },
  };

  // Region: HTTP Resources
  usersResource: WritableSignal<DummyUsersResponse | null> = signal<DummyUsersResponse | null>(null);


  /**
   * Component constructor
   */
  constructor() {
    effect(() => {
      console.log('Global API Status:', this.status());
    });
    this.refreshAllData();
  }

  // Region: UI Helper Methods
  /**
   * Returns CSS classes for status badge based on loading and error states
   * @param loading - Whether data is currently loading
   * @param error - Any error that occurred during data fetching
   * @returns String of CSS classes for the status badge
   */
  getStatusBadgeClass(loading: boolean, error: any): string {
    if (loading) return 'status-badge status-loading';
    if (error) return 'status-badge status-error';
    return 'status-badge status-success';
  }

  /**
   * Returns status text based on loading and error states
   * @param loading - Whether data is currently loading
   * @param error - Any error that occurred during data fetching
   * @returns Status text string
   */
  getStatusText(loading: boolean, error: any): string {
    if (loading) return 'Loading';
    if (error) return 'Error';
    return 'Loaded';
  }

  // Region: Form Validation Methods
  /**
   * Validates the create user form
   * @returns True if the form is valid, false otherwise
   */
  isCreateFormValid(): boolean {
    return !!(
      this.createForm.username &&
      this.createForm.email &&
      this.createForm.firstName &&
      this.createForm.lastName &&
      this.createForm.gender
    );
  }

  /**
   * Validates the update user form
   * @returns True if the form is valid, false otherwise
   */
  isUpdateFormValid(): boolean {
    return !!(
      this.updateForm.id &&
      this.updateForm.username &&
      this.updateForm.email &&
      this.updateForm.firstName &&
      this.updateForm.lastName &&
      this.updateForm.gender
    );
  }

  // Region: CRUD Operations
  /**
   * Creates a new user using the form data
   */
  createNewUser(): void {
    if (!this.isCreateFormValid()) return;

    const payload: IUserAuthResponse = {
      ...this.createForm,
      id: Date.now(),
    };

    this.$httpService.post('https://dummyjson.com/users/add', payload).subscribe();

    // Reset form
    this.createForm = {
      id: 0,
      username: '',
      email: '',
      firstName: '',
      lastName: '',
      gender: 'male',
      image: '',
      address: { city: '', state: '', country: '' },
    };
  }

  /**
   * Submits an update for an existing user
   */
  submitUpdateUser(): void {
    if (!this.isUpdateFormValid()) return;
    this.$httpService.put(
      `https://dummyjson.com/users/${this.updateForm.id}`,
      this.updateForm
    ).subscribe();
  }

  /**
   * Deletes a user by ID
   */
  deleteUser(): void {
    const id = this.deleteUserId();
    if (!id) return;
    this.$httpService.delete(
      `https://dummyjson.com/users/${this.updateForm.id}`
    ).subscribe();
    this.deleteUserId.set(null);
    }

  // /**
  //  * Prefills the update form with user data
  //  * @param id - The ID of the user to prefill
  //  */
  prefillUpdateUser(id: number): void {
    const user = this.usersResource()?.users?.find(u => u.id === id);
    if (user) {
      this.updateForm = { ...user };
    }
  }

  /**
   * Gets detailed information for a user
   */
  detailUser(id: number): void {
    if (!id) return;
    this.$httpService.get('https://dummyjson.com/users/' + id).subscribe();
  }

  /**
   * Toggles the native resource on/off
   */
  toggleNativeResource(): void {
    this.nativeResourceEnabled.update((v) => !v);
  }

  /**
   * Refreshes all data resources
   */
  refreshAllData(): void {
    this.$httpService.get<DummyUsersResponse>('https://dummyjson.com/users').subscribe({
        next: (res) => {
            this.usersResource.set(res);
        },
    });
  }

  // Region: Authentication Methods
  /**
   * Logs out the current user and clears encrypted data
   */
  logout(): void {
    this.$authService.logout();
    this.$encryptDecrypt.clearAllData();
  }
}