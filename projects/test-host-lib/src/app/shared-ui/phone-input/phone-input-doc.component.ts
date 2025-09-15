import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { CodeViewerComponent } from '../documentation/code-viewer/code-viewer.component';
import { PhoneInputComponent } from './phone-input.component';
import { DocumentationComponent } from "../documentation/documentation.component";

@Component({
  selector: 'app-phone-input-documentation',
  standalone: true,
  imports: [CodeViewerComponent, DocumentationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-documentation 
      [publishedDate]="publishedDate" 
      [title]="title"
      [htmlCode]="htmlCode"
      [component]="phoneComponent" 
      [tsCode]="tsCode" 
      [overviewContent]="overviewContent"
      [useCasesContent]="useCasesContent" 
      [noteContent]="noteContent" 
      [otherContent]="otherContent">
    </app-documentation>

    <ng-template #overviewContent>
      <div class="space-y-4">
        <p class="text-on-surface">
          The <code class="bg-gray-100 px-1 py-0.5 rounded text-gray-800">&lt;lib-phone&gt;</code> component is a specialized input field for phone numbers with built-in validation and formatting. It provides a user-friendly way to handle phone number inputs while ensuring proper formatting.
        </p>
        
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-blue-800">Phone Number Features</h3>
              <div class="mt-2 text-sm text-blue-700">
                <p>
                  This component includes several phone-specific features:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>International phone number support</li>
                  <li>Built-in validation for phone number formats</li>
                  <li>Optional formatting as user types</li>
                  <li>Country code support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-semibold mt-6">Key Features</h3>
        <ul class="list-disc pl-5 space-y-2 text-on-surface">
          <li>Phone number validation</li>
          <li>Customizable label and placeholder text</li>
          <li>Disabled state support</li>
          <li>FormControl integration for validation</li>
          <li>International number support</li>
          <li>Responsive design</li>
          <li>Accessibility support (ARIA attributes)</li>
          <li>Error state visualization</li>
        </ul>
      </div>
    </ng-template>

    <ng-template #useCasesContent>
      <div class="space-y-6">    
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Basic Phone Input</h3>
            <p class="mt-2 text-gray-600">
              Standard phone input field with label and placeholder in a form context.
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
              Using the phone field within a FormGroup with validation.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="formControlExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">International Numbers</h3>
            <p class="mt-2 text-gray-600">
              Handling international phone numbers with country codes.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="internationalExample"></app-code-viewer>
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
                  <li>The default pattern validates international phone numbers</li>
                  <li>You can customize the validation pattern as needed</li>
                  <li>Consider adding server-side validation for production</li>
                  <li>Test with various phone number formats</li>
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
              <h3 class="text-sm font-medium text-purple-800">Formatting Tips</h3>
              <div class="mt-2 text-sm text-purple-700">
                <p>
                  For better user experience:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Consider adding automatic formatting as users type</li>
                  <li>Provide clear examples of expected formats</li>
                  <li>Support country code selection if needed</li>
                  <li>Use consistent styling with other form fields</li>
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
            <h3 class="text-lg font-medium text-gray-900">Country Code Selection</h3>
            <p class="mt-2 text-gray-600">
              Implementing a country code dropdown with the phone input.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="countryCodeExample"></app-code-viewer>
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
                  <td class="px-6 py-4 text-sm text-gray-500">The label text for the phone field (default: 'Phone Number')</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">placeholder</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Placeholder text displayed when the input is empty (default: 'Enter phone number')</td>
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
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">defaultCountry</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Default country code (e.g., 'US', 'GB')</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ng-template>
  `,
  styles: ``
})
export class PhoneInputDocComponent {
  @ViewChild('overviewContent', { static: true }) overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true }) useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;

  phoneComponent = PhoneInputComponent;
  publishedDate = '2025-05-21';
  title = 'Phone Input Component';

  htmlCode = `
    <lib-phone
      [label]="'Phone Number'"
      [placeholder]="'Enter your phone number'"
      [control]="phoneControl"
      [disabled]="false"
    ></lib-phone>
  `;

  tsCode = `
    import { Component, signal } from '@angular/core';
    import { FormControl, Validators } from '@angular/forms';
    import { LibPhoneComponent } from '@saad-ihhn/ihhn-host-lib/lib-forms';
    
    @Component({
      selector: 'app-phone-demo',
      standalone: true,
      imports: [LibPhoneComponent],
      template: \`
        <lib-phone
          [label]="label()"
          [placeholder]="placeholder()"
          [control]="phoneControl"
          [disabled]="isDisabled"
        ></lib-phone>
      \`,
    })
    export class PhoneDemoComponent {
      label = signal('Phone Number');
      placeholder = signal('Enter phone number');
      phoneControl = new FormControl('', [
        Validators.required, 
        Validators.pattern('^\\+?[0-9]\\d{0,14}$')
      ]);
      isDisabled = false;
    }
  `;

  basicSetupExample = `
    @Component({
      selector: 'app-phone-demo',
      standalone: true,
      imports: [LibPhoneComponent],
      template: \`
        <lib-phone
          [label]="'Mobile Number'"
          [placeholder]="'Enter your mobile number'"
          [control]="phoneControl"
        ></lib-phone>
      \`,
    })
    export class PhoneDemoComponent {
      phoneControl = new FormControl('', [
        Validators.required,
        Validators.pattern('^\\+?[0-9]\\d{0,14}$')
      ]);
    }
  `;

  formControlExample = `
    // In your component class
    contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('^\\+?[0-9]\\d{0,14}$')
      ])
    });

    // In template
    <form [formGroup]="contactForm">
      <lib-phone
        [label]="'Contact Number'"
        [control]="contactForm.controls.phone"
      ></lib-phone>
    </form>
  `;

  internationalExample = `
    // Custom validator for international numbers
    function internationalPhoneValidator(control: FormControl) {
      const value = control.value;
      if (!value) return null;
      
      // Basic international phone validation
      const isValid = /^\+[1-9]{1}[0-9]{3,14}$/.test(value);
      return isValid ? null : { invalidInternational: true };
    }

    // In component
    phoneControl = new FormControl('', [
      Validators.required,
      internationalPhoneValidator
    ]);

    // In template
    <lib-phone
      [label]="'International Number'"
      [placeholder]="'+CountryCode Number'"
      [control]="phoneControl"
    ></lib-phone>
    
    <div *ngIf="phoneControl.hasError('invalidInternational')" class="error">
      Please enter a valid international number starting with + and country code
    </div>
  `;

  countryCodeExample = `
    // In component
    countries = [
      { code: 'US', name: 'United States', prefix: '+1' },
      { code: 'GB', name: 'United Kingdom', prefix: '+44' },
      { code: 'DE', name: 'Germany', prefix: '+49' }
    ];
    
    selectedCountry = signal(this.countries[0]);
    phoneControl = new FormControl('', [Validators.required]);

    get fullPhoneNumber() {
      return \`\${this.selectedCountry().prefix}\${this.phoneControl.value}\`;
    }

    // In template
    <div class="flex gap-2">
      <select 
        [ngModel]="selectedCountry()" 
        (ngModelChange)="selectedCountry.set($event)"
        class="border rounded p-2"
      >
        <option *ngFor="let country of countries" [ngValue]="country">
          {{ country.name }} ({{ country.prefix }})
        </option>
      </select>
      
      <lib-phone
        [label]="'Phone Number'"
        [control]="phoneControl"
        [placeholder]="'Enter phone number without country code'"
      ></lib-phone>
    </div>
    
    <div class="mt-2">
      Full international number: {{ fullPhoneNumber }}
    </div>
  `;
}