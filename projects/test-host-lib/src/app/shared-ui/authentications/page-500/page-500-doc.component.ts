import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { Page500Component } from './page-500.component';
import { DocumentationComponent } from '../../documentation/documentation.component';

@Component({
  selector: 'app-page-500-doc',
  standalone: true,
  imports: [DocumentationComponent],
  template: `
    <app-documentation
      [publishedDate]="'2025-05-21'"
      [title]="title"
      [htmlCode]="htmlCode"
      [component]="internalServerErrorComponent"
      [overviewContent]="overviewContent"
      [useCasesContent]="useCasesContent"
      [noteContent]="noteContent"
      [otherContent]="otherContent"
    >
    </app-documentation>

    <ng-template #overviewContent>
      <div class="space-y-4">
        <p class="text-on-surface">
          The <code class="bg-gray-100 px-1 py-0.5 rounded text-gray-800">InternalServerErrorComponent</code> provides a visually appealing 500 error screen, featuring a background video, helpful messaging, and integration with the central error logging or authentication system.
        </p>
      </div>
    </ng-template>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InternalServerErrorDocComponent {
  @ViewChild('overviewContent', { static: true })
  overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true })
  useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;

  internalServerErrorComponent = Page500Component;
  publishedDate = '2025-05-21';
  title = 'Internal Server Error (500)';
  htmlCode = `
    <div class="flex items-center justify-center min-h-screen bg-white px-4">
      <div class="text-center">
        <h1 class="text-6xl font-bold text-red-600">500</h1>
        <h2 class="mt-4 text-2xl font-semibold text-gray-800">Internal Server Error</h2>
        <p class="mt-2 text-gray-600">Something went wrong on our end. Please try again later.</p>
        <!-- Illustration -->
        <div class="mt-10">
          <video src="../../../assets/videos/auth/internal-server-error.mp4" muted loop autoplay class="mx-auto w-64 md:w-96"></video>
        </div>
        <!-- Go back button -->
        <a href="/" class="mt-8 inline-block px-6 py-3 bg-red-600 text-white font-medium rounded hover:bg-red-700 transition">Go to Homepage</a>
      </div>
    </div>
  `;
}