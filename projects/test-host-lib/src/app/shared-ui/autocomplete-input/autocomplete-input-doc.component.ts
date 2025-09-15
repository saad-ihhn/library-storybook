import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild, signal } from '@angular/core';
import { CodeViewerComponent } from '../documentation/code-viewer/code-viewer.component';
import { AutocompleteInputComponent } from './autocomplete-input.component';
import { DocumentationComponent } from "../documentation/documentation.component";
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-autocomplete-input-doc',
  standalone: true,
  imports: [CodeViewerComponent, DocumentationComponent, ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-documentation 
      [publishedDate]="publishedDate" 
      [title]="title"
      [htmlCode]="htmlCode"
      [component]="autocompleteComponent" 
      [tsCode]="tsCode" 
      [overviewContent]="overviewContent"
      [useCasesContent]="useCasesContent" 
      [noteContent]="noteContent" 
      [otherContent]="otherContent">
    </app-documentation>

    <ng-template #overviewContent>
      <div class="space-y-4">
        <p class="text-on-surface">
          The <code class="bg-gray-100 px-1 py-0.5 rounded text-gray-800">&lt;lib-autocomplete&gt;</code> component provides a customizable autocomplete input with dropdown support and seamless integration with Angular's reactive forms.
        </p>
        
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-blue-800">Autocomplete Features</h3>
              <div class="mt-2 text-sm text-blue-700">
                <p>
                  This component includes several useful features:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Customizable label and placeholder text</li>
                  <li>FormControl integration</li>
                  <li>Disabled state support</li>
                  <li>Accessibility compliant</li>
                  <li>Filtering and search functionality</li>
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
          <li>Dynamic options loading</li>
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
            <h3 class="text-lg font-medium text-gray-900">Basic Autocomplete</h3>
            <p class="mt-2 text-gray-600">
              Simple autocomplete with default label and FormControl binding.
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
              Using the autocomplete within a FormGroup with validation.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="formGroupExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Disabled State</h3>
            <p class="mt-2 text-gray-600">
              Showing how to use the autocomplete in a disabled state.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="disabledExample"></app-code-viewer>
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
                  <li>Use Validators.required for required fields</li>
                  <li>The control value will be the selected option</li>
                  <li>Consider adding clear labels and placeholders for better UX</li>
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
                  <li>Provide clear placeholder text</li>
                  <li>Use meaningful labels</li>
                  <li>Consider adding a loading indicator for async options</li>
                  <li>Group related options together</li>
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
            <h3 class="text-lg font-medium text-gray-900">Async Options Loading</h3>
            <p class="mt-2 text-gray-600">
              Loading options asynchronously from an API.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="asyncOptionsExample"></app-code-viewer>
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
                  <td class="px-6 py-4 text-sm text-gray-500">The label text for the autocomplete (default: 'Select')</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">placeholder</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Placeholder text (default: 'Choose an option')</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">options</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">any[]</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Array of options to display in dropdown</td>
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ng-template>
  `,
  styles: ``
})
export class AutocompleteInputDocComponent {
  @ViewChild('overviewContent', { static: true }) overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true }) useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;

  autocompleteComponent = AutocompleteInputComponent;
  publishedDate = '2025-05-21';
  title = 'Autocomplete Component';

  htmlCode = `
    <lib-autocomplete
      [label]="'Country'"
      [placeholder]="'Select your country'"
      [options]="countryOptions"
      [control]="countryControl"
    ></lib-autocomplete>
  `;

  tsCode = `
    import { Component, signal } from '@angular/core';
    import { FormControl, Validators } from '@angular/forms';
    import { LibAutocompleteComponent } from '@saad-ihhn/ihhn-host-lib/lib-forms';
    
    @Component({
      selector: 'app-autocomplete-demo',
      standalone: true,
      imports: [LibAutocompleteComponent],
      template: \`
        <lib-autocomplete
          [label]="label()"
          [placeholder]="'Select an option'"
          [options]="options()"
          [control]="autocompleteControl"
        ></lib-autocomplete>
      \`,
    })
    export class AutocompleteDemoComponent {
      label = signal('Country');
      options = signal(['Pakistan', 'India', 'United States']);
      autocompleteControl = new FormControl('', [Validators.required]);
    }
  `;

  basicSetupExample = `
    @Component({
      selector: 'app-autocomplete-demo',
      standalone: true,
      imports: [LibAutocompleteComponent],
      template: \`
        <lib-autocomplete
          [label]="'Country'"
          [placeholder]="'Select your country'"
          [options]="countryOptions"
          [control]="countryControl"
        ></lib-autocomplete>
      \`,
    })
    export class AutocompleteDemoComponent {
      countryOptions = ['Pakistan', 'India', 'United States'];
      countryControl = new FormControl('');
    }
  `;

  formGroupExample = `
    // In your component class
    registrationForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      country: new FormControl('', [Validators.required])
    });

    // In template
    <form [formGroup]="registrationForm">
      <lib-autocomplete
        label="Country"
        placeholder="Select your country"
        [options]="countryOptions"
        [control]="registrationForm.controls.country"
      ></lib-autocomplete>
    </form>
  `;

  disabledExample = `
    // In component
    isDisabled = true;
    countryControl = new FormControl({value: '', disabled: this.isDisabled});

    // In template
    <lib-autocomplete
      [label]="'Disabled autocomplete'"
      [placeholder]="'Select country'"
      [options]="countryOptions"
      [control]="countryControl"
    ></lib-autocomplete>
  `;

  asyncOptionsExample = `
    // In component
    countries = signal<string[]>([]);
    isLoading = signal(false);
    countryControl = new FormControl('');

    constructor(private http: HttpClient) {}

    loadCountries() {
      this.isLoading.set(true);
      this.http.get<string[]>('/api/countries').subscribe({
        next: (countries) => {
          this.countries.set(countries);
          this.isLoading.set(false);
        },
        error: () => this.isLoading.set(false)
      });
    }

    // In template
    <lib-autocomplete
      [label]="'Country'"
      [placeholder]="'Select country'"
      [options]="countries()"
      [control]="countryControl"
    >
      <span *ngIf="isLoading()">Loading countries...</span>
    </lib-autocomplete>
  `;
}