import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { LibNotificationCardComponent } from '@saad-ihhn/ihhn-host-lib/lib-lists';
import { CodeViewerComponent } from '../../documentation/code-viewer/code-viewer.component';
import { DocumentationComponent } from '../../documentation/documentation.component';
import { NotificationPreviewComponent } from './notification-card.component';

@Component({
  selector: 'app-card-documentation',
  standalone: true,
  imports: [CodeViewerComponent, DocumentationComponent, LibNotificationCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-documentation 
      [publishedDate]="publishedDate" 
      [title]="title"
      [htmlCode]="htmlCode"
      [component]="cardComponent" 
      [tsCode]="tsCode" 
      [overviewContent]="overviewContent"
      [useCasesContent]="useCasesContent" 
      [noteContent]="noteContent" 
      [otherContent]="otherContent">
    </app-documentation>

    <ng-template #overviewContent>
      <div class="space-y-4">
        <p class="text-on-surface">
          The <code class="bg-gray-100 px-1 py-0.5 rounded text-gray-800">&lt;lib-card&gt;</code> component provides a notification-style card with sender information, timestamps, and interactive capabilities.
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
                  <li>Avatar generation from sender initials</li>
                  <li>Formatted timestamp display</li>
                  <li>Click and double-click event support</li>
                  <li>Flexible content projection</li>
                  <li>Material Design compliant styling</li>
                  <li>Accessibility optimized</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-semibold mt-6">Component Behavior</h3>
        <ul class="list-disc pl-5 space-y-2 text-on-surface">
          <li>Automatically formats dates according to locale</li>
          <li>Generates avatar from first character of sender name</li>
          <li>Provides hover and focus states for better UX</li>
          <li>Supports both click and double-click interactions</li>
          <li>Integrates with Angular Material's theming</li>
        </ul>
      </div>
    </ng-template>

    <ng-template #useCasesContent>
      <div class="space-y-6">    
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Basic Notification Card</h3>
            <p class="mt-2 text-gray-600">
              Standard notification card with sender, timestamp and source.
            </p>
            <div class="mt-4">
              <lib-notification-card 
                [sender]="'John Doe'" 
                [createdDate]="demoDate">
                <p class="text-sm text-gray-600 mt-2">Your account has been updated successfully.</p>
              </lib-notification-card>
            </div>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="basicCardExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Interactive Card</h3>
            <p class="mt-2 text-gray-600">
              Card with click handlers and additional content.
            </p>
            <div class="mt-4">
              <lib-notification-card 
                [sender]="'System Bot'" 
                [createdDate]="demoDate"
                (onClick)="handleCardClick()"
                (onDblClick)="handleCardDoubleClick()">
                <div class="mt-2">
                  <p class="text-sm">New system update available!</p>
                  <button class="mt-2 text-sm text-blue-600 hover:underline">
                    View details
                  </button>
                </div>
              </lib-notification-card>
            </div>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="interactiveCardExample"></app-code-viewer>
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
              <h3 class="text-sm font-medium text-yellow-800">Interaction Notes</h3>
              <div class="mt-2 text-sm text-yellow-700">
                <p>
                  When using click handlers:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Avoid putting clickable elements inside if using card-level click handlers</li>
                  <li>Double-click events will also trigger click events</li>
                  <li>Consider adding visual feedback for click states</li>
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
              <h3 class="text-sm font-medium text-purple-800">Content Recommendations</h3>
              <div class="mt-2 text-sm text-purple-700">
                <p>
                  For optimal content display:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Keep sender names concise for avatar readability</li>
                  <li>Use short, descriptive source types</li>
                  <li>Projected content should be relatively compact</li>
                  <li>Consider line length for readability</li>
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
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">sender</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                  <td class="px-6 py-4 text-sm text-gray-500">The name/identifier of the notification sender (default: '')</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">createdDate</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Date</td>
                  <td class="px-6 py-4 text-sm text-gray-500">When the notification was created (default: current date)</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">sourceType</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Notification source/type (default: '')</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Output Events</h3>
            <p class="mt-2 text-gray-600">
              Available event outputs.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">onClick</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Emitted when card is clicked</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">onDblClick</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Emitted when card is double-clicked</td>
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
export class NotificationCardDocComponent {
  @ViewChild('overviewContent', { static: true }) overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true }) useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;

  cardComponent = NotificationPreviewComponent;
  publishedDate = '2023-11-20';
  title = 'Notification Component';
  demoDate = new Date();

  htmlCode = `
    <lib-card 
      [sender]="'System Admin'" 
      [createdDate]="notificationDate"
      [sourceType]="'Security Alert'"
      (onClick)="handleClick()">
      <p>Unauthorized login attempt detected</p>
    </lib-card>
  `;

  tsCode = `
    import { Component } from '@angular/core';
    import {{ '{' }} LibDataTransferService {{ '}' }} from '@saad-ihhn/ihhn-host-lib/lib-lists';
    
    @Component({
      selector: 'app-notifications',
      standalone: true,
      imports: [LibNotificationCardComponent],
      template: \`
        <lib-card 
          [sender]="sender" 
          [createdDate]="createdDate"
          [sourceType]="'User Message'"
          (onDblClick)="markAsRead()">
          {{ message }}
        </lib-card>
      \`,
    })
    export class NotificationsComponent {
      sender = 'Jane Smith';
      createdDate = new Date();
      message = 'Please review the latest proposal';
      
      markAsRead() {
        console.log('Notification marked as read');
      }
    }
  `;

  basicCardExample = `
    @Component({
      template: \`
        <lib-card 
          [sender]="'Weather Service'" 
          [createdDate]="alertDate"
          [sourceType]="'Weather Alert'">
          <p>Severe thunderstorm warning for your area</p>
        </lib-card>
      \`,
    })
    export class WeatherAlertComponent {
      alertDate = new Date();
    }
  `;

  interactiveCardExample = `
    @Component({
      template: \`
        <lib-card 
          [sender]="'Calendar'"
          [createdDate]="eventDate"
          (onClick)="viewDetails()"
          (onDblClick)="dismiss()">
          <p>Meeting with team in 15 minutes</p>
        </lib-card>
      \`,
    })
    export class CalendarComponent {
      eventDate = new Date();
      
      viewDetails() {
        // Show meeting details
      }
      
      dismiss() {
        // Dismiss notification
      }
    }
  `;

  handleCardClick() {
    console.log('Card clicked');
  }

  handleCardDoubleClick() {
    console.log('Card double clicked');
  }
}