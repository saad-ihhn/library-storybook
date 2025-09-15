import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { CodeViewerComponent } from '../documentation/code-viewer/code-viewer.component';
import { PaginatorComponent } from './paginator.component';
import { DocumentationComponent } from "../documentation/documentation.component";

@Component({
  selector: 'app-paginator-doc',
  standalone: true,
  imports: [CodeViewerComponent, DocumentationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-documentation 
      [publishedDate]="publishedDate" 
      [title]="title"
      [htmlCode]="htmlCode"
      [component]="paginatorComponent" 
      [tsCode]="tsCode" 
      [overviewContent]="overviewContent"
      [useCasesContent]="useCasesContent" 
      [noteContent]="noteContent" 
      [otherContent]="otherContent">
    </app-documentation>

    <ng-template #overviewContent>
      <div class="space-y-4">
        <p class="text-on-surface">
          The <code class="bg-gray-100 px-1 py-0.5 rounded text-gray-800">LibPaginatorComponent</code> provides navigation for paged information, typically used with tables or lists. It allows users to browse through multiple pages of content.
        </p>
        
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-blue-800">Paginator Features</h3>
              <div class="mt-2 text-sm text-blue-700">
                <p>
                  This component includes several pagination options:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Page size selection</li>
                  <li>Navigation between pages</li>
                  <li>Customizable page size options</li>
                  <li>Event emission on page changes</li>
                  <li>Accessibility support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-semibold mt-6">Key Features</h3>
        <ul class="list-disc pl-5 space-y-2 text-on-surface">
          <li>Dynamic page size selection</li>
          <li>First/previous/next/last page navigation</li>
          <li>Customizable range label</li>
          <li>Material design compliant</li>
          <li>Responsive design</li>
          <li>Simple API with clear inputs and outputs</li>
          <li>Theme integration</li>
        </ul>
      </div>
    </ng-template>

    <ng-template #useCasesContent>
      <div class="space-y-6">    
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Basic Pagination</h3>
            <p class="mt-2 text-gray-600">
              Simple pagination with default settings.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="basicExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Custom Page Size Options</h3>
            <p class="mt-2 text-gray-600">
              Customizing the available page size options.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="customSizeOptionsExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Handling Page Events</h3>
            <p class="mt-2 text-gray-600">
              Responding to page change events.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="eventHandlingExample"></app-code-viewer>
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
                  When using paginators:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Ensure the length property is updated when data changes</li>
                  <li>Choose appropriate page size options for your data</li>
                  <li>Handle page events to load the correct data</li>
                  <li>Consider server-side pagination for large datasets</li>
                  <li>Test with different screen sizes</li>
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
                  <li>Show current page and total pages clearly</li>
                  <li>Include items per page selection</li>
                  <li>Consider adding a "Go to page" input for many pages</li>
                  <li>Disable navigation buttons when appropriate</li>
                  <li>Maintain scroll position when changing pages</li>
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
            <h3 class="text-lg font-medium text-gray-900">Server-Side Pagination</h3>
            <p class="mt-2 text-gray-600">
              Implementing pagination with server-side data.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="serverSideExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Component API</h3>
            <p class="mt-2 text-gray-600">
              Complete list of available properties and events.
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
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">length</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">number</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Total number of items</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">pageSize</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">number</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Number of items per page</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">pageSizeOptions</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">number[]</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Available page size options</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">pageIndex</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">number</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Current page index (0-based)</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">(page)</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">EventEmitter&lt;PageEvent&gt;</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Emits when pagination properties change</td>
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
export class PaginatorDocComponent {
  @ViewChild('overviewContent', { static: true }) overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true }) useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;

  paginatorComponent = PaginatorComponent;
  publishedDate = '2025-06-03';
  title = 'Paginator Component';

  htmlCode = `
    <lib-paginator
      [length]="totalItems"
      [pageSize]="pageSize"
      [pageSizeOptions]="[5, 10, 25]"
      (page)="onPageChange($event)">
    </lib-paginator>
  `;

  tsCode = `
    import { Component } from '@angular/core';
    import { LibPaginatorComponent } from '@saad-ihhn/ihhn-host-lib/lib-paginator';
    
    @Component({
      selector: 'app-paginator-example',
      standalone: true,
      imports: [LibPaginatorComponent],
      template: \`
        <lib-paginator
          [length]="totalItems"
          [pageSize]="pageSize"
          [pageSizeOptions]="[5, 10, 25]"
          (page)="onPageChange($event)">
        </lib-paginator>
      \`,
    })
    export class PaginatorExampleComponent {
      totalItems = 100;
      pageSize = 10;
      
      onPageChange(event: any) {
        console.log('Page changed:', event);
        // Load data for new page
      }
    }
  `;

  basicExample = `
    @Component({
      template: \`
        <lib-paginator
          [length]="100"
          [pageSize]="10">
        </lib-paginator>
      \`
    })
    export class BasicExample {
      // Basic pagination with default options
    }
  `;

  customSizeOptionsExample = `
    @Component({
      template: \`
        <lib-paginator
          [length]="totalItems"
          [pageSize]="20"
          [pageSizeOptions]="[10, 20, 50, 100]">
        </lib-paginator>
      \`
    })
    export class CustomSizeOptionsExample {
      totalItems = 250;
    }
  `;

  eventHandlingExample = `
    @Component({
      template: \`
        <lib-paginator
          [length]="totalItems"
          [pageSize]="pageSize"
          (page)="handlePageEvent($event)">
        </lib-paginator>
      \`
    })
    export class EventHandlingExample {
      totalItems = 500;
      pageSize = 25;
      
      handlePageEvent(event: PageEvent) {
        console.log('Page index:', event.pageIndex);
        console.log('Page size:', event.pageSize);
        console.log('Length:', event.length);
        
        // Load data for the new page
        this.loadData(event.pageIndex, event.pageSize);
      }
      
      loadData(pageIndex: number, pageSize: number) {
        // Implementation to load data
      }
    }
  `;

  serverSideExample = `
    @Component({
      template: \`
        <lib-paginator
          [length]="totalItems"
          [pageSize]="pageSize"
          (page)="onPageChange($event)">
        </lib-paginator>
      \`
    })
    export class ServerSideExample {
      totalItems = 0;
      pageSize = 10;
      currentPage = 0;
      
      constructor(private dataService: DataService) {}
      
      ngOnInit() {
        this.loadData(this.currentPage, this.pageSize);
      }
      
      onPageChange(event: PageEvent) {
        this.currentPage = event.pageIndex;
        this.pageSize = event.pageSize;
        this.loadData(this.currentPage, this.pageSize);
      }
      
      loadData(page: number, size: number) {
        this.dataService.getData(page, size).subscribe(response => {
          this.totalItems = response.totalItems;
          // Process the data
        });
      }
    }
  `;
}