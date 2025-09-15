import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FetchSubscribeComponent } from './fetch-subscribe.component';
import { DocumentationComponent } from '../../shared-ui/documentation/documentation.component';
import { CodeViewerComponent } from '../../shared-ui/documentation/code-viewer/code-viewer.component';

@Component({
  selector: 'app-fetch-subscribe-documentation',
  standalone: true,
  imports: [CodeViewerComponent, DocumentationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-documentation
      [publishedDate]="publishedDate"
      [title]="title"
      [component]="fetchSubscribeComponent"
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
          The <strong>FetchSubscribeComponent</strong> demonstrates manual API
          data management using explicit HTTP calls with Angular's observable
          pattern. Unlike the resource-based approach, this component provides
          fine-grained control over individual API operations through direct
          fetch/subscribe patterns, making it ideal for complex scenarios requiring
          custom data handling logic.
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
                    <strong>Manual HTTP Management</strong>: Direct control over
                    individual API calls with explicit subscribe patterns
                  </li>
                  <li>
                    <strong>Observable-Based Flow</strong>: Uses RxJS observables
                    for reactive data streams and error handling
                  </li>
                  <li>
                    <strong>Custom State Management</strong>: Manual signal
                    updates for precise state control
                  </li>
                  <li>
                    <strong>Flexible API Integration</strong>: Easy adaptation
                    to various API structures and response formats
                  </li>
                  <li>
                    <strong>Enhanced Error Control</strong>: Granular error
                    handling for each operation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h3 class="text-xl font-semibold mt-6">Key Features</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-white p-4 rounded-lg border border-gray-200">
            <h4 class="font-medium text-gray-800 mb-2">Manual API Operations</h4>
            <ul class="list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li>Explicit HTTP GET, POST, PUT, DELETE calls</li>
              <li>Custom request headers and parameters</li>
              <li>Individual operation tracking</li>
              <li>Flexible response handling</li>
            </ul>
          </div>

          <div class="bg-white p-4 rounded-lg border border-gray-200">
            <h4 class="font-medium text-gray-800 mb-2">Observable Patterns</h4>
            <ul class="list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li>Subscribe/unsubscribe lifecycle management</li>
              <li>RxJS operators for data transformation</li>
              <li>Error handling with catchError</li>
              <li>Custom observable composition</li>
            </ul>
          </div>

          <div class="bg-white p-4 rounded-lg border border-gray-200">
            <h4 class="font-medium text-gray-800 mb-2">State Control</h4>
            <ul class="list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li>Manual signal updates</li>
              <li>Custom loading state management</li>
              <li>Conditional UI updates</li>
              <li>Optimistic UI patterns</li>
            </ul>
          </div>

          <div class="bg-white p-4 rounded-lg border border-gray-200">
            <h4 class="font-medium text-gray-800 mb-2">Advanced Features</h4>
            <ul class="list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li>Custom validation logic</li>
              <li>Conditional API calls</li>
              <li>Data transformation pipelines</li>
              <li>Memory management</li>
            </ul>
          </div>
        </div>

        <h3 class="text-xl font-semibold mt-6">Technical Architecture</h3>
        <div class="bg-gray-50 p-4 rounded-lg">
          <div class="flex items-center justify-center mb-4">
            <div class="text-center">
              <div class="bg-white p-3 rounded-lg shadow-sm mb-2">
                <span class="font-medium text-purple-600"
                  >FetchSubscribeComponent</span
                >
              </div>
              <div class="flex justify-center space-x-8 mt-2">
                <div class="text-center">
                  <div class="bg-orange-100 p-2 rounded-lg">
                    <span class="text-sm font-medium text-orange-800"
                      >HTTP Calls</span
                    >
                  </div>
                  <div class="text-xs text-gray-600 mt-1">
                    Manual API Operations
                  </div>
                </div>
                <div class="text-center">
                  <div class="bg-teal-100 p-2 rounded-lg">
                    <span class="text-sm font-medium text-teal-800"
                      >Observables</span
                    >
                  </div>
                  <div class="text-xs text-gray-600 mt-1">RxJS Streams</div>
                </div>
                <div class="text-center">
                  <div class="bg-pink-100 p-2 rounded-lg">
                    <span class="text-sm font-medium text-pink-800"
                      >Signals</span
                    >
                  </div>
                  <div class="text-xs text-gray-600 mt-1">Manual State</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-amber-50 border-l-4 border-amber-400 p-4">
          <div class="flex">
            <div class="ml-3">
              <h3 class="text-sm font-medium text-amber-800">
                When to Use Fetch/Subscribe Pattern
              </h3>
              <div class="mt-2 text-sm text-amber-700">
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    <strong>Complex Data Transformations</strong>: When you need
                    custom data processing before state updates
                  </li>
                  <li>
                    <strong>Conditional Logic</strong>: When API calls depend on
                    complex business rules
                  </li>
                  <li>
                    <strong>Custom Error Handling</strong>: When different
                    operations need different error strategies
                  </li>
                  <li>
                    <strong>Performance Optimization</strong>: When you need
                    fine-grained control over when and how data is fetched
                  </li>
                  <li>
                    <strong>Legacy API Integration</strong>: When working with
                    APIs that don't follow standard REST patterns
                  </li>
                </ul>
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
              Custom API Integration
            </h3>
            <p class="mt-2 text-gray-600">
              Integrating with APIs that require custom headers, authentication,
              or non-standard response handling.
            </p>
          </div>
          <div class="p-5">
            <h4 class="font-medium text-gray-800 mb-3">
              Implementation Example:
            </h4>
            <app-code-viewer
              code="
// Custom API call with headers and error handling
createNewUser(): void {
  if (!this.isCreateFormValid()) return;

  const payload: IUserAuthResponse = {
    ...this.createForm,
    id: Date.now(),
  };

  this.$httpService.post('https://api.example.com/users', payload, {
    headers: {
      'Authorization': 'Bearer ' + this.getToken(),
      'Content-Type': 'application/json',
      'X-API-Version': '2.0'
    }
  }).pipe(
    catchError(error => {
      this.handleCreateError(error);
      return of(null);
    }),
    finalize(() => {
      this.setLoading(false);
    })
  ).subscribe(response => {
    if (response) {
      this.handleCreateSuccess(response);
      this.resetCreateForm();
      this.refreshUserList();
    }
  });
}
              "
            ></app-code-viewer>
          </div>
        </div>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5 bg-gray-50 border-b">
            <h3 class="text-lg font-medium text-gray-900">
              Data Transformation Pipeline
            </h3>
            <p class="mt-2 text-gray-600">
              Processing and transforming API responses before updating the UI
              state.
            </p>
          </div>
          <div class="p-5">
            <div class="bg-teal-50 p-4 rounded-lg">
              <h4 class="font-medium text-teal-800 mb-2">Pipeline Features:</h4>
              <ul class="list-disc pl-5 text-teal-700 space-y-1">
                <li>Data validation and sanitization</li>
                <li>Format conversion and normalization</li>
                <li>Computed fields and derived data</li>
                <li>Filtering and sorting operations</li>
              </ul>
            </div>
            <h4 class="font-medium text-gray-800 mt-6 mb-3">
              Example Implementation:
            </h4>
            <app-code-viewer
              code="
refreshAllData(): void {
  this.$httpService.get<DummyUsersResponse>('https://dummyjson.com/users')
    .pipe(
      map(response => ({
        ...response,
        users: response.users.map(user => ({
          ...user,
          fullName: \`\${user.firstName} \${user.lastName}\`,
          isActive: user.id > 0,
          displayEmail: user.email.toLowerCase(),
          profileComplete: !!(user.firstName && user.lastName && user.email)
        }))
      })),
      catchError(error => {
        console.error('Failed to fetch users:', error);
        return of(null);
      })
    )
    .subscribe(transformedData => {
      if (transformedData) {
        this.usersResource.set(transformedData);
      }
    });
}
              "
            ></app-code-viewer>
          </div>
        </div>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5 bg-gray-50 border-b">
            <h3 class="text-lg font-medium text-gray-900">
              Conditional API Operations
            </h3>
            <p class="mt-2 text-gray-600">
              Making API calls based on complex business logic and user
              permissions.
            </p>
          </div>
          <div class="p-5">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="bg-purple-50 p-3 rounded-lg">
                <h4 class="font-medium text-purple-800 mb-1">Permission Checks</h4>
                <p class="text-sm text-purple-700">
                  Verify user permissions before API calls
                </p>
              </div>
              <div class="bg-blue-50 p-3 rounded-lg">
                <h4 class="font-medium text-blue-800 mb-1">Data Validation</h4>
                <p class="text-sm text-blue-700">
                  Client-side validation before server requests
                </p>
              </div>
              <div class="bg-green-50 p-3 rounded-lg">
                <h4 class="font-medium text-green-800 mb-1">State Checks</h4>
                <p class="text-sm text-green-700">
                  Conditional calls based on application state
                </p>
              </div>
              <div class="bg-yellow-50 p-3 rounded-lg">
                <h4 class="font-medium text-yellow-800 mb-1">Rate Limiting</h4>
                <p class="text-sm text-yellow-700">
                  Throttling and debouncing API calls
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5 bg-gray-50 border-b">
            <h3 class="text-lg font-medium text-gray-900">
              Advanced Error Handling
            </h3>
            <p class="mt-2 text-gray-600">
              Implementing sophisticated error handling strategies for different
              types of failures.
            </p>
          </div>
          <div class="p-5">
            <h4 class="font-medium text-gray-800 mb-3">
              Error Handling Strategy:
            </h4>
            <app-code-viewer
              code="
deleteUser(): void {
  const id = this.deleteUserId();
  if (!id) return;

  // Show loading state
  this.setDeleteLoading(true);

  this.$httpService.delete(\`https://dummyjson.com/users/\${id}\`)
    .pipe(
      retry(2), // Retry failed requests twice
      catchError((error: HttpErrorResponse) => {
        // Different handling based on error type
        switch (error.status) {
          case 401:
            this.handleUnauthorized();
            break;
          case 403:
            this.showPermissionError();
            break;
          case 404:
            this.showUserNotFoundError();
            break;
          case 500:
            this.showServerError();
            break;
          default:
            this.showGenericError(error);
        }
        return throwError(() => error);
      }),
      finalize(() => {
        this.setDeleteLoading(false);
      })
    )
    .subscribe({
      next: (response) => {
        this.handleDeleteSuccess(id);
        this.deleteUserId.set(null);
        this.refreshUserList();
      },
      error: (error) => {
        console.error('Delete operation failed:', error);
      }
    });
}
              "
            ></app-code-viewer>
          </div>
        </div>
      </div>
    </ng-template>

    <ng-template #noteContent>
      <div class="space-y-6">
        <div class="bg-red-50 border-l-4 border-red-400 p-4">
          <div class="flex">
            <div class="ml-3">
              <h3 class="text-sm font-medium text-red-800">
                Memory Management
              </h3>
              <div class="mt-2 text-sm text-red-700">
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    <strong>Subscription Cleanup</strong>: Always unsubscribe
                    from observables to prevent memory leaks
                  </li>
                  <li>
                    <strong>Component Lifecycle</strong>: Implement OnDestroy
                    interface for proper cleanup
                  </li>
                  <li>
                    <strong>Subject Management</strong>: Complete subjects when
                    component is destroyed
                  </li>
                  <li>
                    <strong>Large Data Sets</strong>: Consider pagination or
                    virtual scrolling for performance
                  </li>
                  <li>
                    <strong>Caching Strategy</strong>: Implement appropriate
                    caching to reduce API calls
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-orange-50 border-l-4 border-orange-400 p-4">
          <div class="flex">
            <div class="ml-3">
              <h3 class="text-sm font-medium text-orange-800">
                Observable Best Practices
              </h3>
              <div class="mt-2 text-sm text-orange-700">
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    <strong>Error Handling</strong>: Use catchError operator to
                    handle errors gracefully
                  </li>
                  <li>
                    <strong>Loading States</strong>: Use finalize operator for
                    cleanup operations
                  </li>
                  <li>
                    <strong>Data Transformation</strong>: Use map, filter, and
                    other RxJS operators appropriately
                  </li>
                  <li>
                    <strong>Subscription Pattern</strong>: Consider using
                    takeUntil pattern for automatic unsubscription
                  </li>
                  <li>
                    <strong>Share Operations</strong>: Use shareReplay for
                    multiple subscribers
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
                Performance Considerations
              </h3>
              <div class="mt-2 text-sm text-blue-700">
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    <strong>Debouncing</strong>: Implement debouncing for search
                    and filter operations
                  </li>
                  <li>
                    <strong>Request Batching</strong>: Batch multiple requests
                    when possible
                  </li>
                  <li>
                    <strong>Lazy Loading</strong>: Load data only when needed
                  </li>
                  <li>
                    <strong>Caching Strategy</strong>: Cache frequently accessed
                    data
                  </li>
                  <li>
                    <strong>Change Detection</strong>: Use OnPush strategy for
                    better performance
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
                Testing Strategies
              </h3>
              <div class="mt-2 text-sm text-green-700">
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    <strong>Mock HTTP Calls</strong>: Use HttpClientTestingModule
                    for unit tests
                  </li>
                  <li>
                    <strong>Observable Testing</strong>: Use marble testing for
                    complex observable chains
                  </li>
                  <li>
                    <strong>Error Scenarios</strong>: Test error handling and
                    edge cases
                  </li>
                  <li>
                    <strong>State Testing</strong>: Verify signal updates and UI
                    state changes
                  </li>
                  <li>
                    <strong>Integration Tests</strong>: Test complete user
                    workflows
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
                Security Best Practices
              </h3>
              <div class="mt-2 text-sm text-purple-700">
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    <strong>Input Sanitization</strong>: Sanitize all user inputs
                    before API calls
                  </li>
                  <li>
                    <strong>Authentication Headers</strong>: Properly handle
                    authentication tokens
                  </li>
                  <li>
                    <strong>HTTPS Only</strong>: Never make API calls over HTTP
                    in production
                  </li>
                  <li>
                    <strong>Error Information</strong>: Don't expose sensitive
                    data in error messages
                  </li>
                  <li>
                    <strong>CSRF Protection</strong>: Implement CSRF tokens where
                    required
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
          Advanced Implementation Patterns
        </h2>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5 bg-gray-50 border-b">
            <h3 class="text-lg font-medium text-gray-900">
              Subscription Management Pattern
            </h3>
            <p class="mt-2 text-gray-600">
              Implementing proper subscription lifecycle management to prevent
              memory leaks.
            </p>
          </div>
          <div class="p-5">
            <h4 class="font-medium text-gray-800 mb-3">
              DestroyRef Pattern (Angular 16+):
            </h4>
            <app-code-viewer
              code="
import { DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({...})
export class FetchSubscribeComponent {
  private destroyRef = inject(DestroyRef);

  loadUsers(): void {
    this.$httpService.get('https://api.example.com/users')
      .pipe(
        takeUntilDestroyed(this.destroyRef), // Auto-unsubscribe
        catchError(error => {
          console.error('Error loading users:', error);
          return of([]);
        })
      )
      .subscribe(users => {
        this.usersResource.set({ users, total: users.length });
      });
  }
}
              "
            ></app-code-viewer>
            
            <h4 class="font-medium text-gray-800 mt-6 mb-3">
              Subject-Based Cleanup Pattern:
            </h4>
            <app-code-viewer
              code="
import { Subject, takeUntil } from 'rxjs';

@Component({...})
export class FetchSubscribeComponent implements OnDestroy {
  private destroy$ = new Subject<void>();

  loadUsers(): void {
    this.$httpService.get('https://api.example.com/users')
      .pipe(
        takeUntil(this.destroy$),
        retry(2),
        catchError(this.handleError)
      )
      .subscribe(response => {
        this.processUserData(response);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
              "
            ></app-code-viewer>
          </div>
        </div>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5 bg-gray-50 border-b">
            <h3 class="text-lg font-medium text-gray-900">
              Custom HTTP Interceptors
            </h3>
            <p class="mt-2 text-gray-600">
              Implementing custom interceptors for authentication, logging, and
              error handling.
            </p>
          </div>
          <div class="p-5">
            <h4 class="font-medium text-gray-800 mb-3">
              Authentication Interceptor:
            </h4>
            <app-code-viewer
              code="
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Add auth header
    const authToken = this.authService.getToken();
    if (authToken) {
      req = req.clone({
        headers: req.headers.set('Authorization', \`Bearer \${authToken}\`)
      });
    }

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Handle token expiration
          this.authService.logout();
          // Redirect to login
        }
        return throwError(() => error);
      })
    );
  }
}
              "
            ></app-code-viewer>
          </div>
        </div>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5 bg-gray-50 border-b">
            <h3 class="text-lg font-medium text-gray-900">
              Comparison: Fetch/Subscribe vs Resource Pattern
            </h3>
            <p class="mt-2 text-gray-600">
              Understanding when to use manual fetch/subscribe versus automated
              resource patterns.
            </p>
          </div>
          <div class="p-5">
            <div class="overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Aspect
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Fetch/Subscribe
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Resource Pattern
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr>
                    <td class="px-6 py-4 text-sm font-medium text-gray-900">
                      Control Level
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-500">
                      High - Full control over each operation
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-500">
                      Medium - Automated with configuration
                    </td>
                  </tr>
                  <tr class="bg-gray-50">
                    <td class="px-6 py-4 text-sm font-medium text-gray-900">
                      Code Complexity
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-500">
                      Higher - More boilerplate code
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-500">
                      Lower - Declarative configuration
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 text-sm font-medium text-gray-900">
                      Error Handling
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-500">
                      Granular per operation
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-500">
                      Unified error handling
                    </td>
                  </tr>
                  <tr class="bg-gray-50">
                    <td class="px-6 py-4 text-sm font-medium text-gray-900">
                      Use Case
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-500">
                      Complex business logic, custom flows
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-500">
                      Standard CRUD operations, rapid development
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </ng-template>
  `,
  styles: ``,
})
export class FetchSubscribeDocComponent {
  @ViewChild('overviewContent', { static: true })
  overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true })
  useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;
  fetchSubscribeComponent = FetchSubscribeComponent;
  publishedDate = '2025-06-05';
  title = 'Fetch & Subscribe API Management Component';

  htmlCode = `
<!-- Main container with background -->
<div class="min-h-screen p-4 bg-gray-50">
  <div class="container mx-auto">
    <!-- Header section -->
    <div class="text-center mb-8">
      <h1 class="text-3xl font-semibold text-gray-800 mb-2">
        Fetch & Subscribe API Demo
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
          <!-- Form fields with two-way binding -->
          <div class="space-y-4">
            <input 
              [(ngModel)]="createForm.username" 
              placeholder="Username"
              class="w-full px-3 py-2 border rounded-md" 
            />
            <input 
              [(ngModel)]="createForm.email" 
              type="email"
              placeholder="Email"
              class="w-full px-3 py-2 border rounded-md" 
            />
            <!-- Additional form fields -->
          </div>
          <button 
            (click)="createNewUser()" 
            [disabled]="!isCreateFormValid()"
            class="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-md">
            Submit User
          </button>
        </div>

        <!-- Update User Card -->
        <div class="card p-5">
          <h3 class="text-lg font-medium text-gray-800 mb-4">
            Update User
          </h3>
          <!-- Similar form structure for updates -->
        </div>

        <!-- Delete User Card -->
        <div class="card p-5">
          <h3 class="text-lg font-medium text-gray-800 mb-4">
            Delete User
          </h3>
          <input 
            [(ngModel)]="deleteUserId" 
            type="number"
            placeholder="User ID to delete"
            class="w-full px-3 py-2 border rounded-md" 
          />
          <button 
            (click)="deleteUser()" 
            [disabled]="!deleteUserId"
            class="w-full mt-4 px-4 py-2 bg-red-600 text-white rounded-md">
            Delete User
          </button>
        </div>
      </div>

      <!-- Right column: Data Display -->
      <div class="space-y-6">
        <h2 class="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
          Users List
        </h2>

        <!-- Users list card -->
        <div class="card p-5">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-medium text-gray-800">Users</h3>
            <button 
              (click)="refreshAllData()"
              class="px-3 py-1 bg-green-600 text-white rounded text-sm">
              Refresh
            </button>
          </div>

          <!-- Users list with manual observable subscription -->
          <div class="max-h-96 overflow-y-auto space-y-3">
            @for(user of usersResource()?.users || []; track user.id) {
              <div class="bg-gray-50 p-3 rounded-md border hover:shadow-md cursor-pointer"
                   (click)="prefillUpdateUser(user.id)">
                <div class="flex items-center space-x-3">
                  <img [src]="user.image" [alt]="user.firstName" 
                       class="w-10 h-10 rounded-full object-cover" />
                  <div class="flex-1">
                    <p class="font-medium text-sm">
                      {{ user.firstName }} {{ user.lastName }}
                    </p>
                    <p class="text-gray-500 text-xs">{{ user.email }}</p>
                  </div>
                </div>
                <button (click)="detailUser(user.id); $event.stopPropagation()"
                        class="mt-2 text-blue-600 text-sm">
                  View Details
                </button>
              </div>
            }
          </div>
        </div>
      </div>
    </div>

    <!-- Action buttons -->
    <div class="mt-8 text-center space-x-4">
      <button (click)="refreshAllData()" 
              class="px-6 py-2 bg-blue-600 text-white rounded-md">
        Refresh All Data
      </button>
      <button (click)="logout()" 
              class="px-6 py-2 bg-gray-600 text-white rounded-md">
        Logout
      </button>
    </div>
  </div>
</div>
  `;

  tsCode = `
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
import { catchError, finalize, retry, of } from 'rxjs';

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
 * API response wrapper interface
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
  // ... template and styles
})
export class FetchSubscribeComponent {
  // Dependency injection
  private $httpService = inject(LibHttpService);
  private $authService = inject(AuthService);
  private $encryptDecrypt = inject(LibEncryptDecryptService);
  readonly $permission = inject(LibStatePermissionsService);

  // Signal declarations for state management
  readonly status = this.$httpService.status;
  selectedUserId = signal(1);
  nativeResourceEnabled = signal(false);
  multipleApiResults = signal<any[] | null>(null);
  deleteUserId = signal<number | null>(null);

  // Manual signal for users data (instead of automated resource)
  usersResource: WritableSignal<DummyUsersResponse | null> = 
    signal<DummyUsersResponse | null>(null);

  // Form models
  createForm: IUserAuthResponse = {
    id: 0, username: '', email: '', firstName: '', lastName: '', 
    gender: 'male', image: '', address: { city: '', state: '', country: '' },
  };

  updateForm: IUserAuthResponse = { /* ... similar structure ... */ };

  constructor() {
    effect(() => {
      console.log('Global API Status:', this.status());
    });
  }

  // Form validation methods
  isCreateFormValid(): boolean {
    return !!(this.createForm.username && this.createForm.email && 
              this.createForm.firstName && this.createForm.lastName);
  }

  isUpdateFormValid(): boolean {
    return !!(this.updateForm.id && this.updateForm.username && 
              this.updateForm.email);
  }

  // Manual API operations with explicit subscribe patterns
  createNewUser(): void {
    if (!this.isCreateFormValid()) return;

    const payload: IUserAuthResponse = {
      ...this.createForm,
      id: Date.now(),
    };

    // Explicit HTTP POST with manual subscription
    this.$httpService.post('https://dummyjson.com/users/add', payload)
      .pipe(
        catchError(error => {
          console.error('Create user failed:', error);
          return of(null);
        }),
        finalize(() => {
          // Cleanup or loading state management
          console.log('Create operation completed');
        })
      )
      .subscribe({
        next: (response) => {
          if (response) {
            console.log('User created successfully:', response);
            this.resetCreateForm();
            this.refreshAllData(); // Manually refresh data
          }
        },
        error: (error) => {
          console.error('Subscription error:', error);
        }
      });
  }

  submitUpdateUser(): void {
    if (!this.isUpdateFormValid()) return;
    
    this.$httpService.put(
      \`https://dummyjson.com/users/\${this.updateForm.id}\`,
      this.updateForm
    )
    .pipe(
      retry(2), // Retry failed requests
      catchError(error => {
        console.error('Update failed:', error);
        return of(null);
      })
    )
    .subscribe({
      next: (response) => {
        if (response) {
          console.log('User updated:', response);
          this.refreshAllData();
        }
      }
    });
  }

  deleteUser(): void {
    const id = this.deleteUserId();
    if (!id) return;
    
    this.$httpService.delete(\`https://dummyjson.com/users/\${id}\`)
      .pipe(
        catchError(error => {
          console.error('Delete failed:', error);
          return of(null);
        })
      )
      .subscribe({
        next: (response) => {
          console.log('User deleted:', response);
          this.deleteUserId.set(null);
          this.refreshAllData();
        }
      });
  }

  // Manual data fetching with observable subscription
  refreshAllData(): void {
    this.$httpService.get<DummyUsersResponse>('https://dummyjson.com/users')
      .pipe(
        catchError(error => {
          console.error('Failed to fetch users:', error);
          return of(null);
        })
      )
      .subscribe({
        next: (data) => {
          if (data) {
            // Manual signal update
            this.usersResource.set(data);
          }
        }
      });
  }

  detailUser(id: number): void {
    if (!id) return;
    this.$httpService.get(\`https://dummyjson.com/users/\${id}\`)
      .subscribe({
        next: (user) => {
          console.log('User details:', user);
        }
      });
  }

  prefillUpdateUser(id: number): void {
    const user = this.usersResource()?.users?.find(u => u.id === id);
    if (user) {
      this.updateForm = { ...user };
    }
  }

  // Utility methods
  resetCreateForm(): void {
    this.createForm = {
      id: 0, username: '', email: '', firstName: '', lastName: '', 
      gender: 'male', image: '', address: { city: '', state: '', country: '' },
    };
  }

  logout(): void {
    this.$authService.logout();
    this.$encryptDecrypt.clearAllData();
  }
}`
}