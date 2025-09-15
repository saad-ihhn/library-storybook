import { Component, Input, ViewChild, ViewContainerRef, OnInit, AfterViewInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  LibEmailComponent,
  LibPasswordComponent,
  LibPhoneComponent,
  LibUrlComponent,
  LibDatePickerComponent,
  LibDateRangePickerComponent,
  LibMonthComponent,
  LibTimePickerComponent,
  LibWeekComponent,
  LibTextFieldComponent,
  LibCheckboxComponent,
  LibRadioBtnComponent,
  LibNumberComponent
} from '@saad-ihhn/ihhn-host-lib/lib-forms';
import { LibMatButtonComponent } from '@saad-ihhn/ihhn-host-lib/lib-buttons'; 

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LibMatButtonComponent
  ],
  template: `
    <form [formGroup]="form" class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <ng-container #fieldContainer></ng-container>
    </form>

    <div class="p-4">
      <lib-mat-button
        type="button"
        (matClick)="showConfig = !showConfig"
        class=""
      >
        {{ showConfig ? 'Hide' : 'Show' }} Form Configuration
      </lib-mat-button>
    </div>

    <div *ngIf="showConfig" class="p-4 bg-gray-100 rounded shadow-md overflow-auto">
      <pre class="text-sm text-gray-800">{{ formConfig | json }}</pre>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicObjectFormComponent implements OnInit, AfterViewInit {
  @Input() formConfig: any[] = [];
  @ViewChild('fieldContainer', { read: ViewContainerRef }) fieldContainer!: ViewContainerRef;
  private fb = inject(FormBuilder);
  form: FormGroup = this.fb.group({});
  showConfig = false;

  private componentMap: Record<string, any> = {
    email: LibEmailComponent,
    password: LibPasswordComponent,
    phone: LibPhoneComponent,
    url: LibUrlComponent,
    date: LibDatePickerComponent,
    dateRange: LibDateRangePickerComponent,
    month: LibMonthComponent,
    time: LibTimePickerComponent,
    week: LibWeekComponent,
    text: LibTextFieldComponent,
    checkbox: LibCheckboxComponent,
    radio: LibRadioBtnComponent,
    number: LibNumberComponent
  };

  private defaultConfig = [
    { name: 'email', type: 'email', label: 'Email', placeholder: 'Enter your email', validators: [Validators.required, Validators.email] },
    { name: 'password', type: 'password', label: 'Password', placeholder: 'Enter password' },
    { name: 'phone', type: 'phone', label: 'Phone Number', placeholder: 'Enter phone number' },
    { name: 'url', type: 'url', label: 'Website', placeholder: 'https://example.com' },
    { name: 'date', type: 'date', label: 'Date', placeholder: 'Pick a date', validators: [Validators.required] },
    { name: 'dateRange', type: 'dateRange', label: 'Date Range', placeholder: 'Select a date range' },
    { name: 'month', type: 'month', label: 'Month', placeholder: 'Pick a month' },
    { name: 'time', type: 'time', label: 'Time', placeholder: 'Select a time' },
    { name: 'week', type: 'week', label: 'Week', placeholder: 'Pick a week' },
    { name: 'text', type: 'text', label: 'Your Message', placeholder: 'Type something here...' },
    { name: 'agree', type: 'checkbox', label: 'I agree to the terms' },
    { name: 'gender', type: 'radio', label: 'Male', value: 'male', groupName: 'gender' },
    { name: 'quantity', type: 'number', label: 'Quantity', placeholder: 'Enter quantity', step: 0.5, validators: [Validators.required] }
  ];

  ngOnInit(): void {
    if (!this.formConfig || this.formConfig.length === 0) {
      this.formConfig = this.defaultConfig;
    }

    // Group radio buttons by their groupName
    const radioGroups: Record<string, any[]> = {};
    const nonRadioFields = [];

    for (const field of this.formConfig) {
      if (field.type === 'radio') {
        if (!radioGroups[field.groupName]) {
          radioGroups[field.groupName] = [];
        }
        radioGroups[field.groupName].push(field);
      } else if (field.type === 'dateRange') {
        this.form.addControl(field.name, this.fb.group({ start: '', end: '' }));
      } else {
        nonRadioFields.push(field);
        this.form.addControl(field.name, new FormControl(field.value || '', field.validators || []));
      }
    }

    // Add radio button groups to the form
    for (const groupName in radioGroups) {
      if (radioGroups.hasOwnProperty(groupName)) {
        const groupFields = radioGroups[groupName];
        this.form.addControl(groupName, new FormControl('', groupFields[0].validators || []));
      }
    }
  }

  async ngAfterViewInit() {
    // First create non-radio components
    for (const field of this.formConfig.filter(f => f.type !== 'radio')) {
      await this.createFormField(field);
    }

    // Then create radio buttons (grouped by groupName)
    const radioGroups: Record<string, any[]> = {};
    for (const field of this.formConfig.filter(f => f.type === 'radio')) {
      if (!radioGroups[field.groupName]) {
        radioGroups[field.groupName] = [];
      }
      radioGroups[field.groupName].push(field);
    }

    for (const groupName in radioGroups) {
      if (radioGroups.hasOwnProperty(groupName)) {
        const groupFields = radioGroups[groupName];
        const control = this.form.get(groupName)!;

        for (const field of groupFields) {
          const ref = this.fieldContainer.createComponent(this.componentMap[field.type]);
          ref.setInput('control', control);
          ref.setInput('label', field.label);
          ref.setInput('value', field.value); // Set the value for the radio button
          
          // Set any other inputs that might exist on the radio component
          if ('disabled' in (ref.instance as any)) ref.setInput('disabled', !!field.disabled);
        }
      }
    }
  }

  private async createFormField(field: any) {
    const componentType = this.componentMap[field.type];
    if (!componentType) return;

    const ref = this.fieldContainer.createComponent(componentType);
    const control = this.form.get(field.name)!;

    if (field.type === 'dateRange') {
      ref.setInput('range', control);
    } else {
      ref.setInput('control', control);
    }

    const instance = ref.instance as any;

    if ('label' in instance && field.label) ref.setInput('label', field.label);
    if ('placeholder' in instance && field.placeholder) ref.setInput('placeholder', field.placeholder);
    if ('disabled' in instance) ref.setInput('disabled', !!field.disabled);
    if ('hint' in instance && field.hint) ref.setInput('hint', field.hint);
    if ('minLength' in instance && field.minLength) ref.setInput('minLength', field.minLength);
    if ('value' in instance && field.value !== undefined) ref.setInput('value', field.value);
  }
}