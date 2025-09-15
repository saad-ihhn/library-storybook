import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { CodeViewerComponent } from '../documentation/code-viewer/code-viewer.component';
import { TooltipComponent } from './tooltip.component';
import { DocumentationComponent } from "../documentation/documentation.component";

@Component({
  selector: 'app-tooltip-documentation',
  standalone: true,
  imports: [CodeViewerComponent, DocumentationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-documentation 
      [publishedDate]="publishedDate" 
      [title]="title"
      [htmlCode]="htmlCode"
      [component]="tooltipComponent" 
      [tsCode]="tsCode" 
      [overviewContent]="overviewContent"
      [useCasesContent]="useCasesContent" 
      [noteContent]="noteContent" 
      [otherContent]="otherContent">
    </app-documentation>

    <ng-template #overviewContent>
      <div class="space-y-4">
        <p class="text-gray-700">
          The <code class="bg-gray-100 px-1 py-0.5 rounded text-gray-800">&lt;lib-tooltip&gt;</code> component provides a flexible way to add tooltips to any element with various customization options. It wraps Angular Material's tooltip with additional features.
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
                  This component includes several powerful features:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Multiple positioning options</li>
                  <li>Custom show/hide delays</li>
                  <li>Touch gesture support</li>
                  <li>Disabled state</li>
                  <li>Content projection</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-semibold mt-6">When to Use</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-700">
          <li>To provide additional information about UI elements</li>
          <li>For form field descriptions</li>
          <li>To show help text for icons or buttons</li>
          <li>When space is limited and you need to hide secondary information</li>
        </ul>
      </div>
    </ng-template>

    <ng-template #useCasesContent>
      <div class="space-y-6">    
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Basic Tooltip</h3>
            <p class="mt-2 text-gray-600">
              Simple tooltip attached to a button element.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="basicSetupExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Tooltip with Icon</h3>
            <p class="mt-2 text-gray-600">
              Tooltip attached to an information icon.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="iconExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Custom Position</h3>
            <p class="mt-2 text-gray-600">
              Tooltip with custom positioning and delay settings.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="positionExample"></app-code-viewer>
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
                  When using tooltips:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Ensure tooltips are keyboard accessible</li>
                  <li>Don't put essential information in tooltips alone</li>
                  <li>Consider screen reader users</li>
                  <li>Keep tooltip text concise</li>
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
                  For better user experience:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Use appropriate show/hide delays (200-500ms)</li>
                  <li>Position tooltips where they won't obscure content</li>
                  <li>Keep tooltip text short and actionable</li>
                  <li>Use consistent styling across your application</li>
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
            <h3 class="text-lg font-medium text-gray-900">Custom Delays</h3>
            <p class="mt-2 text-gray-600">
              Implementing custom show/hide delays for better UX.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="delayExample"></app-code-viewer>
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
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">message</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                  <td class="px-6 py-4 text-sm text-gray-500">The text message to display in the tooltip</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">position</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">'left' | 'right' | 'above' | 'below' | 'before' | 'after'</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Position relative to the element (default: 'below')</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">disabled</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Whether the tooltip is disabled (default: false)</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">showDelay</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">number</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Delay in ms before showing the tooltip (default: 0)</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">hideDelay</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">number</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Delay in ms before hiding the tooltip (default: 0)</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">touchGestures</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">'auto' | 'on' | 'off'</td>
                  <td class="px-6 py-4 text-sm text-gray-500">How touch gestures should be handled (default: 'auto')</td>
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
export class TooltipDocComponent {
  @ViewChild('overviewContent', { static: true }) overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true }) useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;

  tooltipComponent = TooltipComponent;
  publishedDate = '2025-07-18';
  title = 'Tooltip Component';

  htmlCode = `
    <lib-tooltip message="This is a tooltip message">
      <button mat-button>Hover me</button>
    </lib-tooltip>
  `;

  tsCode = `
    import { Component } from '@angular/core';
    import { LibTooltipComponent } from '@saad-ihhn/ihhn-host-lib/lib-tooltip';
    
    @Component({
      selector: 'app-tooltip-demo',
      standalone: true,
      imports: [LibTooltipComponent],
      template: \`
        <lib-tooltip message="This is a tooltip">
          <button mat-button>Hover me</button>
        </lib-tooltip>
      \`,
    })
    export class TooltipDemoComponent {}
  `;

  basicSetupExample = `
    @Component({
      selector: 'app-tooltip-demo',
      standalone: true,
      imports: [LibTooltipComponent],
      template: \`
        <lib-tooltip message="Click to perform action">
          <button mat-raised-button>Submit</button>
        </lib-tooltip>
      \`,
    })
    export class TooltipDemoComponent {}
  `;

  iconExample = `
    @Component({
      selector: 'app-tooltip-demo',
      standalone: true,
      imports: [LibTooltipComponent, MatIconModule],
      template: \`
        <lib-tooltip message="Click for help">
          <mat-icon>help_outline</mat-icon>
        </lib-tooltip>
      \`,
    })
    export class TooltipDemoComponent {}
  `;

  positionExample = `
    @Component({
      selector: 'app-tooltip-demo',
      standalone: true,
      imports: [LibTooltipComponent],
      template: \`
        <lib-tooltip 
          message="Right positioned tooltip" 
          position="right"
          [showDelay]="500"
          [hideDelay]="200"
        >
          <button mat-stroked-button>Hover me</button>
        </lib-tooltip>
      \`,
    })
    export class TooltipDemoComponent {}
  `;

  delayExample = `
    @Component({
      selector: 'app-tooltip-demo',
      standalone: true,
      imports: [LibTooltipComponent],
      template: \`
        <lib-tooltip 
          message="Delayed tooltip" 
          [showDelay]="300"
          [hideDelay]="300"
        >
          <button mat-button>Hover me</button>
        </lib-tooltip>
      \`,
    })
    export class TooltipDemoComponent {}
  `;
}