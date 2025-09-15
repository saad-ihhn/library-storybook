import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { CodeViewerComponent } from '../documentation/code-viewer/code-viewer.component';
import { DynamicObjectFormComponent } from './dynamic-object-form.component';
import { DocumentationComponent } from "../documentation/documentation.component";

@Component({
  selector: 'app-dynamic-object-form-doc',
  standalone: true,
  imports: [CodeViewerComponent, DocumentationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-documentation 
      [publishedDate]="publishedDate" 
      [title]="title"
      [htmlCode]="htmlCode"
      [component]="dynamicFormComponent" 
      [tsCode]="tsCode" 
      [overviewContent]="overviewContent"
      [useCasesContent]="useCasesContent" 
      [noteContent]="noteContent" 
      [otherContent]="otherContent">
    </app-documentation>

    <ng-template #overviewContent>
      <div class="space-y-4">
        <p class="text-on-surface">
          The <code class="bg-gray-100 px-1 py-0.5 rounded text-gray-800">DynamicObjectFormComponent</code> is a highly flexible form component that dynamically generates form fields based on a configuration object. It supports various field types and can be easily customized for different use cases.
        </p>
        
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-blue-800">Dynamic Form Features</h3>
              <div class="mt-2 text-sm text-blue-700">
                <p>
                  This component includes several powerful features:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Dynamic field generation from configuration</li>
                  <li>Support for multiple field types (email, password, date, etc.)</li>
                  <li>Built-in validation support</li>
                  <li>Customizable layout (grid or single column)</li>
                  <li>Configuration preview toggle</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-semibold mt-6">Key Features</h3>
        <ul class="list-disc pl-5 space-y-2 text-on-surface">
          <li>Configuration-driven form generation</li>
          <li>Support for 13+ field types</li>
          <li>Automatic form control creation</li>
          <li>Dynamic component rendering</li>
          <li>Built-in validators support</li>
          <li>Responsive grid layout</li>
          <li>Configuration preview toggle</li>
          <li>Default configurations for quick setup</li>
        </ul>
      </div>
    </ng-template>

    <ng-template #useCasesContent>
      <div class="space-y-6">    
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Basic Dynamic Form</h3>
            <p class="mt-2 text-gray-600">
              Basic implementation using default configuration.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="basicSetupExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Custom Configuration</h3>
            <p class="mt-2 text-gray-600">
              Creating a form with custom field configuration.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="customConfigExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Validation Setup</h3>
            <p class="mt-2 text-gray-600">
              Adding validation to dynamic form fields.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="validationExample"></app-code-viewer>
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
              <h3 class="text-sm font-medium text-yellow-800">Performance Considerations</h3>
              <div class="mt-2 text-sm text-yellow-700">
                <p>
                  When using dynamic forms:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Limit the number of dynamic fields for better performance</li>
                  <li>Consider using OnPush change detection</li>
                  <li>Reuse configurations when possible</li>
                  <li>For complex forms, consider lazy loading</li>
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
              <h3 class="text-sm font-medium text-purple-800">Configuration Tips</h3>
              <div class="mt-2 text-sm text-purple-700">
                <p>
                  For optimal dynamic forms:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Keep configuration objects simple and reusable</li>
                  <li>Use consistent naming conventions</li>
                  <li>Document your configuration schema</li>
                  <li>Consider storing configurations in a service</li>
                  <li>Validate configurations before rendering</li>
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
            <h3 class="text-lg font-medium text-gray-900">Dynamic Field Types</h3>
            <p class="mt-2 text-gray-600">
              Supported field types and their configurations.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Component</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Required Properties</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">email</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">LibEmailComponent</td>
                  <td class="px-6 py-4 text-sm text-gray-500">name, type, label</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">password</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">LibPasswordComponent</td>
                  <td class="px-6 py-4 text-sm text-gray-500">name, type, label</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">phone</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">LibPhoneComponent</td>
                  <td class="px-6 py-4 text-sm text-gray-500">name, type, label</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">date</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">LibDatePickerComponent</td>
                  <td class="px-6 py-4 text-sm text-gray-500">name, type, label</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">dateRange</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">LibDateRangePickerComponent</td>
                  <td class="px-6 py-4 text-sm text-gray-500">name, type, label</td>
                </tr>
                <!-- More rows for other field types -->
              </tbody>
            </table>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Component API</h3>
            <p class="mt-2 text-gray-600">
              Complete list of available properties and methods.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property/Method</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">formConfig</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Input</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Array of field configuration objects</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">form</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">FormGroup</td>
                  <td class="px-6 py-4 text-sm text-gray-500">The generated form group</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">showConfig</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Controls visibility of configuration preview</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">componentMap</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Record</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Maps field types to components</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">defaultConfig</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Array</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Default field configurations</td>
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
export class DynamicObjectFormDocComponent {
  @ViewChild('overviewContent', { static: true }) overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true }) useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;

  dynamicFormComponent = DynamicObjectFormComponent;
  publishedDate = '2025-06-03';
  title = 'Dynamic Object Form Component';

  htmlCode = `
    <app-dynamic-form [formConfig]="formConfig"></app-dynamic-form>
  `;

  tsCode = `
    import { Component } from '@angular/core';
    
    @Component({
      selector: 'app-dynamic-form-example',
      template: \`
        <app-dynamic-form [formConfig]="formConfig"></app-dynamic-form>
      \`
    })
    export class DynamicFormExampleComponent {
      formConfig = [
        {
          name: 'email',
          type: 'email',
          label: 'Email Address',
          placeholder: 'Enter your email',
          validators: [Validators.required, Validators.email]
        },
        {
          name: 'password',
          type: 'password',
          label: 'Password',
          placeholder: 'Create a password',
          validators: [Validators.required, Validators.minLength(8)]
        }
      ];
    }
  `;

  basicSetupExample = `
    // Using default configuration
    @Component({
      template: \`
        <app-dynamic-form></app-dynamic-form>
      \`
    })
    export class DefaultFormComponent {}
  `;

  customConfigExample = `
    // Custom configuration example
    @Component({
      template: \`
        <app-dynamic-form [formConfig]="customConfig"></app-dynamic-form>
      \`
    })
    export class CustomFormComponent {
      customConfig = [
        {
          name: 'username',
          type: 'text',
          label: 'Username',
          placeholder: 'Enter your username',
          validators: [Validators.required]
        },
        {
          name: 'birthdate',
          type: 'date',
          label: 'Date of Birth',
          validators: [Validators.required]
        },
        {
          name: 'subscribe',
          type: 'checkbox',
          label: 'Subscribe to newsletter'
        }
      ];
    }
  `;

  validationExample = `
    // Validation setup example
    @Component({
      template: \`
        <app-dynamic-form [formConfig]="validatedForm"></app-dynamic-form>
      \`
    })
    export class ValidatedFormComponent {
      validatedForm = [
        {
          name: 'email',
          type: 'email',
          label: 'Email',
          validators: [Validators.required, Validators.email]
        },
        {
          name: 'age',
          type: 'number',
          label: 'Age',
          validators: [
            Validators.required,
            Validators.min(18),
            Validators.max(99)
          ],
          errorMessages: {
            required: 'Age is required',
            min: 'Must be at least 18 years old',
            max: 'Must be under 100 years old'
          }
        }
      ];
    }
  `;
}