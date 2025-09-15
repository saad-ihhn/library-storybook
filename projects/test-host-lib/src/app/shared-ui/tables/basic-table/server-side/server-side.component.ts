import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
  WritableSignal,
} from '@angular/core';
import { TablePopupComponent } from '../../table-popup/table-popup.component';
import { LibHttpService, LibDialogService, LibToastService } from '@saad-ihhn/ihhn-host-lib/services';
import { LibBasicServerTableComponent } from '@saad-ihhn/ihhn-host-lib/lib-tables';
import { TBasicTableColumn, BasicTableColumnTypeEnum, IBasicTableRowConfig, IBasicTableLoadMoreData, IBasicTablePageEvent } from '@saad-ihhn/ihhn-host-lib/utilis';
import { Sort } from '@angular/material/sort';

/**
 * LibBasicServerTableComponent - Demonstrates server-side paginated table implementations using DummyJSON API
 *
 * @description
 * This component showcases two approaches to server-side data loading using DummyJSON API:
 * 1. Traditional paginator-based table with page numbers
 * 2. Infinite scroll-based table that loads more data on scroll
 *
 * Both implementations share the same column configuration and support:
 * - Sorting
 * - Custom cell rendering
 * - Row and cell click handlers
 * - Action buttons with conditional states
 * - Dialog-based editing
 * - Server-side data fetching from DummyJSON API
 */
