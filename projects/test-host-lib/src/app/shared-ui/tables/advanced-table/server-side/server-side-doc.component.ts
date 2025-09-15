import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewChild
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
  [otherContent]="otherContent">
</app-documentation>

<ng-template #overviewContent>
  <div class="space-y-4">
    <p class="text-on-surface">
      The <code class="bg-gray-100 px-1 py-0.5 rounded text-gray-800">&lt;lib-advanced-server-table&gt;</code> component provides server-side data management with two distinct pagination modes: traditional paginator and infinite scroll.
    </p>
    
    <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
      <div class="flex">
        <div class="flex-shrink-0">
          <svg class="h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd" />
          </svg>
        </div>
        <div class="ml-3">
          <h3 class="text-sm font-medium text-blue-800">Key Features</h3>
          <div class="mt-2 text-sm text-blue-700">
            <ul class="list-disc pl-5 mt-1 space-y-1">
              <li>Dual pagination modes (paginator and infinite scroll)</li>
              <li>Server-side sorting and pagination</li>
              <li>Optimized for large datasets (thousands+ records)</li>
              <li>Consistent column configuration with client-side table</li>
              <li>Efficient data loading with minimal payloads</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <h3 class="text-xl font-semibold text-on-surface mt-6">Architecture</h3>
    <ul class="list-disc pl-5 space-y-2 text-on-surface">
      <li>Decouples UI from data management</li>
      <li>Uses HTTP requests for data fetching</li>
      <li>Maintains local state for pagination/sorting</li>
      <li>Supports both traditional and scroll-based pagination</li>
    </ul>
  </div>
</ng-template>

<ng-template #useCasesContent>
  <div class="space-y-6">    
    <div class="bg-white shadow rounded-lg overflow-hidden">
      <div class="p-5">
        <h3 class="text-lg font-medium text-gray-900">Large Dataset Management</h3>
        <p class="mt-2 text-gray-600">
          Ideal for applications dealing with thousands of records where client-side processing would be inefficient.
        </p>
      </div>
      <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
        <app-code-viewer [code]="largeDatasetExample"></app-code-viewer>
      </div>
    </div>
    
    <div class="bg-white shadow rounded-lg overflow-hidden">
      <div class="p-5">
        <h3 class="text-lg font-medium text-gray-900">Enterprise Applications</h3>
        <p class="mt-2 text-gray-600">
          Perfect for enterprise dashboards requiring server-side sorting and pagination with complex business logic.
        </p>
      </div>
      <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
        <app-code-viewer [code]="enterpriseExample"></app-code-viewer>
      </div>
    </div>
    
    <div class="bg-white shadow rounded-lg overflow-hidden">
      <div class="p-5">
        <h3 class="text-lg font-medium text-gray-900">Mobile-Friendly Lists</h3>
        <p class="mt-2 text-gray-600">
          Infinite scroll mode provides better UX for mobile applications and long lists.
        </p>
      </div>
      <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
        <app-code-viewer [code]="mobileExample"></app-code-viewer>
      </div>
    </div>
  </div>
</ng-template>

<ng-template #noteContent>
  <div class="space-y-4">    
    <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
      <div class="flex">
        <div class="flex-shrink-0">
          <svg class="h-5 w-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
          </svg>
        </div>
        <div class="ml-3">
          <h3 class="text-sm font-medium text-yellow-800">Implementation Notes</h3>
          <div class="mt-2 text-sm text-yellow-700">
            <ul class="list-disc pl-5 space-y-1">
              <li>Ensure server API supports pagination parameters (skip/take)</li>
              <li>Implement proper error handling for network requests</li>
              <li>Consider caching strategies for better performance</li>
              <li>Test both pagination modes thoroughly</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <div class="bg-purple-50 border-l-4 border-purple-400 p-4">
      <div class="flex">
        <div class="flex-shrink-0">
          <svg class="h-5 w-5 text-purple-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd" />
          </svg>
        </div>
        <div class="ml-3">
          <h3 class="text-sm font-medium text-purple-800">Performance Considerations</h3>
          <div class="mt-2 text-sm text-purple-700">
            <ul class="list-disc pl-5 space-y-1">
              <li>Optimize server queries with proper indexing</li>
              <li>Consider implementing backend caching</li>
              <li>Use appropriate page sizes (10-100 items typically)</li>
              <li>Implement debouncing for scroll events</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</ng-template>

