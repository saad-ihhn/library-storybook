import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { CodeViewerComponent } from '../documentation/code-viewer/code-viewer.component';
import { DocumentationComponent } from "../documentation/documentation.component";
import { SidePanelComponent } from './sidepanel.component';

@Component({
  selector: 'app-sidepanel-doc',
  standalone: true,
  imports: [CodeViewerComponent, DocumentationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-documentation
      [publishedDate]="publishedDate"
      [title]="title"
      [htmlCode]="htmlCode"
      [component]="sidePanelComponent"
      [tsCode]="tsCode"
      [overviewContent]="overviewContent"
      [useCasesContent]="useCasesContent"
      [noteContent]="noteContent"
      [otherContent]="otherContent"
    >
    </app-documentation>

    <ng-template #overviewContent>
      <div class="space-y-4">
        <p class="text-on-surface">
          The
          <code class="bg-gray-100 px-1 py-0.5 rounded text-gray-800"
            >LibSidePanelComponent</code
          >
          is a flexible overlay panel component that can be positioned on any side of the screen
          with smooth animations and customizable content.
        </p>

        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg
                class="h-5 w-5 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-blue-800">
                Side Panel Features
              </h3>
              <div class="mt-2 text-sm text-blue-700">
                <p>This component includes several advanced features:</p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Multiple positioning options (left, right, top, bottom)</li>
                  <li>Customizable animation timing</li>
                  <li>Backdrop click to close functionality</li>
                  <li>Programmatic open/close control</li>
                  <li>Responsive design with max-width constraints</li>
                  <li>Angular CDK overlay integration</li>
                  <li>Accessibility compliant</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h3 class="text-xl font-semibold mt-6">Key Features</h3>
        <ul class="list-disc pl-5 space-y-2 text-on-surface">
          <li>
            <strong>Multiple Positions</strong>: Can be positioned on left, right, top, or bottom
          </li>
          <li>
            <strong>Customizable Animations</strong>: Control animation duration and easing
          </li>
          <li>
            <strong>Backdrop Interaction</strong>: Click outside to close the panel
          </li>
          <li>
            <strong>Programmatic Control</strong>: Open and close the panel programmatically
          </li>
          <li>
            <strong>Responsive Design</strong>: Adapts to different screen sizes
          </li>
          <li>
            <strong>Content Projection</strong>: Supports any content via ng-content
          </li>
          <li>
            <strong>Platform Safety</strong>: Handles server-side rendering gracefully
          </li>
        </ul>
      </div>
    </ng-template>

    <ng-template #useCasesContent>
      <div class="space-y-6">
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">
              Basic Side Panel
            </h3>
            <p class="mt-2 text-gray-600">
              Simple side panel with default position and animation.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="basicSetupExample"></app-code-viewer>
          </div>
        </div>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">
              Right Positioned Panel
            </h3>
            <p class="mt-2 text-gray-600">
              Side panel positioned on the right side with custom animation.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="rightPanelExample"></app-code-viewer>
          </div>
        </div>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">
              Top/Bottom Panels
            </h3>
            <p class="mt-2 text-gray-600">
              Panels positioned at the top or bottom of the screen.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="topBottomPanelExample"></app-code-viewer>
          </div>
        </div>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">
              Programmatic Control
            </h3>
            <p class="mt-2 text-gray-600">
              Controlling the panel programmatically using ViewChild.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="programmaticControlExample"></app-code-viewer>
          </div>
        </div>
      </div>
    </ng-template>

    <ng-template #noteContent>
      <div class="space-y-4">
        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg
                class="h-5 w-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-yellow-800">
                Performance Considerations
              </h3>
              <div class="mt-2 text-sm text-yellow-700">
                <p>When using this component:</p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    Avoid complex content that might impact animation performance
                  </li>
                  <li>
                    Consider using OnPush change detection for complex panel content
                  </li>
                  <li>Test on mobile devices for smooth animations</li>
                  <li>
                    Be mindful of memory leaks - ensure panels are properly disposed
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-purple-50 border-l-4 border-purple-400 p-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg
                class="h-5 w-5 text-purple-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-purple-800">
                Accessibility Tips
              </h3>
              <div class="mt-2 text-sm text-purple-700">
                <p>For accessibility compliance:</p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    Ensure proper focus management when panel opens/closes
                  </li>
                  <li>
                    Add appropriate ARIA attributes for screen readers
                  </li>
                  <li>
                    Provide keyboard navigation support (Esc to close)
                  </li>
                  <li>Test with screen readers and keyboard navigation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-green-50 border-l-4 border-green-400 p-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg
                class="h-5 w-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-green-800">Best Practices</h3>
              <div class="mt-2 text-sm text-green-700">
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Use appropriate panel position for your use case</li>
                  <li>Set reasonable animation durations (200-500ms)</li>
                  <li>Provide a close button inside the panel for usability</li>
                  <li>
                    Consider mobile responsiveness in your design
                  </li>
                  <li>Test with various screen sizes and orientations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>

    <ng-template #otherContent>
      <div class="space-y-6">
        <h2 class="text-2xl font-bold">Configuration Options</h2>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">
              Input Properties Reference
            </h3>
            <p class="mt-2 text-gray-600">
              Complete list of available input properties with descriptions.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <div class="overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Property
                    </th>
                    <th
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Type
                    </th>
                    <th
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Default
                    </th>
                    <th
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                    >
                      position
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      'left' | 'right' | 'top' | 'bottom'
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      'left'
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-500">
                      Position of the side panel on the screen
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                    >
                      animationType
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      string
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      '200ms'
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-500">
                      Animation duration and easing (e.g., '300ms ease-out')
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">
              Public Methods Reference
            </h3>
            <p class="mt-2 text-gray-600">
              Methods exposed by <code>LibSidePanelComponent</code> that
              can be called programmatically using <code>ViewChild</code>.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <div class="overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Method
                    </th>
                    <th
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Parameters
                    </th>
                    <th
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                    >
                      open
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      None
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-500">
                      Opens the side panel with animation
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                    >
                      close
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      None
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-500">
                      Closes the side panel with animation
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                    >
                      closeImmediate
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      None
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-500">
                      Closes the side panel immediately without animation
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="bg-white shadow rounded-lg overflow-hidden mt-6">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">
              CSS Customization
            </h3>
            <p class="mt-2 text-gray-600">
              Customize the appearance of the side panel using CSS.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="cssCustomizationExample"></app-code-viewer>
          </div>
        </div>
      </div>
    </ng-template>
  `,
  styles: ``,
})
export class SidePanelDocComponent {
  @ViewChild('overviewContent', { static: true })
  overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true })
  useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;

  sidePanelComponent = SidePanelComponent;
  publishedDate = '2025-05-21';
  title = 'Side Panel Component';

  htmlCode = `
    <lib-sidepanel #panel>
      <h2>My Side Panel</h2>
      <p>Some content here...</p>
    </lib-sidepanel>
    <button (click)="panel.open()">Open Panel</button>
  `;

  tsCode = `
    import { Component } from '@angular/core';
    import { LibSidePanelComponent } from '@saad-ihhn/ihhn-host-lib/lib-sidepanel';
    
    @Component({
      selector: 'app-my-component',
      standalone: true,
      imports: [LibSidePanelComponent],
      template: \`
        <lib-sidepanel #panel>
          <h2>My Side Panel</h2>
          <p>Some content here...</p>
        </lib-sidepanel>
        <button (click)="panel.open()">Open Panel</button>
      \`,
    })
    export class MyComponent {}
  `;

  basicSetupExample = `
    @Component({
      selector: 'app-my-component',
      standalone: true,
      imports: [LibSidePanelComponent],
      template: \`
        <lib-sidepanel #panel>
          <h2>My Side Panel</h2>
          <p>Some content here...</p>
          <button (click)="panel.close()">Close</button>
        </lib-sidepanel>
        <button (click)="panel.open()">Open Panel</button>
      \`,
    })
    export class MyComponent {}
  `;

  rightPanelExample = `
    @Component({
      selector: 'app-my-component',
      standalone: true,
      imports: [LibSidePanelComponent],
      template: \`
        <lib-sidepanel #panel position="right" animationType="500ms ease-out">
          <h2>Right Panel</h2>
          <p>This panel slides in from the right.</p>
          <button (click)="panel.close()">Close</button>
        </lib-sidepanel>
        <button (click)="panel.open()">Open Right Panel</button>
      \`,
    })
    export class MyComponent {}
  `;

  topBottomPanelExample = `
    @Component({
      selector: 'app-my-component',
      standalone: true,
      imports: [LibSidePanelComponent],
      template: \`
        <!-- Top Panel -->
        <lib-sidepanel #topPanel position="top" animationType="400ms">
          <h2>Top Panel</h2>
          <p>This panel slides down from the top.</p>
          <button (click)="topPanel.close()">Close</button>
        </lib-sidepanel>
        
        <!-- Bottom Panel -->
        <lib-sidepanel #bottomPanel position="bottom" animationType="400ms">
          <h2>Bottom Panel</h2>
          <p>This panel slides up from the bottom.</p>
          <button (click)="bottomPanel.close()">Close</button>
        </lib-sidepanel>
        
        <button (click)="topPanel.open()">Open Top Panel</button>
        <button (click)="bottomPanel.open()">Open Bottom Panel</button>
      \`,
    })
    export class MyComponent {}
  `;

  programmaticControlExample = `
    import { Component, viewChild } from '@angular/core';
    import { LibSidePanelComponent } from '@saad-ihhn/ihhn-host-lib/lib-sidepanel';
    
    @Component({
      selector: 'app-my-component',
      standalone: true,
      imports: [LibSidePanelComponent],
      template: \`
        <lib-sidepanel>
          <h2>My Side Panel</h2>
          <p>Some content here...</p>
        </lib-sidepanel>
        <button (click)="openPanel()">Open Panel</button>
        <button (click)="closePanel()">Close Panel</button>
      \`,
    })
    export class MyComponent {
      panel = viewChild.required(LibSidePanelComponent);
      
      openPanel() {
        this.panel().open();
      }
      
      closePanel() {
        this.panel().close();
      }
    }
  `;

  cssCustomizationExample = `
    /* Custom styles for the side panel */
    :host ::ng-deep .lib-sidepanel-container {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
      border-radius: 0;
      min-width: 300px;
      padding: 2rem;
    }
    
    /* Custom backdrop */
    :host ::ng-deep .cdk-overlay-transparent-backdrop {
      background: rgba(0, 0, 0, 0.6);
    }
  `;
}