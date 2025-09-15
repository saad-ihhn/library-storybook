import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { DocumentationComponent } from '../../shared-ui/documentation/documentation.component';
import { CodeViewerComponent } from '../../shared-ui/documentation/code-viewer/code-viewer.component';
import { ResourseComponent } from './http-resource.component';

@Component({
  selector: 'app-resource-documentation',
  standalone: true,
  imports: [CodeViewerComponent, DocumentationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-documentation
      [publishedDate]="publishedDate"
      [title]="title"
      [component]="resourseComponent"
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
          The <strong>Resource Component</strong> demonstrates modern Angular patterns for managing HTTP resources using service-based approaches. This component showcases how to efficiently handle API data fetching, loading states, and error handling with both <code>getResource()</code> and <code>httpResource()</code> methods.
        </p>

        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <div class="flex">
            <div class="ml-3">
              <h3 class="text-sm font-medium text-blue-800">Architecture Highlights</h3>
              <div class="mt-2 text-sm text-blue-700">
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li><strong>Dual Resource Management</strong>: Supports both static and dynamic API endpoints</li>
                  <li><strong>Reactive State Management</strong>: Provides loading, error, and data states as signals</li>
                  <li><strong>Simplified API Integration</strong>: Abstracts complex HTTP operations behind simple interfaces</li>
                  <li><strong>Automatic Cleanup</strong>: Built-in memory management with proper resource disposal</li>
                  <li><strong>Type Safety</strong>: Full TypeScript support with proper interfaces</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h3 class="text-xl font-semibold mt-6">Key Features</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-white p-4 rounded-lg border border-gray-200">
            <h4 class="font-medium text-gray-800 mb-2">getResource()</h4>
            <ul class="list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li>Simple static URL endpoints</li>
              <li>Automatic loading state tracking</li>
              <li>Built-in error handling</li>
              <li>Perfect for fixed API routes</li>
            </ul>
          </div>
          
          <div class="bg-white p-4 rounded-lg border border-gray-200">
            <h4 class="font-medium text-gray-800 mb-2">httpResource()</h4>
            <ul class="list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li>Dynamic URL generation</li>
              <li>Advanced configuration options</li>
              <li>Custom parsing and transformation</li>
              <li>Ideal for parameterized endpoints</li>
            </ul>
          </div>
          
          <div class="bg-white p-4 rounded-lg border border-gray-200">
            <h4 class="font-medium text-gray-800 mb-2">Performance Benefits</h4>
            <ul class="list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li>Efficient change detection with OnPush strategy</li>
              <li>Optimized API calls with caching potential</li>
              <li>Reduced boilerplate code</li>
              <li>Minimal re-renders with signal-based updates</li>
            </ul>
          </div>
          
          <div class="bg-white p-4 rounded-lg border border-gray-200">
            <h4 class="font-medium text-gray-800 mb-2">Developer Experience</h4>
            <ul class="list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li>Simplified API integration</li>
              <li>Consistent error handling patterns</li>
              <li>Better code organization</li>
              <li>Easier debugging with clear state separation</li>
            </ul>
          </div>
        </div>

        <h3 class="text-xl font-semibold mt-6">Technical Architecture</h3>
        <div class="bg-gray-50 p-4 rounded-lg">
          <div class="flex items-center justify-center mb-4">
            <div class="text-center">
              <div class="bg-white p-3 rounded-lg shadow-sm mb-2">
                <span class="font-medium text-purple-600">Resource Component</span>
              </div>
              <div class="flex justify-center space-x-6 mt-2">
                <div class="text-center">
                  <div class="bg-blue-100 p-2 rounded-lg">
                    <span class="text-sm font-medium text-blue-800">HTTP Service</span>
                  </div>
                  <div class="text-xs text-gray-600 mt-1">API Management</div>
                </div>
                <div class="text-center">
                  <div class="bg-green-100 p-2 rounded-lg">
                    <span class="text-sm font-medium text-green-800">getResource()</span>
                  </div>
                  <div class="text-xs text-gray-600 mt-1">Static URLs</div>
                </div>
                <div class="text-center">
                  <div class="bg-yellow-100 p-2 rounded-lg">
                    <span class="text-sm font-medium text-yellow-800">httpResource()</span>
                  </div>
                  <div class="text-xs text-gray-600 mt-1">Dynamic URLs</div>
                </div>
                <div class="text-center">
                  <div class="bg-red-100 p-2 rounded-lg">
                    <span class="text-sm font-medium text-red-800">Reactive States</span>
                  </div>
                  <div class="text-xs text-gray-600 mt-1">Data, Loading, Error</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-green-50 border-l-4 border-green-400 p-4">
          <div class="flex">
            <div class="ml-3">
              <h3 class="text-sm font-medium text-green-800">When to Use Each Pattern</h3>
              <div class="mt-2 text-sm text-green-700">
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li><strong>getResource()</strong>: Fixed endpoints, simple data fetching, list views</li>
                  <li><strong>httpResource()</strong>: Dynamic parameters, detailed views, complex transformations</li>
                  <li><strong>Both</strong>: When you need consistent patterns across different API call types</li>
                  <li><strong>Reactive Updates</strong>: When you need reactive UI updates based on API state changes</li>
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
            <h3 class="text-lg font-medium text-gray-900">Basic Data Fetching with getResource()</h3>
            <p class="mt-2 text-gray-600">
              Simple API data fetching with automatic state management using static URLs.
            </p>
          </div>
          <div class="p-5">
            <h4 class="font-medium text-gray-800 mb-3">Implementation Example:</h4>
            <app-code-viewer
              code="
// Basic data fetching with getResource()
users = this.$httpService.getResource<DummyUsersResponse>(
  'https://dummyjson.com/users'
);
              "
            ></app-code-viewer>
          </div>
        </div>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5 bg-gray-50 border-b">
            <h3 class="text-lg font-medium text-gray-900">Dynamic Data Fetching with httpResource()</h3>
            <p class="mt-2 text-gray-600">
              Advanced API data fetching with dynamic URLs and configuration options.
            </p>
          </div>
          <div class="p-5">
            <h4 class="font-medium text-gray-800 mb-3">Implementation Example:</h4>
            <app-code-viewer
              code="
// Dynamic data fetching with httpResource()
singleUserResource = this.$httpService.httpResource<SingleUserResponse>(
  () => this.selectedUserId() 
    ? 'https://dummyjson.com/users/' + this.selectedUserId() 
    : undefined,
  {
    parse: (data: any) => ({
      ...data,
      address: data.address || {}
    }),
    defaultValue: undefined,
    onSuccess: (data) => {
      console.log('User data loaded:', data);
      this.singleUserStatus.set('success');
    },
    onError: (error) => {
      console.error('Failed to load user:', error);
      this.singleUserStatus.set('error');
    },
    onLoading: (loading) => {
      this.singleUserStatus.set(loading ? 'loading' : 'idle');
    }
  }
);
              "
            ></app-code-viewer>
          </div>
        </div>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5 bg-gray-50 border-b">
            <h3 class="text-lg font-medium text-gray-900">Template Integration</h3>
            <p class="mt-2 text-gray-600">
              Using resource states directly in Angular templates for both patterns.
            </p>
          </div>
          <div class="p-5">
            <h4 class="font-medium text-gray-800 mb-3">Template Usage:</h4>
            <app-code-viewer
              [code]="templateCode"
            ></app-code-viewer>
          </div>
        </div>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5 bg-gray-50 border-b">
            <h3 class="text-lg font-medium text-gray-900">Data Refresh Pattern</h3>
            <p class="mt-2 text-gray-600">
              Implementing data refresh functionality for both resource types.
            </p>
          </div>
          <div class="p-5">
            <h4 class="font-medium text-gray-800 mb-3">Implementation Example:</h4>
            <app-code-viewer
              code='
<!-- Refresh buttons in template -->
<lib-mat-flat-button (matClick)="users.reload()" size="small">
  Refresh Users
</lib-mat-flat-button>

<lib-mat-flat-button 
  (matClick)="singleUserResource.reload()" 
  size="small"
  [disabled]="!selectedUserId()"
>
  Refresh User
</lib-mat-flat-button>

<!-- Global refresh -->
<lib-mat-flat-button (matClick)="refreshAll()">
  Refresh All Data
</lib-mat-flat-button>'
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
              <h3 class="text-sm font-medium text-yellow-800">Memory Management</h3>
              <div class="mt-2 text-sm text-yellow-700">
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li><strong>Automatic Cleanup</strong>: Both resource types are automatically managed</li>
                  <li><strong>Component Destruction</strong>: No need for manual cleanup in ngOnDestroy</li>
                  <li><strong>Efficient Resource Handling</strong>: Optimized API call management</li>
                  <li><strong>No Memory Leaks</strong>: Built-in protection against common memory leak patterns</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-blue-50 border-l-4 border-blue-400 p-4">
          <div class="flex">
            <div class="ml-3">
              <h3 class="text-sm font-medium text-blue-800">Performance Considerations</h3>
              <div class="mt-2 text-sm text-blue-700">
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li><strong>Efficient Updates</strong>: Only triggers updates when states actually change</li>
                  <li><strong>Change Detection</strong>: Works optimally with OnPush change detection strategy</li>
                  <li><strong>Minimal Re-renders</strong>: Reduces unnecessary template re-renders</li>
                  <li><strong>API Optimization</strong>: Potential for request deduplication and caching</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-green-50 border-l-4 border-green-400 p-4">
          <div class="flex">
            <div class="ml-3">
              <h3 class="text-sm font-medium text-green-800">Error Handling Strategies</h3>
              <div class="mt-2 text-sm text-green-700">
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li><strong>Built-in Error Handling</strong>: Automatic error state management for both patterns</li>
                  <li><strong>Custom Error Handling</strong>: httpResource() allows custom error callbacks</li>
                  <li><strong>User Feedback</strong>: Easy implementation of user notification for errors</li>
                  <li><strong>Recovery</strong>: Simple retry mechanism with reload() method</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-purple-50 border-l-4 border-purple-400 p-4">
          <div class="flex">
            <div class="ml-3">
              <h3 class="text-sm font-medium text-purple-800">Testing Strategies</h3>
              <div class="mt-2 text-sm text-purple-700">
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li><strong>State Testing</strong>: Test loading, error, and data states for both resource types</li>
                  <li><strong>Service Mocking</strong>: Mock HTTP service responses</li>
                  <li><strong>Dynamic URL Testing</strong>: Test httpResource() with different parameter values</li>
                  <li><strong>Template Integration</strong>: Test template rendering with different states</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>

    <ng-template #otherContent>
      <div class="space-y-8">
        <h2 class="text-2xl font-bold text-gray-800">Advanced Patterns & Comparison</h2>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5 bg-gray-50 border-b">
            <h3 class="text-lg font-medium text-gray-900">Advanced Resource Patterns</h3>
            <p class="mt-2 text-gray-600">
              Advanced usage patterns for both resource management approaches.
            </p>
          </div>
          <div class="p-5">
            <h4 class="font-medium text-gray-800 mb-3">Multiple Resources with Different Patterns:</h4>
            <app-code-viewer
              code="
// Using both patterns in the same component
users = this.$httpService.getResource<DummyUsersResponse>(
  'https://dummyjson.com/users'
);

singleUser = this.$httpService.httpResource<SingleUserResponse>(
  () => this.selectedUserId() 
    ? 'https://dummyjson.com/users/' + this.selectedUserId() 
    : undefined
);

userPosts = this.$httpService.httpResource<PostsResponse>(
  () => this.selectedUserId() 
    ? 'https://dummyjson.com/users/' + this.selectedUserId() + '/posts' 
    : undefined
);
              "
            ></app-code-viewer>
            
            <h4 class="font-medium text-gray-800 mt-6 mb-3">Custom Parsing with httpResource():</h4>
            <app-code-viewer
              code="
// Advanced data transformation
userWithStats = this.$httpService.httpResource<UserWithStats>(
  () => this.selectedUserId() 
    ? 'https://dummyjson.com/users/' + this.selectedUserId() 
    : undefined,
  {
    parse: (data: any) => ({
      ...data,
      fullName: data.firstName + ' ' + data.lastName,
      activityScore: Math.random() * 100, // calculated field
      lastActive: new Date().toISOString(),
      address: data.address || {}
    }),
    defaultValue: null
  }
);
              "
            ></app-code-viewer>
          </div>
        </div>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5 bg-gray-50 border-b">
            <h3 class="text-lg font-medium text-gray-900">Comparison: getResource() vs httpResource()</h3>
            <p class="mt-2 text-gray-600">
              Understanding the differences between the two resource patterns.
            </p>
          </div>
          <div class="p-5">
            <div class="overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Aspect</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">getResource()</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">httpResource()</th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr>
                    <td class="px-6 py-4 text-sm font-medium text-gray-900">URL Type</td>
                    <td class="px-6 py-4 text-sm text-gray-500">Static - Fixed string</td>
                    <td class="px-6 py-4 text-sm text-gray-500">Dynamic - Function that returns string</td>
                  </tr>
                  <tr class="bg-gray-50">
                    <td class="px-6 py-4 text-sm font-medium text-gray-900">Configuration</td>
                    <td class="px-6 py-4 text-sm text-gray-500">Basic - URL only</td>
                    <td class="px-6 py-4 text-sm text-gray-500">Advanced - Options object with callbacks</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 text-sm font-medium text-gray-900">Use Case</td>
                    <td class="px-6 py-4 text-sm text-gray-500">Fixed endpoints, list data</td>
                    <td class="px-6 py-4 text-sm text-gray-500">Parameterized endpoints, detail views</td>
                  </tr>
                  <tr class="bg-gray-50">
                    <td class="px-6 py-4 text-sm font-medium text-gray-900">Data Transformation</td>
                    <td class="px-6 py-4 text-sm text-gray-500">Limited - Manual in component</td>
                    <td class="px-6 py-4 text-sm text-gray-500">Built-in - Parse function in options</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 text-sm font-medium text-gray-900">Complexity</td>
                    <td class="px-6 py-4 text-sm text-gray-500">Simple - Easy to implement</td>
                    <td class="px-6 py-4 text-sm text-gray-500">Advanced - More control and options</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5 bg-gray-50 border-b">
            <h3 class="text-lg font-medium text-gray-900">Best Practices</h3>
            <p class="mt-2 text-gray-600">
              Recommended practices for using both resource patterns effectively.
            </p>
          </div>
          <div class="p-5">
            <div class="space-y-4">
              <div class="bg-blue-50 p-3 rounded-lg">
                <h4 class="font-medium text-blue-800">Choose the Right Pattern</h4>
                <p class="text-sm text-blue-700">Use getResource() for static endpoints and httpResource() for dynamic ones</p>
              </div>
              <div class="bg-green-50 p-3 rounded-lg">
                <h4 class="font-medium text-green-800">Use Type Interfaces</h4>
                <p class="text-sm text-green-700">Always define proper TypeScript interfaces for API responses</p>
              </div>
              <div class="bg-yellow-50 p-3 rounded-lg">
                <h4 class="font-medium text-yellow-800">Centralize API URLs</h4>
                <p class="text-sm text-yellow-700">Keep API endpoints in a central configuration for easy maintenance</p>
              </div>
              <div class="bg-purple-50 p-3 rounded-lg">
                <h4 class="font-medium text-purple-800">Error Handling</h4>
                <p class="text-sm text-purple-700">Use httpResource() callbacks for custom error handling when needed</p>
              </div>
              <div class="bg-red-50 p-3 rounded-lg">
                <h4 class="font-medium text-red-800">Performance</h4>
                <p class="text-sm text-red-700">Combine with ChangeDetectionStrategy.OnPush for best performance</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5 bg-gray-50 border-b">
            <h3 class="text-lg font-medium text-gray-900">Real-World Example</h3>
            <p class="mt-2 text-gray-600">
              Complete example showing both patterns working together.
            </p>
          </div>
          <div class="p-5">
            <h4 class="font-medium text-gray-800 mb-3">Component Implementation:</h4>
            <app-code-viewer
              [code]="completeExample"
            ></app-code-viewer>
          </div>
        </div>
      </div>
    </ng-template>
  `,
  styles: ``
})
export class ResourceDocComponent {
  @ViewChild('overviewContent', { static: true }) overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true }) useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;

  resourseComponent = ResourseComponent;
  publishedDate = '2025-06-05';
  title = 'HTTP Resource Management Component';

  htmlCode = `
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
                <div class="flex items-center space-x-2">
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
                      class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded hover:bg-blue-200"
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
                <div class="flex items-center space-x-2">
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
                      @{{ singleUserResource.value()?.username }}
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
  `;

  tsCode = `
import { CommonModule } from "@angular/common";
import { Component, ChangeDetectionStrategy, inject, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { LibMatFlatButtonComponent } from "@saad-ihhn/ihhn-host-lib/lib-buttons";
import { LibHttpService, LibEncryptDecryptService, HttpResourceOptions } from "@saad-ihhn/ihhn-host-lib/services";
import { AuthService } from "../../core/auth/auth.service";

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
  template: \`
    <!-- Template content -->
  \`
})
export class ResourseComponent {
  private $httpService = inject(LibHttpService);
  private $authService = inject(AuthService);
  private $encryptDecrypt = inject(LibEncryptDecryptService);

  readonly status = this.$httpService.status;
  selectedUserId = signal<number | null>(null);
  singleUserStatus = signal<'idle' | 'loading' | 'success' | 'error' | 'completed'>('idle');

  // Standard getResource example
  users = this.$httpService.getResource<DummyUsersResponse>(
    'https://dummyjson.com/users'
  );

  // httpResource example with dynamic URL
  singleUserResource = this.$httpService.httpResource<SingleUserResponse>(
    () => this.selectedUserId() ? \`https://dummyjson.com/users/\${this.selectedUserId()}\` : undefined,
    {
      // Optional: You can add parsing logic here
      parse: (data: any) => {
        // Transform the data if needed
        return {
          ...data,
          // Ensure address is always an object
          address: data.address || {}
        };
      },
      // Optional: Default value while loading or on error
      defaultValue: undefined,
      // Optional: You can add onSuccess and onError handlers
      onSuccess: (data) => {
        console.log('User data loaded successfully:', data);
        this.singleUserStatus.set('success');
      },
      onError: (error) => {
        console.error('Failed to load user data:', error);
        this.singleUserStatus.set('error');
      },
      onLoading: (loading) => {
        this.singleUserStatus.set(loading ? 'loading' : 'idle');
      }
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
  `;

  templateCode = `
<!-- Loading state -->
<div *ngIf="users.loading()" class="status-badge status-loading">
  Loading users...
</div>

<!-- Error state -->
<div *ngIf="users.error()" class="status-badge status-error">
  {{ users.error()?.message }}
</div>

<!-- Data state -->
<div *ngIf="users.data()?.users" class="space-y-3">
  @for (user of users.data()?.users || []; track user.id) {
    <div class="bg-gray-50 p-3 rounded-md border border-gray-200 hover:shadow-md">
      <div class="flex items-center space-x-3">
        <img [src]="user.image" [alt]="user.firstName" 
             class="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" />
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

<!-- httpResource specific template -->
<div *ngIf="singleUserResource.data()" class="bg-white p-4 rounded-lg border border-gray-200">
  <div class="flex items-center space-x-4 mb-4">
    <img
      [src]="singleUserResource.data()?.image"
      [alt]="singleUserResource.data()?.firstName"
      class="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm"
    />
    <div>
      <h4 class="font-semibold text-gray-800">
        {{ singleUserResource.data()?.firstName }} {{ singleUserResource.data()?.lastName }}
      </h4>
      <p class="text-gray-600 text-sm">{{ singleUserResource.data()?.email }}</p>
    </div>
  </div>
</div>
  `;

  completeExample = `
// Complete component example using both patterns
export class CompleteExampleComponent {
  private $httpService = inject(LibHttpService);
  
  // getResource for static endpoint
  users = this.$httpService.getResource<DummyUsersResponse>(
    'https://dummyjson.com/users'
  );
  
  // httpResource for dynamic endpoint
  userDetail = this.$httpService.httpResource<UserDetail>(
    () => this.selectedUserId() 
      ? 'https://dummyjson.com/users/' + this.selectedUserId() 
      : undefined,
    {
      parse: (data) => ({
        ...data,
        fullName: data.firstName + ' ' + data.lastName,
        memberSince: new Date(data.registrationDate).toLocaleDateString()
      }),
      onError: (error) => {
        this.notificationService.error('Failed to load user details');
      }
    }
  );
  
  // httpResource for related data
  userPosts = this.$httpService.httpResource<Post[]>(
    () => this.selectedUserId() 
      ? 'https://dummyjson.com/users/' + this.selectedUserId() + '/posts' 
      : undefined,
    {
      defaultValue: [],
      onSuccess: (posts) => {
        console.log('Loaded', posts.length, 'posts');
      }
    }
  );
  
  selectedUserId = signal<number | null>(null);
  
  selectUser(userId: number): void {
    this.selectedUserId.set(userId);
  }
  
  refreshAll(): void {
    this.users.reload();
    if (this.selectedUserId()) {
      this.userDetail.reload();
      this.userPosts.reload();
    }
  }
}
  `;
}