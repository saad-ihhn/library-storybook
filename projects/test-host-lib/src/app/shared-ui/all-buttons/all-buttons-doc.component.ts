import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { CodeViewerComponent } from '../documentation/code-viewer/code-viewer.component';
import { DocumentationComponent } from "../documentation/documentation.component";
import { AllButtonsComponent } from './all-buttons.component';

@Component({
  selector: 'app-buttons-documentation',
  standalone: true,
  imports: [CodeViewerComponent, DocumentationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-documentation 
      [publishedDate]="publishedDate" 
      [title]="title"
      [htmlCode]="htmlCode"
      [component]="buttonsComponent" 
      [tsCode]="tsCode" 
      [overviewContent]="overviewContent"
      [useCasesContent]="useCasesContent" 
      [noteContent]="noteContent" 
      [otherContent]="otherContent">
    </app-documentation>

    <ng-template #overviewContent>
      <div class="space-y-4">
        <p class="text-on-surface">
          The button components provide a comprehensive set of Material Design styled buttons with various styles and functionalities. 
          They include standard buttons, raised buttons, flat buttons, stroked buttons, FAB buttons, icon buttons, and mini FAB buttons.
        </p>
        
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-blue-800">Button Features</h3>
              <div class="mt-2 text-sm text-blue-700">
                <p>
                  These components include several button-specific features:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Multiple button styles (raised, flat, stroked, FAB, etc.)</li>
                  <li>Material Design color schemes (primary, accent, warn)</li>
                  <li>Icon support with Material Icons</li>
                  <li>Badge support for notifications</li>
                  <li>Disabled state handling</li>
                  <li>Click event emission</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-semibold mt-6">Available Button Types</h3>
        <ul class="list-disc pl-5 space-y-2 text-on-surface">
          <li><code class="bg-gray-100 px-1 py-0.5 rounded">lib-mat-button</code> - Standard Material button</li>
          <li><code class="bg-gray-100 px-1 py-0.5 rounded">lib-mat-raised-button</code> - Raised button with elevation</li>
          <li><code class="bg-gray-100 px-1 py-0.5 rounded">lib-mat-flat-button</code> - Flat button without elevation</li>
          <li><code class="bg-gray-100 px-1 py-0.5 rounded">lib-mat-stroked-button</code> - Stroked button with border</li>
          <li><code class="bg-gray-100 px-1 py-0.5 rounded">lib-mat-fab-button</code> - Floating Action Button (FAB)</li>
          <li><code class="bg-gray-100 px-1 py-0.5 rounded">lib-mat-mini-fab-button</code> - Mini FAB button</li>
          <li><code class="bg-gray-100 px-1 py-0.5 rounded">lib-mat-icon-button</code> - Icon-only button</li>
          <li><code class="bg-gray-100 px-1 py-0.5 rounded">lib-button</code> - Basic customizable button</li>
        </ul>
      </div>
    </ng-template>

    <ng-template #useCasesContent>
      <div class="space-y-6">    
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Basic Button Usage</h3>
            <p class="mt-2 text-gray-600">
              Standard button with click handler and different color variants.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="basicButtonExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Button with Icon</h3>
            <p class="mt-2 text-gray-600">
              Buttons with Material Icons and badge indicators.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="iconButtonExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">FAB Buttons</h3>
            <p class="mt-2 text-gray-600">
              Floating Action Buttons and mini FABs with different states.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="fabButtonExample"></app-code-viewer>
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
              <h3 class="text-sm font-medium text-yellow-800">Accessibility Notes</h3>
              <div class="mt-2 text-sm text-yellow-700">
                <p>
                  When using these button components:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Always provide text alternatives for icon buttons</li>
                  <li>Ensure sufficient color contrast</li>
                  <li>Use appropriate ARIA attributes when needed</li>
                  <li>Test keyboard navigation</li>
                  <li>Consider focus states for better accessibility</li>
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
              <h3 class="text-sm font-medium text-purple-800">Styling Tips</h3>
              <div class="mt-2 text-sm text-purple-700">
                <p>
                  For consistent button styling:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Use the provided color schemes (primary, accent, warn)</li>
                  <li>Apply custom classes through the className input</li>
                  <li>Maintain consistent button sizes</li>
                  <li>Follow Material Design spacing guidelines</li>
                  <li>Consider button placement in your layout</li>
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
            <h3 class="text-lg font-medium text-gray-900">Button Group</h3>
            <p class="mt-2 text-gray-600">
              Creating a button group with different button types.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="buttonGroupExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Input Properties</h3>
            <p class="mt-2 text-gray-600">
              Complete list of available input properties for all button types.
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
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">color</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">'primary' | 'accent' | 'warn'</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Button color scheme (default: 'primary')</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">disabled</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Whether the button is disabled (default: false)</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">type</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">'button' | 'submit' | 'reset'</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Button type attribute (default: 'button')</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">icon</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Material icon name</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">className</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Custom CSS class names</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">matBadge</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Badge text to display on the button</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Output Events</h3>
            <p class="mt-2 text-gray-600">
              Available output events for all button types.
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
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">matClick</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Emitted when the button is clicked</td>
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
export class AllButtonsDocComponent {
  @ViewChild('overviewContent', { static: true }) overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true }) useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;

  buttonsComponent = AllButtonsComponent;
  publishedDate = '2025-06-05';
  title = 'Button Components';

  htmlCode = `
    <!-- Standard button -->
    <lib-mat-button>Click Me</lib-mat-button>

    <!-- Raised button with accent color -->
    <lib-mat-raised-button color="accent">Submit</lib-mat-raised-button>

    <!-- FAB button with icon -->
    <lib-mat-fab-button icon="add"></lib-mat-fab-button>

    <!-- Icon button -->
    <lib-mat-icon-button icon="menu"></lib-mat-icon-button>
  `;

  tsCode = `
    import { Component } from '@angular/core';
    import { 
      LibMatButtonComponent, 
      LibMatFabButtonComponent,
      LibMatRaisedButtonComponent,
      LibMatIconButtonComponent
    } from '@saad-ihhn/ihhn-host-lib/lib-buttons';

    @Component({
      selector: 'app-button-demo',
      standalone: true,
      imports: [
        LibMatButtonComponent,
        LibMatFabButtonComponent,
        LibMatRaisedButtonComponent,
        LibMatIconButtonComponent
      ],
      template: \`
        <lib-mat-button (matClick)="onClick()">Click Me</lib-mat-button>
        <lib-mat-raised-button color="accent">Submit</lib-mat-raised-button>
        <lib-mat-fab-button icon="add"></lib-mat-fab-button>
        <lib-mat-icon-button icon="menu"></lib-mat-icon-button>
      \`,
    })
    export class ButtonDemoComponent {
      onClick() {
        console.log('Button clicked');
      }
    }
  `;

  basicButtonExample = `
    @Component({
      template: \`
        <!-- Primary button -->
        <lib-mat-button>Primary</lib-mat-button>
        
        <!-- Accent colored button -->
        <lib-mat-button color="accent">Accent</lib-mat-button>
        
        <!-- Warn colored button with click handler -->
        <lib-mat-button 
          color="warn" 
          (matClick)="handleDelete()">
          Delete
        </lib-mat-button>
        
        <!-- Disabled button -->
        <lib-mat-button [disabled]="true">Disabled</lib-mat-button>
      \`,
    })
    export class ButtonExampleComponent {
      handleDelete() {
        // Delete logic here
      }
    }
  `;

  iconButtonExample = `
    @Component({
      template: \`
        <!-- Button with icon and text -->
        <lib-mat-button icon="home">Home</lib-mat-button>
        
        <!-- Icon only button -->
        <lib-mat-icon-button icon="settings"></lib-mat-icon-button>
        
        <!-- Button with badge -->
        <lib-mat-button 
          icon="notifications" 
          [matBadge]="unreadCount">
          Notifications
        </lib-mat-button>
        
        <!-- Custom styled icon button -->
        <lib-mat-icon-button 
          icon="star" 
          className="custom-star-btn">
        </lib-mat-icon-button>
      \`,
    })
    export class IconButtonExampleComponent {
      unreadCount = 5;
    }
  `;

  fabButtonExample = `
    @Component({
      template: \`
        <!-- Standard FAB -->
        <lib-mat-fab-button icon="add"></lib-mat-fab-button>
        
        <!-- Mini FAB -->
        <lib-mat-mini-fab-button icon="edit"></lib-mat-mini-fab-button>
        
        <!-- Colored FAB -->
        <lib-mat-fab-button 
          color="accent" 
          icon="favorite">
        </lib-mat-fab-button>
        
        <!-- Disabled FAB -->
        <lib-mat-fab-button 
          [disabled]="true" 
          icon="lock">
        </lib-mat-fab-button>
      \`,
    })
    export class FabButtonExampleComponent {}
  `;

  buttonGroupExample = `
    @Component({
      template: \`
        <div class="button-group">
          <!-- Standard button -->
          <lib-mat-button>Cancel</lib-mat-button>
          
          <!-- Raised button -->
          <lib-mat-raised-button color="primary">
            Save Draft
          </lib-mat-raised-button>
          
          <!-- Stroked button -->
          <lib-mat-stroked-button color="accent">
            Preview
          </lib-mat-stroked-button>
          
          <!-- FAB for primary action -->
          <lib-mat-fab-button 
            icon="save" 
            color="primary">
          </lib-mat-fab-button>
        </div>
      \`,
      styles: [\`
        .button-group {
          display: flex;
          gap: 8px;
          align-items: center;
          padding: 16px;
        }
      \`]
    })
    export class ButtonGroupExampleComponent {}
  `;
}