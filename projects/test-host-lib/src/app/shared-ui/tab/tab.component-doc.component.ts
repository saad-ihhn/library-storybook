import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { CodeViewerComponent } from '../documentation/code-viewer/code-viewer.component';
import { DocumentationComponent } from "../documentation/documentation.component";
import { TabComponent } from './tab.component';

@Component({
  selector: 'app-tab-documentation',
  standalone: true,
  imports: [CodeViewerComponent, DocumentationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-documentation 
      [publishedDate]="publishedDate" 
      [title]="title"
      [htmlCode]="htmlCode"
      [component]="tabComponent" 
      [tsCode]="tsCode" 
      [overviewContent]="overviewContent"
      [useCasesContent]="useCasesContent" 
      [noteContent]="noteContent" 
      [otherContent]="otherContent">
    </app-documentation>

    <ng-template #overviewContent>
      <div class="space-y-4">
        <p class="text-on-surface">
          The <code class="bg-gray-100 px-1 py-0.5 rounded text-gray-800">&lt;lib-tab&gt;</code> component provides a flexible tab system with support for both routed tabs and dynamic component loading.
        </p>
        
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-blue-800">Tab Component Features</h3>
              <div class="mt-2 text-sm text-blue-700">
                <p>
                  This component includes several powerful features:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Support for both routed tabs and component tabs</li>
                  <li>Dynamic component loading with input/output binding</li>
                  <li>Lazy loading/destruction of components</li>
                  <li>Material Design styling with customization options</li>
                  <li>Keyboard navigation support</li>
                  <li>Flexible configuration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-semibold mt-6">Key Features</h3>
        <ul class="list-disc pl-5 space-y-2 text-on-surface">
          <li>Two tab types: 'route' and 'component'</li>
          <li>Dynamic component loading with input/output binding</li>
          <li>Option to destroy components when tabs are inactive</li>
          <li>Support for Material icons in tab labels</li>
          <li>Disabled tab state</li>
          <li>Customizable animation duration</li>
          <li>Multiple tab header positions</li>
          <li>Responsive design</li>
        </ul>
      </div>
    </ng-template>

    <ng-template #useCasesContent>
      <div class="space-y-6">    
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Basic Tab Setup</h3>
            <p class="mt-2 text-gray-600">
              Simple tab component with both route and component tabs.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="basicSetupExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Component Tabs with Inputs/Outputs</h3>
            <p class="mt-2 text-gray-600">
              Passing data to and from tab components.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="componentWithIOExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Dynamic Tab Configuration</h3>
            <p class="mt-2 text-gray-600">
              Creating tabs dynamically from an array.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="dynamicTabsExample"></app-code-viewer>
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
              <h3 class="text-sm font-medium text-yellow-800">Performance Notes</h3>
              <div class="mt-2 text-sm text-yellow-700">
                <p>
                  When using this component:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Use destroyOnHide for memory-intensive components</li>
                  <li>Consider lazy loading components for better initial load performance</li>
                  <li>For complex tab components, implement OnDestroy to clean up subscriptions</li>
                  <li>Use ChangeDetectionStrategy.OnPush in tab components for better performance</li>
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
                  <li>Keep tab labels short and descriptive</li>
                  <li>Use icons for better visual recognition</li>
                  <li>Consider adding badge indicators for important tabs</li>
                  <li>Group related tabs together</li>
                  <li>Provide visual feedback when switching tabs</li>
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
            <h3 class="text-lg font-medium text-gray-900">Disabled Tabs</h3>
            <p class="mt-2 text-gray-600">
              Implementing disabled state for tabs.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="disabledTabExample"></app-code-viewer>
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
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">tabConfig</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">TabConfig[]</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Array of tab configurations (required)</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">selectedIndex</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">number</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Index of the initially selected tab (default: 0)</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">initialRoute</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Base route for component tabs (default: '')</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">stretchTabs</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Whether tabs stretch to fill space (default: false)</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">animationDuration</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">number</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Tab animation duration in ms (default: 300)</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">headerPosition</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">'above' | 'below'</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Position of tab header (default: 'below')</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">dynamicHeight</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Whether tab height adjusts to content (default: true)</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">alignTabs</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">'start' | 'center' | 'end'</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Tab alignment (default: 'start')</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">disableRipple</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Whether to disable ripple effects (default: false)</td>
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
export class TabDocComponent {
  @ViewChild('overviewContent', { static: true }) overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true }) useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;

  tabComponent = TabComponent;
  publishedDate = '2025-05-21';
  title = 'Tab Component';

  htmlCode = `
    <lib-tab 
      [tabConfig]="tabs"
      [initialRoute]="'/base'"
      [animationDuration]="300"
      [headerPosition]="'below'">
    </lib-tab>
  `;

  tsCode = `
    import { Component } from '@angular/core';
    import { LibTabComponent } from '@saad-ihhn/ihhn-host-lib/lib-tab';
    import { ProfileComponent } from './profile.component';
    import { SettingsComponent } from './settings.component';
    
    @Component({
      selector: 'app-tab-demo',
      standalone: true,
      imports: [LibTabComponent],
      template: \`
        <lib-tab [tabConfig]="tabs"></lib-tab>
      \`,
    })
    export class TabDemoComponent {
      tabs = [
        {
          label: 'Profile',
          type: 'route',
          route: 'profile'
        },
        {
          label: 'Settings',
          type: 'component',
          component: SettingsComponent,
          inputs: { userId: 123 },
          outputs: { saved: this.onSettingsSaved.bind(this) }
        }
      ];

      onSettingsSaved(event: any) {
        console.log('Settings saved:', event);
      }
    }
  `;

  basicSetupExample = `
    @Component({
      selector: 'app-tab-demo',
      standalone: true,
      imports: [LibTabComponent],
      template: \`
        <lib-tab [tabConfig]="tabs"></lib-tab>
      \`,
    })
    export class TabDemoComponent {
      tabs = [
        {
          label: 'Dashboard',
          type: 'route',
          route: 'dashboard'
        },
        {
          label: 'Analytics',
          type: 'component',
          component: AnalyticsComponent
        },
        {
          label: 'Reports',
          type: 'route',
          route: 'reports'
        }
      ];
    }
  `;

  componentWithIOExample = `
    // In parent component
    tabs = [
      {
        label: 'User Editor',
        type: 'component',
        component: UserEditorComponent,
        inputs: {
          user: this.currentUser,
          roles: this.availableRoles
        },
        outputs: {
          userUpdated: this.handleUserUpdate.bind(this),
          roleChanged: this.handleRoleChange.bind(this)
        }
      }
    ];

    handleUserUpdate(updatedUser: User) {
      // Update user logic
    }

    handleRoleChange(newRole: string) {
      // Handle role change logic
    }

    // In UserEditorComponent
    @Input() user!: User;
    @Input() roles!: string[];
    @Output() userUpdated = new EventEmitter<User>();
    @Output() roleChanged = new EventEmitter<string>();
  `;

  dynamicTabsExample = `
    // In component
    tabConfigs = [
      {
        label: 'Home',
        type: 'route',
        route: 'home',
        icon: 'home'
      },
      {
        label: 'Messages',
        type: 'component',
        component: MessagesComponent,
        icon: 'message',
        inputs: { userId: this.currentUserId }
      },
      {
        label: 'Notifications',
        type: 'component',
        component: NotificationsComponent,
        icon: 'notifications',
        destroyOnHide: true
      }
    ];

    addNewTab() {
      this.tabConfigs = [
        ...this.tabConfigs,
        {
          label: 'New Tab',
          type: 'component',
          component: NewTabComponent,
          icon: 'add'
        }
      ];
    }
  `;

  disabledTabExample = `
    // In component
    tabs = [
      {
        label: 'Active Tab',
        type: 'component',
        component: ActiveComponent
      },
      {
        label: 'Disabled Tab',
        type: 'component',
        component: DisabledComponent,
        disabled: true
      }
    ];

    enableTab() {
      this.tabs[1].disabled = false;
      this.tabs = [...this.tabs]; // Trigger change detection
    }
  `;
}