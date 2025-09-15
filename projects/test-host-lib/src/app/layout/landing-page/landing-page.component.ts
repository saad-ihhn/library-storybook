import { RouterModule } from '@angular/router';
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { CodeViewerComponent } from "../../shared-ui/documentation/code-viewer/code-viewer.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterModule, CodeViewerComponent],
  template: `
  <!-- Header Section -->
<header class="bg-gray-900 text-white py-6 md:py-12">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-3xl md:text-4xl font-bold text-center">ihhn-host-lib Storybook</h1>
        <p class="mt-4 text-base md:text-lg text-center text-gray-300">
            A comprehensive Angular component library built with Material Design principles, offering a wide range of
            reusable UI components.
        </p>
        <a [routerLink]="['/components']" class="underline text-blue-100">View all components in Storybook</a>
    </div>
</header>

<!-- Main Content -->
<main class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
    <!-- Library Overview -->
    <section class="mb-12">
        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
            <div class="p-6 md:p-8">
                <h2 class="text-2xl md:text-3xl font-semibold text-gray-900">About ihhn-host-lib</h2>
                <p class="mt-4 text-gray-600 text-sm md:text-base">
                    <code class="bg-gray-100 px-1 py-0.5 rounded">ihhn-host-lib</code> is a modern Angular component
                    library designed to simplify UI development with Material Design styled components. It includes
                    buttons, forms, navigation components, and more, all built with accessibility and performance in
                    mind.
                </p>
                <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <svg class="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="ml-3">
                            <h3 class="text-sm font-medium text-blue-800">Key Features</h3>
                            <ul class="list-disc pl-5 mt-2 text-sm text-blue-700 space-y-1">
                                <li>Material Design components (buttons, sidenav, cards, etc.)</li>
                                <li>Customizable color schemes (primary, accent, warn)</li>
                                <li>Built-in accessibility features</li>
                                <li>Support for Angular standalone components</li>
                                <li>Responsive and mobile-friendly design</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Installation Guide -->
    <section class="mb-12">
        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
            <div class="p-6 md:p-8">
                <h2 class="text-2xl md:text-3xl font-semibold text-gray-900">Installation Guide</h2>
                <p class="mt-4 text-gray-600 text-sm md:text-base">
                    Follow these steps to install and set up <code
                        class="bg-gray-100 px-1 py-0.5 rounded">ihhn-host-lib</code> in your Angular project.
                </p>
                <div class="space-y-6 mt-6">
                    <!-- Step 1: Install via npm -->
                    <div>
                        <h3 class="text-lg font-medium text-gray-900">1. Install the Package</h3>
                        <p class="mt-2 text-gray-600 text-sm md:text-base">
                            Install the library using npm:
                        </p>
                        <div class="bg-gray-50 p-4 mt-2 rounded-lg">
                            <pre class="text-sm text-gray-800"><code>npm install ihhn-host-lib</code></pre>
                        </div>
                    </div>

                    <!-- Step 2: Import Module -->
                    <div>
                        <h3 class="text-lg font-medium text-gray-900">2. Import the Library</h3>
                        <p class="mt-2 text-gray-600 text-sm md:text-base">
                            Import the necessary components in your Angular module or standalone component.
                        </p>
                        <div class="bg-gray-50 p-4 mt-2 rounded-lg">
                            <app-code-viewer [code]="exampleUsageCode"></app-code-viewer>
                        </div>
                    </div>

                    <!-- Step 3: Add Styles -->
                    <div>
                        <h3 class="text-lg font-medium text-gray-900">3. Include Material Icons</h3>
                        <p class="mt-2 text-gray-600 text-sm md:text-base">
                            Add Google Material Icons to your project for icon support.
                        </p>
                        <div class="bg-gray-50 p-4 mt-2 rounded-lg">
                            <pre class="text-xs sm:text-sm text-gray-800 font-mono whitespace-pre-wrap break-words"><code>&lt;link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"&gt;</code></pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Usage Notes -->
    <section class="mb-12">
        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
            <div class="p-6 md:p-8">
                <h2 class="text-2xl md:text-3xl font-semibold text-gray-900">Usage Notes</h2>
                <div class="space-y-4 mt-6">
                    <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                        <div class="flex">
                            <div class="flex-shrink-0">
                                <svg class="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div class="ml-3">
                                <h3 class="text-sm font-medium text-yellow-800">Accessibility</h3>
                                <ul class="list-disc pl-5 mt-2 text-sm text-yellow-700 space-y-1">
                                    <li>Ensure buttons have proper ARIA attributes.</li>
                                    <li>Test for keyboard navigation support.</li>
                                    <li>Maintain sufficient color contrast for readability.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="bg-purple-50 border-l-4 border-purple-400 p-4">
                        <div class="flex">
                            <div class="flex-shrink-0">
                                <svg class="h-5 w-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div class="ml-3">
                                <h3 class="text-sm font-medium text-purple-800">Best Practices</h3>
                                <ul class="list-disc pl-5 mt-2 text-sm text-purple-700 space-y-1">
                                    <li>Follow Material Design guidelines for spacing and layout.</li>
                                    <li>Leverage standalone components for better tree-shaking.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Explore Components -->
    <section>
        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
            <div class="p-6 md:p-8">
                <h2 class="text-2xl md:text-3xl font-semibold text-gray-900">Explore Components</h2>
                <p class="mt-4 text-gray-600 text-sm md:text-base">
                    Discover the full range of components available in <code
                        class="bg-gray-100 px-1 py-0.5 rounded">ihhn-host-lib</code> through our Storybook.
                </p>
                <ul class="list-disc pl-5 mt-4 space-y-2 text-on-surface text-sm md:text-base">
                    <li><code class="bg-gray-100 px-1 py-0.5 rounded">lib-mat-button</code> - Standard Material button
                    </li>
                    <li><code class="bg-gray-100 px-1 py-0.5 rounded">lib-mat-raised-button</code> - Raised button with
                        elevation</li>
                    <li><code class="bg-gray-100 px-1 py-0.5 rounded">lib-mat-fab-button</code> - Floating Action Button
                    </li>
                    <li><code class="bg-gray-100 px-1 py-0.5 rounded">lib-mat-icon-button</code> - Icon-only button</li>
                    <li><a [routerLink]="['/components']" class="text-blue-600 hover:underline">View all components in Storybook</a></li>
                </ul>
            </div>
        </div>
    </section>
</main>

<!-- Footer -->
<footer class="bg-gray-900 text-white py-6">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p class="text-sm md:text-base">© 2025 ihhn-host-lib. All rights reserved.</p>
    </div>
</footer>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageComponent {
  exampleUsageCode: string = `
    import { Component } from '@angular/core';
    import { LibMatButtonComponent } from '@saad-ihhn/ihhn-host-lib/lib-buttons';
    @Component({
      selector: 'app-root',
      standalone: true,
      imports: [LibMatButtonComponent],
      template: \`
        <lib-mat-button>Click Me</lib-mat-button>
      \`
    })
    export class AppComponent {}
  `;
}