<ng-template #otherContent>
  <div class="space-y-6">
    <h2 class="text-2xl font-bold text-on-surface">Implementation Guide</h2>
    
    <div class="bg-white shadow rounded-lg overflow-hidden">
      <div class="p-5">
        <h3 class="text-lg font-medium text-gray-900">Component Setup</h3>
        <p class="mt-2 text-gray-600">
          Basic configuration with required imports and template setup.
        </p>
      </div>
      <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
        <app-code-viewer [code]="basicSetupExample"></app-code-viewer>
      </div>
    </div>
    
    <div class="bg-white shadow rounded-lg overflow-hidden">
      <div class="p-5">
        <h3 class="text-lg font-medium text-gray-900">State Management</h3>
        <p class="mt-2 text-gray-600">
          Managing pagination state and data signals for both modes.
        </p>
      </div>
      <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
        <app-code-viewer [code]="stateManagementExample"></app-code-viewer>
      </div>
    </div>
    
    <div class="bg-white shadow rounded-lg overflow-hidden">
      <div class="p-5">
        <h3 class="text-lg font-medium text-gray-900">Data Fetching</h3>
        <p class="mt-2 text-gray-600">
          Implementing server requests with pagination parameters.
        </p>
      </div>
      <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
        <app-code-viewer [code]="dataFetchingExample"></app-code-viewer>
      </div>
    </div>
    
    <div class="bg-white shadow rounded-lg overflow-hidden">
      <div class="p-5">
        <h3 class="text-lg font-medium text-gray-900">Event Handlers</h3>
        <p class="mt-2 text-gray-600">
          Handling pagination changes, sorting, and infinite scroll events.
        </p>
      </div>
      <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
        <app-code-viewer [code]="eventHandlersExample"></app-code-viewer>
      </div>
    </div>
  </div>
</ng-template>
`,
  styles: [''],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServerSideDocComponent {
  @ViewChild('overviewContent', { static: true })
  overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true })
  useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  serverSideTableComponent = ServerSideTableComponent;
  publishedDate = '2025-05-21';
  title = 'Advanced Table (Server Side)';
  htmlCode = `
    <div class="rounded-xl shadow border border-gray-200 bg-white p-4">
      <lib-advanced-client-table
        [tableData]="allData"
        [columns]="columnsConfig"
        [rowConfig]="rowConfig"
      >
      </lib-advanced-client-table>
    </div>`;
  tsCode = `export class ClientSideAdvancedTableComponent {
    /** Shared columns */
    columnsConfig: TAdvancedTableColumn<users>[] = [
      { key: 'id', label: 'ID', type: AdvancedTableColumnTypeEnum.Number },
      { key: 'name', label: 'Name', type: AdvancedTableColumnTypeEnum.Text },
      { key: 'age', label: 'Age', type: AdvancedTableColumnTypeEnum.Number },
      {
        key: 'joined',
        label: 'Joined',
        type: AdvancedTableColumnTypeEnum.Date,
      },
      {
        key: 'action',
        label: 'Actions',
        type: AdvancedTableColumnTypeEnum.Action,
        actions: [
          {
            icon: 'edit',
            iconType: 'name',
            onClick: (row) => console.log('Edit clicked', row),
          },
          {
            icon: 'delete',
            iconType: 'name',
            onClick: (row) => console.log('Delete clicked', row),
          },
        ],
      },
    ];
  
    rowConfig: IAdvancedTableRowConfig<users> = {
      onClick: (row) => {
        console.log('Row clicked:', row);
      },
      getClass: (row) => (row.age > 30 ? '!bg-yellow-100' : ''),
      isSelectable: (row) => row.age >= 18,
    };
  
    allData = this.generateMockData(100);
  
    /** MOCK for client-side demo */
    generateMockData(count: number): users[] {
      const firstNames = [
        'Emma',
        'Liam',
        'Olivia',
        'Noah',
        'Ava',
        'William',
        'Sophia',
        'James',
        'Isabella',
        'Oliver',
      ];
      const lastNames = [
        'Smith',
        'Johnson',
        'Williams',
        'Brown',
        'Jones',
        'Garcia',
        'Miller',
        'Davis',
        'Rodriguez',
        'Martinez',
      ];
  
      return Array.from({ length: count }, (_, i) => {
        const randomFirst =
          firstNames[Math.floor(Math.random() * firstNames.length)];
        const randomLast =
          lastNames[Math.floor(Math.random() * lastNames.length)];
        const randomAge = Math.floor(Math.random() * 30) + 18;
        const daysAgo = Math.floor(Math.random() * 365 * 3);
        return {
          id: i + 1,
          name: randomFirst randomLast,
          age: randomAge,
          joined: new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000),
        } as users;
      });
    }
  }
  
  interface users {
    id: number;
    name: string;
    age: number;
  }`;

  // Add these to your component class
interactiveGridExample = `
<lib-advanced-client-table
  [tableData]="users"
  [columns]="columnsConfig"
  [rowConfig]="rowConfig">
