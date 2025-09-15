import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { CodeViewerComponent } from '../documentation/code-viewer/code-viewer.component';
import { TimePickerInputComponent } from './time-picker-input.component';
import { DocumentationComponent } from "../documentation/documentation.component";

@Component({
  selector: 'app-time-picker-documentation',
  standalone: true,
  imports: [CodeViewerComponent, DocumentationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-documentation 
      [publishedDate]="publishedDate" 
      [title]="title"
      [htmlCode]="htmlCode"
      [component]="timePickerComponent" 
      [tsCode]="tsCode" 
      [overviewContent]="overviewContent"
      [useCasesContent]="useCasesContent" 
      [noteContent]="noteContent" 
      [otherContent]="otherContent">
    </app-documentation>

    <ng-template #overviewContent>
      <div class="space-y-4">
        <p class="text-on-surface">
          The <code class="bg-gray-100 px-1 py-0.5 rounded text-gray-800">&lt;lib-time-picker&gt;</code> component provides a user-friendly interface for time selection with flexible formatting options and built-in validation.
        </p>
        
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-blue-800">Time Picker Features</h3>
              <div class="mt-2 text-sm text-blue-700">
                <p>
                  This component includes several advanced features:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Flexible time format support (12-hour and 24-hour)</li>
                  <li>Built-in time validation</li>
                  <li>Customizable label and placeholder</li>
                  <li>Seamless FormControl integration</li>
                  <li>Disabled state support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-semibold mt-6">Key Features</h3>
        <ul class="list-disc pl-5 space-y-2 text-on-surface">
          <li>Supports both 12-hour (hh:mm a) and 24-hour (HH:mm) formats</li>
          <li>Customizable label and placeholder text</li>
          <li>Disabled state support</li>
          <li>FormControl integration for validation</li>
          <li>Responsive design</li>
          <li>Accessibility support (ARIA attributes)</li>
          <li>Error state visualization</li>
          <li>Optional time picker interface</li>
        </ul>
      </div>
    </ng-template>

    <ng-template #useCasesContent>
      <div class="space-y-6">    
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Basic Time Input</h3>
            <p class="mt-2 text-gray-600">
              Standard time input field with label and placeholder.
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
              Using the time picker within a FormGroup with validation.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="formControlExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Time Range Selection</h3>
            <p class="mt-2 text-gray-600">
              Implementing a time range selection with validation.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="timeRangeExample"></app-code-viewer>
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
                  <li>The component validates proper time format</li>
                  <li>Consider adding server-side validation for production</li>
                  <li>Test with various time formats (12-hour and 24-hour)</li>
                  <li>Handle timezone considerations if needed</li>
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
                  <li>Be consistent with time format across your application</li>
                  <li>Consider user preferences (12-hour vs 24-hour)</li>
                  <li>Provide clear examples of expected formats</li>
                  <li>Use a time picker interface for mobile users</li>
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
            <h3 class="text-lg font-medium text-gray-900">Time Format Options</h3>
            <p class="mt-2 text-gray-600">
              Different time format configurations for the time picker.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="timeFormatExample"></app-code-viewer>
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
                  <td class="px-6 py-4 text-sm text-gray-500">The label text for the time field (default: 'Time')</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">placeholder</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Placeholder text displayed when the input is empty (default: 'Select time')</td>
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
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">timeFormat</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Time format string (e.g., 'hh:mm a' or 'HH:mm')</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">showPicker</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Whether to show a time picker interface (default: false)</td>
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
export class TimePickerDocComponent {
  @ViewChild('overviewContent', { static: true }) overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true }) useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;

  timePickerComponent = TimePickerInputComponent;
  publishedDate = '2025-06-03';
  title = 'Time Picker Component';

  htmlCode = `
    <lib-time-picker
      [label]="'Select Time'"
      [placeholder]="'Choose a time'"
      [control]="timeControl"
      [timeFormat]="'hh:mm a'"
    ></lib-time-picker>
  `;

  tsCode = `
    import { Component, signal } from '@angular/core';
    import { FormControl, Validators } from '@angular/forms';
    import { LibTimePickerComponent } from '@saad-ihhn/ihhn-host-lib/lib-forms';
    
    @Component({
      selector: 'app-time-picker-demo',
      standalone: true,
      imports: [LibTimePickerComponent],
      template: \`
        <lib-time-picker
          [label]="label()"
          [placeholder]="placeholder()"
          [control]="timeControl"
          [timeFormat]="'HH:mm'"
        ></lib-time-picker>
      \`,
    })
    export class TimePickerDemoComponent {
      label = signal('Time');
      placeholder = signal('Select time');
      timeControl = new FormControl('', [
        Validators.required,
        Validators.pattern('^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$')
      ]);
    }
  `;

  basicSetupExample = `
    @Component({
      selector: 'app-time-demo',
      standalone: true,
      imports: [LibTimePickerComponent],
      template: \`
        <lib-time-picker
          [label]="'Meeting Time'"
          [placeholder]="'Select meeting time'"
          [control]="timeControl"
        ></lib-time-picker>
      \`,
    })
    export class TimeDemoComponent {
      timeControl = new FormControl('', [
        Validators.required,
        Validators.pattern('^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$')
      ]);
    }
  `;

  formControlExample = `
    // In your component class
    appointmentForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      time: new FormControl('', [
        Validators.required,
        Validators.pattern('^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$')
      ])
    });

    // In template
    <form [formGroup]="appointmentForm">
      <lib-time-picker
        [label]="'Appointment Time'"
        [control]="appointmentForm.controls.time"
        [timeFormat]="'hh:mm a'"
      ></lib-time-picker>
    </form>
  `;

  timeRangeExample = `
    // Custom validator for time range
    function timeRangeValidator(control: FormGroup) {
      const startTime = control.get('startTime')?.value;
      const endTime = control.get('endTime')?.value;
      
      if (!startTime || !endTime) return null;
      
      const start = new Date(\`1970-01-01T\${startTime}\`);
      const end = new Date(\`1970-01-01T\${endTime}\`);
      
      if (end <= start) {
        return { invalidRange: true };
      }
      return null;
    }

    // In component
    timeRangeForm = new FormGroup({
      startTime: new FormControl('', [
        Validators.required,
        Validators.pattern('^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$')
      ]),
      endTime: new FormControl('', [
        Validators.required,
        Validators.pattern('^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$')
      ])
    }, { validators: timeRangeValidator });

    // In template
    <form [formGroup]="timeRangeForm">
      <lib-time-picker
        [label]="'From'"
        [control]="timeRangeForm.controls.startTime"
      ></lib-time-picker>
      
      <lib-time-picker
        [label]="'To'"
        [control]="timeRangeForm.controls.endTime"
      ></lib-time-picker>
      
      <div *ngIf="timeRangeForm.hasError('invalidRange')" class="error">
        End time must be after start time
      </div>
    </form>
  `;

  timeFormatExample = `
    // 12-hour format with AM/PM
    <lib-time-picker
      [label]="'Event Time'"
      [control]="eventTimeControl"
      [timeFormat]="'hh:mm a'"
    ></lib-time-picker>

    // 24-hour format
    <lib-time-picker
      [label]="'Schedule Time'"
      [control]="scheduleTimeControl"
      [timeFormat]="'HH:mm'"
    ></lib-time-picker>

    // With time picker interface
    <lib-time-picker
      [label]="'Select Time'"
      [control]="timeControl"
      [showPicker]="true"
    ></lib-time-picker>
  `;
}