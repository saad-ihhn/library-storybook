import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { Page404Component } from './page-404.component';
import { DocumentationComponent } from '../../documentation/documentation.component';

@Component({
  selector: 'app-page-404-doc',
  standalone: true,
  imports: [DocumentationComponent],
  template: `
    <app-documentation
      [publishedDate]="'2025-05-21'"
      [title]="title"
      [htmlCode]="htmlCode"
      [component]="pageNotFoundComponent"
      [overviewContent]="overviewContent"
      [useCasesContent]="useCasesContent"
      [noteContent]="noteContent"
      [otherContent]="otherContent"
    >
    </app-documentation>
    <ng-template #overviewContent>
      <div class="space-y-4">
        <p class="text-on-surface">
            The <code class="bg-gray-100 px-1 py-0.5 rounded text-gray-800">PageNotFoundComponent</code> displays a visually engaging 404 error screen featuring a background video, user-friendly messaging, and integration with the central authentication system.
        </p>
      </div>
    </ng-template>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotFoundDocComponent {
  @ViewChild('overviewContent', { static: true })
  overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true })
  useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;
  pageNotFoundComponent = Page404Component;
  publishedDate = '2025-05-21';
  title = 'Page Not Found (404)';
  htmlCode = `
    <div class="flex items-center justify-center min-h-screen bg-white px-4">
        <div class="text-center">
            <h1 class="text-6xl font-bold text-blue-600">404</h1>
            <h2 class="mt-4 text-2xl font-semibold text-gray-800">Page not found!</h2>
            <p class="mt-2 text-gray-600">You have found a page that does not exist.</p>
            <!-- Illustration -->
            <div class="mt-10">
                <video src="../../../assets/videos/auth/page-not-found.mp4" muted loop autoplay alt="404 Illustration" class="mx-auto w-64 md:w-96"></video>
            </div>
            <!-- Go back button -->
            <a href="/" class="mt-8 inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition">Go to Homepage</a>
        </div>
    </div>
  `;
}