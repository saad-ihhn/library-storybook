import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { DocumentationComponent } from '../../documentation/documentation.component';
import { CardComponent } from './card.component';

@Component({
  selector: 'app-card-documentation',
  standalone: true,
  imports: [DocumentationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-documentation 
      [publishedDate]="publishedDate" 
      [title]="title"
      [htmlCode]="htmlCode"
      [component]="cardComponent" 
      [overviewContent]="overviewContent"
      [useCasesContent]="useCasesContent" 
      [noteContent]="noteContent" 
      [otherContent]="otherContent">
    </app-documentation>

    <!-- Overview -->
    <ng-template #overviewContent>
      <div class="space-y-4 text-on-surface">
        <p>
          The <code class="bg-gray-100 px-1 py-0.5 rounded text-gray-800">&lt;lib-card&gt;</code>
          component is a lightweight, reusable container that provides a consistent structure 
          for displaying content in a card layout.
        </p>
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <h3 class="text-sm font-medium text-blue-800">Structure</h3>
          <ul class="list-disc pl-5 mt-2 text-sm text-blue-700 space-y-1">
            <li><strong>Header</strong> – Place titles, actions, or metadata.</li>
            <li><strong>Body</strong> – Main content area (text, forms, media, etc.).</li>
            <li><strong>Footer</strong> – Secondary actions such as buttons or links.</li>
          </ul>
        </div>
      </div>
    </ng-template>

    <!-- Use Cases -->
    <ng-template #useCasesContent>
      <div class="space-y-6">    
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Common Scenarios</h3>
            <p class="mt-2 text-gray-600">
              Examples where <code>&lt;lib-card&gt;</code> is useful:
            </p>
            <ul class="list-disc pl-5 mt-3 space-y-1 text-gray-700 text-sm">
              <li>Notification previews</li>
              <li>Profile or user info cards</li>
              <li>Dashboard widgets</li>
              <li>Product or content previews</li>
            </ul>
            <p class="mt-4 text-sm text-gray-600">
              It also emits 
              <code class="bg-gray-100 px-1 py-0.5 rounded text-gray-800">(cardClick)</code> 
              and 
              <code class="bg-gray-100 px-1 py-0.5 rounded text-gray-800">(cardDblClick)</code> 
              events for interactive use.
            </p>
          </div>
        </div>
      </div>
    </ng-template>

    <!-- Notes -->
    <ng-template #noteContent>
      <div class="space-y-4">    
        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <h3 class="text-sm font-medium text-yellow-800">Important Notes</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1 text-sm text-yellow-700">
            <li>Responsive by default with max width <code>400px</code>.</li>
            <li>Header and footer are optional; you can use only the body.</li>
            <li>Default styling is minimal – extend with Tailwind or CSS variables.</li>
          </ul>
        </div>
      </div>
    </ng-template>

    <!-- Other -->
    <ng-template #otherContent>
      <div class="space-y-6">
        <h2 class="text-2xl font-bold">Advanced Usage</h2>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Theming & Extensibility</h3>
            <p class="mt-2 text-gray-600">
              You can extend <code>&lt;lib-card&gt;</code> to include media sections 
              (images/videos) or theme it with CSS variables for colors, spacing, 
              and shadows.
            </p>
          </div>
        </div>
      </div>
    </ng-template>
  `,
  styles: ``
})
export class CardDocComponent {
  @ViewChild('overviewContent', { static: true }) overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true }) useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;

  cardComponent = CardComponent;
  publishedDate = '2023-11-20';
  title = 'Card Component';

  htmlCode = `
    <lib-card 
      (cardClick)="onCardClick()" 
      (cardDblClick)="onCardDblClick()"
    >
      <!-- Header -->
      <div card-header class="flex justify-between items-center pb-1 mb-2 border-b">
        <span class="font-medium text-blue-700">John Doe</span>
        <time class="text-xs text-gray-500">2025-09-08 10:30 AM</time>
      </div>

      <!-- Body -->
      <div class="relative">
        <small #small class="relative text-gray-800 transition-all duration-300 line-clamp-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec justo ac 
          sapien consequat fermentum. Pellentesque habitant morbi tristique senectus 
          et netus et malesuada fames ac turpis egestas.
          <span class="absolute bg-white pl-1 text-[10px] text-blue-600 hover:underline"
            (click)="toggleExpand(small)">
            See More
          </span>
        </small>
      </div>

      <!-- Footer -->
      <div card-footer class="flex justify-end mt-3 pt-2 border-t">
        <button class="text-sm text-red-600 hover:underline">Dismiss</button>
      </div>
    </lib-card>
  `;
}
