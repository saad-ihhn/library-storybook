import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild, inject } from '@angular/core';
import { CodeViewerComponent } from '../../shared-ui/documentation/code-viewer/code-viewer.component';
import { DocumentationComponent } from "../../shared-ui/documentation/documentation.component";
import { DebouncingServiceComponent } from './debouncing-service.component';

@Component({
  selector: 'app-debouncing-service-documentation',
  standalone: true,
  imports: [CodeViewerComponent, DocumentationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-documentation 
      [publishedDate]="publishedDate" 
      [title]="title"
      [htmlCode]="htmlCode"
      [component]="debouncingComponent" 
      [tsCode]="tsCode"
      [overviewContent]="overviewContent"
      [useCasesContent]="useCasesContent" 
      [noteContent]="noteContent" 
      [otherContent]="otherContent">
    </app-documentation>

    <ng-template #overviewContent>
      <div class="space-y-4">
        <p class="text-on-surface">
          The <code class="bg-gray-100 px-1 py-0.5 rounded text-gray-800">LibDebouncingService</code> provides a utility for debouncing values in Angular applications, particularly useful for handling user input like search fields.
        </p>
        
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-blue-800">Debouncing Service Features</h3>
              <div class="mt-2 text-sm text-blue-700">
                <p>
                  This service includes several useful features:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Simple API for debouncing values</li>
                  <li>Multiple debounce keys support</li>
                  <li>Signal-based reactive updates</li>
                  <li>Manual clearing of debounced values</li>
                  <li>Configurable debounce delay</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-semibold mt-6">Key Features</h3>
        <ul class="list-disc pl-5 space-y-2 text-on-surface">
          <li>Debounce user input to reduce unnecessary operations</li>
          <li>Track multiple debounced values with unique keys</li>
          <li>Reactive updates via Angular signals</li>
          <li>Simple and clean API</li>
          <li>Configurable debounce timing</li>
          <li>Manual control over debounced values</li>
        </ul>
      </div>
    </ng-template>

    <ng-template #useCasesContent>
      <div class="space-y-6">    
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Basic Debouncing</h3>
            <p class="mt-2 text-gray-600">
              Simple debouncing of user input with a 3-second delay.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="basicSetupExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Multiple Debounce Keys</h3>
            <p class="mt-2 text-gray-600">
              Using different debounce keys for multiple inputs.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="multipleKeysExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Custom Debounce Times</h3>
            <p class="mt-2 text-gray-600">
              Using different debounce times for different use cases.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="customTimesExample"></app-code-viewer>
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
                  When using this service:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Choose appropriate debounce times based on your use case</li>
                  <li>Clear unused keys to prevent memory leaks</li>
                  <li>For frequently changing values, consider shorter debounce times</li>
                  <li>For expensive operations, consider longer debounce times</li>
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
                  <li>Use shorter debounce times for instant feedback (100-300ms)</li>
                  <li>Use longer debounce times for expensive operations (500-1000ms)</li>
                  <li>Provide visual feedback when debouncing is active</li>
                  <li>Consider immediate execution for certain user actions</li>
                  <li>Clear debounced values when navigating away</li>
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
            <h3 class="text-lg font-medium text-gray-900">Service API</h3>
            <p class="mt-2 text-gray-600">
              Complete list of available methods.
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
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">(key: string, value: any, delay?: number)</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Emits a value that will be debounced with the specified delay</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">onValue</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">(key: string)</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Returns a signal that updates with debounced values</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">clearKey</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">(key: string)</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Clears the debounced value for the specified key</td>
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
export class DebouncingServiceDocComponent {
  @ViewChild('overviewContent', { static: true }) overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true }) useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;

  debouncingComponent = DebouncingServiceComponent;
  publishedDate = '2025-05-21';
  title = 'Debouncing Service';

  htmlCode = `
    <div class="p-4 space-y-6">
      <lib-search
        [label]="'Search Input'"
        [placeholder]="'Start typing...'"
        [control]="searchControl"
      ></lib-search>

      <div class="mt-4 space-y-2">
        <p><strong>Input:</strong> {{ searchControl.value || '—' }}</p>
        <p><strong>Debounced Value (after 500ms):</strong> {{ debouncedValue() || 'Waiting...' }}</p>
      </div>
    </div>
  `;

  tsCode = `
    import { Component, inject, signal } from '@angular/core';
    import { FormControl } from '@angular/forms';
    import { LibDebouncingService } from '@saad-ihhn/ihhn-host-lib/services';
    
    @Component({
      selector: 'app-search-demo',
      standalone: true,
      template: \`
        <div class="p-4 space-y-6">
          <lib-search
            [label]="'Search Input'"
            [placeholder]="'Start typing...'"
            [control]="searchControl"
          ></lib-search>

          <div class="mt-4 space-y-2">
            <p><strong>Input:</strong> {{ searchControl.value || '—' }}</p>
            <p><strong>Debounced Value:</strong> {{ debouncedValue() || 'Waiting...' }}</p>
          </div>
        </div>
      \`,
    })
    export class SearchDemoComponent {
      private $debounce = inject(LibDebouncingService);
      searchControl = new FormControl('');
      debouncedValue = signal<string | null>(null);

      constructor() {
        const signal$ = this.$debounce.onValue<string>('search');
        
        // Update local signal when debounced value changes
        effect(() => {
          this.debouncedValue.set(signal$());
        });

        // Debounce input changes
        this.searchControl.valueChanges.subscribe(value => {
          this.$debounce.emitValue('search', value ?? '', 500);
        });
      }
    }
  `;

  basicSetupExample = `
    import { Component, inject, signal } from '@angular/core';
    import { FormControl } from '@angular/forms';
    import { LibDebouncingService } from '@saad-ihhn/ihhn-host-lib/services';
    
    @Component({
      selector: 'app-search',
      standalone: true,
      template: \`
        <input [formControl]="searchControl" placeholder="Search...">
        <p>Debounced value: {{ debouncedValue() }}</p>
      \`,
    })
    export class SearchComponent {
      private $debounce = inject(LibDebouncingService);
      searchControl = new FormControl('');
      debouncedValue = signal<string | null>(null);

      constructor() {
        const signal$ = this.$debounce.onValue<string>('search');
        
        effect(() => {
          this.debouncedValue.set(signal$());
        });

        this.searchControl.valueChanges.subscribe(value => {
          this.$debounce.emitValue('search', value ?? '', 500);
        });
      }
    }
  `;

  multipleKeysExample = `
    import { Component, inject, signal } from '@angular/core';
    import { FormControl } from '@angular/forms';
    import { LibDebouncingService } from '@saad-ihhn/ihhn-host-lib/services';
    
    @Component({
      selector: 'app-multi-search',
      standalone: true,
      template: \`
        <input [formControl]="nameControl" placeholder="Name">
        <input [formControl]="emailControl" placeholder="Email">
        
        <p>Debounced name: {{ debouncedName() }}</p>
        <p>Debounced email: {{ debouncedEmail() }}</p>
      \`,
    })
    export class MultiSearchComponent {
      private $debounce = inject(LibDebouncingService);
      
      nameControl = new FormControl('');
      emailControl = new FormControl('');
      
      debouncedName = signal<string | null>(null);
      debouncedEmail = signal<string | null>(null);

      constructor() {
        // Setup name debouncing
        const nameSignal$ = this.$debounce.onValue<string>('name');
        effect(() => this.debouncedName.set(nameSignal$()));
        this.nameControl.valueChanges.subscribe(value => {
          this.$debounce.emitValue('name', value ?? '', 500);
        });

        // Setup email debouncing
        const emailSignal$ = this.$debounce.onValue<string>('email');
        effect(() => this.debouncedEmail.set(emailSignal$()));
        this.emailControl.valueChanges.subscribe(value => {
          this.$debounce.emitValue('email', value ?? '', 300);
        });
      }
    }
  `;

  customTimesExample = `
    import { Component, inject, signal } from '@angular/core';
    import { FormControl } from '@angular/forms';
    import { LibDebouncingService } from '@saad-ihhn/ihhn-host-lib/services';
    
    @Component({
      selector: 'app-custom-debounce',
      standalone: true,
      template: \`
        <div>
          <input [formControl]="instantControl" placeholder="Instant (100ms)">
          <p>Value: {{ instantValue() }}</p>
        </div>
        
        <div>
          <input [formControl]="standardControl" placeholder="Standard (300ms)">
          <p>Value: {{ standardValue() }}</p>
        </div>
        
        <div>
          <input [formControl]="slowControl" placeholder="Slow (1000ms)">
          <p>Value: {{ slowValue() }}</p>
        </div>
      \`,
    })
    export class CustomDebounceComponent {
      private $debounce = inject(LibDebouncingService);
      
      instantControl = new FormControl('');
      standardControl = new FormControl('');
      slowControl = new FormControl('');
      
      instantValue = signal<string | null>(null);
      standardValue = signal<string | null>(null);
      slowValue = signal<string | null>(null);

      constructor() {
        // Instant feedback (100ms)
        const instantSignal$ = this.$debounce.onValue<string>('instant');
        effect(() => this.instantValue.set(instantSignal$()));
        this.instantControl.valueChanges.subscribe(value => {
          this.$debounce.emitValue('instant', value ?? '', 100);
        });

        // Standard debounce (300ms)
        const standardSignal$ = this.$debounce.onValue<string>('standard');
        effect(() => this.standardValue.set(standardSignal$()));
        this.standardControl.valueChanges.subscribe(value => {
          this.$debounce.emitValue('standard', value ?? '', 300);
        });

        // Slow operation (1000ms)
        const slowSignal$ = this.$debounce.onValue<string>('slow');
        effect(() => this.slowValue.set(slowSignal$()));
        this.slowControl.valueChanges.subscribe(value => {
          this.$debounce.emitValue('slow', value ?? '', 1000);
        });
      }
    }
  `;
}