import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { TablePopupComponent } from '../../table-popup/table-popup.component';
import { LibDialogService, LibToastService } from '@saad-ihhn/ihhn-host-lib/services';
import { LibBasicClientTableComponent } from '@saad-ihhn/ihhn-host-lib/lib-tables';
import { TBasicTableColumn, BasicTableColumnTypeEnum, IBasicTableRowConfig } from '@saad-ihhn/ihhn-host-lib/utilis';

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
 *
 * @example
 * ```html
 * <app-client-side-table></app-client-side-table>
 * ```
 */
@Component({
  selector: 'app-client-side-table',
  imports: [LibBasicClientTableComponent],
  template: `
    <div class="rounded-xl shadow border border-gray-200 bg-white p-4">
      <lib-basic-client-table
        [tableData]="allData()"
        [columns]="columnsConfig"
        [rowConfig]="rowConfig"
        [sortable]="true"
        [showFirstLastButtons]="true"
      >
      </lib-basic-client-table>
    </div>
  `,
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
  columnsConfig: TBasicTableColumn<User>[] = [
      {
        key: 'id',
        label: 'ID',
        type: BasicTableColumnTypeEnum.Number,
        commonClass: 'max-w-[8%]',
        stickyStart: true
      },
      {
        key: 'firstName',
        label: 'First Name',
        type: BasicTableColumnTypeEnum.Text,
        changeText: (row) => {
          return row.firstName.toUpperCase();
        },
        getCellClass: (row) => {
          return row.age > 30 ? 'text-red-500' : '';
        },
        onClick: (row) => {
          this.toastService.info(`Clicked on first name: ${row.firstName}`);
        },
        onDblClick: (row) => {
          this.toastService.warning(`Double-clicked on first name: ${row.firstName}`);
        },
        tooltip: (row) => {
          return row.firstName.length > 15 ? row.firstName : '';
        },
        tooltipPosition: 'below',
        stickyStart: true,
        commonClass: 'max-w-[20%] text-three-ellipsis',
      },
      {
        key: 'lastName',
        label: 'Last Name',
        type: BasicTableColumnTypeEnum.Text,
        commonClass: 'max-w-[20%]',
      },
      {
        key: 'age',
        label: 'Age',
        type: BasicTableColumnTypeEnum.Number,
        commonClass: 'max-w-[8%]',
      },
      {
        key: 'email',
        label: 'Email',
        type: BasicTableColumnTypeEnum.Text,
        commonClass: 'max-w-[25%]',
        tooltip: (row) => row.email,
      },
      {
        key: 'birthDate',
        label: 'Birth Date',
        type: BasicTableColumnTypeEnum.Date,
        commonClass: 'max-w-[15%]',
      },
      {
        key: 'action',
        label: 'Actions',
        type: BasicTableColumnTypeEnum.Action,
        commonClass: 'max-w-[10%]',
        stickyEnd: true,
        actions: [
          {
            iconType: 'name',
            source: 'edit',
            tooltip: (row) => {
              if (row.age < 20) {
                return '';
              }
              return `Edit ${row.firstName}`;
            },
            isVisible: (row) => row.age > 24,
            isDisabled: (row) => row.age == 25,
            class: 'text-blue-500 hover:text-blue-700',
            onClick: (row) => this.openEditForm(row),
          },
          {
            iconType: 'name',
            source: 'delete',
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
  rowConfig: IBasicTableRowConfig<User> = {
    onClick: (row) => {
      this.toastService.success(`Row clicked: ${row.firstName} ${row.lastName}`);
    },
    onDblClick: (row) => {
      this.toastService.info(`Row double-clicked: ${row.firstName} ${row.lastName}`);
    },
    class: 'cursor-pointer',
    isSerialNo: true,
    serialNoCommonClass: 'max-w-[8%] border-r border-gray-200'
  };
  //#endregion

  //#region Data Management
  /** Signal containing all table data */
  // Suggested Data To Handle Client Side 50,000 Records If you have a more than 50,000 records so suggested to used a basic table server side grid with paginator.
  allData = signal<User[]>(this.generateMockData(50000));

  /**
   * Deletes a row from the table data
   * @param row - The row to delete
   */
  deleteRow(row: User) {
    this.allData.update((x) => x.filter((item) => item.id !== row.id));
  }

  /**
   * Opens the edit form dialog for a specific row
   * @param row - The row to edit
   */
  openEditForm(row: User): void {
    this.dialogService
      .openDialog({
        component: TablePopupComponent,
        componentData: row,
        width: '400px',
        height: 'auto',
        title: 'Edit User Details',
        showCloseIcon: true,
        actionsButtons: [
          {
            buttonTitle: 'Cancel',
            onClick: () => {
              const instance = this.dialogService.getCurrentComponentInstance<TablePopupComponent>()();
              instance?.onCancel();
            },
            color: 'warn',
          },
          {
            buttonTitle: 'Update',
            onClick: () => {
              const instance = this.dialogService.getCurrentComponentInstance<TablePopupComponent>()();
              instance?.onUpdate();
            },
          }
        ]
      })
      .subscribe((result) => {
        if (result?.action === 'update') {
          const updatedRow = result.data;
          this.allData.update((data) =>
            data.map((item) =>
              item.id === row.id ? { ...item, ...updatedRow } : item
            )
          );
          this.toastService.success(`Updated ${updatedRow.firstName} ${updatedRow.lastName}`);
        }
      });
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
  generateMockData(count: number): User[] {
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
        firstName: randomFirst,
        lastName: randomLast,
        age: randomAge,
        email: `${randomFirst.toLowerCase()}.${randomLast.toLowerCase()}@example.com`,
        birthDate: new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000),
      } as User;
    });
  }
  //#endregion
}

/**
 * Defines the structure of user data displayed in the tables
 */
interface User {
  /** Unique identifier */
  id: number;
  /** First name of user */
  firstName: string;
  /** Last name of user */
  lastName: string;
  /** Age in years */
  age: number;
  /** Email address */
  email: string;
  /** Birth date */
  birthDate: Date;
}