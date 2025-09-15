import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { ClientSideTableComponent } from './client-side.component';
import { DocumentationComponent } from '../../../documentation/documentation.component';
import { CodeViewerComponent } from '../../../documentation/code-viewer/code-viewer.component';

@Component({
  selector: 'app-client-side-doc-documentation',
  standalone: true,
  imports: [DocumentationComponent, CodeViewerComponent],
  template:`
  <app-documentation
  [publishedDate]="publishedDate"
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
      The <code class="bg-gray-100 px-1 py-0.5 rounded text-gray-800">&lt;lib-advanced-client-table&gt;</code> component, part of the <strong>ihhn-host-lib</strong>, is an advanced Angular table component designed for client-side data management. It extends the functionality of the basic table with features like inline editing via dialogs, sorting, custom column rendering, conditional row styling, and action buttons with dynamic visibility.
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
              This table provides advanced functionality, including:
            </p>
            <ul class="list-disc pl-5 mt-1 space-y-1">
              <li>Inline editing through dialogs with form validation</li>
              <li>Sortable columns for user-friendly data exploration</li>
              <li>Conditional action buttons and row styling</li>
              <li>Support for multiple input types (text, number, date, checkbox)</li>
              <li>Reactive data updates using Angular signals</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <h3 class="text-xl font-semibold text-on-surface mt-6">Advanced Features</h3>
    <ul class="list-disc pl-5 space-y-2 text-on-surface">
      <li>Dynamic column configurations with input validation</li>
      <li>Row-level click and double-click event handling</li>
      <li>Conditional action button visibility and disabled states</li>
      <li>Custom serial number rendering</li>
      <li>Optimized for client-side datasets up to 100 records</li>
    </ul>
  </div>
</ng-template>

<ng-template #useCasesContent>
  <div class="space-y-6">    
    <div class="bg-white shadow rounded-lg overflow-hidden">
      <div class="p-5">
        <h3 class="text-lg font-medium text-gray-900">Interactive Data Grids</h3>
        <p class="mt-2 text-gray-600">
          Ideal for applications requiring interactive tables with sorting, inline editing, and action buttons, such as user management dashboards.
        </p>
      </div>
      <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
        <app-code-viewer [code]="interactiveGridExample"></app-code-viewer>
      </div>
    </div>
    
    <div class="bg-white shadow rounded-lg overflow-hidden">
      <div class="p-5">
        <h3 class="text-lg font-medium text-gray-900">Client-Side Data Management</h3>
        <p class="mt-2 text-gray-600">
          Perfect for scenarios where small to medium datasets (up to 100 records) need to be managed client-side with reactive updates.
        </p>
      </div>
      <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
        <app-code-viewer [code]="clientSideExample"></app-code-viewer>
      </div>
    </div>
    
    <div class="bg-white shadow rounded-lg overflow-hidden">
      <div class="p-5">
        <h3 class="text-lg font-medium text-gray-900">Customizable Admin Panels</h3>
        <p class="mt-2 text-gray-600">
          Suitable for admin interfaces requiring custom row styling, action buttons, and dialog-based editing.
        </p>
      </div>
      <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
        <app-code-viewer [code]="adminPanelExample"></app-code-viewer>
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
          <h3 class="text-sm font-medium text-yellow-800">Configuration Considerations</h3>
          <div class="mt-2 text-sm text-yellow-700">
            <ul class="list-disc pl-5 space-y-1">
              <li>Ensure column input types match data types (e.g., Date for joined column)</li>
              <li>Define validation rules for all editable fields</li>
              <li>Test action button visibility and disabled conditions thoroughly</li>
              <li>Handle edge cases for dialog-based editing</li>
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
          <h3 class="text-sm font-medium text-purple-800">Performance Guidelines</h3>
          <div class="mt-2 text-sm text-purple-700">
            <ul class="list-disc pl-5 space-y-1">
              <li>Best for datasets up to 100 records</li>
              <li>Use server-side tables for larger datasets</li>
              <li>Avoid complex logic in row styling functions</li>
              <li>Optimize dialog rendering for frequent edits</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</ng-template>

<ng-template #otherContent>
  <div class="space-y-6">
    <h2 class="text-2xl font-bold text-on-surface">Implementation Details</h2>
    
    <div class="bg-white shadow rounded-lg overflow-hidden">
      <div class="p-5">
        <h3 class="text-lg font-medium text-gray-900">Component Setup</h3>
        <p class="mt-2 text-gray-600">
          Requires importing the <code>LibAdvancedClientTableComponent</code> and configuring columns, row settings, and data signals.
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
          Columns support multiple types (text, number, date, checkbox) with validation and action buttons.
        </p>
      </div>
      <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
        <app-code-viewer [code]="columnConfigExample"></app-code-viewer>
      </div>
    </div>
    
    <div class="bg-white shadow rounded-lg overflow-hidden">
      <div class="p-5">
        <h3 class="text-lg font-medium text-gray-900">Row Interactions</h3>
        <p class="mt-2 text-gray-600">
          Supports click, double-click, and conditional styling for rows, with serial number rendering.
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
          Uses signals for reactive updates and supports dialog-based editing and row deletion.
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
  @ViewChild('overviewContent', { static: true })
  overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true })
  useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;

  clientSideTableComponent = ClientSideTableComponent;
  publishedDate = '2025-05-21';
  title = 'Advanced Table (Client-Side)';

  htmlCode = `
    <lib-advanced-client-table
    [tableData]="allData()"
    [columns]="columnsConfig"
    [rowConfig]="rowConfig"
    [sortable]="true"
    [showFirstLastButtons]="true">
    </lib-advanced-client-table>
  `;

  tsCode = `
    import {
      ChangeDetectionStrategy,
      Component,
      inject,
      signal,
    } from '@angular/core';
    import { 
      AdvancedTableColumnTypeEnum, 
      AdvancedTableInputTypeEnum, 
      IAdvancedTableRowConfig, 
      TAdvancedTableColumn 
    } from '@saad-ihhn/ihhn-host-lib/utilis';
    import { LibDialogService, LibToastService } from '@saad-ihhn/ihhn-host-lib/services';
    import { DateFormat } from '@saad-ihhn/ihhn-host-lib/enums';
    import { LibAdvancedClientTableComponent } from '@saad-ihhn/ihhn-host-lib/lib-tables';
    
    /**
     * ClientSideTableComponent - A demonstration component showcasing client-side data table functionality
     * 
     * @storybook
     * - Shows a fully functional client-side data table with 100 mock records
     * - Demonstrates features:
     *   - Sorting
     *   - Custom column rendering
     *   - Row and cell click handlers
     *   - Action buttons with visibility/disabled conditions
     *   - Inline editing via dialog
     *   - Row styling based on data
     *   - Custom serial numbers
     */
    @Component({
      selector: 'app-client-side-table',
      imports: [LibAdvancedClientTableComponent],
      templateUrl: 'YourTemplateUrl',
      styles: [''],
      changeDetection: ChangeDetectionStrategy.OnPush
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
      columnsConfig: TAdvancedTableColumn<users>[] = [
        { 
    key: 'id', 
    label: 'ID', 
          type: AdvancedTableColumnTypeEnum.Number,
          commonClass: 'max-w-[8%]'
        },
        {
          key: 'name',
          label: 'Name',
          type: AdvancedTableColumnTypeEnum.Input,
          inputType: AdvancedTableInputTypeEnum.Text,
          required: true,
          maxLength: 150,
          minLength: 3,
          commonClass: 'max-w-[50%]'
        },
        { 
          key: 'age', 
          label: 'Age', 
          type: AdvancedTableColumnTypeEnum.Input,
          inputType: AdvancedTableInputTypeEnum.Number,
          required: true,
          max: 120,
          commonClass: 'max-w-[8%]'
        },
        {
          key: 'joined',
          label: 'Joined',
          type: AdvancedTableColumnTypeEnum.Input,
          inputType: AdvancedTableInputTypeEnum.Date,
          required: true,
          commonClass: 'max-w-[20%]'
        },
        {
          key: 'active',
          label: 'Active',
          type: AdvancedTableColumnTypeEnum.Input,
          inputType: AdvancedTableInputTypeEnum.CheckBox,
          buttonCollapsable: true,
          required: true,
          commonClass: 'max-w-[8%]'
        },
        {
          key: 'action',
          label: 'Actions',
          type: AdvancedTableColumnTypeEnum.Action,
          commonClass: 'max-w-[10%]',
          actions: [
            {
              icon: 'delete',
              iconType: 'name',
              isVisible: (row) => row.age > 24,
              isDisabled: (row) => row.age == 25,
              onClick: (row) => this.deleteRow(row)
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
      rowConfig: IAdvancedTableRowConfig<users> = {
        onClick: (row) => {
          this.toastService.success(\`\Row clicked: \${row.name}\`\);
        },
        onDblClick: (row) => {
          this.toastService.info(\`\Row double-clicked: \${row.name}\`\);
        },
        getClass: (row) => (row.age > 30 ? '!bg-yellow-100' : ''),
        class: 'cursor-pointer',
        isSerialNo: true,
        serialNoClass: 'max-w-[8%] border-r border-gray-200'
      };
      //#endregion
    
      //#region Data Management
      /** Signal containing all table data */
      // Suggested Data To Handle Client Side 100 Records If you have a more than 100 records so suggested to used a basic table server side grid.
      allData = signal<users[]>(this.generateMockData(100));
    
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
                this.allData.update((arr) => arr.map((row) => row.id == updatedRow.id ? { ...row, ...updatedRow } : row));
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
          'Emma', 'Liam', 'Olivia', 'Noah', 'Ava',
          'William', 'Sophia', 'James', 'Isabella', 'Oliver',
        ];
        const lastNames = [
          'Smith', 'Johnson', 'Williams', 'Brown', 'Jones',
          'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez',
        ];
    
        return Array.from({ length: count }, (_, i) => {
          const randomFirst = firstNames[Math.floor(Math.random() * firstNames.length)];
          const randomLast = lastNames[Math.floor(Math.random() * lastNames.length)];
          const randomAge = Math.floor(Math.random() * 30) + 18;
          const daysAgo = Math.floor(Math.random() * 365 * 3);
          
          return {
            id: i + 1,
            name: \`\${randomFirst} \${randomLast}\`\,
            age: randomAge,
            joined: new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000),
            active: true
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
      active: boolean;
    }
  `;

  interactiveGridExample = `
    <!-- Example: Using ClientSideTableComponent in an interactive grid -->
    <div class="rounded-xl shadow border border-gray-200 bg-white p-4">
      <lib-advanced-client-table
        [tableData]="usersData()"
        [columns]="columnsConfig"
        [rowConfig]="rowConfig"
        [sortable]="true"
        [showFirstLastButtons]="true">
      </lib-advanced-client-table>
    </div>

    <!-- TypeScript -->
    import { Component, signal } from '@angular/core';
    import { 
      AdvancedTableColumnTypeEnum, 
      AdvancedTableInputTypeEnum, 
      IAdvancedTableRowConfig, 
      TAdvancedTableColumn 
    } from '@saad-ihhn/ihhn-host-lib/utilis';
    import { LibDialogService, LibToastService } from '@saad-ihhn/ihhn-host-lib/services';
    import { DateFormat } from '@saad-ihhn/ihhn-host-lib/enums';
    import { LibAdvancedClientTableComponent } from '@saad-ihhn/ihhn-host-lib/lib-tables';

    @Component({
      selector: 'app-interactive-grid',
      template: '...', // Above HTML
      imports: [LibAdvancedClientTableComponent],
    })
    export class InteractiveGridComponent {
      usersData = signal([
        { id: 1, name: 'John Doe', age: 25, joined: new Date('2023-01-15'), active: true },
        { id: 2, name: 'Jane Smith', age: 30, joined: new Date('2022-06-20'), active: false },
      ]);

      columnsConfig: TAdvancedTableColumn<any>[] = [
        { key: 'id', label: 'ID', type: AdvancedTableColumnTypeEnum.Number },
        { key: 'name', label: 'Name', type: AdvancedTableColumnTypeEnum.Input, inputType: AdvancedTableInputTypeEnum.Text, required: true },
        { key: 'age', label: 'Age', type: AdvancedTableColumnTypeEnum.Input, inputType: AdvancedTableInputTypeEnum.Number },
        { key: 'joined', label: 'Joined', type: AdvancedTableColumnTypeEnum.Input, inputType: AdvancedTableInputTypeEnum.Date },
        { key: 'active', label: 'Active', type: AdvancedTableColumnTypeEnum.Input, inputType: AdvancedTableInputTypeEnum.CheckBox },
      ];

      rowConfig = {
        onClick: (row) => console.log('Row clicked:', row.name),
        onDblClick: (row) => console.log('Row double-clicked:', row.name),
        isSerialNo: true,
      };
    }
  `;

  clientSideExample = `
    <!-- Example: Client-side data management with reactive updates -->
    <div class="container mx-auto p-4">
      <lib-advanced-client-table
        [tableData]="allData()"
        [columns]="columnsConfig"
        [rowConfig]="rowConfig"
        [sortable]="true">
      </lib-advanced-client-table>
    </div>

    <!-- TypeScript -->
    import { Component, signal } from '@angular/core';
    import { 
      AdvancedTableColumnTypeEnum, 
      AdvancedTableInputTypeEnum, 
      IAdvancedTableRowConfig, 
      TAdvancedTableColumn 
    } from '@saad-ihhn/ihhn-host-lib/utilis';
    import { LibDialogService, LibToastService } from '@saad-ihhn/ihhn-host-lib/services';
    import { DateFormat } from '@saad-ihhn/ihhn-host-lib/enums';
    import { LibAdvancedClientTableComponent } from '@saad-ihhn/ihhn-host-lib/lib-tables';

    interface User {
      id: number;
      name: string;
      age: number;
      joined: Date;
      active: boolean;
    }

    @Component({
      selector: 'app-client-side-example',
      template: '...', // Above HTML
      imports: [LibAdvancedClientTableComponent],
    })
    export class ClientSideExampleComponent {
      allData = signal<User[]>([
        { id: 1, name: 'Alice Johnson', age: 28, joined: new Date('2023-03-10'), active: true },
        { id: 2, name: 'Bob Williams', age: 35, joined: new Date('2022-09-05'), active: false },
      ]);

      columnsConfig: TAdvancedTableColumn<User>[] = [
        { key: 'id', label: 'ID', type: AdvancedTableColumnTypeEnum.Number },
        { key: 'name', label: 'Name', type: AdvancedTableColumnTypeEnum.Input, inputType: AdvancedTableInputTypeEnum.Text, required: true },
        { key: 'age', label: 'Age', type: AdvancedTableColumnTypeEnum.Input, inputType: AdvancedTableInputTypeEnum.Number, max: 120 },
        { key: 'joined', label: 'Joined', type: AdvancedTableColumnTypeEnum.Input, inputType: AdvancedTableInputTypeEnum.Date },
        { key: 'active', label: 'Active', type: AdvancedTableColumnTypeEnum.Input, inputType: AdvancedTableInputTypeEnum.CheckBox },
      ];

      rowConfig = {
        isSerialNo: true,
        getClass: (row: User) => (row.active ? 'bg-green-100' : 'bg-red-100'),
      };

      updateRow(updatedRow: User) {
        this.allData.update((data) => data.map((row) => row.id === updatedRow.id ? updatedRow : row));
      }
    }
  `;

  adminPanelExample = `
    <!-- Example: Admin panel with action buttons and dialog editing -->
    <div class="p-6 bg-gray-100">
      <lib-advanced-client-table
        [tableData]="adminData()"
        [columns]="columnsConfig"
        [rowConfig]="rowConfig"
        [sortable]="true"
        [showFirstLastButtons]="true">
      </lib-advanced-client-table>
    </div>

    <!-- TypeScript -->
    import { Component, inject, signal } from '@angular/core';
    import { 
      AdvancedTableColumnTypeEnum, 
      AdvancedTableInputTypeEnum, 
      IAdvancedTableRowConfig, 
      TAdvancedTableColumn 
    } from '@saad-ihhn/ihhn-host-lib/utilis';
    import { LibDialogService, LibToastService } from '@saad-ihhn/ihhn-host-lib/services';
    import { DateFormat } from '@saad-ihhn/ihhn-host-lib/enums';
    import { LibAdvancedClientTableComponent } from '@saad-ihhn/ihhn-host-lib/lib-tables';
    import { TablePopupComponent } from './table-popup.component';

    interface User {
      id: number;
      name: string;
      age: number;
      joined: Date;
      active: boolean;
    }

    @Component({
      selector: 'app-admin-panel',
      template: '...', // Above HTML
      imports: [LibAdvancedClientTableComponent],
    })
    export class AdminPanelComponent {
      private dialogService = inject(LibDialogService);
      private toastService = inject(LibToastService);

      adminData = signal<User[]>([
        { id: 1, name: 'Emma Davis', age: 40, joined: new Date('2021-12-01'), active: true },
        { id: 2, name: 'Liam Brown', age: 22, joined: new Date('2023-07-15'), active: false },
      ]);

      columnsConfig: TAdvancedTableColumn<User>[] = [
        { key: 'id', label: 'ID', type: AdvancedTableColumnTypeEnum.Number },
        { key: 'name', label: 'Name', type: AdvancedTableColumnTypeEnum.Input, inputType: AdvancedTableInputTypeEnum.Text, required: true },
        { key: 'age', label: 'Age', type: AdvancedTableColumnTypeEnum.Input, inputType: AdvancedTableInputTypeEnum.Number },
        { key: 'joined', label: 'Joined', type: AdvancedTableColumnTypeEnum.Input, inputType: AdvancedTableInputTypeEnum.Date },
        {
          key: 'action',
          label: 'Actions',
          type: AdvancedTableColumnTypeEnum.Action,
          actions: [
            {
              icon: 'edit',
              iconType: 'name',
              isVisible: (row) => row.active,
              onClick: (row) => this.openEditForm(row),
            },
            {
              icon: 'delete',
              iconType: 'name',
              isVisible: (row) => row.age > 20,
              onClick: (row) => this.deleteRow(row),
            },
          ],
        },
      ];

      rowConfig = {
        onClick: (row: User) => this.toastService.success(\`Selected: \${row.name}\`),
        isSerialNo: true,
      };

      openEditForm(row: User) {
        this.dialogService
          .openDialog({
            component: TablePopupComponent,
            componentData: row,
            width: '400px',
            height: 'auto',
          })
          .subscribe((result) => {
            if (result?.action === 'update') {
              this.adminData.update((data) => data.map((r) => r.id === result.data.id ? result.data : r));
            }
          });
      }

      deleteRow(row: User) {
        this.adminData.update((data) => data.filter((r) => r.id !== row.id));
        this.toastService.success('Row deleted');
      }
    }
  `;

  basicSetupExample = `
    <!-- Example: Basic setup of ClientSideTableComponent -->
    <lib-advanced-client-table
      [tableData]="data()"
      [columns]="columns"
      [rowConfig]="rowConfig">
    </lib-advanced-client-table>

    <!-- TypeScript -->
    import { Component, signal } from '@angular/core';
    import { 
      AdvancedTableColumnTypeEnum, 
      AdvancedTableInputTypeEnum, 
      IAdvancedTableRowConfig, 
      TAdvancedTableColumn 
    } from '@saad-ihhn/ihhn-host-lib/utilis';
    import { LibDialogService, LibToastService } from '@saad-ihhn/ihhn-host-lib/services';
    import { DateFormat } from '@saad-ihhn/ihhn-host-lib/enums';
    import { LibAdvancedClientTableComponent } from '@saad-ihhn/ihhn-host-lib/lib-tables';

    @Component({
      selector: 'app-basic-table',
      template: '...', // Above HTML
      imports: [LibAdvancedClientTableComponent],
    })
    export class BasicTableComponent {
      data = signal([
        { id: 1, name: 'John Doe', age: 25 },
        { id: 2, name: 'Jane Smith', age: 30 },
      ]);

      columns: TAdvancedTableColumn<any>[] = [
        { key: 'id', label: 'ID', type: AdvancedTableColumnTypeEnum.Number },
        { key: 'name', label: 'Name', type: AdvancedTableColumnTypeEnum.Input, inputType: AdvancedTableInputTypeEnum.Text },
        { key: 'age', label: 'Age', type: AdvancedTableColumnTypeEnum.Input, inputType: AdvancedTableInputTypeEnum.Number },
      ];

      rowConfig = {
        isSerialNo: true,
      };
    }
  `;

  columnConfigExample = `
    <!-- Example: Configuring columns with validation and actions -->
    import { 
      AdvancedTableColumnTypeEnum, 
      AdvancedTableInputTypeEnum, 
      IAdvancedTableRowConfig, 
      TAdvancedTableColumn 
    } from '@saad-ihhn/ihhn-host-lib/utilis';
    import { LibDialogService, LibToastService } from '@saad-ihhn/ihhn-host-lib/services';
    import { DateFormat } from '@saad-ihhn/ihhn-host-lib/enums';
    import { LibAdvancedClientTableComponent } from '@saad-ihhn/ihhn-host-lib/lib-tables';
    export class ColumnConfigExample {
      columnsConfig: TAdvancedTableColumn<any>[] = [
        {
          key: 'id',
          label: 'ID',
          type: AdvancedTableColumnTypeEnum.Number,
          commonClass: 'max-w-[10%]',
        },
        {
          key: 'name',
          label: 'Name',
          type: AdvancedTableColumnTypeEnum.Input,
          inputType: AdvancedTableInputTypeEnum.Text,
          required: true,
          maxLength: 100,
          minLength: 2,
          commonClass: 'max-w-[40%]',
        },
        {
          key: 'age',
          label: 'Age',
          type: AdvancedTableColumnTypeEnum.Input,
          inputType: AdvancedTableInputTypeEnum.Number,
          required: true,
          max: 150,
          min: 0,
          commonClass: 'max-w-[15%]',
        },
        {
          key: 'joined',
          label: 'Joined',
          type: AdvancedTableColumnTypeEnum.Input,
          inputType: AdvancedTableInputTypeEnum.Date,
          required: true,
          commonClass: 'max-w-[20%]',
        },
        {
          key: 'action',
          label: 'Actions',
          type: AdvancedTableColumnTypeEnum.Action,
          commonClass: 'max-w-[15%]',
          actions: [
            {
              icon: 'edit',
              iconType: 'name',
              isVisible: (row) => row.active,
              onClick: (row) => console.log('Edit:', row),
            },
            {
              icon: 'delete',
              iconType: 'name',
              isVisible: (row) => row.age > 18,
              onClick: (row) => console.log('Delete:', row),
            },
          ],
        },
      ];
    }
  `;

  rowConfigExample = `
    <!-- Example: Configuring row interactions and styling -->
    import { IAdvancedTableRowConfig } from 'ihhn-host-lib';
    import { IAdvancedTableRowConfig } from '@saad-ihhn/ihhn-host-lib/utilis';

    export class RowConfigExample {
      rowConfig: IAdvancedTableRowConfig<any> = {
        onClick: (row) => console.log(\`Row clicked: \${row.name}\`),
        onDblClick: (row) => console.log(\`Row double-clicked: \${row.name}\`),
        getClass: (row) => (row.age > 30 ? 'bg-yellow-100' : ''),
        class: 'cursor-pointer',
        isSerialNo: true,
        serialNoClass: 'max-w-[10%] border-r border-gray-200',
      };
    }
  `;

  dataManagementExample = `
    <!-- Example: Reactive data management with signals -->
    import { Component, signal, inject } from '@angular/core';
    import { 
      AdvancedTableColumnTypeEnum, 
      AdvancedTableInputTypeEnum, 
      IAdvancedTableRowConfig, 
      TAdvancedTableColumn 
    } from '@saad-ihhn/ihhn-host-lib/utilis';
    import { LibDialogService, LibToastService } from '@saad-ihhn/ihhn-host-lib/services';
    import { DateFormat } from '@saad-ihhn/ihhn-host-lib/enums';
    import { LibAdvancedClientTableComponent } from '@saad-ihhn/ihhn-host-lib/lib-tables';
    import { TablePopupComponent } from './table-popup.component';

    interface User {
      id: number;
      name: string;
      age: number;
      joined: Date;
      active: boolean;
    }

    @Component({
      selector: 'app-data-management',
      template: \`
        <lib-advanced-client-table
          [tableData]="allData()"
          [columns]="columnsConfig"
          [rowConfig]="rowConfig">
        </lib-advanced-client-table>
      \`,
      imports: [LibAdvancedClientTableComponent],
    })
    export class DataManagementExampleComponent {
      private dialogService = inject(LibDialogService);

      allData = signal<User[]>([
        { id: 1, name: 'Alice Johnson', age: 28, joined: new Date('2023-03-10'), active: true },
        { id: 2, name: 'Bob Williams', age: 35, joined: new Date('2022-09-05'), active: false },
      ]);

      columnsConfig: TAdvancedTableColumn<User>[] = [
        { key: 'id', label: 'ID', type: AdvancedTableColumnTypeEnum.Number },
        { key: 'name', label: 'Name', type: AdvancedTableColumnTypeEnum.Input, inputType: AdvancedTableInputTypeEnum.Text },
        { key: 'age', label: 'Age', type: AdvancedTableColumnTypeEnum.Input, inputType: AdvancedTableInputTypeEnum.Number },
        { key: 'joined', label: 'Joined', type: AdvancedTableColumnTypeEnum.Input, inputType: AdvancedTableInputTypeEnum.Date },
        {
          key: 'action',
          label: 'Actions',
          type: AdvancedTableColumnTypeEnum.Action,
          actions: [
            {
              icon: 'edit',
              iconType: 'name',
              onClick: (row) => this.openEditForm(row),
            },
          ],
        },
      ];

      rowConfig = {
        isSerialNo: true,
      };

      openEditForm(row: User) {
        this.dialogService
          .openDialog({
            component: TablePopupComponent,
            componentData: row,
            width: '400px',
            height: 'auto',
          })
          .subscribe((result) => {
            if (result?.action === 'update') {
              this.allData.update((data) => data.map((r) => r.id === result.data.id ? result.data : r));
            }
          });
      }

      deleteRow(row: User) {
        this.allData.update((data) => data.filter((r) => r.id !== row.id));
      }
    }
  `;
}