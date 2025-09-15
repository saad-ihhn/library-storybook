import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { CodeViewerComponent } from '../documentation/code-viewer/code-viewer.component';
import { TextFieldInputComponent } from './text-field-input.component';
import { DocumentationComponent } from "../documentation/documentation.component";

@Component({
  selector: 'app-text-Input-field-documentation',
  standalone: true,
  imports: [CodeViewerComponent, DocumentationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-documentation 
      [publishedDate]="publishedDate" 
      [title]="title"
      [htmlCode]="htmlCode"
      [component]="textFieldComponent" 
      [tsCode]="tsCode" 
      [overviewContent]="overviewContent"
      [useCasesContent]="useCasesContent" 
      [noteContent]="noteContent" 
      [otherContent]="otherContent">
    </app-documentation>

    <ng-template #overviewContent>
      <div class="space-y-4">
        <p class="text-on-surface">
          The <code class="bg-gray-100 px-1 py-0.5 rounded text-gray-800">&lt;lib-text-field&gt;</code> component is a versatile form input component that provides a styled text input field with various customization options. It integrates seamlessly with Angular's Reactive Forms and Template-driven Forms.
        </p>
        
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-blue-800">Form Integration</h3>
              <div class="mt-2 text-sm text-blue-700">
                <p>
                  This component is designed to work perfectly with Angular's form controls:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Supports both Reactive Forms and Template-driven Forms</li>
                  <li>Automatically shows validation errors</li>
                  <li>Maintains consistent styling with other form controls</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-semibold mt-6">Key Features</h3>
        <ul class="list-disc pl-5 space-y-2 text-on-surface">
          <li>Customizable label and placeholder text</li>
          <li>Disabled state support</li>
          <li>FormControl integration for validation</li>
          <li>Consistent styling with Material Design</li>
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
            <h3 class="text-lg font-medium text-gray-900">Basic Form Input</h3>
            <p class="mt-2 text-gray-600">
              Standard text input field with label and placeholder in a form context.
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
              Using the text field within a FormGroup with multiple controls.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="formControlExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Validation Examples</h3>
            <p class="mt-2 text-gray-600">
              Implementing custom validation with error messages.
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
              <h3 class="text-sm font-medium text-yellow-800">Important Notes</h3>
              <div class="mt-2 text-sm text-yellow-700">
                <p>
                  When using this component:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Always provide a FormControl for proper form integration</li>
                  <li>For disabled fields, set both the disabled property and disable the FormControl</li>
                  <li>Labels are required for accessibility</li>
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
              <h3 class="text-sm font-medium text-purple-800">Customization Tips</h3>
              <div class="mt-2 text-sm text-purple-700">
                <p>
                  You can customize the text field through:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>CSS classes for different states (focus, error, etc.)</li>
                  <li>Custom validators for complex validation</li>
                  <li>Dynamic label and placeholder text</li>
                  <li>Wrapper components for additional functionality</li>
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
            <h3 class="text-lg font-medium text-gray-900">Dynamic Fields</h3>
            <p class="mt-2 text-gray-600">
              Creating text fields dynamically based on data.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="dynamicExample"></app-code-viewer>
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
                  <td class="px-6 py-4 text-sm text-gray-500">The label text for the input field</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">placeholder</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Placeholder text displayed when the input is empty</td>
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
export class TextFieldInputDocComponent  {
  @ViewChild('overviewContent', { static: true }) overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true }) useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;

  textFieldComponent = TextFieldInputComponent;
  publishedDate = '2025-05-21';
  title = 'Text Field Component';

  htmlCode = `
    <lib-text-field
      [label]="'Username'"
      [placeholder]="'Enter your username'"
      [control]="usernameControl"
      [disabled]="false"
    ></lib-text-field>
  `;

  tsCode = `
    import { Component, signal } from '@angular/core';
    import { FormControl, Validators } from '@angular/forms';
    import { LibTextFieldComponent } from '@saad-ihhn/ihhn-host-lib/lib-forms';
    
    @Component({
      selector: 'app-text-field-demo',
      standalone: true,
      imports: [LibTextFieldComponent],
      template: \`
        <lib-text-field
          [label]="label()"
          [placeholder]="placeholder()"
          [control]="usernameControl"
          [disabled]="isDisabled"
        ></lib-text-field>
      \`,
    })
    export class TextFieldDemoComponent {
      label = signal('Username');
      placeholder = signal('Enter your username');
      usernameControl = new FormControl('', [Validators.required]);
      isDisabled = false;
    }
  `;

  basicSetupExample = `
    @Component({
      selector: 'app-text-field-demo',
      standalone: true,
      imports: [LibTextFieldComponent],
      template: \`
        <lib-text-field
          [label]="'Email'"
          [placeholder]="'Enter your email'"
          [control]="emailControl"
        ></lib-text-field>
      \`,
    })
    export class TextFieldDemoComponent {
      emailControl = new FormControl('', [Validators.required, Validators.email]);
    }
  `;

  formControlExample = `
    // In your component class
    profileForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email])
    });

    // In template
    <form [formGroup]="profileForm">
      <lib-text-field
        [label]="'First Name'"
        [control]="profileForm.controls.firstName"
      ></lib-text-field>
      
      <lib-text-field
        [label]="'Last Name'"
        [control]="profileForm.controls.lastName"
      ></lib-text-field>
    </form>
  `;

  validationExample = `
    // Custom validator function
    function passwordValidator(control: FormControl) {
      const value = control.value;
      const hasNumber = /[0-9]/.test(value);
      const hasUpper = /[A-Z]/.test(value);
      const hasLower = /[a-z]/.test(value);
      const valid = hasNumber && hasUpper && hasLower;
      return valid ? null : { passwordStrength: true };
    }

    // In component
    passwordControl = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      passwordValidator
    ]);

    // Error messages
    getPasswordErrors() {
      if (this.passwordControl.hasError('required')) {
        return 'Password is required';
      }
      if (this.passwordControl.hasError('minlength')) {
        return 'Password must be at least 8 characters';
      }
      if (this.passwordControl.hasError('passwordStrength')) {
        return 'Password must contain numbers, uppercase and lowercase letters';
      }
      return '';
    }
  `;

  dynamicExample = `
    @Component({
      selector: 'app-dynamic-text-fields',
      template: \`
        <div *ngFor="let field of fields()">
          <lib-text-field
            [label]="field.label"
            [placeholder]="field.placeholder"
            [control]="field.control"
          ></lib-text-field>
        </div>
      \`,
    })
    export class DynamicTextFieldsComponent {
      fields = signal<
        Array<{
          label: string;
          placeholder: string;
          control: FormControl;
        }>
      >([]);

      addField() {
        this.fields.update(fields => [
          ...fields,
          {
            label: 'Field ' + (fields.length + 1),
            placeholder: 'Enter value',
            control: new FormControl('')
          }
        ]);
      }
    }
  `;
}