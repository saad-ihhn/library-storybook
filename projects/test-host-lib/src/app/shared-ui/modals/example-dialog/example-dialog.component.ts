import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  linkedSignal,
  Signal,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  FormGroup,
  Validators,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  LibNumberComponent,
  LibTextFieldComponent,
} from '@saad-ihhn/ihhn-host-lib/lib-forms';
import { merge, startWith, map } from 'rxjs';

@Component({
  selector: 'app-example-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LibTextFieldComponent,
    LibNumberComponent,
  ],
  template: `
    <form [formGroup]="form">
      <div class="max-w-[95vw] w-full">
        <!-- Form Fields -->
        <div class="mb-6 text-gray-600 dark:text-dark-300">
          <!-- Name Field -->
          <div class="my-4">
            <lib-text-field
              class="w-full inline-block"
              [label]="'Name'"
              [placeholder]="'Enter your name'"
              [control]="form.controls['name']"
            ></lib-text-field>
          </div>

          <!-- Age Field -->
          <div class="mb-4">
            <lib-number
              class="w-full inline-block"
              [label]="'Age'"
              [placeholder]="'Enter your age'"
              [control]="form.controls['age']"
              [maxLength]="11"
            ></lib-number>
          </div>
        </div>
      </div>
    </form>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleDialogComponent {
  public data: { componentData?: { name?: string; age?: number } } =
    inject(MAT_DIALOG_DATA);
  private dialogRef = inject(MatDialogRef<ExampleDialogComponent>);
  colorWarn: Signal<string> = signal<string>('warn');
  colorAccent = signal<string>('accent');

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl('', [Validators.required, Validators.min(1)]),
  });

  onUpdate(): void {
    if (this.form.valid) {
      this.dialogRef.close({ action: 'update', data: this.form.value });
    }
  }

  /**
   * Public signal the parent can read. True => button should be disabled.
   * We map status/value changes into a boolean and provide a proper initialValue.
   */
  public isUpdateDisabled = toSignal(this.form.statusChanges.pipe(
    startWith(this.form.status),
    map(() => this.form.invalid || this.form.pristine)
  ),
    { initialValue: this.form.invalid || this.form.pristine }
  );

  constructor() { }
}
