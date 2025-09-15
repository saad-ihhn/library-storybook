import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { ClientSideTableComponent } from './client-side.component';
import { DocumentationComponent } from '../../../documentation/documentation.component';
import { CodeViewerComponent } from '../../../documentation/code-viewer/code-viewer.component';

@Component({
  selector: 'app-client-side-doc-documentation',
  standalone: true,
  imports: [DocumentationComponent, CodeViewerComponent],
  template: `
  <app-documentation 
  [publishedDate]="'2025-05-21'" 
  [title]="title"
  [htmlCode]="htmlCode"
  [component]="clientSideTableComponent" 
  [tsCode]="tsCode" 
  [overviewContent]="overviewContent"
  [useCasesContent]="useCasesContent" 
  [noteContent]="noteContent" 
  [otherContent]="otherContent">
</app-documentation>

<ng-template #overviewContent>
  <div class="space-y-4">
    <p class="text-on-surface">
      The <code class="bg-gray-100 px-1 py-0.5 rounded text-gray-800">&lt;lib-basic-client-table&gt;</code> component, part of the <strong>ihhn-host-lib</strong> is a high-performance Angular component designed to handle large datasets (up to 50,000 records) 
      with smooth client-side operations. It provides a rich set of features including sorting, pagination, custom rendering, 
      and row interactions while maintaining optimal performance.
    </p>
    
    <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
        <div class="flex">
            <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                        clip-rule="evenodd" />
                </svg>
            </div>
            <div class="ml-3">
                <h3 class="text-sm font-medium text-blue-800">Performance Note</h3>
                <div class="mt-2 text-sm text-blue-700">
                    <p>
                        This component efficiently handles up to 50,000 records client-side when using pagination.
                        For optimal performance:
                    </p>
                    <ul class="list-disc pl-5 mt-1 space-y-1">
                        <li>Always enable pagination for datasets exceeding 150 records</li>
                        <li>For datasets larger than 50,000 records, consider server-side implementation</li>
                        <li>Avoid loading more than 150 records without pagination</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    
    <h3 class="text-xl font-semibold mt-6">Key Features</h3>
    <ul class="list-disc pl-5 space-y-2 text-on-surface">
      <li>Client-side sorting and pagination</li>
      <li>Custom cell rendering and formatting</li>
      <li>Row and cell click handlers</li>
      <li>Conditional styling for rows and cells</li>
      <li>Action buttons with visibility/disabled conditions</li>
      <li>Inline editing via dialog popups</li>
      <li>Tooltips for truncated content</li>
      <li>Sticky columns for horizontal scrolling</li>
    </ul>
  </div>
</ng-template>

<ng-template #useCasesContent>
  <div class="space-y-6">    
    <div class="bg-white shadow rounded-lg overflow-hidden">
      <div class="p-5">
        <h3 class="text-lg font-medium text-gray-900">Data Management Applications</h3>
        <p class="mt-2 text-gray-600">
          Ideal for admin dashboards where users need to view, sort, and edit large datasets without server roundtrips.
        </p>
      </div>
      <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
        <app-code-viewer [code]="dataManagementExample"></app-code-viewer>
      </div>
    </div>
    
    <div class="bg-white shadow rounded-lg overflow-hidden">
      <div class="p-5">
        <h3 class="text-lg font-medium text-gray-900">Reporting Interfaces</h3>
        <p class="mt-2 text-gray-600">
          Perfect for displaying report data with client-side sorting and custom formatting capabilities.
        </p>
      </div>
      <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
        <app-code-viewer [code]="reportingExample"></app-code-viewer>
      </div>
    </div>
    
    <div class="bg-white shadow rounded-lg overflow-hidden">
      <div class="p-5">
        <h3 class="text-lg font-medium text-gray-900">CRUD Operations</h3>
        <p class="mt-2 text-gray-600">
          Supports full CRUD operations with inline editing and row deletion capabilities.
        </p>
      </div>
      <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
        <app-code-viewer [code]="crudExample"></app-code-viewer>
      </div>
    </div>
  </div>
</ng-template>

<ng-template #noteContent>
  <div class="space-y-4">    
    <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
      <div class="flex">
        <div class="flex-shrink-0">
          <svg class="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
          </svg>
        </div>
        <div class="ml-3">
          <h3 class="text-sm font-medium text-yellow-800">Performance Considerations</h3>
          <div class="mt-2 text-sm text-yellow-700">
            <p>
              For optimal performance with large datasets, ensure you:
            </p>
            <ul class="list-disc pl-5 mt-1 space-y-1">
              <li>Use OnPush change detection strategy</li>
              <li>Limit the number of visible columns</li>
              <li>Avoid complex cell templates</li>
              <li>Consider virtual scrolling for very large datasets</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <div class="bg-purple-50 border-l-4 border-purple-400 p-4">
      <div class="flex">
        <div class="flex-shrink-0">
          <svg class="h-5 w-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
          </svg>
        </div>
        <div class="ml-3">
          <h3 class="text-sm font-medium text-purple-800">Customization Tips</h3>
          <div class="mt-2 text-sm text-purple-700">
            <p>
              The table is highly customizable through:
            </p>
            <ul class="list-disc pl-5 mt-1 space-y-1">
              <li>Column configuration objects</li>
              <li>Row and cell class bindings</li>
              <li>Custom templates for complex cells</li>
              <li>Action button configurations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</ng-template>

<ng-template #otherContent>
  <div class="space-y-6">
    <h2 class="text-2xl font-bold">Implementation Details</h2>
    
    <div class="bg-white shadow rounded-lg overflow-hidden">
      <div class="p-5">
        <h3 class="text-lg font-medium text-gray-900">Component Setup</h3>
        <p class="mt-2 text-gray-600">
          Basic implementation requires importing the table component and configuring the columns and data.
        </p>
      </div>
      <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
        <app-code-viewer [code]="basicSetupExample"></app-code-viewer>
      </div>
    </div>
    
    <div class="bg-white shadow rounded-lg overflow-hidden">
      <div class="p-5">
        <h3 class="text-lg font-medium text-gray-900">Column Configuration</h3>
        <p class="mt-2 text-gray-600">
          Columns are defined with type-specific configurations for formatting and behavior.
        </p>
      </div>
      <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
        <app-code-viewer [code]="columnConfigExample"></app-code-viewer>
      </div>
    </div>
    
    <div class="bg-white shadow rounded-lg overflow-hidden">
      <div class="p-5">
        <h3 class="text-lg font-medium text-gray-900">Row Configuration</h3>
        <p class="mt-2 text-gray-600">
          Row-level behaviors and styling can be customized through the row configuration object.
        </p>
      </div>
      <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
        <app-code-viewer [code]="rowConfigExample"></app-code-viewer>
      </div>
    </div>
    
    <div class="bg-white shadow rounded-lg overflow-hidden">
      <div class="p-5">
        <h3 class="text-lg font-medium text-gray-900">Data Management</h3>
        <p class="mt-2 text-gray-600">
          The component works with signals for reactive data updates and provides edit/delete examples.
        </p>
      </div>
      <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
        <app-code-viewer [code]="dataManagementExample"></app-code-viewer>
      </div>
    </div>
  </div>
</ng-template>
`,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientSideDocComponent {
  @ViewChild('overviewContent', { static: true }) overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true }) useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;

  clientSideTableComponent = ClientSideTableComponent;
  publishedDate = '2025-05-21';
  title = 'Basic Table (Client-Side)';

  htmlCode = `
    <lib-basic-client-table
    [tableData]="allData()"
    [columns]="columnsConfig"
    [rowConfig]="rowConfig"
    [sortable]="true"
    [showFirstLastButtons]="true">
    </lib-basic-client-table>
  `;

  tsCode = `
    import {
      ChangeDetectionStrategy,
      Component,
      inject,
      signal,
    } from '@angular/core';
    import {
      BasicTableColumnTypeEnum,
      IBasicTableRowConfig,
      LibBasicClientTableComponent,
      LibDialogService,
      LibToastService,
      TBasicTableColumn,
    } from 'ihhn-host-lib';
    
    /**
     * ClientSideTableComponent - A demonstration component showcasing client-side data table functionality
     *
     * @storybook
     * - Shows a fully functional client-side data table with 50,000 mock records - with paginator
     * - Demonstrates features:
     *   - Sorting
     *   - Custom column rendering
     *   - Row and cell click handlers
     *   - Action buttons with visibility/disabled conditions
     *   - Inline editing via dialog
     *   - Row styling based on data
     *   - Custom serial numbers
     **/
    @Component({
      selector: 'app-client-side-table',
      imports: [LibBasicClientTableComponent],
      templateUrl: 'clientSideTable.component.html',
      styles: [''],
      changeDetection: ChangeDetectionStrategy.OnPush,
    })
    export class ClientSideTableComponent {
      //#region Dependency Injection
      /** Dialog service for showing edit form */
      private dialogService = inject<LibDialogService>(LibDialogService);
    
      /** Toast service for showing notifications */
      private toastService = inject(LibToastService);
      //#endregion
    
      //#region Table Configuration
      /**
       * Columns configuration for the data table
       *
       * @remarks
       * Demonstrates various column types and configurations:
       * - Text with custom formatting
       * - Number display
       * - DateTime with custom formatting
       * - Action column with conditional buttons
       */
      columnsConfig: TBasicTableColumn<users>[] = [
        {
        key: 'id',
        label: 'ID',
        type: BasicTableColumnTypeEnum.Number,
        commonClass: 'max-w-[8%]',
        stickyStart: true,
        },
        {
        key: 'name',
        label: 'Name',
        type: BasicTableColumnTypeEnum.Text,
        changeText: (row) => {
          return row.name.toUpperCase();
        },
        cellClass: (row) => {
          return row.age > 30 ? 'text-red-500' : '';
        },
        onClick: (row) => {
          this.toastService.info(\`Clicked on name: \${row.name}\`);
        },
        onDblClick: (row) => {
          this.toastService.warning(\`Double-clicked on name: \${row.name}\`);
        },
        tooltip: (row) => {
          return row.name.length > 150 ? row.name : '';
        },
        tooltipPosition: 'below',
        stickyStart: true,
        commonClass: 'max-w-[50%] text-three-ellipsis',
        },
        {
        key: 'age',
        label: 'Age',
        type: BasicTableColumnTypeEnum.Number,
        commonClass: 'max-w-[8%]',
        },
        {
        key: 'joined',
        label: 'Joined',
        type: BasicTableColumnTypeEnum.DateTime,
        dateTimeFormatter: 'dd MMM YYYY h:mm a',
        commonClass: 'max-w-[20%]',
        },
        {
        key: 'action',
        label: 'Actions',
        type: BasicTableColumnTypeEnum.Action,
        commonClass: 'max-w-[10%]',
        stickyEnd: true,
        actions: [
          {
            icon: 'edit',
            iconType: 'name',
            tooltip: (row) => {
            if (row.age < 20) {
              return '';
            }
            return \`Edit \${row.name}\`;
            },
            isVisible: (row) => row.age > 24,
            isDisabled: (row) => row.age == 25,
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
    
      /**
       * Row-level configuration for the data table
       *
       * @remarks
       * Configures:
       * - Click/double-click handlers for entire rows
       * - Conditional row styling
       * - Serial number display
       */
      rowConfig: IBasicTableRowConfig<users> = {
        onClick: (row) => {
        this.toastService.success(\`Row clicked: \${row.name}\`);
        },
        onDblClick: (row) => {
        this.toastService.info(\`Row double-clicked: \${row.name}\`);
        },
        getClass: (row) => (row.age > 30 ? '!bg-yellow-100' : ''),
        class: 'cursor-pointer',
        isSerialNo: true,
        serialNoClass: 'max-w-[8%] border-r border-gray-200',
      };
      //#endregion
    
      //#region Data Management
      /** Signal containing all table data */
      // Suggested Data To Handle Client Side 50,000 Records.
      // If you have a more than 50,000 records so suggested
      // to used a basic table server side grid with paginator.
      allData = signal<users[]>(this.generateMockData(50000));
    
      /**
       * Deletes a row from the table data
       * @param row - The row to delete
       */
      deleteRow(row: users) {
        this.allData.update((x) => x.filter((item) => item.id !== row.id));
      }
    
      /**
       * Opens the edit form dialog for a specific row
       * @param row - The row to edit
       */
      openEditForm(row: users): void {
        if (row) {
        this.dialogService
          .openDialog({
            component: 'YourEditPopupComponent',
            componentData: row,
            width: '400px',
            height: 'auto',
          })
          .subscribe((result) => {
            if (result?.action === 'update') {
            const updatedRow = result.data as users;
            this.allData.update((arr) =>
              arr.map((row) =>
                row.id == updatedRow.id ? { ...row, ...updatedRow } : row
              )
            );
            }
          });
        }
      }
      //#endregion
    
      //#region Mock Data Generation
      /**
       * Generates mock user data for demonstration purposes
       * @param count - Number of records to generate
       * @returns Array of mock user records
       *
       * @remarks
       * Generates realistic mock data with:
       * - Random names from common first/last name lists
       * - Ages between 18-48
       * - Join dates within the last 3 years
       */
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
        const randomFirst = firstNames[
        Math.floor(Math.random() * firstNames.length)
        ];
        const randomLast = lastNames[
        Math.floor(Math.random() * lastNames.length)
        ];
        const randomAge = Math.floor(Math.random() * 30) + 18;
        const daysAgo = Math.floor(Math.random() * 365 * 3);
    
        return {
          id: i + 1,
          name: \`\${randomFirst} \${randomLast}\`,
          age: randomAge,
          joined: new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000),
        } as users;
        });
      }
      //#endregion
    }
    
    /**
     * Interface defining the user data structure
     */
    interface users {
      /** Unique identifier */
      id: number;
      /** Full name */
      name: string;
      /** Age in years */
      age: number;
      /** Date when user joined */
      joined?: Date;
    }
  `;

  basicSetupExample = `
    @Component({
    selector: 'app-client-table-demo',
    standalone: true,
    imports: [LibBasicClientTableComponent],
    template: \`
        <lib-basic-client-table
            [tableData]="data()"
            [columns]="columns"
            [rowConfig]="rowConfig"
            [sortable]="true"
        ></lib-basic-client-table>
    \`,
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  export class ClientTableDemoComponent {
    data = signal<any[]>([]);
    columns: TBasicTableColumn<any>[] = [...];
    rowConfig: IBasicTableRowConfig<any> = {...};
  }`;

  columnConfigExample = `
    columns: TBasicTableColumn<any>[] = [
    {
      key: 'id',
      label: 'ID',
      type: BasicTableColumnTypeEnum.Number,
      commonClass: 'w-20'
    },
    {
      key: 'name',
      label: 'Name',
      type: BasicTableColumnTypeEnum.Text,
      changeText: (row) => row.name.toUpperCase(),
      cellClass: (row) => row.highlight ? 'bg-yellow-100' : ''
    },
    {
      key: 'action',
      label: 'Actions',
      type: BasicTableColumnTypeEnum.Action,
      actions: [
      {
        icon: 'edit',
        onClick: (row) => this.editRow(row)
      }
    ]
  }];`;

  rowConfigExample = `
    rowConfig: IBasicTableRowConfig<any> = {
      onClick: (row) => this.selectRow(row),
      onDblClick: (row) => this.openDetail(row),
      getClass: (row) => row.isActive ? 'bg-blue-50' : '',
      isSerialNo: true,
      serialNoLabel: '#'
  };`;

  dataManagementExample = `
    generateData(count: number) {
      return Array.from({length: count}, (_, i) => ({
        id: i + 1,
        name: \`Item \${i + 1}\`,
        value: Math.random() * 100
      }));
    }

    updateRow(updatedRow: any) {
      this.data.update(arr => arr.map(row => row.id === updatedRow.id ? updatedRow : row));
    }

    deleteRow(row: any) {
      this.data.update(arr => arr.filter(r => r.id !== row.id));
    }
  `;

  reportingExample = `
    reportColumns: TBasicTableColumn<any>[] = [
    {
      key: 'month',
      label: 'Month',
      type: BasicTableColumnTypeEnum.Text
    },
    {
      key: 'revenue',
      label: 'Revenue',
      type: BasicTableColumnTypeEnum.Number,
      numberFormat: '1.2-2',
      cellClass: (row) => row.revenue > 10000 ? 'text-green-600 font-bold' : ''
    },
    {
      key: 'growth',
      label: 'Growth %',
      type: BasicTableColumnTypeEnum.Number,
      numberFormat: '1.2-2',
      cellClass: (row) => row.growth > 0 ? 'text-green-600' : 'text-red-600'
    }
  ]`;

  crudExample = `
    export class UserTableComponent {
      users = signal<User[]>([]);
      columns: TBasicTableColumn<User>[] = [
      {
        key: 'action',
        label: 'Actions',
        type: BasicTableColumnTypeEnum.Action,
        actions: [
        {
          icon: 'edit',
          onClick: (user) => this.editUser(user)
        },
        {
          icon: 'delete',
          onClick: (user) => this.deleteUser(user)
        }
        ]
      }
      ];

    editUser(user: User) {
      this.dialog.open(UserFormComponent, { data: user }).afterClosed().subscribe(updatedUser => {
        if (updatedUser) {
          this.users.update(users => users.map(u => u.id === updatedUser.id ? updatedUser : u));
        }
      });
    }

    deleteUser(user: User) {
      this.users.update(users => users.filter(u => u.id !== user.id));
    }

    addUser() {
      this.dialog.open(UserFormComponent).afterClosed().subscribe(newUser => {
        if (newUser) {
          this.users.update(users => [...users, newUser]);
        }
      });
    }
  }`;
}