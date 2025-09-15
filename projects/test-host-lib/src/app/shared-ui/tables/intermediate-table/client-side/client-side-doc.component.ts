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
      The <code class="bg-gray-100 px-1 py-0.5 rounded text-gray-800">&lt;lib-intermediate-client-table&gt;</code> component, part of the <strong>ihhn-host-lib</strong> is a high-performance Angular component  builds upon the basic table with enhanced inline editing capabilities, 
      form validation, and more sophisticated input handling. It supports all basic table features while 
      adding direct cell editing with various input types.
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
              This table extends basic functionality with:
            </p>
            <ul class="list-disc pl-5 mt-1 space-y-1">
              <li>Inline editing with various input types</li>
              <li>Built-in form validation</li>
              <li>Enhanced action handling</li>
              <li>More sophisticated column configurations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <h3 class="text-xl font-semibold text-on-surface mt-6">Enhanced Features</h3>
    <ul class="list-disc pl-5 space-y-2 text-on-surface">
      <li>Multiple input types (text, number, date, etc.)</li>
      <li>Form validation (required, min/max length, date ranges)</li>
      <li>Conditional action buttons with improved visibility controls</li>
      <li>Better sticky column implementation</li>
      <li>Enhanced performance for medium-sized datasets</li>
    </ul>
  </div>
</ng-template>

<ng-template #useCasesContent>
  <div class="space-y-6">    
    <div class="bg-white shadow rounded-lg overflow-hidden">
      <div class="p-5">
        <h3 class="text-lg font-medium text-gray-900">Data Editing Applications</h3>
        <p class="mt-2 text-gray-600">
          Perfect for applications requiring frequent inline editing with validation, such as admin panels or data management systems.
        </p>
      </div>
      <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
        <app-code-viewer [code]="editingExample"></app-code-viewer>
      </div>
    </div>
    
    <div class="bg-white shadow rounded-lg overflow-hidden">
      <div class="p-5">
        <h3 class="text-lg font-medium text-gray-900">Form-heavy Interfaces</h3>
        <p class="mt-2 text-gray-600">
          Ideal for scenarios where table cells need to function as form inputs with validation rules.
        </p>
      </div>
      <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
        <app-code-viewer [code]="formExample"></app-code-viewer>
      </div>
    </div>
    
    <div class="bg-white shadow rounded-lg overflow-hidden">
      <div class="p-5">
        <h3 class="text-lg font-medium text-gray-900">Complex Data Grids</h3>
        <p class="mt-2 text-gray-600">
          Suitable for grids requiring a mix of display and editable cells with different input types.
        </p>
      </div>
      <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
        <app-code-viewer [code]="gridExample"></app-code-viewer>
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
          <h3 class="text-sm font-medium text-yellow-800">Validation Considerations</h3>
          <div class="mt-2 text-sm text-yellow-700">
            <ul class="list-disc pl-5 space-y-1">
              <li>Always specify input types for editable columns</li>
              <li>Set appropriate validation rules (required, min/max, etc.)</li>
              <li>Test edge cases for date and number inputs</li>
              <li>Consider UX for validation error displays</li>
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
              <li>Optimal for datasets up to 500-1000 records</li>
              <li>Use pagination for larger datasets</li>
              <li>Limit complex cell templates in editable columns</li>
              <li>Consider virtual scrolling for very large datasets</li>
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
          Basic implementation requires importing the intermediate table component and configuring columns with input specifications.
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
          Columns are defined with input type specifications and validation rules.
        </p>
      </div>
      <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
        <app-code-viewer [code]="columnConfigExample"></app-code-viewer>
      </div>
    </div>
    
    <div class="bg-white shadow rounded-lg overflow-hidden">
      <div class="p-5">
        <h3 class="text-lg font-medium text-gray-900">Input Types</h3>
        <p class="mt-2 text-gray-600">
          Various input types can be specified for editable columns.
        </p>
      </div>
      <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
        <app-code-viewer [code]="inputTypesExample"></app-code-viewer>
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
  @ViewChild('overviewContent', { static: true })
  overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true })
  useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;

  // Existing properties
  DataImplementation: string = `// In your component
editRow(row: User) {
  this.dialogService.open(EditUserDialog, { data: row })
    .afterClosed()
    .subscribe(updated => {
      if (updated) {
        this.data.update(users => 
          users.map(u => u.id === updated.id ? updated : u)
        );
      }
    });
}`;

  clientSideTableComponent = ClientSideTableComponent;
  publishedDate = '2025-05-21';
  title = 'Intermediate Table (Client-Side)';

  htmlCode = `
    <lib-intermediate-client-table
    [tableData]="allData()"
    [columns]="columnsConfig"
    [rowConfig]="rowConfig"
    [sortable]="true"
    [showFirstLastButtons]="true">
    </lib-intermediate-client-table>
  `;

  tsCode = `
    import {
      ChangeDetectionStrategy,
      Component,
      inject,
      signal,
    } from '@angular/core';
    import { LibMatFlatButtonComponent } from '@saad-ihhn/ihhn-host-lib/lib-buttons';
    import { LibDialogService, LibToastService } from '@saad-ihhn/ihhn-host-lib/services';
    import { TablePopupComponent } from '../../table-popup/table-popup.component';
    import { TIntermediateTableColumn, IntermediateTableColumnTypeEnum, IntermediateTableInputTypeEnum, IIntermediateTableRowConfig } from '@saad-ihhn/ihhn-host-lib/utilis';
    import { LibIntermediateClientTableComponent } from "@saad-ihhn/ihhn-host-lib/lib-tables";
    import { LibTextFieldComponent, LibNumberComponent, LibDatePickerComponent } from '@saad-ihhn/ihhn-host-lib/lib-forms';

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
      imports: [LibIntermediateClientTableComponent],
      templateUrl: 'YourTemplatePath',
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
      columnsConfig: TIntermediateTableColumn<users>[] = [
        { 
          key: 'id', 
          label: 'ID', 
          type: IntermediateTableColumnTypeEnum.Number,
          commonClass: 'max-w-[8%]',
          stickyStart: true
        },
        {
          key: 'name',
          label: 'Name',
          type: IntermediateTableColumnTypeEnum.Input,
          inputType: IntermediateTableInputTypeEnum.Text,
          required: true,
          maxLength: 10,
          minLength: 3,
          commonClass: 'max-w-[50%]',
        },
        { 
          key: 'age', 
          label: 'Age', 
          type: IntermediateTableColumnTypeEnum.Input,
          inputType: IntermediateTableInputTypeEnum.Number,
          required: true,
          commonClass: 'max-w-[8%]',
        },
        {
          key: 'joined',
          label: 'Joined',
          type: IntermediateTableColumnTypeEnum.Input,
          inputType: IntermediateTableInputTypeEnum.Date,
          required: true,
          min: new Date(Date.now() - 24 * 60 * 60 * 1000),
          max: new Date(),
          commonClass: 'max-w-[20%]',
        },
        {
          key: 'action',
          label: 'Actions',
          type: IntermediateTableColumnTypeEnum.Action,
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
                return \`\Edit \${row.name}\`\;
              },
              isVisible: (row) => row.age > 24,
              isDisabled: (row) => row.age == 25,
              onClick: (row) => this.openEditForm(row)
            },
            {
              icon: 'delete',
              iconType: 'name',
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
      rowConfig: IBasicTableRowConfig<users> = {
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
              component: TablePopupComponent,
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
    }`;

