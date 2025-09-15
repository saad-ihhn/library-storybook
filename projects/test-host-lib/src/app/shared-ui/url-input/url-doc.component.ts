import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { CodeViewerComponent } from '../documentation/code-viewer/code-viewer.component';
import { UrlInputComponent } from './url-input.component';
import { DocumentationComponent } from "../documentation/documentation.component";

@Component({
  selector: 'app-url-documentation',
  standalone: true,
  imports: [CodeViewerComponent, DocumentationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-documentation 
      [publishedDate]="publishedDate" 
      [title]="title"
      [htmlCode]="htmlCode"
      [component]="urlComponent" 
      [tsCode]="tsCode" 
      [overviewContent]="overviewContent"
      [useCasesContent]="useCasesContent" 
      [noteContent]="noteContent" 
      [otherContent]="otherContent">
    </app-documentation>

    <ng-template #overviewContent>
      <div class="space-y-4">
        <p class="text-on-surface">
          The <code class="bg-gray-100 px-1 py-0.5 rounded text-gray-800">&lt;lib-url&gt;</code> component is a specialized input field for website URLs with built-in validation and formatting. It provides a user-friendly way to handle URL inputs while ensuring proper formatting.
        </p>
        
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-blue-800">Validation Features</h3>
              <div class="mt-2 text-sm text-blue-700">
                <p>
                  This component includes several validation-focused features:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>URL format validation</li>
                  <li>Protocol detection (http/https)</li>
                  <li>Domain validation</li>
                  <li>Optional path validation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-semibold mt-6">Key Features</h3>
        <ul class="list-disc pl-5 space-y-2 text-on-surface">
          <li>URL format validation</li>
          <li>Customizable label and placeholder text</li>
          <li>Disabled state support</li>
          <li>FormControl integration for validation</li>
          <li>Automatic protocol prefix handling</li>
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
            <h3 class="text-lg font-medium text-gray-900">Basic URL Input</h3>
            <p class="mt-2 text-gray-600">
              Standard URL input field with label and placeholder in a form context.
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
              Using the URL field within a FormGroup with validation.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="formControlExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Custom URL Validation</h3>
            <p class="mt-2 text-gray-600">
              Implementing custom URL validation with specific requirements.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="customValidationExample"></app-code-viewer>
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
                  <li>Always implement server-side validation in addition to client-side</li>
                  <li>Consider adding protocol (http/https) if not provided by user</li>
                  <li>Be aware of international domain name requirements</li>
                  <li>Provide clear error messages for validation failures</li>
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
                  <li>Provide examples of valid URLs</li>
                  <li>Consider adding protocol automatically if omitted</li>
                  <li>Give immediate feedback on validation errors</li>
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
            <h3 class="text-lg font-medium text-gray-900">Protocol Handling</h3>
            <p class="mt-2 text-gray-600">
              Automatically adding protocol prefix when missing.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="protocolHandlingExample"></app-code-viewer>
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
                  <td class="px-6 py-4 text-sm text-gray-500">The label text for the URL field (default: 'Website URL')</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">placeholder</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Placeholder text displayed when the input is empty (default: 'Enter website URL')</td>
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
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">requireProtocol</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Whether to require http/https protocol (default: false)</td>
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
export class UrlDocComponent {
  @ViewChild('overviewContent', { static: true }) overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true }) useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;

  urlComponent = UrlInputComponent;
  publishedDate = '2025-05-21';
  title = 'URL Input Component';

  htmlCode = `
    <lib-url
      [label]="'Website URL'"
      [placeholder]="'Enter your website URL'"
      [control]="urlControl"
      [disabled]="false"
    ></lib-url>
  `;

  tsCode = `
    import { Component, signal } from '@angular/core';
    import { FormControl, Validators } from '@angular/forms';
    import { LibUrlComponent } from '@saad-ihhn/ihhn-host-lib/lib-forms';
    
    @Component({
      selector: 'app-url-demo',
      standalone: true,
      imports: [LibUrlComponent],
      template: \`
        <lib-url
          [label]="label()"
          [placeholder]="placeholder()"
          [control]="urlControl"
          [disabled]="isDisabled"
        ></lib-url>
      \`,
    })
    export class UrlDemoComponent {
      label = signal('Website URL');
      placeholder = signal('Enter your website URL');
      urlControl = new FormControl('', [
        Validators.required,
        Validators.pattern(/^(https?:\\/\\/)?([\\w\\d\\-]+\\.)+\\w{2,}(\\/.*)?$/)
      ]);
      isDisabled = false;
    }
  `;

  basicSetupExample = `
    @Component({
      selector: 'app-url-demo',
      standalone: true,
      imports: [LibUrlComponent],
      template: \`
        <lib-url
          [label]="'Company Website'"
          [placeholder]="'Enter company website URL'"
          [control]="websiteControl"
        ></lib-url>
      \`,
    })
    export class UrlDemoComponent {
      websiteControl = new FormControl('', [
        Validators.required,
        Validators.pattern(/^(https?:\\/\\/)?([\\w\\d\\-]+\\.)+\\w{2,}(\\/.*)?$/)
      ]);
    }
  `;

  formControlExample = `
    // In your component class
    profileForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      website: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(https?:\\/\\/)?([\\w\\d\\-]+\\.)+\\w{2,}(\\/.*)?$/)
      ])
    });

    // In template
    <form [formGroup]="profileForm">
      <lib-url
        [label]="'Personal Website'"
        [control]="profileForm.controls.website"
      ></lib-url>
    </form>
  `;

  customValidationExample = `
    // Custom validator for specific domain
    function companyDomainValidator(control: FormControl) {
      const url = control.value;
      if (!url) return null;
      
      const domainPattern = /^(https?:\\/\\/)?([\\w\\d\\-]+\\.)?company\\.com(\\/.*)?$/i;
      return domainPattern.test(url) ? null : { invalidDomain: true };
    }

    // In component
    companyUrlControl = new FormControl('', [
      Validators.required,
      companyDomainValidator
    ]);

    // In template
    <lib-url
      [label]="'Company URL'"
      [placeholder]="'Must be on company.com domain'"
      [control]="companyUrlControl"
    ></lib-url>
    
    <div *ngIf="companyUrlControl.hasError('invalidDomain')" class="error-message">
      URL must be on the company.com domain
    </div>
  `;

  protocolHandlingExample = `
    // In component
    urlControl = new FormControl('', [
      Validators.required,
      Validators.pattern(/^(https?:\\/\\/)?([\\w\\d\\-]+\\.)+\\w{2,}(\\/.*)?$/)
    ]);

    formatUrl() {
      let url = this.urlControl.value;
      if (url && !url.match(/^https?:\\/\\//)) {
        url = 'https://' + url;
        this.urlControl.setValue(url);
      }
    }

    // In template
    <lib-url
      [label]="'Secure Website'"
      [control]="urlControl"
      (blur)="formatUrl()"
    ></lib-url>
  `;
}