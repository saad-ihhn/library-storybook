import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { SigninComponent } from './sign-in.component';
import { DocumentationComponent } from '../../documentation/documentation.component';
import { CodeViewerComponent } from '../../documentation/code-viewer/code-viewer.component';

@Component({
  selector: 'app-signin-doc',
  standalone: true,
  imports: [DocumentationComponent],
  template: `
    <app-documentation
      [publishedDate]="'2025-05-21'"
      [title]="title"
      [htmlCode]="htmlCode"
      [component]="signinComponent"
      [tsCode]="tsCode"
      [overviewContent]="overviewContent"
      [useCasesContent]="useCasesContent"
      [noteContent]="noteContent"
      [otherContent]="otherContent"
    >
    </app-documentation>
    <ng-template #overviewContent>
      <div class="space-y-4">
        <p class="text-on-surface">
          The
          <code class="bg-gray-100 px-1 py-0.5 rounded text-gray-800"
            >&lt;LoginComponent&gt;</code
          >
          component provides a visually engaging login screen with a background
          video, form validation, and integration with a central authentication
          system.
        </p>

        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg
                class="h-5 w-5 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-blue-800">Login Features</h3>
              <div class="mt-2 text-sm text-blue-700">
                <ul class="list-disc pl-5 space-y-1">
                  <li>Secure login with password encryption</li>
                  <li>Background video with responsive layout</li>
                  <li>Material-based form controls with error messages</li>
                  <li>Route redirect after successful login</li>
                  <li>Session state integration with permissions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h3 class="text-xl font-semibold mt-6">Key Features</h3>
        <ul class="list-disc pl-5 space-y-2 text-on-surface">
          <li>Reactive form support</li>
          <li>Custom logo support</li>
          <li>Authentication with encrypted credentials</li>
          <li>Video background with overlay</li>
          <li>Centralized auth service integration</li>
        </ul>
      </div>
    </ng-template>
    <ng-template #useCasesContent>
      <div class="space-y-6">
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Standard Login</h3>
            <p class="mt-2 text-gray-600">
              A basic login form with username and password fields, background
              video, and form validation.
            </p>
          </div>
        </div>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">
              Encrypted Credentials
            </h3>
            <p class="mt-2 text-gray-600">
              Demonstrates how credentials are encrypted before sending them to
              the authentication API.
            </p>
          </div>
        </div>
      </div>
    </ng-template>
    <ng-template #noteContent>
      <div class="space-y-4">
        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg
                class="h-5 w-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-yellow-800">
                Important Notes
              </h3>
              <ul class="mt-2 list-disc text-sm text-yellow-700 pl-5 space-y-1">
                <li>
                  Ensure AuthService is registered and provides the required API
                  methods
                </li>
                <li>
                  Background video must be muted and autoplay for seamless UX
                </li>
                <li>
                  Set up appropriate route guards for login and redirect logic
                </li>
                <li>Supports Angular Standalone APIs and Signals</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ng-template>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SigninDocComponent {
  @ViewChild('overviewContent', { static: true })
  overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true })
  useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;

  signinComponent = SigninComponent;
  publishedDate = '2025-05-21';
  title = 'Sign In Screen';

  htmlCode = `
    <div class="video relative w-full h-screen flex items-center justify-center">
      <!-- Background Video -->
      <video loading="lazy" [autoplay]="true" [muted]="true" [loop]="true" class="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source  src="public/assets/videos/auth/bg.mp4" type="video/mp4" />
      </video>
      <!-- Card Content -->
      <div class="relative z-10 w-full max-w-sm bg-white/80 p-[35px_25px] rounded-lg backdrop-blur shadow-md">
        <!-- Logo -->
        <div class="flex flex-col items-center mb-6">
          <img src="public/assets/images/auth/logo.svg" alt="Logo" />
        </div>

        <!-- Welcome text -->
        <div class="flex flex-col items-start mb-6">
          <h4 class="font-semibold text-gray-900">Welcome to</h4>
          <small class="text-blue-700 text-sm">
            Hospital Management Information System
          </small>
        </div>

        <!-- Form -->
        <form [formGroup]="loginForm" class="space-y-2">
          <!-- Username -->
          <div class="relative">
            <lib-text-field
              class="w-full"
              [control]="loginForm.controls['username']"
              [label]="'Username or Email'"
              [placeholder]="'Enter your username or email'"
              [customErrorMessages]="{
              required: 'Username or email is required',
              invalidEmail: 'Please enter a valid email address'}"
              >
              <lib-mat-icon-button source="account_circle" (click)="$event.stopPropagation()"></lib-mat-icon-button>
            </lib-text-field>
          </div>

          <div class="relative">
            <lib-password
              class="w-full"
              [label]="'Password'"
              [control]="loginForm.controls['password']"
            ></lib-password>
          </div>

          <!-- Forgot Password -->
          <div class="text-right">
            <a 
              [routerLink]="['/layout/authentication/forget-password']" 
              class="text-blue-600 hover:underline cursor-pointer"
            >
              <small>
                Forgot Password?
              </small>
            </a>
          </div>

          <!-- Submit Button -->
            <lib-mat-flat-button
            class="w-full"
            [type]="'submit'"
            [className]="'w-full'"
            [disabled]="loginForm.invalid || isLoading()"
            [color]="'primary'"
            (matClick)="onSubmit()"
          >
            @if (isLoading()) {
              <div class="loader-ripple inline-block relative w-[30px] h-6">
                <div class="absolute border-4 border-current rounded-full opacity-100"></div>
                <div class="absolute border-4 border-current rounded-full opacity-100"></div>
              </div>
              <span class="loading-text">
                Credential authorizing
                <span class="after:inline-block after:w-4 after:text-left dots"></span>
              </span>
            } @else {
              LOGIN
            }
          </lib-mat-flat-button>
        </form>
      </div>
    </div>
  `;

  tsCode = `
    import {
      ChangeDetectionStrategy,
      Component,
      signal
    } from '@angular/core';
    import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
    import { RouterLink } from '@angular/router';
    import {
      LibMatFlatButtonComponent,
      LibMatIconButtonComponent
    } from '@saad-ihhn/ihhn-host-lib/lib-buttons';
    import {
      LibPasswordComponent,
      LibTextFieldComponent
    } from '@saad-ihhn/ihhn-host-lib/lib-forms';

    @Component({
      selector: 'app-signin',
      standalone: true,
      imports: [
        LibTextFieldComponent,
        LibPasswordComponent,
        LibMatFlatButtonComponent,
        LibMatIconButtonComponent,
        RouterLink,
        ReactiveFormsModule
      ],
      templateUrl: 'sign-in.component.html',
      styleUrl: 'sign-in.component.scss',
      changeDetection: ChangeDetectionStrategy.OnPush
    })
    export class SigninComponent {
      isLoading = signal<boolean>(false);
      constructor() {}

      loginForm = new FormGroup({
        username: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          (control) => {
            if (control.value?.includes('@')) {
              const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
              return emailPattern.test(control.value) ? null : { invalidEmail: true };
            }
            return null;
          }
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
      });

      onSubmit() {
        if (this.loginForm.invalid) {
          this.loginForm.markAllAsTouched();
          return;
        }
        const credentials = this.loginForm.value as {
          email: string;
          password: string;
        };
        this.isLoading.set(true);
        setTimeout(() => {
          this.isLoading.set(false);
          console.log('Form Submitted', credentials);
        }, 2000);
      }
    }
  `;
}