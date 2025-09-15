import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  FormControl,
  AbstractControl
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  LibEmailComponent,
  LibPasswordComponent,
  LibDatePickerComponent,
  LibMonthComponent,
  LibPhoneComponent,
  LibUrlComponent,
  LibWeekComponent,
  LibNumberComponent,
  LibTimePickerComponent,
  LibTextFieldComponent,
  LibRadioBtnComponent,
  LibCheckboxComponent
} from '@saad-ihhn/ihhn-host-lib/lib-forms';
import { LibMatButtonComponent } from '@saad-ihhn/ihhn-host-lib/lib-buttons';

@Component({
  selector: 'app-array-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LibEmailComponent,
    LibPasswordComponent,
    LibDatePickerComponent,
    LibMonthComponent,
    LibPhoneComponent,
    LibUrlComponent,
    LibWeekComponent,
    LibNumberComponent,
    LibTimePickerComponent,
    LibMatButtonComponent,
    LibTextFieldComponent,
    LibRadioBtnComponent,
    LibCheckboxComponent
  ],
  template: `
    <form [formGroup]="form" class="p-4 space-y-6 max-w-5xl mx-auto">
      <div class="text-center">
        <lib-mat-button
          color="primary"
          class="text-lg px-6 py-3 rounded-xl"
          (matClick)="addFieldSet()"
        >
          ➕ Add More Form
        </lib-mat-button>
      </div>

      <div formArrayName="fields" class="space-y-6">
        <div *ngFor="let fieldGroup of fields.controls; let i = index" [formGroupName]="i"
             class="relative rounded-2xl shadow-md border border-gray-200 p-6 transition-all duration-300 hover:shadow-lg">
          <!-- Remove Button -->
          <lib-mat-button
            color="warn"
            *ngIf="fields.length > 1"
            class="absolute top-2 right-2 text-sm px-3 py-1.5"
            (matClick)="removeFieldSet(i)"
          >
            ✖ Remove
          </lib-mat-button>

          <h2 class="text-lg font-semibold text-on-surface mb-4">Fieldset {{ i + 1 }}</h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <lib-email [label]="'Email ' + (i + 1)"
                       [placeholder]="'Enter email ' + (i + 1)"
                       [control]="getFormControl(fieldGroup.get('email'))"
                       class="w-full">
            </lib-email>

            <lib-password [label]="'Password ' + (i + 1)"
                          [placeholder]="'Enter password ' + (i + 1)"
                          [control]="getFormControl(fieldGroup.get('password'))"
                          class="w-full">
            </lib-password>

            <lib-date-picker [label]="'Date ' + (i + 1)"
                             [placeholder]="'Select date ' + (i + 1)"
                             [control]="getFormControl(fieldGroup.get('date'))"
                             class="w-full">
            </lib-date-picker>

            <lib-month [label]="'Month ' + (i + 1)"
                       [placeholder]="'Select month ' + (i + 1)"
                       [control]="getFormControl(fieldGroup.get('month'))"
                       class="w-full">
            </lib-month>

            <lib-phone [label]="'Phone ' + (i + 1)"
                       [placeholder]="'Enter phone number ' + (i + 1)"
                       [control]="getFormControl(fieldGroup.get('phone'))">
            </lib-phone>

            <lib-url [label]="'URL ' + (i + 1)"
                     [placeholder]="'Enter URL ' + (i + 1)"
                     [control]="getFormControl(fieldGroup.get('url'))">
            </lib-url>

            <lib-week [label]="'Week ' + (i + 1)"
                      [placeholder]="'Select week ' + (i + 1)"
                      [control]="getFormControl(fieldGroup.get('week'))">
            </lib-week>

            <lib-number [label]="'Number ' + (i + 1)"
                        [placeholder]="'Enter number ' + (i + 1)"
                        [control]="getFormControl(fieldGroup.get('number'))">
            </lib-number>

            <lib-time-picker [label]="'Time ' + (i + 1)"
                             [placeholder]="'Select time ' + (i + 1)"
                             [control]="getFormControl(fieldGroup.get('time'))">
            </lib-time-picker>

            <lib-text-field [label]="'Text ' + (i + 1)"
                            [placeholder]="'Enter text ' + (i + 1)"
                            [control]="getFormControl(fieldGroup.get('text'))">
            </lib-text-field>

            <div class="col-span-2">
              <label class="block text-sm font-medium text-on-surface mb-2">
                Security Question: Are you a robot?
              </label>
              <div *ngFor="let option of securityOptions[i]" class="flex items-center space-x-2">
                <lib-radio-btn [control]="getFormControl(fieldGroup.get('security'))"
                               [value]="option.value"
                               [label]="option.label">
                </lib-radio-btn>
              </div>
            </div>

            <div class="col-span-2 flex items-center space-x-2">
              <lib-checkbox [label]="'I agree to the Terms and Conditions'"
                            [control]="getFormControl(fieldGroup.get('terms'))">
              </lib-checkbox>
            </div>
          </div>
        </div>
      </div>

      <!-- Global Submit/Update Buttons -->
      <div class="flex justify-end items-center space-x-4">
        <lib-mat-button
          color="accent"
          class="transition-transform duration-200 hover:scale-105"
          (matClick)="onSubmitAll()"
          [disabled]="form.invalid || isAllSubmitted"
        >
          ✅ Submit All
        </lib-mat-button>

        <lib-mat-button
          color="primary"
          class="transition-transform duration-200 hover:scale-105"
          (matClick)="onEditAll()"
          [disabled]="!isAllSubmitted"
        >
          🔁 Update All
        </lib-mat-button>
      </div>

      <pre class="p-4 rounded-md overflow-auto">{{ submittedData | json }}</pre>
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArrayFormComponent {
  form: FormGroup;
  submittedData: any = null;
  isAllSubmitted = false;
  radioOptions: { label: string; value: string }[][] = [];
  securityOptions: { label: string; value: string }[][] = [];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      fields: this.fb.array([])
    });
    this.addFieldSet();
  }

  get fields(): FormArray {
    return this.form.get('fields') as FormArray;
  }

  addFieldSet(): void {
    const grp = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      date: ['', Validators.required],
      month: ['', Validators.required],
      phone: ['', Validators.required],
      url: ['', [Validators.required, Validators.pattern('https?://.+')]],
      week: ['', Validators.required],
      number: [null, [Validators.required, Validators.min(0)]],
      time: ['', Validators.required],
      text: ['', Validators.required],
      security: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    });

    this.fields.push(grp);
    this.radioOptions.push([
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' }
    ]);
    this.securityOptions.push([
      { label: 'Yes, I am not a robot', value: 'yes' },
      { label: 'No, I am a robot', value: 'no' }
    ]);
  }

  getFormControl(control: AbstractControl | null): FormControl {
    return control as FormControl;
  }

  removeFieldSet(index: number): void {
    this.fields.removeAt(index);
    this.radioOptions.splice(index, 1);
    this.securityOptions.splice(index, 1);
    if (Array.isArray(this.submittedData)) {
      this.submittedData.splice(index, 1);
    }
  }

  onSubmitAll(): void {
    if (this.form.invalid) return;
    this.submittedData = this.fields.controls.map(g => g.value);
    this.fields.controls.forEach(g => g.disable());
    this.isAllSubmitted = true;
  }

  onEditAll(): void {
    this.fields.controls.forEach(g => g.enable());
    this.isAllSubmitted = false;
  } 
}
