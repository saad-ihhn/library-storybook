import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { CodeViewerComponent } from '../../shared-ui/documentation/code-viewer/code-viewer.component';
import { DocumentationComponent } from "../../shared-ui/documentation/documentation.component";
import { ThrottlingServiceComponent } from './throttling-service.component';

@Component({
  selector: 'app-throttling-service-doc',
  standalone: true,
  imports: [CodeViewerComponent, DocumentationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-documentation 
      [publishedDate]="publishedDate" 
      [title]="title"
      [htmlCode]="htmlCode"
      [component]="throttlingComponent" 
      [tsCode]="tsCode" 
      [overviewContent]="overviewContent"
      [useCasesContent]="useCasesContent" 
      [noteContent]="noteContent" 
      [otherContent]="otherContent">
    </app-documentation>

    <ng-template #overviewContent>
      <div class="space-y-4">
        <p class="text-on-surface">
          The <code class="bg-gray-100 px-1 py-0.5 rounded text-gray-800">LibThrottlingService</code> provides a powerful way to control the rate at which events are processed, preventing excessive updates and improving performance.
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
                  <li>Multiple independent throttled streams</li>
                  <li>Configurable delay for each stream</li>
                  <li>Type-safe values with generics</li>
                  <li>Reactive signals for easy consumption</li>
                  <li>Works with any event source (DOM events, forms, etc.)</li>
                  <li>Prevents unnecessary processing and API calls</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-semibold mt-6">Behavior</h3>
        <ul class="list-disc pl-5 space-y-2 text-on-surface">
          <li>Only emits the most recent value after the delay period</li>
          <li>Maintains separate streams for different event types</li>
          <li>Values are emitted as Angular signals for reactive programming</li>
          <li>Automatically cleans up resources</li>
          <li>Works seamlessly with Angular's change detection</li>
        </ul>
      </div>
    </ng-template>

    <ng-template #useCasesContent>
      <div class="space-y-6">    
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Scroll Event Throttling</h3>
            <p class="mt-2 text-gray-600">
              Throttling scroll events to prevent excessive updates.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="scrollExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Search Input Throttling</h3>
            <p class="mt-2 text-gray-600">
              Preventing excessive API calls during search input.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="searchExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Window Resize Throttling</h3>
            <p class="mt-2 text-gray-600">
              Optimizing resize event handling.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="resizeExample"></app-code-viewer>
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
              <h3 class="text-sm font-medium text-yellow-800">Performance Considerations</h3>
              <div class="mt-2 text-sm text-yellow-700">
                <p>
                  When using throttling:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Choose appropriate delay times based on your use case</li>
                  <li>Balance responsiveness with performance</li>
                  <li>Consider using debouncing for some scenarios</li>
                  <li>Test with real-world usage patterns</li>
                  <li>Monitor memory usage with many active streams</li>
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
              <h3 class="text-sm font-medium text-purple-800">Implementation Tips</h3>
              <div class="mt-2 text-sm text-purple-700">
                <p>
                  For optimal implementation:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Use descriptive stream names for better maintainability</li>
                  <li>Clean up subscriptions when components are destroyed</li>
                  <li>Consider combining with other RxJS operators when needed</li>
                  <li>Test edge cases with rapid event sequences</li>
                  <li>Document your throttling delays for future reference</li>
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
            <h3 class="text-lg font-medium text-gray-900">Multiple Streams</h3>
            <p class="mt-2 text-gray-600">
              Managing multiple independent throttled streams.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="multipleStreamsExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Service API</h3>
            <p class="mt-2 text-gray-600">
              Complete list of available service methods.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Parameters</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">emitValue</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">(streamName: string, value: T, delayMs: number)</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Emits a value to the specified stream with throttling</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">onValue</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">(streamName: string)</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Returns a signal that emits throttled values from the specified stream</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">clearStream</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">(streamName: string)</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Clears and disposes of the specified stream</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">clearAll</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">none</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Clears and disposes of all active streams</td>
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
export class ThrottlingDocComponent {
  @ViewChild('overviewContent', { static: true }) overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true }) useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;

  throttlingComponent = ThrottlingServiceComponent;
  publishedDate = '2025-05-21';
  title = 'Throttling Service';

  htmlCode = `
    <!-- Example scroll container -->
    <div 
      class="scroll-container"
      (scroll)="onScroll($event)"
    >
      <!-- Scrollable content -->
    </div>
    
    <!-- Example search input -->
    <lib-text-field
      [label]="'Search'"
      [control]="searchControl"
    ></lib-text-field>
  `;

  tsCode = `
    import { Component, inject } from '@angular/core';
    import { LibThrottlingService } from '@saad-ihhn/ihhn-host-lib/services';
    import { FormControl } from '@angular/forms';
    
    @Component({
      selector: 'app-throttling-demo',
      template: \`
        <!-- Template content here -->
      \`,
    })
    export class ThrottlingDemoComponent {
      private $throttle = inject(LibThrottlingService);
      
      searchControl = new FormControl('');
      throttledSearch = this.$throttle.onValue<string>('search');
      throttledScroll = this.$throttle.onValue<number>('scroll');
      
      constructor() {
        // Throttle search input
        this.searchControl.valueChanges.subscribe(value => {
          this.$throttle.emitValue('search', value ?? '', 500);
        });
      }
      
      onScroll(event: Event) {
        const scrollTop = (event.target as HTMLElement).scrollTop;
        this.$throttle.emitValue('scroll', scrollTop, 1000);
      }
    }
  `;

  scrollExample = `
    // In your component
    private $throttle = inject(LibThrottlingService);
    
    // Create a signal for throttled scroll values
    scrollY = this.$throttle.onValue<number>('scroll');
    
    // Scroll event handler
    onScroll(event: Event) {
      const scrollTop = (event.target as HTMLElement).scrollTop;
      this.$throttle.emitValue('scroll', scrollTop, 1000); // Throttle to 1 second
    }
    
    // Usage in template
    <div (scroll)="onScroll($event)">
      <!-- Content -->
    </div>
    <p>Throttled scroll position: {{ scrollY() }}</p>
  `;

  searchExample = `
    // In your component
    private $throttle = inject(LibThrottlingService);
    searchControl = new FormControl('');
    
    // Create a signal for throttled search values
    searchQuery = this.$throttle.onValue<string>('search');
    
    constructor() {
      // Throttle search input
      this.searchControl.valueChanges.subscribe(value => {
        this.$throttle.emitValue('search', value ?? '', 500); // Throttle to 500ms
      });
      
      // React to throttled values
      effect(() => {
        const query = this.searchQuery();
        if (query) {
          // Perform search API call here
        }
      });
    }
  `;

  resizeExample = `
    // In your component
    private $throttle = inject(LibThrottlingService);
    
    // Create a signal for throttled window width
    windowWidth = this.$throttle.onValue<number>('resize');
    
    @HostListener('window:resize')
    onResize() {
      this.$throttle.emitValue('resize', window.innerWidth, 300); // Throttle to 300ms
    }
    
    // React to changes
    effect(() => {
      const width = this.windowWidth();
      // Update layout based on width
    });
  `;

  multipleStreamsExample = `
    // Managing multiple independent throttled streams
    private $throttle = inject(LibThrottlingService);
    
    // Different streams with different throttling delays
    scrollPosition = this.$throttle.onValue<number>('scroll');
    searchQuery = this.$throttle.onValue<string>('search');
    mousePosition = this.$throttle.onValue<{x: number, y: number}>('mouse');
    
    // Emit to different streams
    onScroll(event: Event) {
      this.$throttle.emitValue('scroll', (event.target as HTMLElement).scrollTop, 1000);
    }
    
    onMouseMove(event: MouseEvent) {
      this.$throttle.emitValue('mouse', {x: event.clientX, y: event.clientY}, 200);
    }
    
    // Clean up when needed
    ngOnDestroy() {
      this.$throttle.clearStream('scroll');
      this.$throttle.clearStream('search');
      this.$throttle.clearStream('mouse');
    }
  `;
}