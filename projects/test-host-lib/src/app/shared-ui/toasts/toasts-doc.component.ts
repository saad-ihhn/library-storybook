import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { CodeViewerComponent } from '../documentation/code-viewer/code-viewer.component';
import { DocumentationComponent } from "../documentation/documentation.component";
import { ToastsComponent } from './toasts.component';

@Component({
  selector: 'app-toasts-doc',
  standalone: true,
  imports: [CodeViewerComponent, DocumentationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-documentation 
      [publishedDate]="publishedDate" 
      [title]="title"
      [htmlCode]="htmlCode"
      [component]="toastsComponent" 
      [tsCode]="tsCode" 
      [overviewContent]="overviewContent"
      [useCasesContent]="useCasesContent" 
      [noteContent]="noteContent" 
      [otherContent]="otherContent">
    </app-documentation>

    <ng-template #overviewContent>
      <div class="space-y-4">
        <p class="text-on-surface">
          The <code class="bg-gray-100 px-1 py-0.5 rounded text-gray-800">LibToastService</code> provides a simple way to display toast notifications with different severity levels. Toasts are non-modal, time-limited messages that appear at the bottom of the screen.
        </p>
        
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-blue-800">Key Features</h3>
              <div class="mt-2 text-sm text-blue-700">
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Four severity levels: success, info, warning, and error</li>
                  <li>Auto-dismiss after configurable timeout</li>
                  <li>Positioning control (top/bottom, left/right/center)</li>
                  <li>Customizable duration for each toast</li>
                  <li>Accessibility compliant (ARIA live regions)</li>
                  <li>Simple API with one-line method calls</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-semibold mt-6">Behavior</h3>
        <ul class="list-disc pl-5 space-y-2 text-on-surface">
          <li>Default display duration: 5 seconds (configurable)</li>
          <li>Multiple toasts stack vertically</li>
          <li>Newest toasts appear at the bottom of the stack</li>
          <li>Clicking on a toast dismisses it immediately</li>
          <li>Responsive design adapts to screen size</li>
        </ul>
      </div>
    </ng-template>

    <ng-template #useCasesContent>
      <div class="space-y-6">    
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Basic Usage</h3>
            <p class="mt-2 text-gray-600">
              Showing different types of toast notifications.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="basicUsageExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Custom Duration</h3>
            <p class="mt-2 text-gray-600">
              Controlling how long a toast remains visible.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="customDurationExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Position Configuration</h3>
            <p class="mt-2 text-gray-600">
              Changing where toasts appear on screen.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="positionConfigExample"></app-code-viewer>
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
              <h3 class="text-sm font-medium text-yellow-800">Usage Guidelines</h3>
              <div class="mt-2 text-sm text-yellow-700">
                <p>
                  When using toast notifications:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Use sparingly - don't overwhelm users with too many toasts</li>
                  <li>Reserve error toasts for genuine error conditions</li>
                  <li>Keep messages concise and actionable</li>
                  <li>Consider adding action buttons for important notifications</li>
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
              <h3 class="text-sm font-medium text-purple-800">UX Recommendations</h3>
              <div class="mt-2 text-sm text-purple-700">
                <p>
                  For optimal user experience:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Use appropriate colors for each severity level</li>
                  <li>Include clear icons to quickly communicate message type</li>
                  <li>Allow users to dismiss toasts manually</li>
                  <li>Consider persistent toasts for critical errors</li>
                  <li>Animate entrance and exit for smooth transitions</li>
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
            <h3 class="text-lg font-medium text-gray-900">Global Configuration</h3>
            <p class="mt-2 text-gray-600">
              Setting default options for all toasts in your application.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="globalConfigExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Service Methods</h3>
            <p class="mt-2 text-gray-600">
              Complete list of available service methods.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Parameters</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">success</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">message: string, options?: ToastOptions</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Shows a success toast (green)</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">info</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">message: string, options?: ToastOptions</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Shows an info toast (blue)</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">warning</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">message: string, options?: ToastOptions</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Shows a warning toast (orange)</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">error</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">message: string, options?: ToastOptions</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Shows an error toast (red)</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">clearAll</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">none</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Dismisses all currently visible toasts</td>
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
export class ToastsDocComponent {
  @ViewChild('overviewContent', { static: true }) overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true }) useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;

  toastsComponent = ToastsComponent;
  publishedDate = '2025-05-21';
  title = 'Toast Notifications Service';

  htmlCode = `
    <!-- In your component template -->
    <lib-mat-button (matClick)="showToast()">Show Toast</lib-mat-button>
  `;

  tsCode = `
    import { Component } from '@angular/core';
    import { LibToastService } from '@saad-ihhn/ihhn-host-lib/services';
    import { LibMatButtonComponent } from '@saad-ihhn/ihhn-host-lib/lib-buttons';
    
    @Component({
      selector: 'app-toast-demo',
      standalone: true,
      imports: [LibMatButtonComponent],
      template: \`
        <lib-mat-button (matClick)="showToast()">Show Toast</lib-mat-button>
      \`,
    })
    export class ToastDemoComponent {
      constructor(private toastService: LibToastService) {}
    
      showToast() {
        this.toastService.success('Operation completed successfully!');
      }
    }
  `;

  basicUsageExample = `
    // In your component
    import { LibToastService } from '@saad-ihhn/ihhn-host-lib/services';
    
    constructor(private toastService: LibToastService) {}
    
    // Basic usage examples
    showSuccessToast() {
      this.toastService.success('Data saved successfully!');
    }
    
    showInfoToast() {
      this.toastService.info('New update available');
    }
    
    showWarningToast() {
      this.toastService.warning('Session will expire soon');
    }
    
    showErrorToast() {
      this.toastService.error('Failed to load data');
    }
  `;

  customDurationExample = `
    // Toast that stays visible for 8 seconds
    this.toastService.info('This message will stay longer', { duration: 8000 });
    
    // Persistent toast (won't auto-dismiss)
    this.toastService.warning('Important: Read this message', { duration: 0 });
    
    // Quick toast (only 2 seconds)
    this.toastService.success('Quick notification', { duration: 2000 });
  `;

  positionConfigExample = `
    // Configure toast position (top right)
    this.toastService.success('Action completed', { 
      position: {
        horizontal: 'right',
        vertical: 'top'
      }
    });
    
    // Available position options:
    // horizontal: 'left' | 'center' | 'right'
    // vertical: 'top' | 'bottom'
  `;

  globalConfigExample = `
    // In your AppComponent or CoreModule
    import { LibToastService, ToastOptions } from '@saad-ihhn/ihhn-host-lib/services';
    
    constructor(toastService: LibToastService) {
      // Set default configuration for all toasts
      const defaultOptions: ToastOptions = {
        duration: 4000,
        position: {
          horizontal: 'right',
          vertical: 'bottom'
        },
        closeButton: true
      };
      
      toastService.setDefaultOptions(defaultOptions);
    }
  `;
}