</lib-advanced-client-table>
`;

clientSideExample = `
// Component initialization
users = signal<users[]>([]);

// Fetch data
fetchUsers() {
  this.users.set([
    {id: 1, name: 'John', age: 30},
    {id: 2, name: 'Jane', age: 25}
  ]);
}
`;

adminPanelExample = `
// Admin panel config
columnsConfig: TAdvancedTableColumn<users>[] = [
  {
    key: 'adminActions',
    type: AdvancedTableColumnTypeEnum.Action,
    actions: [
      {
        icon: 'edit',
        onClick: (row) => this.openAdminEdit(row)
      }
    ]
  }
];
`;

largeDatasetExample = `
// Server-side pagination config
fetchLargeDataset() {
  this.http.post('/api/large-data', {
    skip: this.pageIndex() * this.pageSize(),
    take: this.pageSize()
  }).subscribe(res => {
    this.pageData.set(res.data);
    this.pageTotalItems.set(res.count);
  });
}
`;

enterpriseExample = `
// Enterprise config with complex sorting
columnsConfig: TAdvancedTableColumn<enterpriseUser>[] = [
  {
    key: 'department',
    label: 'Department',
    sortable: true,
    sortFn: (a, b) => a.department.localeCompare(b.department)
  }
];
`;

mobileExample = `
// Infinite scroll setup
<lib-advanced-server-table
  [scrollPaginationEnabled]="true"
  (loadMoreData)="onScrollLoadMore($event)">
</lib-advanced-server-table>
`;

basicSetupExample = `
// Basic server-side setup
@Component({
  imports: [LibAdvancedServerTableComponent]
})
export class ServerTableComponent {
  tableData = signal<users[]>([]);
  columnsConfig: TAdvancedTableColumn<users>[] = [...];
}
`;

stateManagementExample = `
// State management for pagination
pageIndex = signal(0);
pageSize = signal(10);
totalItems = signal(0);
sortState = signal<Sort | undefined>(undefined);
`;

dataFetchingExample = `
// Data fetching implementation
fetchData() {
  const payload = {
    skip: this.pageIndex() * this.pageSize(),
    take: this.pageSize(),
    sort: this.sortState()
  };

  this.http.post('/api/data', payload)
    .subscribe(res => {
      this.tableData.set(res.data);
      this.totalItems.set(res.count);
    });
}
`;

eventHandlersExample = `
// Event handlers
onPageChange(event: IAdvancedTablePageEvent) {
  this.pageIndex.set(event.pageIndex);
  this.pageSize.set(event.pageSize);
  this.fetchData();
}

onSortChange(sort: Sort) {
  this.sortState.set(sort);
  this.pageIndex.set(0);
  this.fetchData();
}
`;
}