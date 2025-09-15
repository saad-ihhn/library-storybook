import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { CodeViewerComponent } from '../documentation/code-viewer/code-viewer.component';
import { MonthInputComponent } from './month-input.component';
import { DocumentationComponent } from "../documentation/documentation.component";

@Component({
  selector: 'app-month-input-documentation',
  standalone: true,
  imports: [CodeViewerComponent, DocumentationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-documentation 
      [publishedDate]="publishedDate" 
      [title]="title"
      [htmlCode]="htmlCode"
      [component]="monthPickerComponent" 
      [tsCode]="tsCode" 
      [overviewContent]="overviewContent"
      [useCasesContent]="useCasesContent" 
      [noteContent]="noteContent" 
      [otherContent]="otherContent">
    </app-documentation>

    <ng-template #overviewContent>
      <div class="space-y-4">
        <p class="text-on-surface">
          The <code class="bg-gray-100 px-1 py-0.5 rounded text-gray-800">&lt;lib-month-picker&gt;</code> component provides a specialized input for selecting months and years, with built-in validation and formatting. It's ideal for forms requiring month/year inputs like credit card expiration dates or reporting periods.
        </p>
        
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-blue-800">Key Features</h3>
              <div class="mt-2 text-sm text-blue-700">
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Month/year selection with dropdowns or text input</li>
                  <li>Built-in validation for past/future dates</li>
                  <li>Customizable date formats</li>
                  <li>FormControl integration</li>
                  <li>Responsive design</li>
                  <li>Accessibility compliant</li>
                  <li>Localization support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-semibold mt-6">Component Behavior</h3>
        <ul class="list-disc pl-5 space-y-2 text-on-surface">
          <li>Automatically formats input as MM/YYYY</li>
          <li>Provides dropdown selectors for month and year</li>
          <li>Validates against minimum and maximum dates</li>
          <li>Supports both reactive and template-driven forms</li>
          <li>Integrates with Angular Material's theming</li>
        </ul>
      </div>
    </ng-template>

    <ng-template #useCasesContent>
      <div class="space-y-6">    
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Basic Month Picker</h3>
            <p class="mt-2 text-gray-600">
              Standard month picker with default settings.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="basicSetupExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">FormGroup Integration</h3>
            <p class="mt-2 text-gray-600">
              Using the month picker within a larger form with validation.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="formControlExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Future Date Validation</h3>
            <p class="mt-2 text-gray-600">
              Restricting selection to future months only.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="futureValidationExample"></app-code-viewer>
          </div>
        </div>
      </div>
    </ng-template>

    <ng-template #noteContent>
      <div class="space-y-4">    
        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-yellow-800">Validation Notes</h3>
              <div class="mt-2 text-sm text-yellow-700">
                <p>
                  When using this component:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Always validate month/year combinations (e.g., not all months have 31 days)</li>
                  <li>Consider timezone implications for your use case</li>
                  <li>Provide clear error messages for invalid dates</li>
                  <li>Test with different date formats based on user locale</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-purple-50 border-l-4 border-purple-400 p-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-purple-800">UX Recommendations</h3>
              <div class="mt-2 text-sm text-purple-700">
                <p>
                  For better user experience:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Provide clear labels indicating expected format (MM/YYYY)</li>
                  <li>Use dropdown selectors for easier input on mobile devices</li>
                  <li>Set reasonable min/max year ranges</li>
                  <li>Highlight the current month/year in dropdowns</li>
                  <li>Consider adding a "current month" quick select option</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>

    <ng-template #otherContent>
      <div class="space-y-6">
        <h2 class="text-2xl font-bold">Advanced Usage</h2>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Custom Date Range Validation</h3>
            <p class="mt-2 text-gray-600">
              Implementing custom month/year validation with specific requirements.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="customValidationExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Input Properties</h3>
            <p class="mt-2 text-gray-600">
              Complete list of available input properties.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">label</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                  <td class="px-6 py-4 text-sm text-gray-500">The label text for the month picker (default: 'Select month')</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">placeholder</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Placeholder text displayed when the input is empty (default: 'MM/YYYY')</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">control</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">FormControl</td>
                  <td class="px-6 py-4 text-sm text-gray-500">The FormControl instance for this input</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">disabled</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Whether the input is disabled (default: false)</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">minDate</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Date</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Minimum selectable date (inclusive)</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">maxDate</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Date</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Maximum selectable date (inclusive)</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">format</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Display format (default: 'MM/YYYY')</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ng-template>
  `,
  styles: [``]
})
export class MonthPickerDocComponent {
  @ViewChild('overviewContent', { static: true }) overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true }) useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;

  monthPickerComponent = MonthInputComponent;
  publishedDate = '2025-05-21';
  title = 'Month Picker Component';

  htmlCode = `
    <lib-month-picker
      [label]="'Expiration Date'"
      [placeholder]="'MM/YYYY'"
      [control]="expirationControl"
      [minDate]="minDate"
    ></lib-month-picker>
  `;

  tsCode = `
    import { Component, signal } from '@angular/core';
    import { FormControl, Validators } from '@angular/forms';
    import { LibMonthPickerComponent } from '@saad-ihhn/ihhn-host-lib/lib-forms';
    
    @Component({
      selector: 'app-month-picker-demo',
      standalone: true,
      imports: [LibMonthPickerComponent],
      template: \`
        <lib-month-picker
          [label]="'Expiration Date'"
          [placeholder]="'MM/YYYY'"
          [control]="expirationControl"
          [minDate]="minDate()"
        ></lib-month-picker>
      \`,
    })
    export class MonthPickerDemoComponent {
      expirationControl = new FormControl('', [
        Validators.required,
        Validators.pattern(/^(0[1-9]|1[0-2])\\/\\d{4}$/)
      ]);
      minDate = signal(new Date());
    }
  `;

  basicSetupExample = `
    @Component({
      selector: 'app-month-picker-demo',
      standalone: true,
      imports: [LibMonthPickerComponent],
      template: \`
        <lib-month-picker
          [label]="'Report Month'"
          [control]="reportMonthControl"
        ></lib-month-picker>
      \`,
    })
    export class MonthPickerDemoComponent {
      reportMonthControl = new FormControl('', [
        Validators.required,
        Validators.pattern(/^(0[1-9]|1[0-2])\\/\\d{4}$/)
      ]);
    }
  `;

  formControlExample = `
    // In your component class
    paymentForm = new FormGroup({
      cardNumber: new FormControl('', [Validators.required]),
      cardHolder: new FormControl('', [Validators.required]),
      expiration: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(0[1-9]|1[0-2])\\/\\d{4}$/),
        this.futureDateValidator
      ])
    });

    // In template
    <form [formGroup]="paymentForm">
      <lib-month-picker
        [label]="'Expiration Date'"
        [control]="paymentForm.controls.expiration"
      ></lib-month-picker>
    </form>
  `;

  futureValidationExample = `
    // Future date validator
    futureDateValidator(control: FormControl) {
      if (!control.value) return null;
      
      const [month, year] = control.value.split('/').map(Number);
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth() + 1;
      
      if (year < currentYear || (year === currentYear && month < currentMonth)) {
        return { pastDate: true };
      }
      return null;
    }

    // In component
    expirationControl = new FormControl('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\\/\\d{4}$/),
      this.futureDateValidator
    ]);

    // In template
    <lib-month-picker
      [label]="'Future Month'"
      [control]="expirationControl"
    ></lib-month-picker>
    
    <div *ngIf="expirationControl.hasError('pastDate')" class="error-message">
      Please select a future month
    </div>
  `;

  customValidationExample = `
    // Custom validator for fiscal year (April-March)
    function fiscalYearValidator(control: FormControl) {
      if (!control.value) return null;
      
      const [month, year] = control.value.split('/').map(Number);
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth() + 1;
      
      // Fiscal year runs April (4) to March (3) of next year
      const fiscalYear = currentMonth >= 4 ? currentYear : currentYear - 1;
      
      if (year < fiscalYear || (year === fiscalYear && month < 4)) {
        return { invalidFiscalYear: true };
      }
      return null;
    }

    // In component
    fiscalMonthControl = new FormControl('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\\/\\d{4}$/),
      fiscalYearValidator
    ]);

    // In template
    <lib-month-picker
      [label]="'Fiscal Month'"
      [control]="fiscalMonthControl"
      [minDate]="minFiscalDate"
    ></lib-month-picker>
    
    <div *ngIf="fiscalMonthControl.hasError('invalidFiscalYear')" class="error-message">
      Must be within current fiscal year (April 2023 - March 2024)
    </div>
  `;
}