import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { CodeViewerComponent } from '../documentation/code-viewer/code-viewer.component';
import { ProgressBarComponent } from './progress-bar.component';
import { DocumentationComponent } from "../documentation/documentation.component";

@Component({
  selector: 'app-progress-bar-doc',
  standalone: true,
  imports: [CodeViewerComponent, DocumentationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-documentation 
      [publishedDate]="publishedDate" 
      [title]="title"
      [htmlCode]="htmlCode"
      [component]="progressBarComponent" 
      [tsCode]="tsCode" 
      [overviewContent]="overviewContent"
      [useCasesContent]="useCasesContent" 
      [noteContent]="noteContent" 
      [otherContent]="otherContent">
    </app-documentation>

    <ng-template #overviewContent>
      <div class="space-y-4">
        <p class="text-on-surface">
          The <code class="bg-gray-100 px-1 py-0.5 rounded text-gray-800">LibProgressBarComponent</code> provides flexible progress indicators with support for multiple modes. It's designed to give users visual feedback during operations with known or unknown duration.
        </p>
        
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-blue-800">Progress Bar Features</h3>
              <div class="mt-2 text-sm text-blue-700">
                <p>
                  This component includes several progress indication options:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Four different progress modes</li>
                  <li>Customizable color schemes</li>
                  <li>Determinate mode for known durations</li>
                  <li>Indeterminate mode for unknown durations</li>
                  <li>Buffer mode for secondary progress</li>
                  <li>Query mode for loading states</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-semibold mt-6">Key Features</h3>
        <ul class="list-disc pl-5 space-y-2 text-on-surface">
          <li>Four progress modes: determinate, indeterminate, buffer, and query</li>
          <li>Customizable progress value for determinate mode</li>
          <li>Material design compliant</li>
          <li>Responsive design</li>
          <li>Simple API with clear inputs</li>
          <li>Accessibility support</li>
          <li>Theme integration</li>
        </ul>
      </div>
    </ng-template>

    <ng-template #useCasesContent>
      <div class="space-y-6">    
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Determinate Progress</h3>
            <p class="mt-2 text-gray-600">
              Showing precise progress with determinate mode.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="determinateExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Indeterminate Progress</h3>
            <p class="mt-2 text-gray-600">
              Showing activity when duration is unknown.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="indeterminateExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Buffer Progress</h3>
            <p class="mt-2 text-gray-600">
              Showing both primary and secondary progress.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="bufferExample"></app-code-viewer>
          </div>
        </div>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Query Progress</h3>
            <p class="mt-2 text-gray-600">
              Showing loading state before progress is determined.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="queryExample"></app-code-viewer>
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
              <h3 class="text-sm font-medium text-yellow-800">Usage Notes</h3>
              <div class="mt-2 text-sm text-yellow-700">
                <p>
                  When using progress bars:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Use determinate mode when progress can be measured</li>
                  <li>Use indeterminate mode for operations of unknown duration</li>
                  <li>Buffer mode is useful for showing secondary progress</li>
                  <li>Query mode is ideal for initial loading states</li>
                  <li>Ensure progress values stay between 0 and 100</li>
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
                  <li>Always provide text alternatives for screen readers</li>
                  <li>Match progress bar color to your application theme</li>
                  <li>Consider adding percentage text for determinate mode</li>
                  <li>Use appropriate mode for each operation type</li>
                  <li>Hide progress bars when operation completes</li>
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
            <h3 class="text-lg font-medium text-gray-900">Dynamic Mode Switching</h3>
            <p class="mt-2 text-gray-600">
              Changing progress modes based on operation state.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="dynamicModeExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Component API</h3>
            <p class="mt-2 text-gray-600">
              Complete list of available properties.
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
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">mode</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Progress mode ('determinate', 'indeterminate', 'buffer', 'query')</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">value</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">number</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Current progress value (0-100)</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">bufferValue</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">number</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Buffer progress value (0-100)</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">color</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Theme color ('primary', 'accent', 'warn')</td>
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
export class ProgressBarDocComponent {
  @ViewChild('overviewContent', { static: true }) overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true }) useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;

  progressBarComponent = ProgressBarComponent;
  publishedDate = '2025-06-03';
  title = 'Progress Bar Component';

  htmlCode = `
    <lib-progress-bar 
      [mode]="'determinate'" 
      [value]="progressValue">
    </lib-progress-bar>
  `;

  tsCode = `
    import { Component } from '@angular/core';
    import { LibProgressBarComponent } from '@saad-ihhn/ihhn-host-lib/lib-progess-bar';
    
    @Component({
      selector: 'app-progress-bar-example',
      standalone: true,
      imports: [LibProgressBarComponent],
      template: \`
        <lib-progress-bar 
          [mode]="mode" 
          [value]="progressValue">
        </lib-progress-bar>
      \`,
    })
    export class ProgressBarExampleComponent {
      mode = 'determinate';
      progressValue = 45;
    }
  `;

  determinateExample = `
    @Component({
      template: \`
        <lib-progress-bar 
          [mode]="'determinate'" 
          [value]="progressValue">
        </lib-progress-bar>
      \`
    })
    export class DeterminateExample {
      progressValue = 30; // 30% progress
    }
  `;

  indeterminateExample = `
    @Component({
      template: \`
        <lib-progress-bar [mode]="'indeterminate'"></lib-progress-bar>
      \`
    })
    export class IndeterminateExample {
      // Use for operations with unknown duration
    }
  `;

  bufferExample = `
    @Component({
      template: \`
        <lib-progress-bar 
          [mode]="'buffer'" 
          [value]="primaryValue"
          [bufferValue]="bufferValue">
        </lib-progress-bar>
      \`
    })
    export class BufferExample {
      primaryValue = 30;
      bufferValue = 60;
    }
  `;

  queryExample = `
    @Component({
      template: \`
        <lib-progress-bar [mode]="'query'"></lib-progress-bar>
      \`
    })
    export class QueryExample {
      // Use for initial loading states
    }
  `;

  dynamicModeExample = `
    @Component({
      template: \`
        <lib-progress-bar 
          [mode]="currentMode" 
          [value]="progressValue">
        </lib-progress-bar>
      \`
    })
    export class DynamicModeExample {
      currentMode = 'query';
      progressValue = 0;
      
      ngOnInit() {
        // Start with query mode
        setTimeout(() => {
          this.currentMode = 'indeterminate';
          // Simulate progress after 1 second
          setTimeout(() => {
            this.currentMode = 'determinate';
            const interval = setInterval(() => {
              this.progressValue += 10;
              if (this.progressValue >= 100) clearInterval(interval);
            }, 300);
          }, 1000);
        }, 0);
      }
    }
  `;
}