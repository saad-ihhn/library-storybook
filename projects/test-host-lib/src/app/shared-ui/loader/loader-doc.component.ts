import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { CodeViewerComponent } from '../documentation/code-viewer/code-viewer.component';
import { LoaderComponent } from './loader.component';
import { DocumentationComponent } from "../documentation/documentation.component";

@Component({
  selector: 'app-loader-doc',
  standalone: true,
  imports: [CodeViewerComponent, DocumentationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-documentation 
      [publishedDate]="publishedDate" 
      [title]="title"
      [htmlCode]="htmlCode"
      [component]="loaderComponent" 
      [tsCode]="tsCode" 
      [overviewContent]="overviewContent"
      [useCasesContent]="useCasesContent" 
      [noteContent]="noteContent" 
      [otherContent]="otherContent">
    </app-documentation>

    <ng-template #overviewContent>
      <div class="space-y-4">
        <p class="text-on-surface">
          The <code class="bg-gray-100 px-1 py-0.5 rounded text-gray-800">LibLoaderComponent</code> provides flexible loading indicators with support for both spinner and image-based loaders. It's designed to enhance user experience during asynchronous operations.
        </p>
        
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-blue-800">Loader Features</h3>
              <div class="mt-2 text-sm text-blue-700">
                <p>
                  This component includes several loading indicator options:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Material design spinner with customizable colors</li>
                  <li>Support for image-based loaders (GIFs, SVGs, etc.)</li>
                  <li>Determinate and indeterminate modes</li>
                  <li>Customizable size and appearance</li>
                  <li>Easy integration with any application</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-semibold mt-6">Key Features</h3>
        <ul class="list-disc pl-5 space-y-2 text-on-surface">
          <li>Two loading modes: spinner and image</li>
          <li>Customizable colors (primary, accent, warn)</li>
          <li>Adjustable size through diameter property</li>
          <li>Determinate mode for progress indication</li>
          <li>Indeterminate mode for unknown duration operations</li>
          <li>Overlay background for better visibility</li>
          <li>Simple API with clear inputs</li>
        </ul>
      </div>
    </ng-template>

    <ng-template #useCasesContent>
      <div class="space-y-6">    
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Basic Spinner Loader</h3>
            <p class="mt-2 text-gray-600">
              Simple implementation of a spinner loader with default settings.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="basicSpinnerExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Image Loader</h3>
            <p class="mt-2 text-gray-600">
              Using a custom image as a loading indicator.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="imageLoaderExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Determinate Loader</h3>
            <p class="mt-2 text-gray-600">
              Showing progress with a determinate spinner.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="determinateExample"></app-code-viewer>
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
                  When using loaders:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Optimize image sizes for image-based loaders</li>
                  <li>Consider using SVG for smoother animations</li>
                  <li>Don't keep loaders visible longer than necessary</li>
                  <li>For long operations, consider adding progress indicators</li>
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
                  <li>Use loaders for operations longer than 300ms</li>
                  <li>Match loader style to your application theme</li>
                  <li>Consider adding loading text for clarity</li>
                  <li>For image loaders, choose simple, recognizable animations</li>
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
            <h3 class="text-lg font-medium text-gray-900">Full Page Loader</h3>
            <p class="mt-2 text-gray-600">
              Implementing a full-page loading overlay.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="fullPageLoaderExample"></app-code-viewer>
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
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">imageSrc</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                  <td class="px-6 py-4 text-sm text-gray-500">URL of an image to use as loader (optional)</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">color</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Color theme ('primary', 'accent', 'warn')</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">diameter</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">number</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Size of the spinner in pixels</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">mode</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                  <td class="px-6 py-4 text-sm text-gray-500">'determinate' or 'indeterminate'</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">value</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">number</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Progress value (0-100) for determinate mode</td>
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
export class LoaderDocComponent {
  @ViewChild('overviewContent', { static: true }) overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true }) useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;

  loaderComponent = LoaderComponent;
  publishedDate = '2025-06-03';
  title = 'Loader Component';

  htmlCode = `
    <lib-loader 
      [imageSrc]="loadingImage" 
      [color]="'primary'" 
      [diameter]="60" 
      [mode]="'indeterminate'">
    </lib-loader>
  `;

  tsCode = `
    import { Component } from '@angular/core';
    import { LibLoaderComponent } from '@saad-ihhn/ihhn-host-lib/lib-loader';
    
    @Component({
      selector: 'app-loader-example',
      standalone: true,
      imports: [LibLoaderComponent],
      template: \`
        <lib-loader 
          [color]="color" 
          [diameter]="size" 
          [mode]="mode">
        </lib-loader>
      \`,
    })
    export class LoaderExampleComponent {
      color = 'primary';
      size = 60;
      mode = 'indeterminate';
      loadingImage = 'assets/images/loading.gif';
    }
  `;

  basicSpinnerExample = `
    <!-- Simple spinner with default settings -->
    <lib-loader></lib-loader>

    <!-- Or with custom properties -->
    <lib-loader 
      [color]="'accent'" 
      [diameter]="80">
    </lib-loader>
  `;

  imageLoaderExample = `
    @Component({
      template: \`
        <lib-loader 
          [imageSrc]="'assets/images/custom-loader.svg'"
          [diameter]="100">
        </lib-loader>
      \`
    })
    export class ImageLoaderExample {
      // Component logic here
    }
  `;

  determinateExample = `
    @Component({
      template: \`
        <lib-loader 
          [mode]="'determinate'" 
          [value]="progressValue">
        </lib-loader>
      \`
    })
    export class ProgressLoaderExample {
      progressValue = 0;
      
      constructor() {
        // Simulate progress
        const interval = setInterval(() => {
          this.progressValue += 10;
          if (this.progressValue >= 100) clearInterval(interval);
        }, 500);
      }
    }
  `;

  fullPageLoaderExample = `
    <!-- In your template -->
    <div class="full-page-loader" *ngIf="isLoading">
      <lib-loader 
        [imageSrc]="'assets/images/full-page-loader.svg'"
        [diameter]="120">
      </lib-loader>
    </div>

    /* In your CSS */
    .full-page-loader {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }
  `;
}