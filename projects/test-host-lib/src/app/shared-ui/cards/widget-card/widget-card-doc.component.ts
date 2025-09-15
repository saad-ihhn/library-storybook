import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { CodeViewerComponent } from '../../documentation/code-viewer/code-viewer.component';
import { DocumentationComponent } from '../../documentation/documentation.component';
import { WidgetComponent } from './widget-card.component';

@Component({
  selector: 'app-widget-documentation',
  standalone: true,
  imports: [CodeViewerComponent, DocumentationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-documentation 
      [publishedDate]="publishedDate" 
      [title]="title"
      [htmlCode]="htmlCode"
      [component]="widgetComponent" 
      [tsCode]="tsCode" 
      [overviewContent]="overviewContent"
      [useCasesContent]="useCasesContent" 
      [noteContent]="noteContent" 
      [otherContent]="otherContent">
    </app-documentation>

    <ng-template #overviewContent>
      <div class="space-y-4">
        <p class="text-on-surface">
          The <code class="bg-gray-100 px-1 py-0.5 rounded text-gray-800">&lt;lib-widget&gt;</code> component provides a flexible container for building dashboard widgets with customizable headers and content sections.
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
                  <li>Flexible header with icon/title and action buttons</li>
                  <li>Content projection slots for header and body</li>
                  <li>Support for both Material icons and custom images</li>
                  <li>Configurable action buttons with tooltips</li>
                  <li>Responsive design</li>
                  <li>Clean, modern styling with subtle shadows</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-semibold mt-6">Component Structure</h3>
        <ul class="list-disc pl-5 space-y-2 text-on-surface">
          <li>Header section with left, middle and right areas</li>
          <li>Left area contains icon and title</li>
          <li>Middle area for additional header content</li>
          <li>Right area for action buttons</li>
          <li>Body section for main widget content</li>
          <li>Built with Angular Material components</li>
        </ul>
      </div>
    </ng-template>

    <ng-template #useCasesContent>
      <div class="space-y-6">    
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Basic Widget</h3>
            <p class="mt-2 text-gray-600">
              Simple widget with title and icon.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="basicWidgetExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Widget with Action Buttons</h3>
            <p class="mt-2 text-gray-600">
              Widget with configured action buttons in header.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="widgetWithActionsExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Custom Header Content</h3>
            <p class="mt-2 text-gray-600">
              Widget with custom content in header middle section.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="customHeaderExample"></app-code-viewer>
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
              <h3 class="text-sm font-medium text-yellow-800">Content Projection Notes</h3>
              <div class="mt-2 text-sm text-yellow-700">
                <p>
                  When using content projection:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Use <code>[widgetHeaderMiddleContent]</code> for header middle section</li>
                  <li>Use <code>[widgetBody]</code> for main content area</li>
                  <li>Ensure projected content is properly styled for the widget container</li>
                  <li>Consider responsive behavior of your custom content</li>
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
              <h3 class="text-sm font-medium text-purple-800">Action Button Tips</h3>
              <div class="mt-2 text-sm text-purple-700">
                <p>
                  For optimal button configuration:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Provide clear tooltips for icon-only buttons</li>
                  <li>Use consistent colors for related actions</li>
                  <li>Limit the number of buttons to avoid clutter</li>
                  <li>Consider button order based on importance</li>
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
            <h3 class="text-lg font-medium text-gray-900">Dynamic Button Configuration</h3>
            <p class="mt-2 text-gray-600">
              Configuring buttons dynamically based on application state.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="dynamicButtonsExample"></app-code-viewer>
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
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">title</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                  <td class="px-6 py-4 text-sm text-gray-500">The title displayed in the widget header (default: 'title')</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">iconSource</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Image path or Material icon name (default: '')</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">iconSourceType</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">'image' | 'icon'</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Determines how iconSource is rendered (default: 'image')</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">headerButtons</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">IWidgetHeaderIconButtonConfig[]</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Array of button configurations for header (default: [])</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Button Configuration Interface</h3>
            <p class="mt-2 text-gray-600">
              Details of the IWidgetHeaderIconButtonConfig interface.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="buttonInterfaceExample"></app-code-viewer>
          </div>
        </div>
      </div>
    </ng-template>
  `,
  styles: ``
})
export class WidgetDocComponent {
  @ViewChild('overviewContent', { static: true }) overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true }) useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;

  widgetComponent = WidgetComponent;
  publishedDate = '2025-06-10';
  title = 'Widget Component';

  htmlCode = `
    <lib-widget
      [title]="'Analytics Dashboard'"
      [iconSource]="'analytics'"
      [iconSourceType]="'icon'"
      [headerButtons]="widgetButtons">
      
      <div widgetHeaderMiddleContent>
        <span class="status-badge">Live Data</span>
      </div>
      
      <div widgetBody>
        <p>Main widget content goes here</p>
      </div>
    </lib-widget>
  `;

  tsCode = `
    import { Component } from '@angular/core';
    import { LibWidgetComponent, IWidgetHeaderIconButtonConfig } from '@saad-ihhn/ihhn-host-lib/lib-cards';
    
    @Component({
      selector: 'app-widget-demo',
      standalone: true,
      imports: [LibWidgetComponent],
      template: \`
        <lib-widget
          [title]="title"
          [iconSource]="icon"
          [iconSourceType]="'icon'"
          [headerButtons]="buttons">
          <!-- Content projection here -->
        </lib-widget>
      \`,
    })
    export class WidgetDemoComponent {
      title = 'Analytics Dashboard';
      icon = 'analytics';
      
      buttons: IWidgetHeaderIconButtonConfig[] = [
        {
          source: 'refresh',
          tooltip: 'Refresh data',
          color: 'primary',
          onClick: () => this.refreshData()
        },
        {
          source: 'settings',
          tooltip: 'Configure widget',
          color: 'accent'
        }
      ];
      
      refreshData() {
        console.log('Refreshing data...');
      }
    }
  `;

  basicWidgetExample = `
    @Component({
      selector: 'app-widget-demo',
      standalone: true,
      imports: [LibWidgetComponent],
      template: \`
        <lib-widget
          [title]="'Simple Widget'"
          [iconSource]="'widgets'">
          <div widgetBody>
            <p>Basic widget content</p>
          </div>
        </lib-widget>
      \`,
    })
    export class WidgetDemoComponent {}
  `;

  widgetWithActionsExample = `
    @Component({
      selector: 'app-widget-demo',
      standalone: true,
      imports: [LibWidgetComponent],
      template: \`
        <lib-widget
          [title]="'Task Manager'"
          [iconSource]="'list_alt'"
          [headerButtons]="taskButtons">
          <div widgetBody>
            <!-- Task list content -->
          </div>
        </lib-widget>
      \`,
    })
    export class WidgetDemoComponent {
      taskButtons: IWidgetHeaderIconButtonConfig[] = [
        {
          source: 'add',
          tooltip: 'Add new task',
          color: 'primary'
        },
        {
          source: 'filter_list',
          tooltip: 'Filter tasks'
        }
      ];
    }
  `;

  customHeaderExample = `
    @Component({
      selector: 'app-widget-demo',
      standalone: true,
      imports: [LibWidgetComponent],
      template: \`
        <lib-widget [title]="'Sales Report'">
          <div widgetHeaderMiddleContent>
            <span class="time-range">Last 30 Days</span>
            <mat-icon>trending_up</mat-icon>
            <span class="change-percent">+12%</span>
          </div>
          
          <div widgetBody>
            <!-- Sales chart content -->
          </div>
        </lib-widget>
      \`,
    })
    export class WidgetDemoComponent {}
  `;

  dynamicButtonsExample = `
    @Component({
      selector: 'app-widget-demo',
      standalone: true,
      imports: [LibWidgetComponent],
      template: \`
        <lib-widget
          [title]="'Document Editor'"
          [headerButtons]="editorButtons">
          <!-- Document content -->
        </lib-widget>
      \`,
    })
    export class WidgetDemoComponent {
      isEditing = false;
      
      get editorButtons(): IWidgetHeaderIconButtonConfig[] {
        return this.isEditing 
          ? [
              { source: 'save', tooltip: 'Save', color: 'primary' },
              { source: 'cancel', tooltip: 'Cancel', color: 'warn' }
            ]
          : [
              { source: 'edit', tooltip: 'Edit', color: 'primary' }
            ];
      }
    }
  `;

  buttonInterfaceExample = `
    /**
     * Configuration interface for widget header buttons
     */
    export interface IWidgetHeaderIconButtonConfig {
      /** Icon name or image path */
      source: string;
      
      /** Optional tooltip text */
      tooltip?: string;
      
      /** Tooltip position (default: 'below') */
      tooltipPosition?: 'above' | 'below' | 'left' | 'right';
      
      /** Button color theme */
      color?: 'primary' | 'accent' | 'warn';
      
      /** Source type (icon/image) */
      sourceType?: 'icon' | 'image';
      
      /** Additional CSS class */
      class?: string;
      
      /** Click handler function */
      onClick?: () => void;
    }
  `;
}