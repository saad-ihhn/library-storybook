import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { CodeViewerComponent } from '../documentation/code-viewer/code-viewer.component';
import { TypographyColorComponent } from './typography-color.component';
import { DocumentationComponent } from "../documentation/documentation.component";

@Component({
  selector: 'app-typography-color-documentation',
  standalone: true,
  imports: [CodeViewerComponent, DocumentationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-documentation 
      [publishedDate]="publishedDate" 
      [title]="title"
      [htmlCode]="htmlCode"
      [component]="typographyColorComponent" 
      [overviewContent]="overviewContent"
      [useCasesContent]="useCasesContent" 
      [noteContent]="noteContent" 
      [otherContent]="otherContent">
    </app-documentation>

    <ng-template #overviewContent>
      <div class="space-y-4">
        <p class="text-on-surface">
          The <code class="bg-gray-100 px-1 py-0.5 rounded text-gray-800">TypographyColorComponent</code> provides a comprehensive reference for the design system's color palette, typography scale, and elevation system.
        </p>
        
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-blue-800">Design System Features</h3>
              <div class="mt-2 text-sm text-blue-700">
                <p>
                  This component showcases the complete design system:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Color palette with primary, secondary, and surface colors</li>
                  <li>Typography scale with all text styles</li>
                  <li>Elevation system with shadow levels</li>
                  <li>CSS custom property references</li>
                  <li>Live examples of each design token</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-semibold mt-6">Key Features</h3>
        <ul class="list-disc pl-5 space-y-2 text-on-surface">
          <li>Complete color system with on-color variants</li>
          <li>Surface color hierarchy (dim, bright, container levels)</li>
          <li>Fixed color variants for consistent UI elements</li>
          <li>Typography scale from small body text to large display styles</li>
          <li>Six levels of elevation shadows</li>
          <li>Responsive grid layout for easy reference</li>
          <li>Direct CSS variable usage examples</li>
        </ul>
      </div>
    </ng-template>

    <ng-template #useCasesContent>
      <div class="space-y-6">    
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Color System Implementation</h3>
            <p class="mt-2 text-gray-600">
              How to use the color system variables in your components.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="colorSystemExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Typography Implementation</h3>
            <p class="mt-2 text-gray-600">
              Applying typography styles using CSS variables.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="typographyExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Elevation Usage</h3>
            <p class="mt-2 text-gray-600">
              Applying elevation shadows to components.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="elevationExample"></app-code-viewer>
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
              <h3 class="text-sm font-medium text-yellow-800">Color Usage Notes</h3>
              <div class="mt-2 text-sm text-yellow-700">
                <p>
                  When using the color system:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Always pair colors with their on-color variants for proper contrast</li>
                  <li>Use surface colors for backgrounds and containers</li>
                  <li>Reserve primary colors for interactive elements</li>
                  <li>Test color combinations for accessibility</li>
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
              <h3 class="text-sm font-medium text-purple-800">Typography Guidelines</h3>
              <div class="mt-2 text-sm text-purple-700">
                <p>
                  For consistent typography:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Use display styles for marketing content</li>
                  <li>Reserve headline styles for page headings</li>
                  <li>Use title styles for component headings</li>
                  <li>Body styles are for general content</li>
                  <li>Label styles are for form controls and small text</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>

    <ng-template #otherContent>
      <div class="space-y-6">
        <h2 class="text-2xl font-bold">Design Token Reference</h2>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Color Variables</h3>
            <p class="mt-2 text-gray-600">
              Complete list of available color variables.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Variables</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Primary</td>
                  <td class="px-6 py-4 text-sm text-gray-500">
                    --mat-sys-primary, --mat-sys-on-primary,<br>
                    --mat-sys-primary-container, --mat-sys-on-primary-container
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Secondary</td>
                  <td class="px-6 py-4 text-sm text-gray-500">
                    --mat-sys-secondary, --mat-sys-on-secondary,<br>
                    --mat-sys-secondary-container, --mat-sys-on-secondary-container
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Surface</td>
                  <td class="px-6 py-4 text-sm text-gray-500">
                    --mat-sys-surface, --mat-sys-on-surface,<br>
                    --mat-sys-surface-dim, --mat-sys-surface-bright,<br>
                    --mat-sys-surface-container-lowest to --mat-sys-surface-container-highest
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Typography Variables</h3>
            <p class="mt-2 text-gray-600">
              Complete list of typography style variables.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Variables</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Body</td>
                  <td class="px-6 py-4 text-sm text-gray-500">
                    --mat-sys-body-small, --mat-sys-body-medium, --mat-sys-body-large
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Label</td>
                  <td class="px-6 py-4 text-sm text-gray-500">
                    --mat-sys-label-small, --mat-sys-label-medium, --mat-sys-label-large
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Title</td>
                  <td class="px-6 py-4 text-sm text-gray-500">
                    --mat-sys-title-small, --mat-sys-title-medium, --mat-sys-title-large
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Display</td>
                  <td class="px-6 py-4 text-sm text-gray-500">
                    --mat-sys-display-small, --mat-sys-display-medium, --mat-sys-display-large
                  </td>
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
export class TypographyColorDocComponent {
  @ViewChild('overviewContent', { static: true }) overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true }) useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;

  typographyColorComponent = TypographyColorComponent;
  publishedDate = '2025-06-03';
  title = 'Design System Reference';

  htmlCode = `
    <!-- Primary color example -->
    <div style="background-color: var(--mat-sys-primary); color: var(--mat-sys-on-primary)" class="p-4">
      Primary Color Example
    </div>

    <!-- Body text example -->
    <p style="font: var(--mat-sys-body-medium)">
      This is body text using the design system typography
    </p>

    <!-- Elevation example -->
    <div style="box-shadow: var(--mat-sys-level2)" class="p-4">
      This element has elevation level 2
    </div>
  `;

  colorSystemExample = `
    /* Using primary colors */
    .primary-button {
      background-color: var(--mat-sys-primary);
      color: var(--mat-sys-on-primary);
      padding: 0.5rem 1rem;
      border-radius: 4px;
    }

    /* Using surface colors */
    .card {
      background-color: var(--mat-sys-surface-container);
      color: var(--mat-sys-on-surface);
      padding: 1rem;
      border-radius: 8px;
    }
  `;

  typographyExample = `
    /* Applying typography styles */
    h1 {
      font: var(--mat-sys-headline-large);
    }

    h2 {
      font: var(--mat-sys-headline-medium);
    }

    p {
      font: var(--mat-sys-body-medium);
    }

    .caption {
      font: var(--mat-sys-label-small);
    }
  `;

  elevationExample = `
    /* Applying elevation */
    .card-low {
      box-shadow: var(--mat-sys-level1);
    }

    .card-medium {
      box-shadow: var(--mat-sys-level3);
    }

    .card-high {
      box-shadow: var(--mat-sys-level5);
    }
  `;
}