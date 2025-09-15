import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { ServerSideTableComponent } from './server-side.component';
import { DocumentationComponent } from '../../../documentation/documentation.component';
import { CodeViewerComponent } from '../../../documentation/code-viewer/code-viewer.component';

@Component({
  selector: 'app-server-side-doc-documentation',
  imports: [DocumentationComponent, CodeViewerComponent],
  template: `
    <app-documentation
      [publishedDate]="publishedDate"
      [title]="title"
      [htmlCode]="htmlCode"
      [component]="serverSideTableComponent"
      [tsCode]="tsCode"
      [overviewContent]="overviewContent"
      [useCasesContent]="useCasesContent"
      [noteContent]="noteContent"
      [otherContent]="otherContent"
    >
    </app-documentation>

    <ng-template #overviewContent>
      <div class="space-y-4">
        <p class="text-on-surface">
          The
          <code class="bg-gray-100 px-1 py-0.5 rounded text-gray-800"
            >&lt;lib-intermediate-server-table&gt;</code
          >
          component is designed for server-side data management using the
          DummyJSON API. It offers both paginator-based and infinite scroll
          implementations, providing efficient data handling for realistic user
          datasets.
        </p>

        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg
                class="h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-blue-800">Key Features</h3>
              <div class="mt-2 text-sm text-blue-700">
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    Dual pagination modes: traditional paginator and infinite
                    scroll
                  </li>
                  <li>
                    Integration with DummyJSON API for realistic user data
                  </li>
                  <li>Server-side pagination with skip/limit parameters</li>
                  <li>
                    Comprehensive user data including names, ages, emails, and
                    birth dates
                  </li>
                  <li>Optimized performance for API-driven data</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h3 class="text-xl font-semibold text-on-surface mt-6">
          Implementation Highlights
        </h3>
        <ul class="list-disc pl-5 space-y-2 text-on-surface">
          <li>
            Uses DummyJSON API for realistic user data instead of mock data
          </li>
          <li>
            Separate state management for paginator and scroll implementations
          </li>
          <li>HTTP GET requests with query parameters for pagination</li>
          <li>Data transformation from API response to component interface</li>
          <li>Reactive updates using Angular signals</li>
          <li>Comprehensive error handling for API failures</li>
        </ul>

        <div class="bg-green-50 border-l-4 border-green-400 p-4 mt-4">
          <div class="flex">
            <div class="ml-3">
              <h3 class="text-sm font-medium text-green-800">
                DummyJSON API Integration
              </h3>
              <div class="mt-2 text-sm text-green-700">
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    <strong>Endpoint:</strong> https://dummyjson.com/users
                  </li>
                  <li><strong>Method:</strong> GET with query parameters</li>
                  <li><strong>Parameters:</strong> limit, skip, select</li>
                  <li>
                    <strong>Response:</strong> Realistic user data with
                    pagination metadata
                  </li>
                  <li>
                    <strong>Fields:</strong> firstName, lastName, age, email,
                    birthDate
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
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">
              Real User Data Management
            </h3>
            <p class="mt-2 text-gray-600">
              Ideal for applications that need to display realistic user
              information with complete profiles including contact details and
              demographic information.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="realUserDataExample"></app-code-viewer>
          </div>
        </div>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">
              API-Driven Infinite Scroll
            </h3>
            <p class="mt-2 text-gray-600">
              Perfect for modern UIs requiring infinite scroll functionality
              with real API data loading and proper pagination.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer
              [code]="apiInfiniteScrollExample"
            ></app-code-viewer>
          </div>
        </div>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">
              Production-Ready User Interfaces
            </h3>
            <p class="mt-2 text-gray-600">
              Suitable for production applications requiring real user data with
              complete CRUD operations and professional UI components.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="productionReadyExample"></app-code-viewer>
          </div>
        </div>
      </div>
    </ng-template>

    <ng-template #noteContent>
      <div class="space-y-4">
        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg
                class="h-5 w-5 text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-yellow-800">
                API Integration Notes
              </h3>
              <div class="mt-2 text-sm text-yellow-700">
                <ul class="list-disc pl-5 space-y-1">
                  <li>
                    DummyJSON API provides read-only data - edits are local to
                    the component
                  </li>
                  <li>API has rate limiting - avoid excessive requests</li>
                  <li>
                    Data is reset on page refresh since it's fetched from
                    external API
                  </li>
                  <li>
                    Birth dates are provided as strings and need conversion to
                    Date objects
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-purple-50 border-l-4 border-purple-400 p-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg
                class="h-5 w-5 text-purple-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-purple-800">
                Performance Considerations
              </h3>
              <div class="mt-2 text-sm text-purple-700">
                <ul class="list-disc pl-5 space-y-1">
                  <li>
                    Network latency affects loading times - implement proper
                    loading states
                  </li>
                  <li>Consider caching API responses for better performance</li>
                  <li>Use the select parameter to only fetch needed fields</li>
                  <li>Implement error boundaries for API failures</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>

    <ng-template #otherContent>
      <div class="space-y-6">
        <h2 class="text-2xl font-bold text-on-surface">
          DummyJSON API Implementation
        </h2>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">
              API Integration Setup
            </h3>
            <p class="mt-2 text-gray-600">
              The component now uses DummyJSON API instead of a local server,
              requiring GET requests with query parameters.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="apiIntegrationExample"></app-code-viewer>
          </div>
        </div>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">
              Data Transformation
            </h3>
            <p class="mt-2 text-gray-600">
              API responses are transformed to match the component's User
              interface, including type conversions.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer
              [code]="dataTransformationExample"
            ></app-code-viewer>
          </div>
        </div>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">
              Pagination Implementation
            </h3>
            <p class="mt-2 text-gray-600">
              Both paginator and infinite scroll modes use DummyJSON's
              skip/limit parameters for efficient data loading.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="paginationExample"></app-code-viewer>
          </div>
        </div>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Error Handling</h3>
            <p class="mt-2 text-gray-600">
              Comprehensive error handling for API failures with user feedback
              and proper state management.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="errorHandlingExample"></app-code-viewer>
          </div>
        </div>
      </div>
    </ng-template>
  `,
  styles: [''],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServerSideDocComponent {
  @ViewChild('overviewContent', { static: true })
  overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true })
  useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  serverSideTableComponent = ServerSideTableComponent;
  publishedDate = '2025-05-21';
  title = 'Intermediate Table (Server Side with DummyJSON API)';

  htmlCode = `
<div class="rounded-xl shadow border border-gray-200 bg-white p-4">
  <h2 class="text-gray-900 font-semibold mb-4">Paginator Base</h2>
  <lib-intermediate-server-table
    [tableData]="pageData()"
    [columns]="columnsConfig()"
    [rowConfig]="rowConfig"
    [sortable]="true"
    [loading]="pageLoading()"
    [totalItemCount]="pageTotalItems()"
    (pageChanged)="onPageChange($event)"
    (sortChanged)="onPageSortChange($event)"
  >
  </lib-intermediate-server-table>
</div>
<div class="rounded-xl shadow border border-gray-200 bg-white p-4 mt-5">
  <h2 class="text-gray-900 font-semibold mb-4">Scroll Base</h2>
  <lib-intermediate-server-table
    [tableData]="scrollData()"
    [columns]="columnsConfig()"
    [rowConfig]="rowConfig"
    [sortable]="true"
    [loading]="scrollLoading()"
    [paginationEnabled]="false"
    [scrollPaginationEnabled]="true"
    [pageSize]="20"
    [totalItemCount]="scrollTotalItems()"
    (loadMoreData)="onScrollLoadMore($event)"
    (sortChanged)="onScrollSortChange($event)"
  >
  </lib-intermediate-server-table>
</div>`;

  tsCode = `export class ServerSideTableComponent {
  // Services
  private httpService = inject(LibHttpService);

  // Scroll Table State
  scrollData: WritableSignal<User[]> = signal([]);
  scrollPageIndex = signal(0);
  scrollPageSize = signal(20);
  scrollTotalItems = signal(0);
  scrollLoading = signal<boolean>(false);

  // Paginator Table State
  pageData: WritableSignal<User[]> = signal([]);
  pageIndex = signal(0);
  pageSize = signal(10);
  pageTotalItems = signal(0);
  pageLoading = signal<boolean>(false);

  constructor() {
    this.fetchPageData();
    this.fetchScrollData();
  }

  // Fetch data from DummyJSON API
  fetchPageData(): void {
    const skip = this.pageIndex() * this.pageSize();
    const limit = this.pageSize();
    
    this.pageLoading.set(true);
    this.httpService
      .get<DummyJsonResponse>(
        \`https://dummyjson.com/users?limit=\${limit}&skip=\${skip}&select=firstName,lastName,age,email,birthDate\`
      )
      .subscribe({
        next: (res) => {
          const users = res.users.map(user => ({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            age: user.age,
            email: user.email,
            birthDate: new Date(user.birthDate),
            rowSelect: false,
            active: Math.random() > 0.5,
            isEditable: false
          }));
          
          this.pageData.set(users);
          this.pageTotalItems.set(res.total);
          this.pageLoading.set(false);
        },
        error: (err) => {
          this.pageLoading.set(false);
          this.toastService.error('Failed to load data from DummyJSON API');
        },
      });
  }
}`;

  // Example for real user data management
  realUserDataExample = `
// Fetching realistic user data from DummyJSON
fetchUserData(): void {
  this.httpService.get<DummyJsonResponse>(
    'https://dummyjson.com/users?limit=10&skip=0&select=firstName,lastName,age,email,birthDate'
  ).subscribe({
    next: (res) => {
      const users = res.users.map(user => ({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        age: user.age,
        email: user.email,
        birthDate: new Date(user.birthDate),
        // Additional component-specific fields
        rowSelect: false,
        active: true,
        isEditable: false
      }));
      this.tableData.set(users);
    }
  });
}
`;

  // Example for API-driven infinite scroll
  apiInfiniteScrollExample = `
// Infinite scroll with DummyJSON API
onScrollLoadMore(event: IIntermediateTableLoadMoreData) {
  this.scrollPageIndex.set(event.pageIndex);
  this.fetchScrollData();
}

fetchScrollData(): void {
  const skip = this.scrollPageIndex();
  const limit = this.scrollPageSize();
  
  this.httpService.get<DummyJsonResponse`;

  productionReadyExample = `
// Combine paginator & infinite scroll tables
// Each maintains its own signal state and API fetch logic
constructor() {
  this.fetchPageData();
  this.fetchScrollData();
}`;

  dataTransformationExample = `
// Transform API response to component's User interface
next: (res) => {
  const users = res.users.map(user => ({
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    age: user.age,
    email: user.email,
    birthDate: new Date(user.birthDate), // Convert string to Date
    rowSelect: false,
    active: Math.random() > 0.5, // Random active status
    isEditable: false
  }));
  this.pageData.set(users);
  this.pageTotalItems.set(res.total);
  this.pageLoading.set(false);
}
  
  `;

  apiIntegrationExample = `
// GET request to DummyJSON API with pagination parameters
this.httpService.get<DummyJsonResponse>(
  \`https://dummyjson.com/users?limit=\${limit}&skip=\${skip}&select=firstName,lastName,age,email,birthDate\`
)
`;

  paginationExample = `
// Using skip & limit for pagination
const skip = this.pageIndex() * this.pageSize()
const limit = this.pageSize();
this.httpService.get<DummyJsonResponse>(
  \`https://dummyjson.com/users?limit=\${limit}&skip=\${skip}&select=firstName,lastName,age,email,birthDate\`
)
`;

  errorHandlingExample = `
this.httpService.get<DummyJsonResponse>(apiUrl).subscribe({
  next: (res) => {
    // Handle successful response
  },
  error: (err) => {
    this.toastService.error('Failed to load data from DummyJSON API');
    this.pageLoading.set(false);
  }, `;
}
