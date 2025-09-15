import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  LibDatePickerComponent,
  LibNumberComponent,
  LibTextFieldComponent,
} from '@saad-ihhn/ihhn-host-lib/lib-forms';

@Component({
  selector: 'app-table-popup',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LibTextFieldComponent,
    LibNumberComponent,
    LibDatePickerComponent,
  ],
  template: `
    <form [formGroup]="form">
      <div class="max-w-[95vw] w-full">
        <!-- Form Fields -->
        <div class="text-gray-600 dark:text-dark-300">
          <!-- First Name Field -->
          <div class="my-2">
            <lib-text-field
              [class]="'w-full inline-block'"
              [label]="'First Name'"
              [placeholder]="'Enter your first name'"
              [control]="form.controls['firstName']"
            ></lib-text-field>
          </div>

          <!-- Last Name Field -->
          <div class="my-2">
            <lib-text-field
              [class]="'w-full inline-block'"
              [label]="'Last Name'"
              [placeholder]="'Enter your last name'"
              [control]="form.controls['lastName']"
            ></lib-text-field>
          </div>

          <!-- Age Field -->
          <div class="mb-2">
            <lib-number
              [class]="'w-full inline-block'"
              [label]="'Age'"
              [placeholder]="'Enter your age'"
              [control]="form.controls['age']"
            ></lib-number>
          </div>

          <!-- Joined Date Field -->
          <div class="mb-2">
            <lib-date-picker
              [class]="'w-full inline-block'"
              [label]="'Birth Date'"
              [placeholder]="'Enter your birth date'"
              [control]="form.controls['birthDate']"
            ></lib-date-picker>
          </div>
        </div>
      </div>
    </form>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TablePopupComponent {
  private dialogRef = inject(MatDialogRef<TablePopupComponent>);
  public data: { componentData: User } = inject(MAT_DIALOG_DATA);

  form = new FormGroup({
    id: new FormControl(this.data?.componentData?.id ?? 0, Validators.required),
    firstName: new FormControl(
      this.data?.componentData?.firstName ?? '',
      Validators.required
    ),
    lastName: new FormControl(
      this.data?.componentData?.lastName ?? '',
      Validators.required
    ),
    age: new FormControl(this.data?.componentData?.age ?? '', [
      Validators.required,
      Validators.min(1),
      Validators.max(120),
    ]),
    birthDate: new FormControl(this.data?.componentData?.birthDate ?? '', [
      Validators.required,
      Validators.min(1),
      Validators.max(120),
    ]),
  });

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onUpdate(): void {
    if (this.form.valid) {
      this.dialogRef.close({ action: 'update', data: this.form.value });
    }
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
}