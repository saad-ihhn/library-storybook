import { DatePipe, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { DateTimeFormat } from '@saad-ihhn/ihhn-host-lib/enums';
import { LibMatButtonComponent } from '@saad-ihhn/ihhn-host-lib/lib-buttons';

@Component({
  selector: "app-page-500",
  standalone: true,
  imports: [LibMatButtonComponent, DatePipe, NgOptimizedImage, RouterLink],
  template: `
<div
  class="relative flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4 overflow-hidden transition-colors duration-300">
  <!-- Animated background elements -->
  <div class="absolute inset-0 overflow-hidden">
    <div
      class="absolute -left-20 -top-20 w-64 h-64 bg-red-100 dark:bg-red-900 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob">
    </div>
    <div
      class="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-100 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000">
    </div>
    <div
      class="absolute right-20 top-1/3 w-64 h-64 bg-purple-100 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-4000">
    </div>
  </div>

  <div class="relative z-10 text-center max-w-2xl w-full">
    <!-- Glassmorphism container -->
    <div
      class="backdrop-blur-sm bg-white/70 dark:bg-gray-800/70 p-8 md:p-12 rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/50">
      <!-- Error code with animated gradient -->
      <div class="relative inline-block mb-6">
        <h1
          class="!text-[4rem] font-bold mb-4 text-red-500">
          500
        </h1>
        <div
          class="absolute -inset-4 rounded-full border-4 border-red-200 dark:border-red-800 opacity-0 hover:opacity-100 transition-opacity duration-500">
        </div>
      </div>

      <!-- Main message -->
      <h2 class="!text-[1.5rem] font-bold text-gray-800 dark:text-white mb-2 font-[Poppins]">
        Internal Server Error
      </h2>
      <span class="text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
        Something went wrong on our end. Please try again later.
      </span>

      <!-- Lock illustration -->
      <div class="my-8 flex justify-center">
        <div
          class="p-[2.5rem] bg-white bg-gray-800 rounded-full shadow-lg border-2 border-red-300">
          <img [ngSrc]="'public/assets/images/logo.png'" alt="logo" width="60" height="60" />
        </div>
      </div>

      <!-- Action buttons -->
      <div class="flex flex-col sm:flex-row justify-center gap-4 mt-8">
        <!-- Home Button -->
        <lib-mat-button [routerLink]="'/'" aria-label="Return to home page">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"
            aria-hidden="true">
            <path
              d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          Return Home
        </lib-mat-button>
      </div>

      <!-- Additional help -->
      <div class="mt-10 text-sm text-gray-500 dark:text-gray-400">
        <p>Error code: 500_FORBIDDEN • Request ID: {{ requestId }}</p>
        <p class="mt-1">Timestamp: {{ currentTime | date: DateTimeFormat }}</p>
      </div>
    </div>
  </div>
</div>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page500Component {
  currentTime = new Date();
  DateTimeFormat = DateTimeFormat.CUSTOM;
  requestId = 'REQ_' + Math.random().toString(36).substr(2, 9).toUpperCase();
}