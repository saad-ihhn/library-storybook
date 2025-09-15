import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { CodeViewerComponent } from '../documentation/code-viewer/code-viewer.component';
import { SelectInputComponent } from './select-input.component';
import { DocumentationComponent } from "../documentation/documentation.component";


@Component({
  selector: 'app-select-input-documentation',
  standalone: true,
  imports: [CodeViewerComponent, DocumentationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-documentation 
      [publishedDate]="publishedDate" 
      [title]="title"
      [htmlCode]="htmlCode"
      [component]="selectComponent" 
      [tsCode]="tsCode" 
      [overviewContent]="overviewContent"
      [useCasesContent]="useCasesContent" 
      [noteContent]="noteContent" 
      [otherContent]="otherContent">
    </app-documentation>

    <ng-template #overviewContent>
      <div class="space-y-4">
        <p class="text-on-surface">
          The <code class="bg-gray-100 px-1 py-0.5 rounded text-gray-800">&lt;lib-select&gt;</code> component provides a customizable select input with label support, placeholder text, and seamless integration with Angular's reactive forms.
        </p>
        
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-blue-800">Select Input Features</h3>
              <div class="mt-2 text-sm text-blue-700">
                <p>
                  This component includes several useful features:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Customizable label and placeholder text</li>
                  <li>FormControl integration</li>
                  <li>Disabled state support</li>
                  <li>Accessibility compliant</li>
                  <li>Option grouping support</li>
                  <li>Simple and clean design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-semibold mt-6">Key Features</h3>
        <ul class="list-disc pl-5 space-y-2 text-on-surface">
          <li>Reactive forms support</li>
          <li>Customizable label and placeholder</li>
          <li>Disabled state support</li>
          <li>Dynamic options from an array</li>
          <li>Single and multiple selection modes</li>
          <li>Accessibility support (ARIA attributes)</li>
          <li>Responsive design</li>
          <li>Simple API</li>
        </ul>
      </div>
    </ng-template>

    <ng-template #useCasesContent>
      <div class="space-y-6">    
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Basic Select Input</h3>
            <p class="mt-2 text-gray-600">
              Simple select input with options and FormControl binding.
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
              Using select input within a FormGroup with validation.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="formGroupExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Dynamic Options</h3>
            <p class="mt-2 text-gray-600">
              Creating select options dynamically from an array.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="dynamicOptionsExample"></app-code-viewer>
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
                  <li>Use Validators.required for mandatory fields</li>
                  <li>The control value will be the value of the selected option</li>
                  <li>For multiple select, the value will be an array of selected values</li>
                  <li>Test with screen readers for accessibility</li>
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
              <h3 class="text-sm font-medium text-purple-800">UX Tips</h3>
              <div class="mt-2 text-sm text-purple-700">
                <p>
                  For better user experience:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Provide clear and concise labels</li>
                  <li>Use meaningful placeholder text</li>
                  <li>Sort options logically (alphabetically, by frequency, etc.)</li>
                  <li>Consider adding a search feature for long option lists</li>
                  <li>Group related options when appropriate</li>
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
            <h3 class="text-lg font-medium text-gray-900">Disabled State</h3>
            <p class="mt-2 text-gray-600">
              Implementing disabled state for select input.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="disabledExample"></app-code-viewer>
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
                  <td class="px-6 py-4 text-sm text-gray-500">The label for the select field (default: 'Select')</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">placeholder</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Placeholder text (default: 'Select an option')</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">options</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Array&lt;{{ '{' }}value: any, label: string{{ '}' }}&gt;</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Array of options to display in the select</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">control</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">FormControl</td>
                  <td class="px-6 py-4 text-sm text-gray-500">The FormControl instance for the select field</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">disabled</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Whether the select is disabled (default: false)</td>
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
export class SelectInputDocComponent {
  @ViewChild('overviewContent', { static: true }) overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true }) useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;

  selectComponent = SelectInputComponent;
  publishedDate = '2025-05-21';
  title = 'Select Input Component';

  htmlCode = `
    <form [formGroup]="selectForm">
      <lib-select
        [label]="'Country'"
        [placeholder]="'Select your country'"
        [options]="countryOptions"
        [control]="selectForm.controls['country']"
      ></lib-select>
    </form>
  `;

  tsCode = `
    import { Component } from '@angular/core';
    import { FormControl, FormGroup, Validators } from '@angular/forms';
    import { LibSelectComponent } from '@saad-ihhn/ihhn-host-lib/lib-forms';
    
    @Component({
      selector: 'app-select-demo',
      standalone: true,
      imports: [LibSelectComponent],
      template: \`
        <form [formGroup]="selectForm">
          <lib-select
            [label]="'Country'"
            [placeholder]="'Select your country'"
            [options]="countryOptions"
            [control]="selectForm.controls['country']"
          ></lib-select>
        </form>
      \`,
    })
    export class SelectDemoComponent {
      selectForm = new FormGroup({
        country: new FormControl('', [Validators.required])
      });

      countryOptions = [
        { value: 'us', label: 'United States' },
        { value: 'ca', label: 'Canada' },
        { value: 'uk', label: 'United Kingdom' }
      ];
    }
  `;

  basicSetupExample = `
    @Component({
      selector: 'app-select-demo',
      standalone: true,
      imports: [LibSelectComponent],
      template: \`
        <div>
          <lib-select
            [label]="'Language'"
            [placeholder]="'Select a language'"
            [options]="languageOptions"
            [control]="languageControl"
          ></lib-select>
        </div>
      \`,
    })
    export class SelectDemoComponent {
      languageControl = new FormControl('en');
      
      languageOptions = [
        { value: 'en', label: 'English' },
        { value: 'es', label: 'Spanish' },
        { value: 'fr', label: 'French' }
      ];
    }
  `;

  formGroupExample = `
    // In your component class
    userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      country: new FormControl('', [Validators.required])
    });

    // In template
    <form [formGroup]="userForm">
      <lib-select
        [label]="'Country'"
        [placeholder]="'Select your country'"
        [options]="countryOptions"
        [control]="userForm.controls.country"
      ></lib-select>
    </form>
  `;

  dynamicOptionsExample = `
    // In component
    cities = [
      { value: 'nyc', label: 'New York City' },
      { value: 'la', label: 'Los Angeles' },
      { value: 'chi', label: 'Chicago' },
      { value: 'hou', label: 'Houston' }
    ];
    
    cityControl = new FormControl('');

    // In template
    <lib-select
      [label]="'City'"
      [placeholder]="'Select a city'"
      [options]="cities"
      [control]="cityControl"
    ></lib-select>
  `;

  disabledExample = `
    // In component
    isDisabled = true;
    paymentMethodControl = new FormControl({value: '', disabled: this.isDisabled});

    paymentOptions = [
      { value: 'credit', label: 'Credit Card' },
      { value: 'paypal', label: 'PayPal' },
      { value: 'bank', label: 'Bank Transfer' }
    ];

    // In template
    <lib-select
      [label]="'Payment Method'"
      [placeholder]="'Select payment method'"
      [options]="paymentOptions"
      [control]="paymentMethodControl"
      [disabled]="isDisabled"
    ></lib-select>
  `;
}