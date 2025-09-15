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
  template:`
  <app-documentation 
  [publishedDate]="'2025-05-21'" 
  [title]="'Basic Table (Server-Side)'"
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
      The <code class="bg-gray-100 px-1 py-0.5 rounded text-gray-800">&lt;lib-basic-server-table&gt;</code> component provides efficient server-side data handling for large datasets. It supports two pagination modes (traditional and infinite scroll) and integrates seamlessly with backend APIs while maintaining optimal performance.
    </p>
    
    <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
      <div class="flex">
        <div class="flex-shrink-0">
          <svg class="h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd" />
          </svg>
        </div>
        <div class="ml-3">
          <h3 class="text-sm font-medium text-blue-800">Key Differentiators</h3>
          <div class="mt-2 text-sm text-blue-700">
            <p>
              This server-side implementation offers:
            </p>
            <ul class="list-disc pl-5 mt-1 space-y-1">
              <li>Dual pagination modes (traditional and infinite scroll)</li>
              <li>Efficient handling of very large datasets</li>
              <li>Shared configuration between table implementations</li>
              <li>Automatic API request generation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <h3 class="text-xl font-semibold text-on-surface mt-6">Core Features</h3>
    <ul class="list-disc pl-5 space-y-2 text-on-surface">
      <li>Server-side sorting and pagination</li>
      <li>Configurable API request payloads</li>
      <li>Error handling with mock data fallback</li>
      <li>Shared column and row configurations</li>
      <li>Reactive state management with Signals</li>
      <li>Optimized change detection</li>
    </ul>
  </div>
</ng-template>

<ng-template #useCasesContent>
  <div class="space-y-6">    
    <div class="bg-white shadow rounded-lg overflow-hidden">
      <div class="p-5">
        <h3 class="text-lg font-medium text-gray-900">Enterprise Data Applications</h3>
        <p class="mt-2 text-gray-600">
          Ideal for applications dealing with large datasets where client-side processing would be inefficient.
        </p>
      </div>
      <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
        <app-code-viewer [code]="enterpriseExample"></app-code-viewer>
      </div>
    </div>
    
    <div class="bg-white shadow rounded-lg overflow-hidden">
      <div class="p-5">
        <h3 class="text-lg font-medium text-gray-900">Dashboard Interfaces</h3>
        <p class="mt-2 text-gray-600">
          Perfect for dashboards requiring both traditional pagination and infinite scroll views of the same data.
        </p>
      </div>
      <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
        <app-code-viewer [code]="dashboardExample"></app-code-viewer>
      </div>
    </div>
    
    <div class="bg-white shadow rounded-lg overflow-hidden">
      <div class="p-5">
        <h3 class="text-lg font-medium text-gray-900">API-Driven Applications</h3>
        <p class="mt-2 text-gray-600">
          Suitable for applications where data filtering and sorting is handled server-side.
        </p>
      </div>
      <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
        <app-code-viewer [code]="apiDrivenExample"></app-code-viewer>
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
          <h3 class="text-sm font-medium text-yellow-800">API Integration</h3>
          <div class="mt-2 text-sm text-yellow-700">
            <ul class="list-disc pl-5 space-y-1">
              <li>Ensure your API supports skip/take pagination</li>
              <li>Implement proper sorting parameters</li>
              <li>Handle errors gracefully with fallback data</li>
              <li>Consider caching strategies for better performance</li>
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
          <h3 class="text-sm font-medium text-purple-800">State Management</h3>
          <div class="mt-2 text-sm text-purple-700">
            <ul class="list-disc pl-5 space-y-1">
              <li>Separate state for each table mode</li>
              <li>Use signals for reactive updates</li>
              <li>Reset state appropriately when parameters change</li>
              <li>Consider debouncing rapid state changes</li>
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
        <h3 class="text-lg font-medium text-gray-900">Component Structure</h3>
        <p class="mt-2 text-gray-600">
          The component demonstrates two table implementations with shared configuration.
        </p>
      </div>
      <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
        <app-code-viewer [code]="structureExample"></app-code-viewer>
      </div>
    </div>
    
    <div class="bg-white shadow rounded-lg overflow-hidden">
      <div class="p-5">
        <h3 class="text-lg font-medium text-gray-900">Column Configuration</h3>
        <p class="mt-2 text-gray-600">
          Shared column configuration used by both table implementations.
        </p>
      </div>
      <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
        <app-code-viewer [code]="columnConfigExample"></app-code-viewer>
      </div>
    </div>
    
    <div class="bg-white shadow rounded-lg overflow-hidden">
      <div class="p-5">
        <h3 class="text-lg font-medium text-gray-900">Data Fetching</h3>
        <p class="mt-2 text-gray-600">
          Server-side data fetching implementation for both pagination modes.
        </p>
      </div>
      <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
        <app-code-viewer [code]="dataFetchingExample"></app-code-viewer>
      </div>
    </div>
    
    <div class="bg-white shadow rounded-lg overflow-hidden">
      <div class="p-5">
        <h3 class="text-lg font-medium text-gray-900">Event Handling</h3>
        <p class="mt-2 text-gray-600">
          Handling pagination and sort events for both table types.
        </p>
      </div>
      <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
        <app-code-viewer [code]="eventHandlingExample"></app-code-viewer>
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
  title = 'Basic Table (Server Side)';
  htmlCode = `
    <h2 class="text-gray-900 font-semibold mb-4">Paginator Base</h2>
      <lib-basic-server-table
        [tableData]="pageData()"
        [columns]="columnsConfig"
        [rowConfig]="rowConfig"
        [sortable]="true"
        [totalItemCount]="pageTotalItems()"
        (pageChanged)="onPageChange($event)"
        (sortChanged)="onPageSortChange($event)">
      </lib-basic-server-table>
    <h2 class="text-gray-900 font-semibold mb-4">Scroll Base</h2>
      <lib-basic-server-table
        [tableData]="scrollData()"
        [columns]="columnsConfig"
        [rowConfig]="rowConfig"
        [sortable]="true"
        [paginatorPaginationEnabled]="false"
        [scrollPaginationEnabled]="true"
        [pageSize]="scrollPageSize()"
        [totalItemCount]="scrollTotalItems()"
        (loadMoreData)="onScrollLoadMore($event)"
        (sortChanged)="onScrollSortChange($event)">
      </lib-basic-server-table>
  `;
  tsCode = `
    import {
      ChangeDetectionStrategy,
      Component,
      inject,
      signal,
      WritableSignal,
    } from '@angular/core';
    import { LibHttpService, LibDialogService, LibToastService } from '@saad-ihhn/ihhn-host-lib/services';
    import { LibBasicServerTableComponent } from '@saad-ihhn/ihhn-host-lib/lib-tables';
    import { TBasicTableColumn, BasicTableColumnTypeEnum, IBasicTableRowConfig, IBasicTableLoadMoreData, IBasicTablePageEvent } from '@saad-ihhn/ihhn-host-lib/utilis';
    import { Sort } from '@angular/material/sort';
    /**
     * LibBasicServerTableComponent - Demonstrates server-side paginated table implementations
     *
     * @description
     * This component showcases two approaches to server-side data loading:
     * 1. Traditional paginator-based table with page numbers
     * 2. Infinite scroll-based table that loads more data on scroll
     *
     * Both implementations share the same column configuration and support:
     * - Sorting
     * - Custom cell rendering
     * - Row and cell click handlers
     * - Action buttons with conditional states
     * - Dialog-based editing
     * - Server-side data fetching with error fallback to mock data
     */
    @Component({
      selector: 'app-server-side-table',
      standalone: true,
      imports: [LibBasicServerTableComponent],
      templateUrl: 'YourTemplateUrl',
      changeDetection: ChangeDetectionStrategy.OnPush,
    })
    export class ServerSideTableComponent {
      // Services
      private dialogService = inject<LibDialogService>(LibDialogService);
      private toastService = inject(LibToastService);
      private httpService = inject(LibHttpService);

      /**
       * Manages state and operations for the scroll-based table
       *
       * @remarks
       * Features:
       * - Infinite scroll loading
       * - Maintains cumulative data
       * - Supports sorting
       * - Falls back to mock data if API fails
       */
      scrollData: WritableSignal<users[]> = signal([]);
      scrollPageIndex = signal(0);
      scrollPageSize = signal(20);
      scrollTotalItems = signal(0);
      scrollSort = signal<Sort | undefined>(undefined);

      /**
       * Manages state and operations for the paginator-based table
       *
       * @remarks
       * Features:
       * - Traditional page-based navigation
       * - Supports sorting
       * - Falls back to mock data if API fails
       */
      // Paginator Table State
      pageData: WritableSignal<users[]> = signal([]);
      pageIndex = signal(0);
      pageSize = signal(10);
      pageTotalItems = signal(0);
      pageSort = signal<Sort | undefined>(undefined);

      constructor() {
        this.fetchPageData();
        this.fetchScrollData();
      }

      /**
       * Defines the columns configuration for both table implementations
       *
       * @remarks
       * Demonstrates various column features:
       * - Different column types (Number, Text, DateTime, Action)
       * - Custom text transformation
       * - Conditional cell styling
       * - Click handlers at cell level
       * - Action buttons with tooltips, visibility conditions, and disabled states
       */
      columnsConfig: TBasicTableColumn<users>[] = [
        {
          key: 'id',
          label: 'ID',
          type: BasicTableColumnTypeEnum.Number,
        },
        {
          key: 'name',
          label: 'Name',
          type: BasicTableColumnTypeEnum.Text,
          changeText: (data) => data.name.toUpperCase(),
          cellClass: (data) => (data.age > 30 ? 'text-red-500' : ''),
          onClick: (row) => this.toastService.info(\`\Clicked on name: \${row.name}\`\),
          onDblClick: (data) =>
            this.toastService.warning(\`\Double-clicked on name: \${data.name}\`\),
        },
        {
          key: 'age',
          label: 'Age',
          type: BasicTableColumnTypeEnum.Number,
        },
        {
          key: 'joined',
          label: 'Joined',
          type: BasicTableColumnTypeEnum.DateTime,
          dateTimeFormatter: 'dd MMM YYYY h:mm a',
        },
        {
          key: 'action',
          label: 'Actions',
          type: BasicTableColumnTypeEnum.Action,
          actions: [
            {
              icon: 'edit',
              iconType: 'name',
              tooltip: (row) => (row.age < 20 ? '' : \`\Edit \${row.name}\`\),
              isVisible: (row) => row.age > 24,
              isDisabled: (row) => row.age === 25,
              class: 'text-blue-500 hover:text-blue-700',
              onClick: (row) => this.openEditForm(row),
            },
            {
              icon: 'delete',
              iconType: 'name',
              onClick: (row) => this.deleteRow(row),
            },
          ],
        },
      ];
    \
      /**
       * Configures row-level behaviors and styling
       *
       * @remarks
       * Includes:
       * - Click and double-click handlers for entire rows
       * - Conditional row styling based on data
       * - Serial number column configuration
       */
      rowConfig: IBasicTableRowConfig<users> = {
        onClick: (row) => this.toastService.success(\`\Row clicked: \${row.name}\`\),
        onDblClick: (row) =>
          this.toastService.info(\`\Row double-clicked: \${row.name}\`\),
        getClass: (row) => (row.age > 30 ? '!bg-yellow-100' : ''),
        class: 'cursor-pointer hover:bg-gray-50',
        isSerialNo: true,
        serialNoLabel: 'Serial No',
      };

      /**
       * Deletes a row from both table implementations
       *
       * @param row - The row to delete
       * @description
       * Filters out the deleted row from both data signals
       * Shows toast notification
       */ deleteRow(row: users) {
        this.pageData.update((data) => data.filter((item) => item.id !== row.id));
        this.scrollData.update((data) => data.filter((item) => item.id !== row.id));
        this.toastService.success(\`\Deleted \${row.name}\`\);
      }

      openEditForm(row: users): void {
        this.dialogService
          .openDialog({
            component: TablePopupComponent,
            componentData: row,
            width: '400px',
            height: 'auto',
          })
          .subscribe((result) => {
            if (result?.action === 'update') {
              const updatedRow = result.data;
              this.pageData.update((data) =>
                data.map((item) =>
                  item.id === row.id ? { ...item, ...updatedRow } : item
                )
              );
              this.scrollData.update((data) =>
                data.map((item) =>
                  item.id === row.id ? { ...item, ...updatedRow } : item
                )
              );
              this.toastService.success(\`\Updated \${updatedRow.name}\`\);
            }
          });
      }

      /**
       * Fetches data for the scroll-based table
       *
       * @description
       * Makes HTTP request to server with current pagination and sort parameters
       * On error, falls back to mock data generation
       */ fetchScrollData(): void {
        const payload = {
          skip: this.scrollPageIndex(),
          take: this.scrollPageSize(),
          sort: this.scrollSort(),
        };

        this.httpService
          .post<{ count: number; data: users[] }>(
            'http://localhost:3010/api/table/getTableData',
            payload
          )
          .subscribe({
            next: (res) => {
              this.scrollData.update((data) => [...data, ...res.data]);
              this.scrollTotalItems.set(res.count);
            },
            error: (err) => {
              console.error('Error fetching scroll data:', err);
            },
          });
      }

      /**
       * Handles scroll load more events
       *
       * @param event - Contains pagination information
       * @see IBasicTableLoadMoreData
       */
      onScrollLoadMore(event: IBasicTableLoadMoreData) {
        this.scrollPageIndex.set(event.pageIndex);
        this.scrollPageSize.set(event.pageSize);
        this.fetchScrollData();
      }

      /**
       * Handles sort changes for scroll table
       *
       * @param sort - New sort configuration
       * @description
       * Resets pagination and fetches fresh sorted data
       */
      onScrollSortChange(sort: Sort) {
        this.scrollSort.set(sort);
        this.scrollPageIndex.set(0);
        this.scrollData.set([]);
        this.fetchScrollData();
      }

      /**
       * Fetches data for the paginator-based table
       *
       * @description
       * Makes HTTP request to server with current pagination and sort parameters
       * On error, falls back to mock data generation
       */ fetchPageData(): void {
        const payload = {
          skip: this.pageIndex(),
          take: this.pageSize(),
          sort: this.pageSort(),
        };

        this.httpService
          .post<{ count: number; data: users[] }>(
            'http://localhost:3010/api/table/getTableData',
            payload
          )
          .subscribe({
            next: (res) => {
              this.pageData.set(res.data);
              this.pageTotalItems.set(res.count);
            },
            error: (err) => {
              console.error('Error fetching page data:', err);
            },
          });
      }

      /**
       * Handles page change events
       *
       * @param event - Contains new pagination information
       * @see IBasicTablePageEvent
       */
      onPageChange(event: IBasicTablePageEvent) {
        this.pageIndex.set(event.pageIndex);
        this.pageSize.set(event.pageSize);
        this.fetchPageData();
      }

      /**
       * Handles sort changes for paginator table
       *
       * @param sort - New sort configuration
       * @description
       * Resets to first page and fetches fresh sorted data
       */
      onPageSortChange(sort: Sort) {
        this.pageSort.set(sort);
        this.pageIndex.set(0);
        this.fetchPageData();
      }
    }

    /**
     * Defines the structure of user data displayed in the tables
     */
    interface users {
      /** Unique identifier */
      id: number;
      /** Full name of user */
      name: string;
      /** Age in years */
      age: number;
      /** Date when user joined (optional) */
      joined?: Date;
    }`;

  enterpriseExample = `
    // Enterprise implementation example
    fetchEnterpriseData(params: any) {
      return this.httpService.post('api/enterprise', params)
        .pipe(
          catchError(() => of(this.generateMockData(100)))
    }`;

  dashboardExample = `
    // Dashboard implementation
    updateDashboard() {
      this.fetchPageData();
      this.fetchScrollData();
    }`;

  apiDrivenExample = `
    // API-driven implementation
    onSearch(params: SearchParams) {
    this.searchParams.set(params);
    this.pageIndex.set(0);
    this.fetchPageData();
    }`;

  structureExample = `
    // Component structure
    export class ServerSideTableComponent {
      // Paginator table state
      pageData = signal<users[]>([]);
      pageIndex = signal(0);
      
      // Scroll table state  
      scrollData = signal<users[]>([]);
      scrollPageIndex = signal(0);
    }`;

  columnConfigExample = `
    // Column configuration
    columnsConfig: TBasicTableColumn<users>[] = [
    {
      key: 'id',
      label: 'ID',
      type: BasicTableColumnTypeEnum.Number
    },
    {
      key: 'name',
      label: 'Name',
      type: BasicTableColumnTypeEnum.Text
    }
    ];`;

  dataFetchingExample = `
    // Data fetching implementation
    fetchData(tableType: 'page' | 'scroll') {
    const payload = {
    skip: tableType === 'page' ? this.pageIndex() : this.scrollPageIndex(),
    take: tableType === 'page' ? this.pageSize() : this.scrollPageSize(),
    sort: tableType === 'page' ? this.pageSort() : this.scrollSort()
    };

    return this.httpService.post('api/data', payload);
    }`;

  eventHandlingExample = `
    // Event handling
    onPageChange(event: IBasicTablePageEvent) {
    this.pageIndex.set(event.pageIndex);
    this.pageSize.set(event.pageSize);
    this.fetchPageData();
    }

    onScrollSortChange(sort: Sort) {
    this.scrollSort.set(sort);
    this.scrollPageIndex.set(0);
    this.fetchScrollData();
    }`;
}