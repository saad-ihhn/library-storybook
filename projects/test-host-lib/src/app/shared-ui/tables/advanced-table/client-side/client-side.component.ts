import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
  TemplateRef,
  viewChild
} from '@angular/core';
import { LibDialogService, LibToastService } from '@saad-ihhn/ihhn-host-lib/services';
import { TablePopupComponent } from '../../table-popup/table-popup.component';
import { 
  AdvancedTableColumnTypeEnum, 
  AdvancedTableInputTypeEnum, 
  IAdvancedTableRowConfig, 
  TAdvancedTableColumn 
} from '@saad-ihhn/ihhn-host-lib/utilis';
import { LibAdvancedClientTableComponent } from '@saad-ihhn/ihhn-host-lib/lib-tables';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { DateFormat } from '@saad-ihhn/ihhn-host-lib/enums';

@Component({
  selector: 'app-client-side-table',
  standalone: true,
  imports: [LibAdvancedClientTableComponent, DatePipe],
  template: `
    <div class="rounded-xl shadow border border-gray-200 bg-white p-4">
      <lib-advanced-client-table
        [tableData]="allData()"
        [columns]="columnsConfig()"
        [rowConfig]="rowConfig()"
        [sortable]="true"
        [showFirstLastButtons]="true">
      </lib-advanced-client-table>
    </div>
    
    <ng-template #nameTemplate let-row>
      <span (click)="openEditForm(row)" class="text-blue-600 hover:text-blue-800 cursor-pointer">
        {{ row?.firstName }} {{ row?.lastName }}
      </span>
    </ng-template>

    <ng-template #statusTemplate let-row>
      <span class="px-2 py-1 rounded text-xs font-medium" 
            [class.bg-green-100]="row.active" 
            [class.text-green-800]="row.active"
            [class.bg-red-100]="!row.active"
            [class.text-red-800]="!row.active">
        {{ row.active ? 'Active' : 'Inactive' }}
      </span>
    </ng-template>

    <ng-template #expandedTemplate let-row>
      <div class="user-details p-4 bg-gray-50 border-t">
        <h3 class="font-semibold text-lg mb-2">Details for {{ row.firstName }} {{ row.lastName }}</h3>
        <div class="grid grid-cols-2 gap-2">
          <p><span class="font-medium">Age:</span> {{ row.age }}</p>
          <p><span class="font-medium">Email:</span> {{ row.email }}</p>
          <p><span class="font-medium">Birth Date:</span> {{ row.birthDate | date:'mediumDate' }}</p>
          <p><span class="font-medium">Status:</span> {{ row.active ? 'Active' : 'Inactive' }}</p>
        </div>
      </div>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientSideTableComponent implements AfterViewInit {
  private dialogService = inject<LibDialogService>(LibDialogService);
  private toastService = inject(LibToastService);

  nameTemplate = viewChild.required<TemplateRef<{ $implicit: User }>>('nameTemplate');
  statusTemplate = viewChild.required<TemplateRef<{ $implicit: User }>>('statusTemplate');
  expandedTemplate = viewChild.required<TemplateRef<{ $implicit: User }>>('expandedTemplate');
  
  columnsConfig = signal<TAdvancedTableColumn<User>[]>([]);
  allData = signal<User[]>(this._generateMockData(100));
  
  rowConfig = signal<IAdvancedTableRowConfig<User>>({
    onClick: (row) => this.toastService.success(`Row clicked: ${row.firstName} ${row.lastName}`),
    onDblClick: (row) => this.toastService.info(`Row double-clicked: ${row.firstName} ${row.lastName}`),
    class: 'cursor-pointer hover:bg-gray-50',
    isSerialNo: true,
    serialNoCommonClass: 'max-w-[8%] border-r border-gray-200',
    collapsible: {
      enabled: true,
      expandedTemplate: undefined,
      toggleButtonInsideOfColumn: 'name',
      expandedIcon: 'arrow_drop_up',
      collapsedIcon: 'arrow_drop_down',
      expandedTooltip: 'Collapse details',
      collapsedTooltip: 'Expand details'
    }
  });

  ngAfterViewInit() {
    this.initializeColumns();
    this.rowConfig.update((config) => ({
      ...config,
      collapsible: {
        ...config.collapsible,
        expandedTemplate: this.expandedTemplate()
      }
    }));
  }

  initializeColumns() {
    this.columnsConfig.set([
      { 
        key: 'id', 
        label: 'ID', 
        type: AdvancedTableColumnTypeEnum.Number,
        onContentClick: (row) => console.log('ID clicked:', row),
        commonClass: 'max-w-[8%] font-mono text-sm'
      },
      {
        key: 'name',
        label: 'Name',
        type: AdvancedTableColumnTypeEnum.Custom,
        templateRef: this.nameTemplate(),
        tooltip: (row) => `${row.firstName} ${row.lastName}`,
        commonClass: 'max-w-[25%] text-three-ellipsis !flex'
      },
      { 
        key: 'age', 
        label: 'Age', 
        type: AdvancedTableColumnTypeEnum.Number,
        commonClass: 'max-w-[8%] text-center',
        sortable: true
      },
      {
        key: 'email',
        label: 'Email',
        type: AdvancedTableColumnTypeEnum.Text,
        commonClass: 'max-w-[25%] text-three-ellipsis',
        tooltip: (row) => row.email
      },
      {
        key: 'birthDate',
        label: 'Birth Date',
        type: AdvancedTableColumnTypeEnum.Date,
        dateFormatter: DateFormat.CUSTOM_1,
        commonClass: 'max-w-[15%]',
        sortable: true
      },
      {
        key: 'status',
        label: 'Status',
        type: AdvancedTableColumnTypeEnum.Custom,
        templateRef: this.statusTemplate(),
        commonClass: 'max-w-[12%] text-center',
        onClick: (row) => {
          row.active = !row.active;
          this.allData.update((data) => [...data]);
          this.toastService.info(`Status changed to: ${row.active ? 'Active' : 'Inactive'}`);
        }
      },
      {
        key: 'action',
        label: 'Actions',
        type: AdvancedTableColumnTypeEnum.Action,
        stickyEnd: true,
        commonClass: 'max-w-[10%]',
        actions: [
          {
            source: 'delete',
            iconType: 'name',
            tooltip: (row) => `Delete ${row.firstName}`,
            isVisible: (row) => row.age > 24,
            isDisabled: (row) => row.age === 25,
            onClick: (row) => this.deleteRow(row)
          },
          {
            source: 'edit',
            iconType: 'name',
            tooltip: (row) => `Edit ${row.firstName}`,
            onClick: (row) => this.openEditForm(row)
          }
        ],
      },
    ]);
  }

  deleteRow(row: User) {
    this.allData.update((data) => data.filter((item) => item.id !== row.id));
    this.toastService.success(`Deleted: ${row.firstName} ${row.lastName}`);
  }

  openEditForm(row: User): void {
    if (row) {
      this.dialogService
        .openDialog({
          component: TablePopupComponent,
          componentData: { ...row },
          width: '400px',
          height: 'auto',
        })
        .subscribe((result) => {
          if (result?.action === 'update') {
            const updatedRow = result.data as User;
            this.allData.update((data) => 
              data.map((item) => item.id === updatedRow.id ? { ...item, ...updatedRow } : item)
            );
            this.toastService.success('User updated successfully');
          }
        });
    }
  }

  private _generateMockData(count: number): User[] {
    const firstNames = [
      'Emma', 'Liam', 'Olivia', 'Noah', 'Ava',
      'William', 'Sophia', 'James', 'Isabella', 'Oliver',
      'Charlotte', 'Elijah', 'Amelia', 'Benjamin', 'Mia',
      'Lucas', 'Harper', 'Henry', 'Evelyn', 'Alexander'
    ];
    
    const lastNames = [
      'Smith', 'Johnson', 'Williams', 'Brown', 'Jones',
      'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez',
      'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson',
      'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin'
    ];

    const emailDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'example.com'];

    return Array.from({ length: count }, (_, i) => {
      const randomFirst = firstNames[Math.floor(Math.random() * firstNames.length)];
      const randomLast = lastNames[Math.floor(Math.random() * lastNames.length)];
      const randomAge = Math.floor(Math.random() * 50) + 18;
      const daysAgo = Math.floor(Math.random() * 365 * 50);
      const randomDomain = emailDomains[Math.floor(Math.random() * emailDomains.length)];
      const birthDate = new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000);
      
      return {
        id: i + 1,
        firstName: randomFirst,
        lastName: randomLast,
        age: randomAge,
        email: `${randomFirst.toLowerCase()}.${randomLast.toLowerCase()}@${randomDomain}`,
        birthDate: birthDate,
        active: Math.random() > 0.3,
        rowSelect: false,
        isEditable: Math.random() > 0.5
      } as User;
    });
  }
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  birthDate: Date;
  rowSelect: boolean;
  active: boolean;
  isEditable: boolean;
}