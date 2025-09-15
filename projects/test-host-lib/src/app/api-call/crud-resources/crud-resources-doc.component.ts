import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { CrudResourceComponent } from './crud-resources.component';
import { DocumentationComponent } from '../../shared-ui/documentation/documentation.component';
import { CodeViewerComponent } from '../../shared-ui/documentation/code-viewer/code-viewer.component';

@Component({
  selector: 'app-crud-resource-documentation',
  standalone: true,
  imports: [CodeViewerComponent, DocumentationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-documentation
      [publishedDate]="publishedDate"
      [title]="title"
      [component]="crudResourceComponent"
      [overviewContent]="overviewContent"
      [useCasesContent]="useCasesContent"
      [noteContent]="noteContent"
      [otherContent]="otherContent"
      [htmlCode]="htmlCode"
      [tsCode]="tsCode"
    >
    </app-documentation>
    <ng-template #overviewContent>
      <div class="space-y-6">
        <p class="text-gray-700">
          The <strong>CrudResourceComponent</strong> is a comprehensive Angular
          component that demonstrates professional API data management patterns
          using Angular Signals, reactive forms, and HTTP services. It provides
          a complete CRUD (Create, Read, Update, Delete) interface for managing
          user data through RESTful API interactions.
        </p>

        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <div class="flex">
            <div class="ml-3">
              <h3 class="text-sm font-medium text-blue-800">
                Architecture Highlights
              </h3>
              <div class="mt-2 text-sm text-blue-700">
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    <strong>Reactive State Management</strong>: Uses Angular
                    Signals for efficient, granular state updates
                  </li>
                  <li>
                    <strong>Service-Based Architecture</strong>: Leverages
                    injectable services for HTTP operations, authentication, and
                    encryption
                  </li>
                  <li>
                    <strong>Component Composition</strong>: Standalone component
                    with imported dependencies
                  </li>
                  <li>
                    <strong>Change Detection Optimization</strong>: Uses OnPush
                    strategy for performance
                  </li>
                  <li>
                    <strong>Type Safety</strong>: Comprehensive TypeScript
                    interfaces for API responses
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h3 class="text-xl font-semibold mt-6">Key Features</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-white p-4 rounded-lg border border-gray-200">
            <h4 class="font-medium text-gray-800 mb-2">CRUD Operations</h4>
            <ul class="list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li>Create new user records with validation</li>
              <li>Update existing user information</li>
              <li>Delete users with confirmation</li>
              <li>Read and display user lists</li>
            </ul>
          </div>

          <div class="bg-white p-4 rounded-lg border border-gray-200">
            <h4 class="font-medium text-gray-800 mb-2">State Management</h4>
            <ul class="list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li>Signal-based reactive state</li>
              <li>Form state management</li>
              <li>API status tracking</li>
              <li>Loading and error states</li>
            </ul>
          </div>

          <div class="bg-white p-4 rounded-lg border border-gray-200">
            <h4 class="font-medium text-gray-800 mb-2">Security Features</h4>
            <ul class="list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li>Authentication integration</li>
              <li>Data encryption/decryption</li>
              <li>Permission-based access control</li>
              <li>Secure logout with data cleanup</li>
            </ul>
          </div>

          <div class="bg-white p-4 rounded-lg border border-gray-200">
            <h4 class="font-medium text-gray-800 mb-2">UI/UX Features</h4>
            <ul class="list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li>Responsive grid layout</li>
              <li>Professional card-based design</li>
              <li>Status indicators and feedback</li>
              <li>Interactive user experience</li>
            </ul>
          </div>
        </div>

        <h3 class="text-xl font-semibold mt-6">Technical Architecture</h3>
        <div class="bg-gray-50 p-4 rounded-lg">
          <div class="flex items-center justify-center mb-4">
            <div class="text-center">
              <div class="bg-white p-3 rounded-lg shadow-sm mb-2">
                <span class="font-medium text-blue-600"
                  >CrudResourceComponent</span
                >
              </div>
              <div class="flex justify-center space-x-8 mt-2">
                <div class="text-center">
                  <div class="bg-green-100 p-2 rounded-lg">
                    <span class="text-sm font-medium text-green-800"
                      >Services</span
                    >
                  </div>
                  <div class="text-xs text-gray-600 mt-1">
                    HTTP, Auth, Encryption
                  </div>
                </div>
                <div class="text-center">
                  <div class="bg-purple-100 p-2 rounded-lg">
                    <span class="text-sm font-medium text-purple-800"
                      >Signals</span
                    >
                  </div>
                  <div class="text-xs text-gray-600 mt-1">State Management</div>
                </div>
                <div class="text-center">
                  <div class="bg-yellow-100 p-2 rounded-lg">
                    <span class="text-sm font-medium text-yellow-800"
                      >Templates</span
                    >
                  </div>
                  <div class="text-xs text-gray-600 mt-1">Reactive UI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>

    <ng-template #useCasesContent>
      <div class="space-y-6">
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5 bg-gray-50 border-b">
            <h3 class="text-lg font-medium text-gray-900">
              User Management Dashboard
            </h3>
            <p class="mt-2 text-gray-600">
              Complete user management system with create, read, update, and
              delete functionality.
            </p>
          </div>
          <div class="p-5">
            <h4 class="font-medium text-gray-800 mb-3">
              Implementation Steps:
            </h4>
            <ol class="list-decimal pl-5 space-y-2 text-gray-700">
              <li>Configure the HTTP resource with appropriate endpoints</li>
              <li>Set up form models for data input</li>
              <li>Implement validation logic for forms</li>
              <li>Create UI components for each CRUD operation</li>
              <li>Add status indicators and error handling</li>
            </ol>
          </div>
        </div>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5 bg-gray-50 border-b">
            <h3 class="text-lg font-medium text-gray-900">
              Real-time Data Synchronization
            </h3>
            <p class="mt-2 text-gray-600">
              Keep UI in sync with backend data changes using reactive patterns.
            </p>
          </div>
          <div class="p-5">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-medium text-blue-800 mb-2">Key Features:</h4>
              <ul class="list-disc pl-5 text-blue-700 space-y-1">
                <li>Automatic UI updates on data changes</li>
                <li>Loading states during API calls</li>
                <li>Error handling with user feedback</li>
                <li>Data refresh capabilities</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5 bg-gray-50 border-b">
            <h3 class="text-lg font-medium text-gray-900">
              Secure Data Handling
            </h3>
            <p class="mt-2 text-gray-600">
              Implement security best practices for data management.
            </p>
          </div>
          <div class="p-5">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="bg-green-50 p-3 rounded-lg">
                <h4 class="font-medium text-green-800 mb-1">Authentication</h4>
                <p class="text-sm text-green-700">
                  Integration with auth service for user sessions
                </p>
              </div>
              <div class="bg-purple-50 p-3 rounded-lg">
                <h4 class="font-medium text-purple-800 mb-1">Encryption</h4>
                <p class="text-sm text-purple-700">
                  Data encryption for sensitive information
                </p>
              </div>
              <div class="bg-yellow-50 p-3 rounded-lg">
                <h4 class="font-medium text-yellow-800 mb-1">Permissions</h4>
                <p class="text-sm text-yellow-700">
                  Role-based access control integration
                </p>
              </div>
              <div class="bg-red-50 p-3 rounded-lg">
                <h4 class="font-medium text-red-800 mb-1">Data Cleanup</h4>
                <p class="text-sm text-red-700">
                  Secure data removal on logout
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5 bg-gray-50 border-b">
            <h3 class="text-lg font-medium text-gray-900">
              Advanced Configuration
            </h3>
            <p class="mt-2 text-gray-600">
              Customizing the component for specific use cases.
            </p>
          </div>
          <div class="p-5">
            <h4 class="font-medium text-gray-800 mb-3">
              Custom Endpoints Configuration:
            </h4>
            <app-code-viewer
              code="
                  usersResource = this.$httpService.createResource(
          'https://dummyjson.com/users', // Base endpoint
          { 
            reloadAfter: true,           // Auto-reload after mutations
            initialLoadList: true        // Load data on initialization
          },
          {
            create: 'https://dummyjson.com/users/add', // Custom create endpoint
            update: 'https://dummyjson.com/users/:id', // Custom update endpoint
            delete: 'https://dummyjson.com/users/:id'  // Custom delete endpoint
          }
        );
          "
            ></app-code-viewer>
          </div>
        </div>
      </div>
    </ng-template>

    <ng-template #noteContent>
      <div class="space-y-6">
        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div class="flex">
            <div class="ml-3">
              <h3 class="text-sm font-medium text-yellow-800">
                Security Considerations
              </h3>
              <div class="mt-2 text-sm text-yellow-700">
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    <strong>Input Validation</strong>: Always validate user
                    inputs on both client and server side
                  </li>
                  <li>
                    <strong>Data Encryption</strong>: Use encryption for
                    sensitive data, especially authentication tokens
                  </li>
                  <li>
                    <strong>API Security</strong>: Implement proper
                    authentication and authorization for all endpoints
                  </li>
                  <li>
                    <strong>Error Handling</strong>: Avoid exposing sensitive
                    information in error messages
                  </li>
                  <li>
                    <strong>HTTPS</strong>: Always use HTTPS for production API
                    communications
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-blue-50 border-l-4 border-blue-400 p-4">
          <div class="flex">
            <div class="ml-3">
              <h3 class="text-sm font-medium text-blue-800">
                Performance Optimization
              </h3>
              <div class="mt-2 text-sm text-blue-700">
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    <strong>Change Detection</strong>: Use OnPush strategy for
                    better performance
                  </li>
                  <li>
                    <strong>Signal Efficiency</strong>: Leverage signals for
                    granular state updates
                  </li>
                  <li>
                    <strong>API Batching</strong>: Batch multiple requests when
                    possible
                  </li>
                  <li>
                    <strong>Lazy Loading</strong>: Implement lazy loading for
                    large datasets
                  </li>
                  <li>
                    <strong>Caching</strong>: Use caching strategies for
                    frequently accessed data
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-green-50 border-l-4 border-green-400 p-4">
          <div class="flex">
            <div class="ml-3">
              <h3 class="text-sm font-medium text-green-800">
                Error Handling Strategies
              </h3>
              <div class="mt-2 text-sm text-green-700">
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    <strong>User Feedback</strong>: Provide clear error messages
                    to users
                  </li>
                  <li>
                    <strong>Retry Mechanisms</strong>: Implement retry logic for
                    failed requests
                  </li>
                  <li>
                    <strong>Loading States</strong>: Show loading indicators
                    during API calls
                  </li>
                  <li>
                    <strong>Fallback UI</strong>: Provide fallback content when
                    data is unavailable
                  </li>
                  <li>
                    <strong>Logging</strong>: Log errors for debugging and
                    monitoring
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-purple-50 border-l-4 border-purple-400 p-4">
          <div class="flex">
            <div class="ml-3">
              <h3 class="text-sm font-medium text-purple-800">
                Testing Recommendations
              </h3>
              <div class="mt-2 text-sm text-purple-700">
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    <strong>Unit Tests</strong>: Test individual methods and
                    functions
                  </li>
                  <li>
                    <strong>Component Tests</strong>: Test component rendering
                    and interactions
                  </li>
                  <li>
                    <strong>API Mocking</strong>: Mock API responses for
                    reliable testing
                  </li>
                  <li>
                    <strong>Error Scenarios</strong>: Test error handling and
                    edge cases
                  </li>
                  <li>
                    <strong>Performance Tests</strong>: Test component
                    performance with large datasets
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-red-50 border-l-4 border-red-400 p-4">
          <div class="flex">
            <div class="ml-3">
              <h3 class="text-sm font-medium text-red-800">
                Common Pitfalls to Avoid
              </h3>
              <div class="mt-2 text-sm text-red-700">
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    <strong>Memory Leaks</strong>: Always unsubscribe from
                    observables
                  </li>
                  <li>
                    <strong>State Synchronization</strong>: Ensure UI state
                    matches application state
                  </li>
                  <li>
                    <strong>Over-fetching</strong>: Only request data that's
                    actually needed
                  </li>
                  <li>
                    <strong>Security Oversights</strong>: Never trust
                    client-side validation alone
                  </li>
                  <li>
                    <strong>Poor Error Handling</strong>: Don't let unhandled
                    errors crash the application
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>

    <ng-template #otherContent>
      <div class="space-y-8">
        <h2 class="text-2xl font-bold text-gray-800">
          API Reference & Integration Guide
        </h2>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5 bg-gray-50 border-b">
            <h3 class="text-lg font-medium text-gray-900">
              Customization Guide
            </h3>
            <p class="mt-2 text-gray-600">
              How to customize the component for specific requirements.
            </p>
          </div>
          <div class="p-5">
            <h4 class="font-medium text-gray-800 mb-3">
              Customizing API Endpoints
            </h4>
            <app-code-viewer
              code="
          // Custom endpoint configuration
          usersResource = this.$httpService.createResource(
            'https://api.example.com/users',{
              reloadAfter: true,
              initialLoadList: false // Don't load initially
            },
            {
              create: 'https://api.example.com/users/create',
              update: 'https://api.example.com/users/update/:id',
              delete: 'https://api.example.com/users/delete/:id',
              detail: 'https://api.example.com/users/detail/:id'
            }
          );"
            ></app-code-viewer>
            <h4 class="font-medium text-gray-800 mt-6 mb-3">
              Customizing Validation Logic
            </h4>
            <app-code-viewer
              code="
// Custom validation methods
isCreateFormValid(): boolean {
  // Add custom validation logic
  return this.createForm.username.length >= 3 &&
         this.createForm.email.includes('@') &&
         // ... additional validation rules
}

isUpdateFormValid(): boolean {
  // Different validation for update operations
  return this.updateForm.id > 0 &&
         this.updateForm.username.length >= 3 &&
         // ... additional validation rules
}
          "
            ></app-code-viewer>
          </div>
        </div>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5 bg-gray-50 border-b">
            <h3 class="text-lg font-medium text-gray-900">
              Troubleshooting Common Issues
            </h3>
            <p class="mt-2 text-gray-600">
              Solutions for common problems when using this component.
            </p>
          </div>
          <div class="p-5">
            <div class="space-y-4">
              <div class="bg-red-50 p-3 rounded-lg">
                <h4 class="font-medium text-red-800">CORS Issues</h4>
                <p class="text-sm text-red-700">
                  Ensure your API server includes proper CORS headers for
                  cross-origin requests.
                </p>
              </div>
              <div class="bg-yellow-50 p-3 rounded-lg">
                <h4 class="font-medium text-yellow-800">
                  Authentication Errors
                </h4>
                <p class="text-sm text-yellow-700">
                  Check that authentication tokens are properly included in API
                  requests.
                </p>
              </div>
              <div class="bg-blue-50 p-3 rounded-lg">
                <h4 class="font-medium text-blue-800">Performance Issues</h4>
                <p class="text-sm text-blue-700">
                  For large datasets, implement pagination or virtual scrolling.
                </p>
              </div>
              <div class="bg-green-50 p-3 rounded-lg">
                <h4 class="font-medium text-green-800">
                  State Synchronization
                </h4>
                <p class="text-sm text-green-700">
                  Ensure manual reloads are called after mutations if
                  reloadAfter is disabled.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>
  `,
  styles: ``,
})
export class CrudResourceDocComponent {
  @ViewChild('overviewContent', { static: true })
  overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true })
  useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;
  crudResourceComponent = CrudResourceComponent;
  publishedDate = '2025-06-05';
  title = 'CRUD Resource Management Component';

  htmlCode = `
<!-- Main container with background -->
<div class="min-h-screen p-4 bg-gray-50">
  <div class="container mx-auto">
    <!-- Header section -->
    <div class="text-center mb-8">
      <h1 class="text-3xl font-semibold text-gray-800 mb-2">
        CRUD Resource Management Dashboard
      </h1>
      <p class="text-gray-600">
        Professional API Data Management Interface
      </p>
    </div>

    <!-- Two-column layout for CRUD operations and data display -->
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
      <!-- Left column: CRUD Operations -->
      <div class="space-y-6">
        <h2 class="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
          CRUD Operations
        </h2>

        <!-- Create User Card -->
        <div class="card p-5">
          <h3 class="text-lg font-medium text-gray-800 mb-4">
            Create User
          </h3>
          <!-- Form fields for creating a user -->
        </div>

        <!-- Update User Card -->
        <div class="card p-5">
          <h3 class="text-lg font-medium text-gray-800 mb-4">
            Update User
          </h3>
          <!-- Form fields for updating a user -->
        </div>

        <!-- Delete User Card -->
        <div class="card p-5">
          <h3 class="text-lg font-medium text-gray-800 mb-4">
            Delete User
          </h3>
          <!-- Form field for deleting a user -->
        </div>
      </div>

      <!-- Right column: Data Resources -->
      <div class="space-y-6">
        <h2 class="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
          List Resource
        </h2>

        <!-- Users list card -->
        <div class="card p-5 max-h-full">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-medium text-gray-800">Users</h3>
            <!-- Status badge and refresh button -->
          </div>

          <!-- Users list with scrollable container -->
          <div class="max-h-[1350px] overflow-y-auto space-y-3">
            <!-- User item template with click handler -->
          </div>
        </div>
      </div>
    </div>

    <!-- Action buttons at the bottom -->
    <div class="mt-8 text-center space-x-4">
      <lib-mat-flat-button (matClick)="refreshAllData()">
        Refresh All Data
      </lib-mat-flat-button>
      <lib-mat-flat-button (matClick)="logout()">
        Logout
      </lib-mat-flat-button>
    </div>
  </div>
</div>
  `;

  tsCode = `
import { Component, inject, effect, ChangeDetectionStrategy, signal } from '@angular/core';
import { LibStatePermissionsService } from '@saad-ihhn/ihhn-host-lib/permissions';
import { AuthService } from '../../core/auth/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LibEncryptDecryptService, LibHttpService } from '@saad-ihhn/ihhn-host-lib/services';
import { LibMatFlatButtonComponent } from '@saad-ihhn/ihhn-host-lib/lib-buttons';

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

interface DummyUsersResponse {
  users: IUserAuthResponse[];
  total: number;
  skip: number;
  limit: number;
}

@Component({
  selector: 'app-crud-resource',
  standalone: true,
  imports: [LibMatFlatButtonComponent, FormsModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // ... styles and template
})
export class CrudResourceComponent {
  // Dependency injection
  private $httpService = inject(LibHttpService);
  private $authService = inject(AuthService);
  private $encryptDecrypt = inject(LibEncryptDecryptService);
  readonly $permission = inject(LibStatePermissionsService);

  // Signal declarations
  readonly status = this.$httpService.status;
  selectedUserId = signal(1);
  nativeResourceEnabled = signal(false);
  multipleApiResults = signal<any[] | null>(null);
  deleteUserId = signal<number | null>(null);

  // Form models
  createForm: IUserAuthResponse = { /* ... */ };
  updateForm: IUserAuthResponse = { /* ... */ };

  // HTTP Resource with custom endpoints
  usersResource = this.$httpService.createResource<
    IUserAuthResponse,
    DummyUsersResponse,
    IUserAuthResponse
  >(
    'https://dummyjson.com/users',
    { reloadAfter: true, initialLoadList: true },
    { create: 'https://dummyjson.com/users/add' }
  );

  constructor() {
    effect(() => {
      console.log('Global API Status:', this.status());
    });
  }

  // UI helper methods
  getStatusBadgeClass(loading: boolean, error: any): string { /* ... */ }
  getStatusText(loading: boolean, error: any): string { /* ... */ }

  // Form validation
  isCreateFormValid(): boolean { /* ... */ }
  isUpdateFormValid(): boolean { /* ... */ }

  // CRUD operations
  createNewUser(): void { /* ... */ }
  submitUpdateUser(): void { /* ... */ }
  deleteUser(): void { /* ... */ }
  prefillUpdateUser(id: number): void { /* ... */ }
  detailUser(id: number): void { /* ... */ }

  // Data management
  refreshAllData(): void { /* ... */ }

  // Authentication
  logout(): void { /* ... */ }
}
  `;
}