basicSetupExample = `
@Component({
  selector: 'app-intermediate-table-demo',
  standalone: true,
  imports: [LibIntermediateClientTableComponent],
  template: \`
    <lib-intermediate-client-table
      [tableData]="data()"
      [columns]="columns"
      [rowConfig]="rowConfig"
      [sortable]="true"
    ></lib-intermediate-client-table>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntermediateTableDemoComponent {
  data = signal<any[]>([]);
  columns: TIntermediateTableColumn<any>[] = [...];
  rowConfig: IBasicTableRowConfig<any> = {...};
}
`;

columnConfigExample = `
columns: TIntermediateTableColumn<any>[] = [
  {
    key: 'name',
    label: 'Name',
    type: IntermediateTableColumnTypeEnum.Input,
    inputType: IntermediateTableInputTypeEnum.Text,
    required: true,
    maxLength: 50
  },
  {
    key: 'age',
    label: 'Age',
    type: IntermediateTableColumnTypeEnum.Input,
    inputType: IntermediateTableInputTypeEnum.Number,
    min: 18,
    max: 99
  },
  {
    key: 'joinDate',
    label: 'Join Date',
    type: IntermediateTableColumnTypeEnum.Input,
    inputType: IntermediateTableInputTypeEnum.Date,
    min: new Date(2020, 0, 1),
    max: new Date()
  }
];
`;

inputTypesExample = `
// Supported input types
enum IntermediateTableInputTypeEnum {
  Text = 'text',
  Number = 'number',
  Date = 'date',
  Email = 'email',
  Password = 'password',
  Checkbox = 'checkbox',
  Radio = 'radio'
}

// Example usage
{
  key: 'email',
  label: 'Email',
  type: IntermediateTableColumnTypeEnum.Input,
  inputType: IntermediateTableInputTypeEnum.Email,
  pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'
}
`;

dataManagementExample = `
// Handling inline edits
onCellEdit(updatedRow: any) {
  this.data.update(arr => 
    arr.map(row => row.id === updatedRow.id ? updatedRow : row)
  );
}

// Delete row with confirmation
deleteRow(row: any) {
  this.dialogService.confirm('Are you sure?').subscribe(confirmed => {
    if (confirmed) {
      this.data.update(arr => arr.filter(r => r.id !== row.id));
    }
  });
}
`;

editingExample = `
// Complex editable column example
{
  key: 'status',
  label: 'Status',
  type: IntermediateTableColumnTypeEnum.Input,
  inputType: IntermediateTableInputTypeEnum.Select,
  options: [
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
    { value: 'pending', label: 'Pending' }
  ],
  onChange: (value, row) => {
    this.logStatusChange(row.id, value);
  }
}
`;

formExample = `
// Form validation example
{
  key: 'password',
  label: 'Password',
  type: IntermediateTableColumnTypeEnum.Input,
  inputType: IntermediateTableInputTypeEnum.Password,
  required: true,
  minLength: 8,
  pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$',
  validationMessages: {
    required: 'Password is required',
    minLength: 'Must be at least 8 characters',
    pattern: 'Must contain uppercase, lowercase and number'
  }
}
`;

gridExample = `
// Mixed display and editable columns
columns: TIntermediateTableColumn<any>[] = [
  {
    key: 'id',
    label: 'ID',
    type: IntermediateTableColumnTypeEnum.Number,
    editable: false
  },
  {
    key: 'name',
    label: 'Name',
    type: IntermediateTableColumnTypeEnum.Input,
    inputType: IntermediateTableInputTypeEnum.Text,
    editable: true
  },
  {
    key: 'actions',
    label: 'Actions',
    type: IntermediateTableColumnTypeEnum.Action,
    actions: [...]
  }
];
`;
}