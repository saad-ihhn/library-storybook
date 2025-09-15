import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
  WritableSignal,
} from '@angular/core';
import { LibHttpService, LibDialogService, LibToastService } from '@saad-ihhn/ihhn-host-lib/services';
import { Sort } from '@angular/material/sort';
import { TablePopupComponent } from '../../table-popup/table-popup.component';
import { FormControl, Validators } from '@angular/forms';
import { IIntermediateTableLoadMoreData, IIntermediateTablePageEvent, IIntermediateTableRowConfig, IntermediateTableColumnTypeEnum, IntermediateTableInputTypeEnum, TIntermediateTableColumn } from '@saad-ihhn/ihhn-host-lib/utilis';
import { LibIntermediateServerTableComponent } from '@saad-ihhn/ihhn-host-lib/lib-tables';

@Component({
  selector: 'app-server-side-table',
  standalone: true,
  imports: [LibIntermediateServerTableComponent],
  template: `
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
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServerSideTableComponent {
  // Services
  private dialogService = inject<LibDialogService>(LibDialogService);
  private toastService = inject(LibToastService);
  private httpService = inject(LibHttpService);

  // Scroll Table State
  scrollData: WritableSignal<User[]> = signal([]);
  scrollPageIndex = signal(0);
  scrollPageSize = signal(20);
  scrollTotalItems = signal(0);
  scrollSort = signal<Sort | undefined>(undefined);
  scrollLoading = signal<boolean>(false);

  // Paginator Table State
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

  // Table Configuration
  columnsConfig = computed<TIntermediateTableColumn<User>[]>(() => [
    {
      key: 'rowSelect',
      label: '',
      beforeSerialNo: true,
      sortable: false,
      stickyStart: true,
      type: IntermediateTableColumnTypeEnum.Input,
      inputType: IntermediateTableInputTypeEnum.CheckBox,
      headerCheckbox: {
        control: new FormControl(false),
        selectAll: () => {
          this.scrollData.update((items) => items.map((row) => ({ ...row, rowSelect: true })));
          this.pageData.update((items) => items.map((row) => ({ ...row, rowSelect: true })));
        },
        deselectAll: () => {
          this.scrollData.update((items) => items.map((row) => ({ ...row, rowSelect: false })));
          this.pageData.update((items) => items.map((row) => ({ ...row, rowSelect: false })));
        }
      },
      commonClass: 'tbl-col-width-per-5'
    },
    {
      key: 'id',
      label: 'ID',
      type: IntermediateTableColumnTypeEnum.Number,
      commonClass: 'tbl-col-width-per-10',
      stickyStart: true
    },
    {
      key: 'firstName',
      label: 'First Name',
      type: IntermediateTableColumnTypeEnum.Input,
      inputType: IntermediateTableInputTypeEnum.Text,
      stickyStart: true,
      validators: [Validators.required, Validators.minLength(2), Validators.maxLength(50)],
      maxLength: 50,
      minLength: 2,
      commonClass: 'tbl-col-width-per-15',
    },
    {
      key: 'lastName',
      label: 'Last Name',
      type: IntermediateTableColumnTypeEnum.Input,
      inputType: IntermediateTableInputTypeEnum.Text,          
      stickyStart: true,
      validators: [Validators.required, Validators.minLength(2), Validators.maxLength(50)],
      maxLength: 50,
      minLength: 2,
      commonClass: 'tbl-col-width-per-15',
    },
    {
      key: 'age',
      label: 'Age',
      type: IntermediateTableColumnTypeEnum.Input,
      inputType: IntermediateTableInputTypeEnum.Number,
      validators: [Validators.required, Validators.min(1), Validators.max(120)],
      min: 1,
      max: 120,
      customErrorMessages: { 'required': 'Age is required' },
      commonClass: 'tbl-col-width-per-10'
    },
    {
      key: 'email',
      label: 'Email',
      type: IntermediateTableColumnTypeEnum.Input,
      inputType: IntermediateTableInputTypeEnum.Text,
      validators: [Validators.required, Validators.email],
      commonClass: 'tbl-col-width-per-20',
      changeText: (row: User) => {
        return row.email.toLowerCase();
      },
    },
    {
      key: 'birthDate',
      label: 'Birth Date',
      type: IntermediateTableColumnTypeEnum.Input,
      inputType: IntermediateTableInputTypeEnum.Date,
      validators: [Validators.required],
      commonClass: 'tbl-col-width-per-15',
      changeText: (row: User) => {
        return row.birthDate ? row.birthDate.toLocaleDateString() : '-';
      },
    },
    {
      key: 'active',
      label: 'Active',
      type: IntermediateTableColumnTypeEnum.Input,
      inputType: IntermediateTableInputTypeEnum.CheckBox,
      headerCheckbox: {
        control: new FormControl(false),
        selectAll: () => {
          this.scrollData.update((items) => items.map((row) => ({ ...row, active: true })));
          this.pageData.update((items) => items.map((row) => ({ ...row, active: true })));
        },
        deselectAll: () => {
          this.scrollData.update((items) => items.map((row) => ({ ...row, active: false })));
          this.pageData.update((items) => items.map((row) => ({ ...row, active: false })));
        }
      },
      validators: [Validators.required],
      commonClass: 'tbl-col-width-per-8'
    },
    {
      key: 'action',
      label: 'Actions',
      type: IntermediateTableColumnTypeEnum.Action,
      commonClass: 'tbl-col-width-per-10',
      stickyEnd: true,
      actions: [
        {
          source: 'delete',
          iconType: 'name',
          isVisible: (row) => row.age > 18,
          isDisabled: (row) => row.age < 21,
          onClick: (row) => this.deleteRow(row)
        },
        {
          source: (row) => row.isEditable ? 'save' : 'edit',
          iconType: 'name',
          onClick: (row) => this.toggleRowEdit(row)
        },
      ],
    },
  ]);

  rowConfig: IIntermediateTableRowConfig<User> = {
    onClick: (row) => this.toastService.success(`Row clicked: ${row.firstName} ${row.lastName}`),
    onDblClick: (row) => this.toastService.info(`Row double-clicked: ${row.firstName} ${row.lastName}`),
    class: 'cursor-pointer'
  };

  // Data Operations
  deleteRow(row: User) {
    this.pageData.update((data) => data.filter((item) => item.id !== row.id));
    this.scrollData.update((data) => data.filter((item) => item.id !== row.id));
    this.toastService.success(`Deleted ${row.firstName} ${row.lastName}`);
  }

  toggleRowEdit(row: User): void {
    this.pageData.update((data) =>
      data.map((item) =>
        item.id === row.id ? { ...item, isEditable: !item.isEditable } : item
      )
    );
    this.scrollData.update((data) =>
      data.map((item) =>
        item.id === row.id ? { ...item, isEditable: !item.isEditable } : item
      )
    );
  }

  openEditForm(row: User): void {
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
          this.toastService.success(`Updated ${updatedRow.firstName} ${updatedRow.lastName}`);
        }
      });
  }

  // Scroll Table Methods - Using DummyJSON API
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
          // Transform DummyJSON response to our User format
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
          
          this.scrollData.update((data) => [...data, ...users]);
          this.scrollTotalItems.set(res.total);
          this.scrollLoading.set(false);
        },
        error: (err) => {
          this.scrollLoading.set(false);
          console.error('Error fetching scroll data from DummyJSON:', err);
          this.toastService.error('Failed to load data from DummyJSON API');
        },
      });
  }

  onScrollLoadMore(event: IIntermediateTableLoadMoreData) {
    this.scrollPageIndex.set(event.pageIndex);
    this.scrollPageSize.set(event.pageSize);
    this.fetchScrollData();
  }

  onScrollSortChange(sort: Sort) {
    this.scrollSort.set(sort);
    this.scrollPageIndex.set(0);
    this.scrollData.set([]);
    this.fetchScrollData();
  }

  // Paginator Table Methods - Using DummyJSON API
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
          console.error('Error fetching page data from DummyJSON:', err);
          this.toastService.error('Failed to load data from DummyJSON API');
        },
      });
  }

  onPageChange(event: IIntermediateTablePageEvent) {
    this.pageIndex.set(event.pageIndex);
    this.pageSize.set(event.pageSize);
    this.fetchPageData();
  }

  onPageSortChange(sort: Sort) {
    this.pageSort.set(sort);
    this.pageIndex.set(0);
    this.fetchPageData();
  }
}

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
  /** Whether the row is selected */
  rowSelect: boolean;
  /** Whether the user is active */
  active: boolean;
  /** Whether the row is editable */
  isEditable: boolean;
}

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