import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { CodeViewerComponent } from '../documentation/code-viewer/code-viewer.component';
import { CheckboxInputComponent } from './checkbox-input.component';
import { DocumentationComponent } from "../documentation/documentation.component";

@Component({
  selector: 'app-checkbox-documentation',
  standalone: true,
  imports: [CodeViewerComponent, DocumentationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-documentation 
      [publishedDate]="publishedDate" 
      [title]="title"
      [htmlCode]="htmlCode"
      [component]="checkboxComponent" 
      [tsCode]="tsCode" 
      [overviewContent]="overviewContent"
      [useCasesContent]="useCasesContent" 
      [noteContent]="noteContent" 
      [otherContent]="otherContent">
    </app-documentation>

    <ng-template #overviewContent>
      <div class="space-y-4">
        <p class="text-on-surface">
          The <code class="bg-gray-100 px-1 py-0.5 rounded text-gray-800">&lt;lib-checkbox&gt;</code> component provides a customizable checkbox input with label support and seamless integration with Angular's reactive forms.
        </p>
        
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-blue-800">Checkbox Features</h3>
              <div class="mt-2 text-sm text-blue-700">
                <p>
                  This component includes several useful features:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Customizable label text</li>
                  <li>FormControl integration</li>
                  <li>Disabled state support</li>
                  <li>Accessibility compliant</li>
                  <li>Simple and clean design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-semibold mt-6">Key Features</h3>
        <ul class="list-disc pl-5 space-y-2 text-on-surface">
          <li>Reactive forms support</li>
          <li>Customizable label text</li>
          <li>Disabled state support</li>
          <li>Checked/unchecked state management</li>
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
            <h3 class="text-lg font-medium text-gray-900">Basic Checkbox</h3>
            <p class="mt-2 text-gray-600">
              Simple checkbox with default label and FormControl binding.
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
              Using the checkbox within a FormGroup with validation.
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
              Showing how to use the checkbox in a disabled state.
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
                  <li>Use Validators.requiredTrue for required checkboxes</li>
                  <li>The control value will be boolean (true/false)</li>
                  <li>Consider adding clear labels for better UX</li>
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
                  <li>Position checkboxes consistently in your forms</li>
                  <li>Use clear, concise labels</li>
                  <li>Group related checkboxes together</li>
                  <li>Consider adding helper text for complex options</li>
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
            <h3 class="text-lg font-medium text-gray-900">Checkbox Array</h3>
            <p class="mt-2 text-gray-600">
              Implementing multiple checkboxes bound to an array of values.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="checkboxArrayExample"></app-code-viewer>
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
                  <td class="px-6 py-4 text-sm text-gray-500">The label text for the checkbox (default: 'Check me!')</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">control</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">FormControl</td>
                  <td class="px-6 py-4 text-sm text-gray-500">The FormControl instance for this checkbox</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">disabled</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Whether the checkbox is disabled (default: false)</td>
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
export class CheckboxInputDocComponent {
  @ViewChild('overviewContent', { static: true }) overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true }) useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;

  checkboxComponent = CheckboxInputComponent;
  publishedDate = '2025-05-21';
  title = 'Checkbox Component';

  htmlCode = `
    <lib-checkbox
      [label]="'Accept Terms'"
      [control]="termsControl"
    ></lib-checkbox>
  `;

  tsCode = `
    import { Component, signal } from '@angular/core';
    import { FormControl, Validators } from '@angular/forms';
    import { LibCheckboxComponent } from '@saad-ihhn/ihhn-host-lib/lib-forms';
    
    @Component({
      selector: 'app-checkbox-demo',
      standalone: true,
      imports: [LibCheckboxComponent],
      template: \`
        <lib-checkbox
          [label]="label()"
          [control]="checkboxControl"
        ></lib-checkbox>
      \`,
    })
    export class CheckboxDemoComponent {
      label = signal('Check me!');
      checkboxControl = new FormControl(false, [Validators.requiredTrue]);
    }
  `;

  basicSetupExample = `
    @Component({
      selector: 'app-checkbox-demo',
      standalone: true,
      imports: [LibCheckboxComponent],
      template: \`
        <lib-checkbox
          [label]="'Subscribe to newsletter'"
          [control]="newsletterControl"
        ></lib-checkbox>
      \`,
    })
    export class CheckboxDemoComponent {
      newsletterControl = new FormControl(false);
    }
  `;

  formGroupExample = `
    // In your component class
    registrationForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      acceptTerms: new FormControl(false, [Validators.requiredTrue])
    });

    // In template
    <form [formGroup]="registrationForm">
      <lib-checkbox
        label="I accept the terms and conditions"
        [control]="registrationForm.controls.acceptTerms"
      ></lib-checkbox>
    </form>
  `;

  disabledExample = `
    // In component
    isDisabled = true;
    checkboxControl = new FormControl({value: false, disabled: this.isDisabled});

    // In template
    <lib-checkbox
      [label]="'Disabled checkbox'"
      [control]="checkboxControl"
    ></lib-checkbox>
  `;

  checkboxArrayExample = `
    // In component
    options = [
      { id: 1, label: 'Option 1' },
      { id: 2, label: 'Option 2' },
      { id: 3, label: 'Option 3' }
    ];
    
    selectedOptions = new FormArray([]);

    toggleOption(optionId: number, isChecked: boolean) {
      if (isChecked) {
        this.selectedOptions.push(new FormControl(optionId));
      } else {
        const index = this.selectedOptions.controls
          .findIndex(control => control.value === optionId);
        if (index >= 0) {
          this.selectedOptions.removeAt(index);
        }
      }
    }

    // In template
    <div *ngFor="let option of options">
      <lib-checkbox
        [label]="option.label"
        (change)="toggleOption(option.id, $event)"
      ></lib-checkbox>
    </div>
    
    <div class="mt-2">
      Selected options: {{ selectedOptions.value | json }}
    </div>
  `;
}