@Component({
  selector: 'app-server-side-table',
  standalone: true,
  imports: [LibBasicServerTableComponent],
  template: `
    <div class="rounded-xl shadow border border-gray-200 bg-white p-4">
      <h2 class="text-gray-900 font-semibold mb-4">Paginator Base</h2>
      <lib-basic-server-table
        [tableData]="pageData()"
        [columns]="columnsConfig"
        [rowConfig]="rowConfig"
        [sortable]="true"
        [totalItemCount]="pageTotalItems()"
        (pageChanged)="onPageChange($event)"
        (sortChanged)="onPageSortChange($event)"
        [loading]="pageLoading()"
      >
      </lib-basic-server-table>
    </div>
    <div class="rounded-xl shadow border border-gray-200 bg-white p-4 mt-5">
      <h2 class="text-gray-900 font-semibold mb-4">Scroll Base</h2>
      <lib-basic-server-table
        [tableData]="scrollData()"
        [columns]="columnsConfig"
        [rowConfig]="rowConfig"
        [sortable]="true"
        [paginationEnabled]="false"
        [scrollPaginationEnabled]="true"
        [pageSize]="scrollPageSize()"
        [totalItemCount]="scrollTotalItems()"
        (loadMoreData)="onScrollLoadMore($event)"
        (sortChanged)="onScrollSortChange($event)"
        [loading]="scrollLoading()"
      >
      </lib-basic-server-table>
      
    </div>
  `,
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
   * - Uses DummyJSON API for data
   */
  scrollData: WritableSignal<User[]> = signal([]);
  scrollPageIndex = signal(0);
  scrollPageSize = signal(20);
  scrollTotalItems = signal(0);
  scrollSort = signal<Sort | undefined>(undefined);
  scrollLoading = signal<boolean>(false);

  /**
   * Manages state and operations for the paginator-based table
   *
   * @remarks
   * Features:
   * - Traditional page-based navigation
   * - Supports sorting
   * - Uses DummyJSON API for data
   */
  pageData: WritableSignal<User[]> = signal([]);
  pageIndex = signal(0);
  pageSize = signal(10);
  pageTotalItems = signal(0);
  pageSort = signal<Sort | undefined>(undefined);
  pageLoading = signal<boolean>(false);

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
   * Configures row-level behaviors and styling
   *
   * @remarks
   * Includes:
   * - Click and double-click handlers for entire rows
   * - Conditional row styling based on data
   * - Serial number column configuration
   */
  rowConfig: IBasicTableRowConfig<User> = {
    onClick: (row) => this.toastService.success(`Row clicked: ${row.firstName} ${row.lastName}`),
    onDblClick: (row) =>
      this.toastService.info(`Row double-clicked: ${row.firstName} ${row.lastName}`),
    class: 'cursor-pointer hover:bg-gray-50'
  };

  /**
   * Deletes a row from both table implementations
   *
   * @param row - The row to delete
   * @description
   * Filters out the deleted row from both data signals
   * Shows toast notification
   */
  deleteRow(row: User) {
    this.pageData.update((data) => data.filter((item) => item.id !== row.id));
    this.scrollData.update((data) => data.filter((item) => item.id !== row.id));
    this.toastService.success(`Deleted ${row.firstName} ${row.lastName}`);
  }

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
          this.toastService.success(`Updated ${updatedRow.firstName} ${updatedRow.lastName}`);
        }
      });
  }

  /**
   * Fetches data for the scroll-based table from DummyJSON API
   *
   * @description
   * Makes HTTP request to DummyJSON API with current pagination parameters
   * Transforms API response to match expected format
   */
  fetchScrollData(): void {
    const skip = this.scrollPageIndex();
    const limit = this.scrollPageSize();
    this.scrollLoading.set(true);

    this.httpService
      .get<DummyJsonResponse>(
        `https://dummyjson.com/users?limit=${limit}&skip=${skip}&select=firstName,lastName,age,email,birthDate`
      )
      .subscribe({
        next: (res) => {
          const users = res.users.map((user) => ({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            age: user.age,
            email: user.email,
            birthDate: new Date(user.birthDate),
          }));

          this.scrollData.update((data) => {
            const existingIds = new Set(data.map((u) => u.id));
            const newUsers = users.filter((u) => !existingIds.has(u.id));
            return [...data, ...newUsers];
          });
          this.scrollTotalItems.set(res.total);
          this.scrollLoading.set(false);
          this.scrollPageIndex.update((v) => v + 1);
        },
        error: (err) => {
          console.error('Error fetching scroll data from DummyJSON:', err);
          this.scrollLoading.set(false);
          this.toastService.error('Failed to load data from DummyJSON API');
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
    console.log('event', event);
    this.scrollPageIndex.set(event.pageIndex);
    this.scrollPageSize.set(event.pageSize);
    this.fetchScrollData();
  }

  /**
   * Handles sort changes for scroll table
   *
   * @param sort - New sort configuration
   * @description
   * Resets pagination and fetches fresh data
   * Note: DummyJSON doesn't support server-side sorting, so we'll handle client-side
   */
  onScrollSortChange(sort: Sort) {
    this.scrollSort.set(sort);
    this.scrollPageIndex.set(0);
    this.scrollData.set([]);
    this.fetchScrollData();
  }

  /**
   * Fetches data for the paginator-based table from DummyJSON API
   *
   * @description
   * Makes HTTP request to DummyJSON API with current pagination parameters
   * Transforms API response to match expected format
   */
  fetchPageData(): void {
    const skip = this.pageIndex() * this.pageSize();
    const limit = this.pageSize();
    
    this.pageLoading.set(true);
    this.httpService
      .get<DummyJsonResponse>(
        `https://dummyjson.com/users?limit=${limit}&skip=${skip}&select=firstName,lastName,age,email,birthDate`
      )
      .subscribe({
        next: (res) => {
          // Transform DummyJSON response to our User format
          const users = res.users.map(user => ({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            age: user.age,
            email: user.email,
            birthDate: new Date(user.birthDate)
          }));
          
          this.pageData.set(users);
          this.pageTotalItems.set(res.total);
          this.pageLoading.set(false);
        },
        error: (err) => {
          console.error('Error fetching page data from DummyJSON:', err);
          this.pageLoading.set(false);
          this.toastService.error('Failed to load data from DummyJSON API');
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
   * Resets to first page and fetches fresh data
   * Note: DummyJSON doesn't support server-side sorting, so we'll handle client-side
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

/**
 * DummyJSON API response format
 */
interface DummyJsonResponse {
  users: Array<{
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    birthDate: string;
  }>;
  total: number;
  skip: number;
  limit: number;
}