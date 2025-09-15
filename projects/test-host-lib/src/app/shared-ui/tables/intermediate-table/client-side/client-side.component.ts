import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
  computed
} from '@angular/core';
import { LibMatFlatButtonComponent } from '@saad-ihhn/ihhn-host-lib/lib-buttons';
import { LibDialogService, LibToastService } from '@saad-ihhn/ihhn-host-lib/services';
import { TablePopupComponent } from '../../table-popup/table-popup.component';
import { TIntermediateTableColumn, IntermediateTableColumnTypeEnum, IntermediateTableInputTypeEnum, IIntermediateTableRowConfig } from '@saad-ihhn/ihhn-host-lib/utilis';
import { LibIntermediateClientTableComponent } from "@saad-ihhn/ihhn-host-lib/lib-tables";
import { LibTextFieldComponent, LibNumberComponent, LibDatePickerComponent } from '@saad-ihhn/ihhn-host-lib/lib-forms';

@Component({
  selector: 'app-client-side-table',
  imports: [ReactiveFormsModule, LibTextFieldComponent, LibNumberComponent, LibDatePickerComponent, LibMatFlatButtonComponent, LibIntermediateClientTableComponent],
  template: `
    <div class="rounded-xl shadow border border-gray-200 bg-white p-4">
      <form [formGroup]="tableForm" class="flex items-center gap-2">
        <div class="w-40 p-2">
          <lib-text-field
          [label]="'First Name'"
          [placeholder]="'Enter first name'"
          [control]="tableForm.controls['firstName']">
          </lib-text-field>
        </div>
        <div class="w-40 p-2">
          <lib-text-field
          [label]="'Last Name'"
          [placeholder]="'Enter last name'"
          [control]="tableForm.controls['lastName']">
          </lib-text-field>
        </div>
        <div class="w-40 p-2">
          <lib-number
          [label]="'Age'"
          [placeholder]="'Enter age'"
          [control]="tableForm.controls['age']">
          </lib-number>
        </div>
        <div class="w-40 p-2">
          <lib-text-field
          [label]="'Email'"
          [placeholder]="'Enter email'"
          [control]="tableForm.controls['email']">
          </lib-text-field>
        </div>
        <div class="w-40 p-2">
          <lib-date-picker
          [label]="'Birth Date'"
          [placeholder]="'Select birth date'"
          [control]="tableForm.controls['birthDate']">
          </lib-date-picker>
        </div>
        <lib-mat-flat-button color="primary" (matClick)="addRow()">Add User</lib-mat-flat-button>
      </form>
      <lib-intermediate-client-table
        [(tableData)]="allData"
        [columns]="columnsConfig()"
        [rowConfig]="rowConfig"
        [sortable]="true"
        [showFirstLastButtons]="true"
      >
      </lib-intermediate-client-table>
    </div>
  `,
  styles: [''],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientSideTableComponent {
  //#region Dependency Injection
  private dialogService = inject<LibDialogService>(LibDialogService);
  private toastService = inject(LibToastService);
  //#endregion

  //#region Data Management
  allData = signal<User[]>(this._generateMockData(100));

  tableForm: FormGroup<{
    firstName: FormControl<string | null>;
    lastName: FormControl<string | null>;
    age: FormControl<number | null>;
    email: FormControl<string | null>;
    birthDate: FormControl<Date | null>;
  }> = new FormGroup({
    firstName: new FormControl<string | null>('', [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl<string | null>('', [Validators.required, Validators.minLength(2)]),
    age: new FormControl<number | null>(null, [Validators.required, Validators.min(1), Validators.max(120)]),
    email: new FormControl<string | null>('', [Validators.required, Validators.email]),
    birthDate: new FormControl<Date | null>(new Date(), [Validators.required])
  });

  // Compute columns config
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
          this.allData.update((items) => {
            const updated = items.map((row) => ({ ...row, rowSelect: true }));
            return updated;
          });
        },
        deselectAll: () => {
          this.allData.update((items) => {
            const updated = items.map((row) => ({ ...row, rowSelect: false }));
            return updated;
          });
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
          this.allData.update((items) => items.map((row) => ({ ...row, active: true })));
        },
        deselectAll: () => {
          this.allData.update((items) => items.map((row) => ({ ...row, active: false })));
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
    onClick: (row) => {
      this.toastService.success(`Row clicked: ${row.firstName} ${row.lastName}`);
    },
    onDblClick: (row) => {
      this.toastService.info(`Row double-clicked: ${row.firstName} ${row.lastName}`);
    },
    class: 'cursor-pointer',
    isSerialNo: true,
    serialNoCommonClass: 'tbl-col-width-per-7',
    isEditableRow: (row: User) => row.isEditable
  };

  addRow(): void {
    if (this.tableForm.invalid) {
      this.tableForm.markAllAsTouched();
      return;
    }
    const formValues = this.tableForm.value;
    const model: User = {
      id: this.allData().length + 1,
      firstName: formValues.firstName ?? '',
      lastName: formValues.lastName ?? '',
      age: formValues.age ?? 0,
      email: formValues.email ?? '',
      birthDate: new Date(formValues.birthDate ?? new Date()),
      rowSelect: true,
      active: false,
      isEditable: true
    };
    this.allData.update(rows => [model, ...rows]);
    this.tableForm.reset();
  }

  deleteRow(row: User) {
    this.allData.update((x) => x.filter((item) => item.id !== row.id));
    this.toastService.success(`Deleted ${row.firstName} ${row.lastName}`);
  }

  // Toggle edit for a single row
  toggleRowEdit(row: User): void {
    this.allData.update((items) =>
      items.map((item) =>
        item.id === row.id
          ? { ...item, isEditable: !item.isEditable }
          : item
      )
    );
  }

  // Enable/disable all rows
  setAllEditable(editable: boolean): void {
    this.allData.update((items) =>
      items.map((item) => ({ ...item, isEditable: editable }))
    );
  }

  openEditForm(row: User): void {
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
            const updatedRow = result.data as User;
            this.allData.update((arr) => arr.map((row) => row.id == updatedRow.id ? { ...row, ...updatedRow } : row));
          }
        });
    }
  }
  //#endregion

  //#region Mock Data Generation
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
        isEditable: false
      } as User;
    });
  }
  //#endregion
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