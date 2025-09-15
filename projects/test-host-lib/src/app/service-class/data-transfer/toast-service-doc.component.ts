import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { CodeViewerComponent } from '../../shared-ui/documentation/code-viewer/code-viewer.component';
import { ToastServiceComponent } from './toast-service.component';
import { DocumentationComponent } from "../../shared-ui/documentation/documentation.component";

@Component({
  selector: 'app-toast-service-doc',
  standalone: true,
  imports: [CodeViewerComponent, DocumentationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-documentation 
      [publishedDate]="publishedDate" 
      [title]="title"
      [htmlCode]="htmlCode"
      [component]="toastServiceComponent" 
      [tsCode]="tsCode" 
      [overviewContent]="overviewContent"
      [useCasesContent]="useCasesContent" 
      [noteContent]="noteContent" 
      [otherContent]="otherContent">
    </app-documentation>

    <ng-template #overviewContent>
      <div class="space-y-4">
        <p class="text-on-surface">
          The <code class="bg-gray-100 px-1 py-0.5 rounded text-gray-800">LibToastService</code> provides a simple way to display toast notifications with different severity levels.
        </p>
        
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-blue-800">Toast Features</h3>
              <div class="mt-2 text-sm text-blue-700">
                <p>
                  This service includes several notification features:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Four severity levels (success, info, warning, error)</li>
                  <li>Simple API with clear method names</li>
                  <li>Consistent styling with the application design system</li>
                  <li>Auto-dismiss functionality</li>
                  <li>Accessibility support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-semibold mt-6">Key Features</h3>
        <ul class="list-disc pl-5 space-y-2 text-on-surface">
          <li>Simple injection and usage pattern</li>
          <li>Pre-styled notifications for different message types</li>
          <li>Consistent timing and animation</li>
          <li>Clean, modern appearance</li>
          <li>Demo component for interactive testing</li>
          <li>Works with Angular's change detection</li>
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
            <h3 class="text-lg font-medium text-gray-900">Service Integration</h3>
            <p class="mt-2 text-gray-600">
              Using the toast service within another service or component.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="serviceIntegrationExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Error Handling</h3>
            <p class="mt-2 text-gray-600">
              Using toast notifications for error feedback.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="errorHandlingExample"></app-code-viewer>
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
                  <li>Use success toasts for positive confirmations</li>
                  <li>Use info toasts for general information</li>
                  <li>Use warning toasts for potential issues</li>
                  <li>Use error toasts for actual problems</li>
                  <li>Keep messages concise and actionable</li>
                  <li>Avoid showing multiple toasts simultaneously</li>
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
              <h3 class="text-sm font-medium text-purple-800">Technical Notes</h3>
              <div class="mt-2 text-sm text-purple-700">
                <p>
                  Implementation details:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Toasts automatically dismiss after a set time</li>
                  <li>Service uses Angular's dependency injection</li>
                  <li>Includes ARIA attributes for accessibility</li>
                  <li>Animations use the Angular animation system</li>
                  <li>Service is tree-shakable</li>
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
            <h3 class="text-lg font-medium text-gray-900">Customizing Toast Duration</h3>
            <p class="mt-2 text-gray-600">
              Adjusting how long toasts remain visible.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="customDurationExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Service API</h3>
            <p class="mt-2 text-gray-600">
              Complete list of available methods.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">success(message: string)</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Shows a success toast with green styling</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">info(message: string)</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Shows an info toast with blue styling</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">warning(message: string)</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Shows a warning toast with yellow styling</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">error(message: string)</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Shows an error toast with red styling</td>
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
export class ToastServiceDocComponent {
  @ViewChild('overviewContent', { static: true }) overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true }) useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;

  toastServiceComponent = ToastServiceComponent;
  publishedDate = '2025-06-03';
  title = 'Toast Notification Service';

  htmlCode = `
    <!-- Button to trigger success toast -->
    <button (click)="showSuccess()">Show Success</button>

    <!-- Button to trigger error toast -->
    <button (click)="showError()">Show Error</button>
  `;

  tsCode = `
    import { Component, inject } from '@angular/core';
    import { LibToastService } from '@saad-ihhn/ihhn-host-lib/services';

    @Component({
      selector: 'app-my-component',
      template: '...'
    })
    export class MyComponent {
      private toastService = inject(LibToastService);

      showSuccess() {
        this.toastService.success('Operation completed successfully!');
      }

      showError() {
        this.toastService.error('An error occurred during the operation');
      }
    }
  `;

  basicUsageExample = `
    // Show different toast types
    this.toastService.success('Your changes were saved');
    this.toastService.info('New messages available');
    this.toastService.warning('Session will expire soon');
    this.toastService.error('Failed to save changes');
  `;

  serviceIntegrationExample = `
    import { Injectable } from '@angular/core';
    import { LibToastService } from '@saad-ihhn/ihhn-host-lib/services';

    @Injectable({ providedIn: 'root' })
    export class DataService {
      constructor(private toastService: LibToastService) {}

      saveData(data: any) {
        try {
          // Save data logic...
          this.toastService.success('Data saved successfully');
        } catch (error) {
          this.toastService.error('Failed to save data');
        }
      }
    }
  `;

  errorHandlingExample = `
    this.dataService.getData().subscribe({
      next: (data) => {
        // Handle data
      },
      error: (err) => {
        this.toastService.error(\`Failed to load data: \${err.message}\`);
      }
    });
  `;

  customDurationExample = `
    // Note: This assumes the service supports duration configuration
    // If not currently supported, this could be a feature suggestion
    
    // Show a toast that stays longer
    this.toastService.success('Important message', { duration: 5000 });

    // Show a toast that stays shorter
    this.toastService.info('Quick notification', { duration: 2000 });
  `;
}