import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { CodeViewerComponent } from '../documentation/code-viewer/code-viewer.component';
import { SearchInputComponent } from './search-input.component';
import { DocumentationComponent } from "../documentation/documentation.component";

@Component({
  selector: 'app-search-input-doc',
  standalone: true,
  imports: [CodeViewerComponent, DocumentationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-documentation 
      [publishedDate]="publishedDate" 
      [title]="title"
      [htmlCode]="htmlCode"
      [component]="searchInputComponent" 
      [tsCode]="tsCode" 
      [overviewContent]="overviewContent"
      [useCasesContent]="useCasesContent" 
      [noteContent]="noteContent" 
      [otherContent]="otherContent">
    </app-documentation>

    <ng-template #overviewContent>
      <div class="space-y-4">
        <p class="text-on-surface">
          The <code class="bg-gray-100 px-1 py-0.5 rounded text-gray-800">LibSearchComponent</code> provides a powerful search input with debouncing capabilities, designed to enhance user experience during data filtering operations.
        </p>
        
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-blue-800">Search Input Features</h3>
              <div class="mt-2 text-sm text-blue-700">
                <p>
                  This component includes several advanced search capabilities:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Built-in debouncing to reduce API calls</li>
                  <li>Customizable labels and placeholders</li>
                  <li>Disabled state support</li>
                  <li>FormControl integration</li>
                  <li>Accessibility support</li>
                  <li>Material design compliant</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-semibold mt-6">Key Features</h3>
        <ul class="list-disc pl-5 space-y-2 text-on-surface">
          <li>Automatic debouncing of input changes</li>
          <li>Seamless integration with Reactive Forms</li>
          <li>Customizable debounce delay</li>
          <li>Disabled state support</li>
          <li>Clean Material Design appearance</li>
          <li>Responsive design</li>
          <li>Simple API with clear inputs</li>
        </ul>
      </div>
    </ng-template>

    <ng-template #useCasesContent>
      <div class="space-y-6">    
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Basic Search Input</h3>
            <p class="mt-2 text-gray-600">
              Simple search input with default settings.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="basicExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Customized Search Input</h3>
            <p class="mt-2 text-gray-600">
              Search input with custom label, placeholder and debounce delay.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="customizedExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Disabled Search Input</h3>
            <p class="mt-2 text-gray-600">
              Search input in disabled state.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="disabledExample"></app-code-viewer>
          </div>
        </div>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Reactive Forms Integration</h3>
            <p class="mt-2 text-gray-600">
              Using search input with Angular Reactive Forms.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="reactiveFormsExample"></app-code-viewer>
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
              <h3 class="text-sm font-medium text-yellow-800">Usage Notes</h3>
              <div class="mt-2 text-sm text-yellow-700">
                <p>
                  When using search inputs:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Choose appropriate debounce delay for your use case</li>
                  <li>Always provide clear labels and placeholders</li>
                  <li>Consider accessibility requirements</li>
                  <li>Clean up debounce subscriptions when component is destroyed</li>
                  <li>Test with different input speeds</li>
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
                  For optimal performance:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Use debouncing to reduce unnecessary API calls</li>
                  <li>Consider server-side filtering for large datasets</li>
                  <li>Avoid complex operations in value change handlers</li>
                  <li>Use OnPush change detection where possible</li>
                  <li>Clean up resources in ngOnDestroy</li>
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
            <h3 class="text-lg font-medium text-gray-900">Custom Debounce Implementation</h3>
            <p class="mt-2 text-gray-600">
              Implementing custom debounce logic with the search input.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="customDebounceExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Component API</h3>
            <p class="mt-2 text-gray-600">
              Complete list of available properties.
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
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">label</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Label for the search input (default: 'Search')</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">placeholder</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Placeholder text (default: 'Type to search...')</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">disabled</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Whether the input is disabled (default: false)</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">control</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">FormControl</td>
                  <td class="px-6 py-4 text-sm text-gray-500">FormControl instance for reactive forms integration</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">debounceDelay</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">number</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Debounce delay in milliseconds (default: 300)</td>
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
export class SearchInputDocComponent {
  @ViewChild('overviewContent', { static: true }) overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true }) useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;

  searchInputComponent = SearchInputComponent;
  publishedDate = '2025-06-03';
  title = 'Search Input Component';

  htmlCode = `
    <lib-search
      [label]="'Search'"
      [placeholder]="'Type to search...'"
      [control]="searchControl"
      [debounceDelay]="300">
    </lib-search>
  `;

  tsCode = `
    import { Component } from '@angular/core';
    import { FormControl } from '@angular/forms';
    import { LibSearchComponent } from '@saad-ihhn/ihhn-host-lib/lib-forms';
    
    @Component({
      selector: 'app-search-input-example',
      standalone: true,
      imports: [LibSearchComponent],
      template: \`
        <lib-search
          [label]="'Search'"
          [placeholder]="'Type to search...'"
          [control]="searchControl"
          [debounceDelay]="300">
        </lib-search>
      \`,
    })
    export class SearchInputExampleComponent {
      searchControl = new FormControl('');
      
      constructor() {
        this.searchControl.valueChanges.subscribe(value => {
          console.log('Search value changed:', value);
        });
      }
    }
  `;

  basicExample = `
    @Component({
      template: \`
        <lib-search></lib-search>
      \`
    })
    export class BasicExample {
      // Basic search input with default settings
    }
  `;

  customizedExample = `
    @Component({
      template: \`
        <lib-search
          [label]="'Custom Search'"
          [placeholder]="'Enter keywords...'"
          [debounceDelay]="500">
        </lib-search>
      \`
    })
    export class CustomizedExample {
      // Search input with custom settings
    }
  `;

  disabledExample = `
    @Component({
      template: \`
        <lib-search [disabled]="true"></lib-search>
      \`
    })
    export class DisabledExample {
      // Disabled search input
    }
  `;

  reactiveFormsExample = `
    @Component({
      template: \`
        <lib-search [control]="searchControl"></lib-search>
      \`
    })
    export class ReactiveFormsExample {
      searchControl = new FormControl('');
      
      constructor() {
        this.searchControl.valueChanges.subscribe(value => {
          console.log('Search value:', value);
        });
      }
    }
  `;

  customDebounceExample = `
    @Component({
      template: \`
        <lib-search 
          [control]="searchControl"
          [debounceDelay]="1000">
        </lib-search>
      \`
    })
    export class CustomDebounceExample {
      searchControl = new FormControl('');
      
      constructor(private debounceService: LibDebouncingService) {
        this.searchControl.valueChanges.subscribe(value => {
          this.debounceService.emitValue('custom-search', value ?? '', 1000);
        });
        
        this.debounceService.onValue<string>('custom-search')()
          .subscribe(value => {
            if (value) {
              this.performSearch(value);
            }
          });
      }
      
      performSearch(term: string) {
        console.log('Searching for:', term);
        // Implement your search logic here
      }
    }
  `;
}