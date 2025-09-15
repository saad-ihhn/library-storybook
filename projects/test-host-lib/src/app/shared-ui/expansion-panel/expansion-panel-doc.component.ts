import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { CodeViewerComponent } from '../documentation/code-viewer/code-viewer.component';
import { DocumentationComponent } from "../documentation/documentation.component";
import { ExpansionPanelStoryComponent } from './expansion-panel.component';

@Component({
  selector: 'app-expansion-panel-documentation',
  standalone: true,
  imports: [CodeViewerComponent, DocumentationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-documentation 
      [publishedDate]="publishedDate" 
      [title]="title"
      [htmlCode]="htmlCode"
      [component]="expansionPanelComponent" 
      [tsCode]="tsCode" 
      [overviewContent]="overviewContent"
      [useCasesContent]="useCasesContent" 
      [noteContent]="noteContent" 
      [otherContent]="otherContent">
    </app-documentation>

    <ng-template #overviewContent>
      <div class="space-y-4">
        <p class="text-gray-700">
          The <code class="bg-gray-100 px-1 py-0.5 rounded text-gray-800">&lt;lib-expansion-panel&gt;</code> component provides an expandable container that can show/hide content with a smooth animation. It's useful for organizing content into collapsible sections.
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
                <p>
                  This component includes special features for expansion panels:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Smooth expand/collapse animations</li>
                  <li>Customizable header with title and description</li>
                  <li>Optional icon support</li>
                  <li>Action buttons in the footer</li>
                  <li>Disabled state support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-semibold mt-6">When to Use</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-700">
          <li>To organize content into logical sections</li>
          <li>When you need to hide secondary content initially</li>
          <li>For forms with multiple sections</li>
          <li>To create accordion interfaces</li>
          <li>For settings panels with different categories</li>
        </ul>
      </div>
    </ng-template>

    <ng-template #useCasesContent>
      <div class="space-y-6">    
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Basic Expansion Panel</h3>
            <p class="mt-2 text-gray-600">
              Simple panel with title and content.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="basicExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Panel with Actions</h3>
            <p class="mt-2 text-gray-600">
              Expansion panel with action buttons in the footer.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="actionsExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Disabled Panel</h3>
            <p class="mt-2 text-gray-600">
              Panel in disabled state with explanation.
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
              <h3 class="text-sm font-medium text-yellow-800">Accessibility Notes</h3>
              <div class="mt-2 text-sm text-yellow-700">
                <p>
                  Important considerations for accessibility:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Ensure proper ARIA attributes are set</li>
                  <li>Keyboard navigation should work properly</li>
                  <li>Provide clear focus states</li>
                  <li>Include proper heading structure</li>
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
              <h3 class="text-sm font-medium text-purple-800">Performance Tips</h3>
              <div class="mt-2 text-sm text-purple-700">
                <p>
                  For better performance with expansion panels:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Use lazy loading for complex content</li>
                  <li>Consider virtual scrolling for many panels</li>
                  <li>Optimize content inside panels</li>
                  <li>Use OnPush change detection</li>
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
            <h3 class="text-lg font-medium text-gray-900">Accordion Implementation</h3>
            <p class="mt-2 text-gray-600">
              Creating an accordion where only one panel can be open at a time.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="accordionExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Component API</h3>
            <p class="mt-2 text-gray-600">
              Complete list of expansion panel properties and events.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Default</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">title</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">'Panel Title'</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Header text for the panel</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">description</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">''</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Subheader text</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">icon</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">''</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Material icon name</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">expanded</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">false</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Initial expanded state</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">disabled</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">false</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Whether panel is disabled</td>
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
export class ExpansionPanelDocComponent {
  @ViewChild('overviewContent', { static: true }) overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true }) useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;

  expansionPanelComponent = ExpansionPanelStoryComponent;
  publishedDate = '2025-07-18';
  title = 'Expansion Panel Component';

  htmlCode = `
    <lib-expansion-panel
      title="Panel Title"
      description="Optional description"
      icon="settings"
      [expanded]="false"
      (opened)="onPanelOpened()"
      (closed)="onPanelClosed()"
    >
      <p>Panel content goes here</p>
      
    </lib-expansion-panel>
  `;

  tsCode = `
    import { Component } from '@angular/core';
    
    @Component({
      selector: 'app-panel-example',
      template: \`<!-- HTML code above -->\`
    })
    export class PanelExampleComponent {
      onPanelOpened() {
        console.log('Panel opened');
      }
      
      onPanelClosed() {
        console.log('Panel closed');
      }
      
      save() {
        // Save logic here
      }
    }
  `;

  basicExample = `
    <!-- Basic panel with minimal configuration -->
    <lib-expansion-panel title="Basic Panel">
      <p>This is the content of the panel</p>
    </lib-expansion-panel>
  `;

  actionsExample = `
    <!-- Panel with action buttons -->
    <lib-expansion-panel title="User Settings" icon="settings">
      <div class="settings-content">
        <p>Notification preferences</p>
        <p>Privacy settings</p>
      </div>
      <div actions>
        <button mat-button color="primary" (click)="saveSettings()">
          <mat-icon>save</mat-icon> Save
        </button>
        <button mat-button (click)="cancel()">
          <mat-icon>cancel</mat-icon> Cancel
        </button>
      </div>
    </lib-expansion-panel>
  `;

  disabledExample = `
    <!-- Disabled panel example -->
    <lib-expansion-panel
      title="Admin Panel"
      description="Available only for administrators"
      [disabled]="!isAdmin"
    >
      <p>Admin-only content here</p>
    </lib-expansion-panel>
  `;

  accordionExample = `
    @Component({
      selector: 'app-accordion-example',
      template: \`
        <lib-expansion-panel
          *ngFor="let panel of panels"
          [title]="panel.title"
          [expanded]="panel.id === activePanelId"
          (opened)="setActivePanel(panel.id)"
        >
          <p>{{ panel.content }}</p>
        </lib-expansion-panel>
      \`,
    })
    export class AccordionExampleComponent {
      panels = [
        { id: 1, title: 'Panel 1', content: 'Content for panel 1' },
        { id: 2, title: 'Panel 2', content: 'Content for panel 2' },
        { id: 3, title: 'Panel 3', content: 'Content for panel 3' }
      ];
      
      activePanelId: number | null = null;
      
      setActivePanel(panelId: number) {
        this.activePanelId = this.activePanelId === panelId ? null : panelId;
      }
    }
  `;
}