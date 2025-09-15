import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { CodeViewerComponent } from '../documentation/code-viewer/code-viewer.component';
import { TextareaComponent } from './textarea.component';
import { DocumentationComponent } from "../documentation/documentation.component";

@Component({
  selector: 'app-textarea-doc',
  standalone: true,
  imports: [CodeViewerComponent, DocumentationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-documentation 
      [publishedDate]="publishedDate" 
      [title]="title"
      [htmlCode]="htmlCode"
      [component]="textareaComponent" 
      [tsCode]="tsCode" 
      [overviewContent]="overviewContent"
      [useCasesContent]="useCasesContent" 
      [noteContent]="noteContent" 
      [otherContent]="otherContent">
    </app-documentation>

    <ng-template #overviewContent>
      <div class="space-y-4">
        <p class="text-on-surface">
          The <code class="bg-gray-100 px-1 py-0.5 rounded text-gray-800">&lt;lib-textarea&gt;</code> component provides a multi-line text input field with all the features of the text field component plus additional textarea-specific functionality.
        </p>
        
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-blue-800">Textarea Features</h3>
              <div class="mt-2 text-sm text-blue-700">
                <p>
                  Additional features specific to textareas:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Multi-line text input support</li>
                  <li>Configurable rows and columns</li>
                  <li>Resizable (configurable)</li>
                  <li>Character count indicator</li>
                  <li>Scrollable content area</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-semibold mt-6">Key Features</h3>
        <ul class="list-disc pl-5 space-y-2 text-on-surface">
          <li>All standard text field features</li>
          <li>Customizable height via rows attribute</li>
          <li>Resize behavior control (none, both, vertical, horizontal)</li>
          <li>Min/max height constraints</li>
          <li>Character count tracking</li>
          <li>Scrollable content with overflow handling</li>
        </ul>
      </div>
    </ng-template>

    <ng-template #useCasesContent>
      <div class="space-y-6">    
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Basic Textarea</h3>
            <p class="mt-2 text-gray-600">
              Standard textarea with default 3 rows and vertical resize.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="basicSetupExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Fixed Size Textarea</h3>
            <p class="mt-2 text-gray-600">
              Textarea with fixed dimensions and disabled resize.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="fixedSizeExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Character Count</h3>
            <p class="mt-2 text-gray-600">
              Textarea with character count indicator and max length validation.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="characterCountExample"></app-code-viewer>
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
              <h3 class="text-sm font-medium text-yellow-800">Important Notes</h3>
              <div class="mt-2 text-sm text-yellow-700">
                <p>
                  When using textareas:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Consider setting min-height for better UX</li>
                  <li>For long content, set max-height with overflow</li>
                  <li>Disable resize when consistent sizing is required</li>
                  <li>Use rows attribute to suggest initial height</li>
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
              <h3 class="text-sm font-medium text-purple-800">UX Considerations</h3>
              <div class="mt-2 text-sm text-purple-700">
                <p>
                  For optimal user experience:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Use for multi-line content only</li>
                  <li>Provide sufficient vertical space</li>
                  <li>Consider scroll behavior for long content</li>
                  <li>Match resize behavior to content type</li>
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
            <h3 class="text-lg font-medium text-gray-900">Dynamic Height</h3>
            <p class="mt-2 text-gray-600">
              Textarea that grows with content up to a maximum height.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="dynamicHeightExample"></app-code-viewer>
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
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">label</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                  <td class="px-6 py-4 text-sm text-gray-500">The label text for the textarea</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">rows</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">number</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Number of visible text rows (default: 3)</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">resize</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Resize behavior (none, both, vertical, horizontal)</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">minHeight</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Minimum height of the textarea</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">hint</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Whether to show character count hint</td>
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
export class TextareaDocComponent {
  @ViewChild('overviewContent', { static: true }) overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true }) useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;

  textareaComponent = TextareaComponent;
  publishedDate = '2025-05-21';
  title = 'Textarea Component';

  htmlCode = `
    <lib-textarea
      [label]="'Description'"
      [placeholder]="'Enter your description'"
      [control]="descriptionControl"
      [rows]="4"
      [resize]="'vertical'"
    ></lib-textarea>
  `;

  tsCode = `
    import { Component, signal } from '@angular/core';
    import { FormControl, Validators } from '@angular/forms';
    import { LibTextareaComponent } from '@saad-ihhn/ihhn-host-lib/lib-forms';
    
    @Component({
      selector: 'app-textarea-demo',
      standalone: true,
      imports: [LibTextareaComponent],
      template: \`
        <lib-textarea
          [label]="label()"
          [placeholder]="placeholder()"
          [control]="descriptionControl"
          [rows]="rows()"
          [resize]="resize()"
        ></lib-textarea>
      \`,
    })
    export class TextareaDemoComponent {
      label = signal('Description');
      placeholder = signal('Enter your description');
      descriptionControl = new FormControl('', [Validators.required]);
      rows = signal(4);
      resize = signal<'none' | 'both' | 'vertical' | 'horizontal'>('vertical');
    }
  `;

  basicSetupExample = `
    @Component({
      selector: 'app-textarea-demo',
      standalone: true,
      imports: [LibTextareaComponent],
      template: \`
        <lib-textarea
          [label]="'Comments'"
          [placeholder]="'Enter your comments'"
          [control]="commentsControl"
          [rows]="5"
        ></lib-textarea>
      \`,
    })
    export class TextareaDemoComponent {
      commentsControl = new FormControl('');
    }
  `;

  fixedSizeExample = `
    @Component({
      selector: 'app-fixed-textarea',
      standalone: true,
      imports: [LibTextareaComponent],
      template: \`
        <lib-textarea
          [label]="'Fixed Size'"
          [control]="fixedControl"
          [rows]="3"
          [resize]="'none'"
          [minHeight]="'100px'"
          [maxHeight]="'200px'"
        ></lib-textarea>
      \`,
    })
    export class FixedTextareaComponent {
      fixedControl = new FormControl('');
    }
  `;

  characterCountExample = `
    @Component({
      selector: 'app-limited-textarea',
      standalone: true,
      imports: [LibTextareaComponent],
      template: \`
        <lib-textarea
          [label]="'Feedback'"
          [control]="feedbackControl"
          [hint]="true"
          [maxlength]="500"
        ></lib-textarea>
      \`,
    })
    export class LimitedTextareaComponent {
      feedbackControl = new FormControl('', [
        Validators.required,
        Validators.maxLength(500)
      ]);
    }
  `;

  dynamicHeightExample = `
    @Component({
      selector: 'app-dynamic-textarea',
      standalone: true,
      imports: [LibTextareaComponent],
      template: \`
        <lib-textarea
          [label]="'Dynamic Content'"
          [control]="dynamicControl"
          [minHeight]="'100px'"
          [maxHeight]="'300px'"
          [resize]="'vertical'"
        ></lib-textarea>
      \`,
    })
    export class DynamicTextareaComponent {
      dynamicControl = new FormControl('');
    }
  `;
}