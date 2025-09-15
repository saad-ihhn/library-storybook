import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { CodeViewerComponent } from '../documentation/code-viewer/code-viewer.component';
import { WeekInputComponent } from './week-input.component';
import { DocumentationComponent } from "../documentation/documentation.component";

@Component({
  selector: 'app-week-documentation',
  standalone: true,
  imports: [CodeViewerComponent, DocumentationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-documentation 
      [publishedDate]="publishedDate" 
      [title]="title"
      [htmlCode]="htmlCode"
      [component]="weekComponent" 
      [tsCode]="tsCode" 
      [overviewContent]="overviewContent"
      [useCasesContent]="useCasesContent" 
      [noteContent]="noteContent" 
      [otherContent]="otherContent">
    </app-documentation>

    <ng-template #overviewContent>
      <div class="space-y-4">
        <p class="text-on-surface">
          The <code class="bg-gray-100 px-1 py-0.5 rounded text-gray-800">&lt;lib-week&gt;</code> component is a specialized input field for selecting weeks with built-in validation. It provides a user-friendly way to handle week inputs in forms.
        </p>
        
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-blue-800">Week Input Features</h3>
              <div class="mt-2 text-sm text-blue-700">
                <p>
                  This component includes several week-specific features:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Week selection with calendar interface</li>
                  <li>Built-in validation for week format</li>
                  <li>Customizable label and placeholder</li>
                  <li>FormControl integration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-semibold mt-6">Key Features</h3>
        <ul class="list-disc pl-5 space-y-2 text-on-surface">
          <li>Week format validation (YYYY-Www)</li>
          <li>Customizable label and placeholder text</li>
          <li>Disabled state support</li>
          <li>FormControl integration for validation</li>
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
            <h3 class="text-lg font-medium text-gray-900">Basic Week Input</h3>
            <p class="mt-2 text-gray-600">
              Standard week input field with label and placeholder in a form context.
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
              Using the week field within a FormGroup with validation.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="formControlExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Multiple Week Inputs</h3>
            <p class="mt-2 text-gray-600">
              Handling multiple week inputs in a single form.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="multipleInputsExample"></app-code-viewer>
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
                  <li>The default pattern validates week format (YYYY-Www)</li>
                  <li>You can customize the validation pattern as needed</li>
                  <li>Consider adding server-side validation for production</li>
                  <li>Test with various week formats</li>
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
                  <li>Consider adding a date picker for week selection</li>
                  <li>Provide clear examples of expected formats</li>
                  <li>Support week range selection if needed</li>
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
            <h3 class="text-lg font-medium text-gray-900">Week Range Selection</h3>
            <p class="mt-2 text-gray-600">
              Implementing a week range selection with validation.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="weekRangeExample"></app-code-viewer>
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
                  <td class="px-6 py-4 text-sm text-gray-500">The label text for the week field (default: 'Week')</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">placeholder</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Placeholder text displayed when the input is empty (default: 'Pick a week')</td>
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
export class WeekDocComponent {
  @ViewChild('overviewContent', { static: true }) overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true }) useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;

  weekComponent = WeekInputComponent;
  publishedDate = '2025-06-03';
  title = 'Week Input Component';

  htmlCode = `
    <lib-week
      [label]="'Select Week'"
      [placeholder]="'Choose a week'"
      [control]="weekControl"
      [disabled]="false"
    ></lib-week>
  `;

  tsCode = `
    import { Component, signal } from '@angular/core';
    import { FormControl, Validators } from '@angular/forms';
    import { LibWeekComponent } from '@saad-ihhn/ihhn-host-lib/lib-forms';
    
    @Component({
      selector: 'app-week-demo',
      standalone: true,
      imports: [LibWeekComponent],
      template: \`
        <lib-week
          [label]="label()"
          [placeholder]="placeholder()"
          [control]="weekControl"
          [disabled]="isDisabled"
        ></lib-week>
      \`,
    })
    export class WeekDemoComponent {
      label = signal('Week');
      placeholder = signal('Pick a week');
      weekControl = new FormControl('', [
        Validators.required, 
        Validators.pattern('^[0-9]{4}-W(0[1-9]|[1-4][0-9]|5[0-3])$')
      ]);
      isDisabled = false;
    }
  `;

  basicSetupExample = `
    @Component({
      selector: 'app-week-demo',
      standalone: true,
      imports: [LibWeekComponent],
      template: \`
        <lib-week
          [label]="'Reporting Week'"
          [placeholder]="'Select reporting week'"
          [control]="weekControl"
        ></lib-week>
      \`,
    })
    export class WeekDemoComponent {
      weekControl = new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{4}-W(0[1-9]|[1-4][0-9]|5[0-3])$')
      ]);
    }
  `;

  formControlExample = `
    // In your component class
    reportForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      period: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{4}-W(0[1-9]|[1-4][0-9]|5[0-3])$')
      ])
    });

    // In template
    <form [formGroup]="reportForm">
      <lib-week
        [label]="'Report Week'"
        [control]="reportForm.controls.period"
      ></lib-week>
    </form>
  `;

  multipleInputsExample = `
    // In component
    weekForm = new FormGroup({
      startWeek: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{4}-W(0[1-9]|[1-4][0-9]|5[0-3])$')
      ]),
      endWeek: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{4}-W(0[1-9]|[1-4][0-9]|5[0-3])$')
      ])
    });

    // In template
    <form [formGroup]="weekForm">
      <lib-week
        [label]="'Start Week'"
        [control]="weekForm.controls.startWeek"
      ></lib-week>
      
      <lib-week
        [label]="'End Week'"
        [control]="weekForm.controls.endWeek"
      ></lib-week>
    </form>
  `;

  weekRangeExample = `
    // Custom validator for week range
    function weekRangeValidator(control: FormGroup) {
      const startWeek = control.get('startWeek')?.value;
      const endWeek = control.get('endWeek')?.value;
      
      if (!startWeek || !endWeek) return null;
      
      const startYear = parseInt(startWeek.split('-W')[0]);
      const startWeekNum = parseInt(startWeek.split('-W')[1]);
      const endYear = parseInt(endWeek.split('-W')[0]);
      const endWeekNum = parseInt(endWeek.split('-W')[1]);
      
      if (endYear < startYear || 
          (endYear === startYear && endWeekNum < startWeekNum)) {
        return { invalidRange: true };
      }
      return null;
    }

    // In component
    weekRangeForm = new FormGroup({
      startWeek: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{4}-W(0[1-9]|[1-4][0-9]|5[0-3])$')
      ]),
      endWeek: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{4}-W(0[1-9]|[1-4][0-9]|5[0-3])$')
      ])
    }, { validators: weekRangeValidator });

    // In template
    <form [formGroup]="weekRangeForm">
      <lib-week
        [label]="'From Week'"
        [control]="weekRangeForm.controls.startWeek"
      ></lib-week>
      
      <lib-week
        [label]="'To Week'"
        [control]="weekRangeForm.controls.endWeek"
      ></lib-week>
      
      <div *ngIf="weekRangeForm.hasError('invalidRange')" class="error">
        End week must be after start week
      </div>
    </form>
  `;
}