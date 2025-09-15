import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
  WritableSignal
} from '@angular/core';
import { LibHttpService, LibDialogService, LibToastService } from '@saad-ihhn/ihhn-host-lib/services';
import { Sort } from '@angular/material/sort';
import { TablePopupComponent } from '../../table-popup/table-popup.component';
import { AdvancedTableColumnTypeEnum, AdvancedTableInputTypeEnum, IAdvancedTableLoadMoreData, IAdvancedTablePageEvent, IAdvancedTableRowConfig, TAdvancedTableColumn } from '@saad-ihhn/ihhn-host-lib/utilis';
import { LibAdvancedServerTableComponent } from '@saad-ihhn/ihhn-host-lib/lib-tables';

@Component({
  selector: 'app-server-side-table',
  standalone: true,
  imports: [LibAdvancedServerTableComponent],
  template: `
    <div class="rounded-xl shadow border border-gray-200 bg-white p-4">
      <h2 class="text-gray-900 font-semibold mb-4">Paginator Base</h2>
      <lib-advanced-server-table
        [tableData]="pageData()"
        [columns]="columnsConfig"
        [rowConfig]="rowConfig"
        [sortable]="true"
        [loading]="pageLoading()"
        [totalItemCount]="pageTotalItems()"
        (pageChanged)="onPageChange($event)"
        (sortChanged)="onPageSortChange($event)"
      >
      </lib-advanced-server-table>
    </div>
    <div class="rounded-xl shadow border border-gray-200 bg-white p-4 mt-5">
      <h2 class="text-gray-900 font-semibold mb-4">Scroll Base</h2>
      <lib-advanced-server-table
        [tableData]="scrollData()"
        [columns]="columnsConfig"
        [rowConfig]="rowConfig"
        [sortable]="true"
        [loading]="scrollLoading()"
        [paginationEnabled]="false"
        [scrollPaginationEnabled]="true"
        [totalItemCount]="scrollTotalItems()"
        (loadMoreData)="onScrollLoadMore($event)"
        (sortChanged)="onScrollSortChange($event)"
      >
      </lib-advanced-server-table>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServerSideTableComponent {
  // Services
  private dialogService = inject<LibDialogService>(LibDialogService);
  private toastService = inject(LibToastService);
  private httpService = inject(LibHttpService);

  // Scroll Table State
  scrollData: WritableSignal<users[]> = signal([]);
  scrollPageIndex = signal(0);
  scrollPageSize = signal(10);
  scrollTotalItems = signal(0);
  scrollSort = signal<Sort | undefined>(undefined);
  scrollLoading = signal<boolean>(false);

  // Paginator Table State
  pageData: WritableSignal<users[]> = signal([]);
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
      maxLength: 150,
      minLength: 3,
      commonClass: 'max-w-[40%]'
    },
    {
      key: 'age',
      label: 'Age',
      type: AdvancedTableColumnTypeEnum.Input,
      inputType: AdvancedTableInputTypeEnum.Number,
      max: 120,
      commonClass: 'max-w-[8%]'
    },
    {
      key: 'joined',
      label: 'Joined',
      type: AdvancedTableColumnTypeEnum.Input,
      inputType: AdvancedTableInputTypeEnum.Date,
      commonClass: 'max-w-[20%]'
    },
    {
      key: 'active',
      label: 'Active',
      type: AdvancedTableColumnTypeEnum.Input,
      inputType: AdvancedTableInputTypeEnum.CheckBox,
      headerButtonCollapsable: true,
      commonClass: 'max-w-[18%] justify-center'
    },
    {
      key: 'action',
      label: 'Actions',
      type: AdvancedTableColumnTypeEnum.Action,
      commonClass: 'max-w-[10%]',
      actions: [
        {
          source: 'delete',
          iconType: 'name',
          isVisible: (row) => row.age > 24,
          isDisabled: (row) => row.age == 25,
          onClick: (row) => this.deleteRow(row)
        },
      ],
    },
  ];

  rowConfig: IAdvancedTableRowConfig<users> = {
    onClick: (row) => this.toastService.success(`Row clicked: ${row.name}`),
    onDblClick: (row) => this.toastService.info(`Row double-clicked: ${row.name}`),
    class: 'cursor-pointer hover:bg-gray-50'
  };

  // Data Operations
  deleteRow(row: users) {
    this.pageData.update(data => data.filter(item => item.id !== row.id));
    this.scrollData.update(data => data.filter(item => item.id !== row.id));
    this.toastService.success(`Deleted ${row.name}`);
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
          this.pageData.update(data =>
            data.map(item => item.id === row.id ? { ...item, ...updatedRow } : item)
          );
          this.scrollData.update(data =>
            data.map(item => item.id === row.id ? { ...item, ...updatedRow } : item)
          );
          this.toastService.success(`Updated ${updatedRow.name}`);
        }
      });
  }

  // Scroll Table Methods
  fetchScrollData(): void {
    const payload = {
      skip: this.scrollPageIndex() * this.scrollPageSize(),
      take: this.scrollPageSize(),
      sort: this.scrollSort(),
    };
    this.scrollLoading.set(true);
    this.httpService
      .post<{ count: number; data: users[] }>(
        'http://localhost:3010/api/table/getTableData',
        payload
      )
      .subscribe({
        next: (res) => {
          this.scrollData.update(data => [...data, ...res.data]);
          this.scrollTotalItems.set(res.count);
          this.scrollLoading.set(false);
        },
        error: (err) => {
          this.scrollLoading.set(false);
          console.error('Error fetching scroll data:', err);
        }
      });
  }

  onScrollLoadMore(event: IAdvancedTableLoadMoreData) {
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

  // Paginator Table Methods
  fetchPageData(): void {
    const payload = {
      skip: this.pageIndex() * this.pageSize(),
      take: this.pageSize(),
      sort: this.pageSort(),
    };
    this.pageLoading.set(true);
    this.httpService
      .post<{ count: number; data: users[] }>(
        'http://localhost:3010/api/table/getTableData',
        payload
      )
      .subscribe({
        next: (res) => {
          this.pageData.set(res.data);
          this.pageTotalItems.set(res.count);
          this.pageLoading.set(false);
        },
        error: (err) => {
          this.pageLoading.set(false);
          console.error('Error fetching page data:', err);
        }
      });
  }

  onPageChange(event: IAdvancedTablePageEvent) {
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

interface users {
  id: number; 
  name: string;
  age: number;
  joined?: Date;
}