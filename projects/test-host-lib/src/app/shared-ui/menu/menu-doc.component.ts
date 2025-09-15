import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { CodeViewerComponent } from '../documentation/code-viewer/code-viewer.component';
import { DocumentationComponent } from "../documentation/documentation.component";
import { MenuComponent } from './menu.component';

@Component({
  selector: 'app-menu-documentation',
  standalone: true,
  imports: [CodeViewerComponent, DocumentationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-documentation 
      [publishedDate]="publishedDate" 
      [title]="title"
      [htmlCode]="htmlCode"
      [component]="menuComponent" 
      [tsCode]="tsCode" 
      [overviewContent]="overviewContent"
      [useCasesContent]="useCasesContent" 
      [noteContent]="noteContent" 
      [otherContent]="otherContent">
    </app-documentation>

    <ng-template #overviewContent>
      <div class="space-y-4">
        <p class="text-on-surface">
          The <code class="bg-gray-100 px-1 py-0.5 rounded text-gray-800">&lt;lib-menu&gt;</code> component provides a customizable dropdown menu with various animation effects and flexible content projection. It integrates with Angular CDK for positioning and overlay management.
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
                  <li>Multiple animation options (fade, scale, bounce, etc.)</li>
                  <li>Flexible content projection with header, body and footer sections</li>
                  <li>Customizable arrow positioning</li>
                  <li>Responsive design</li>
                  <li>Accessibility compliant</li>
                  <li>Built with Angular CDK for robust positioning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-semibold mt-6">Component Behavior</h3>
        <ul class="list-disc pl-5 space-y-2 text-on-surface">
          <li>Automatically positions itself relative to the trigger element</li>
          <li>Closes when clicking outside or pressing Escape</li>
          <li>Supports content projection in three distinct areas</li>
          <li>Provides smooth animations for better user experience</li>
          <li>Works with both template-driven and programmatic triggers</li>
        </ul>
      </div>
    </ng-template>

    <ng-template #useCasesContent>
      <div class="space-y-6">    
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Basic Menu</h3>
            <p class="mt-2 text-gray-600">
              Standard menu with default settings and simple content.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="basicMenuExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Menu with Sections</h3>
            <p class="mt-2 text-gray-600">
              Menu with header, body and footer sections for organized content.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="sectionedMenuExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Custom Animation</h3>
            <p class="mt-2 text-gray-600">
              Menu with custom animation type and arrow position.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="animatedMenuExample"></app-code-viewer>
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
              <h3 class="text-sm font-medium text-yellow-800">Positioning Notes</h3>
              <div class="mt-2 text-sm text-yellow-700">
                <p>
                  When using this component:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Ensure the trigger element is properly positioned in the DOM</li>
                  <li>Test menu positioning at different screen sizes</li>
                  <li>Consider viewport edges to avoid clipping</li>
                  <li>Use appropriate z-index values when needed</li>
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
              <h3 class="text-sm font-medium text-purple-800">Animation Tips</h3>
              <div class="mt-2 text-sm text-purple-700">
                <p>
                  For optimal animations:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Choose animations that match your application's style</li>
                  <li>Avoid overly complex animations for performance</li>
                  <li>Test animations on different devices</li>
                  <li>Consider reducing motion for accessibility</li>
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
            <h3 class="text-lg font-medium text-gray-900">Programmatic Control</h3>
            <p class="mt-2 text-gray-600">
              Controlling the menu programmatically with component methods.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="programmaticControlExample"></app-code-viewer>
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
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">animationType</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">'fade' | 'scale' | 'bounce' | 'slide-down' | 'flip' | 'pull-down'</td>
                  <td class="px-6 py-4 text-sm text-gray-500">The animation type for menu appearance (default: 'pull-down')</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">arrowPosition</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">'top-right' | 'top-left'</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Position of the menu arrow (default: 'top-left')</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Content Projection</h3>
            <p class="mt-2 text-gray-600">
              Available content projection slots.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Selector</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">[menuHeader]</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Content projected into the menu header section</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">[menuBody]</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Content projected into the menu body section</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">[menuFooter]</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Content projected into the menu footer section</td>
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
export class MenuDocComponent {
  @ViewChild('overviewContent', { static: true }) overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true }) useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;

  menuComponent = MenuComponent;
  publishedDate = '2025-07-22';
  title = 'Menu Component';

  htmlCode = `
    <button (click)="menu.open(button)">Open Menu</button>
    
    <lib-menu #menu>
      <div menuHeader>Menu Title</div>
      <div menuBody>
        <button>Menu Item 1</button>
        <button>Menu Item 2</button>
        <button>Menu Item 3</button>
      </div>
      <div menuFooter>Footer Content</div>
    </lib-menu>
  `;

  tsCode = `
    import { Component } from '@angular/core';
    import { LibMenuComponent } from '@saad-ihhn/ihhn-host-lib/lib-menu';
    
    @Component({
      selector: 'app-menu-demo',
      standalone: true,
      imports: [LibMenuComponent],
      template: \`
        <button #button (click)="menu.open(button)">Open Menu</button>
        
        <lib-menu #menu [animationType]="'scale'" [arrowPosition]="'top-right'">
          <div menuHeader>Menu Title</div>
          <div menuBody>
            <button (click)="doAction(1)">Action 1</button>
            <button (click)="doAction(2)">Action 2</button>
          </div>
        </lib-menu>
      \`,
    })
    export class MenuDemoComponent {
      doAction(action: number) {
        console.log('Action performed:', action);
      }
    }
  `;

  basicMenuExample = `
    @Component({
      selector: 'app-menu-demo',
      standalone: true,
      imports: [LibMenuComponent],
      template: \`
        <button #trigger (click)="menu.open(trigger)">Open Menu</button>
        
        <lib-menu #menu>
          <div menuBody>
            <button>Option 1</button>
            <button>Option 2</button>
            <button>Option 3</button>
          </div>
        </lib-menu>
      \`,
    })
    export class MenuDemoComponent {}
  `;

  sectionedMenuExample = `
    @Component({
      selector: 'app-menu-demo',
      standalone: true,
      imports: [LibMenuComponent],
      template: \`
        <button #trigger (click)="menu.open(trigger)">Open Menu</button>
        
        <lib-menu #menu>
          <div menuHeader>
            <h3>Menu Title</h3>
          </div>
          <div menuBody>
            <button>Edit</button>
            <button>Delete</button>
            <button>Share</button>
          </div>
          <div menuFooter>
            <small>Version 1.0.0</small>
          </div>
        </lib-menu>
      \`,
    })
    export class MenuDemoComponent {}
  `;

  animatedMenuExample = `
    @Component({
      selector: 'app-menu-demo',
      standalone: true,
      imports: [LibMenuComponent],
      template: \`
        <button #trigger (click)="menu.open(trigger)">Open Menu</button>
        
        <lib-menu #menu 
          [animationType]="'bounce'" 
          [arrowPosition]="'top-right'">
          <div menuBody>
            <button>Bouncing Menu Item</button>
          </div>
        </lib-menu>
      \`,
    })
    export class MenuDemoComponent {}
  `;

  programmaticControlExample = `
    @Component({
      selector: 'app-menu-demo',
      standalone: true,
      imports: [LibMenuComponent],
      template: \`
        <button #trigger (click)="toggleMenu(trigger)">Toggle Menu</button>
        
        <lib-menu #menu>
          <div menuBody>
            <button (click)="menu.close()">Close</button>
          </div>
        </lib-menu>
      \`,
    })
    export class MenuDemoComponent {
      @ViewChild('menu') menu!: LibMenuComponent;
      
      toggleMenu(trigger: HTMLElement) {
        if (this.menu.isOpen()) {
          this.menu.close();
        } else {
          this.menu.open(trigger);
        }
      }
    }
  `;
}