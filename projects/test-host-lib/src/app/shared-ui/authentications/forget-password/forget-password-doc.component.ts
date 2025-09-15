import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { ForgetPasswordComponent } from './forget-password.component';
import { DocumentationComponent } from '../../documentation/documentation.component';

@Component({
  selector: 'app-forget-password-doc',
  standalone: true,
  imports: [DocumentationComponent],
  template: `
    <app-documentation
      [publishedDate]="'2025-05-21'"
      [title]="title"
      [htmlCode]="htmlCode"
      [component]="forgetComponent"
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
            >&lt;ForgetComponent&gt;</code
          >
          provides a password recovery screen with both email/username and phone number options,
          featuring a visually engaging background video and form validation.
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
              <h3 class="text-sm font-medium text-blue-800">Key Features</h3>
              <div class="mt-2 text-sm text-blue-700">
                <ul class="list-disc pl-5 space-y-1">
                  <li>Dual-mode password recovery (email/username or phone)</li>
                  <li>Background video with responsive layout</li>
                  <li>Form validation for both email and phone formats</li>
                  <li>Toggle between recovery methods</li>
                  <li>Clean UI with blurred background effect</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h3 class="text-xl font-semibold mt-6">Component Highlights</h3>
        <ul class="list-disc pl-5 space-y-2 text-on-surface">
          <li>Reactive form with conditional validation</li>
          <li>Phone number formatting and validation</li>
          <li>Custom error messages for different input types</li>
          <li>Responsive design with backdrop blur effect</li>
          <li>Integration with authentication services</li>
        </ul>
      </div>
    </ng-template>
    <ng-template #useCasesContent>
      <div class="space-y-6">
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Email/Username Recovery</h3>
            <p class="mt-2 text-gray-600">
              Standard password recovery using email address or username with validation
              for proper email format when applicable.
            </p>
          </div>
        </div>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">
              Phone Number Recovery
            </h3>
            <p class="mt-2 text-gray-600">
              Alternative recovery method using phone number with automatic formatting
              and validation for Pakistani phone numbers (+92XXXXXXXXXX format).
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
                Implementation Notes
              </h3>
              <ul class="mt-2 list-disc text-sm text-yellow-700 pl-5 space-y-1">
                <li>
                  Ensure the background video is muted and autoplays for best UX
                </li>
                <li>
                  Phone number validation is specifically for Pakistani format (+92)
                </li>
                <li>
                  The component automatically disables the unused input field when toggling modes
                </li>
                <li>Uses standalone Angular components and reactive forms</li>
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
export class ForgetPasswordDocComponent {
  @ViewChild('overviewContent', { static: true })
  overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true })
  useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;

  forgetComponent = ForgetPasswordComponent;
  publishedDate = '2025-05-21';
  title = 'Forget Password';

  htmlCode = `
<div class="relative w-full h-screen flex items-center justify-center">
  <!-- Background Video -->
  <video
    autoplay
    muted
    loop
    class="absolute top-0 left-0 w-full h-full object-cover z-0"
  >
    <source src="../../../assets/videos/auth/bg.mp4" type="video/mp4" />
  </video>

  <!-- Card Content -->
  <div
    class="relative z-10 w-full max-w-sm bg-white/75 p-[35px_25px] rounded-lg backdrop-blur shadow-md"
  >
    <!-- Logo -->
    <div class="flex flex-col items-center mb-6">
      <img src="../../../assets/images/auth/logo.svg" alt="Logo" />
    </div>

    <!-- Title -->
    <div class="flex flex-col items-center text-center mb-6">
      <h2 class="text-xl font-semibold text-gray-900">
        Forgot your password?
      </h2>
      <p class="text-[13px] text-on-surface mt-2 px-2">
        Enter your
        {{ isPhoneMode ? 'phone number' : 'email or username' }} to receive
        reset instructions.
      </p>
    </div>

    <!-- Form -->
    <form class="space-y-2">
      @if (!isPhoneMode) {
      <lib-text-field
        class="w-full mb-0"
        [control]="forgetForm.controls['username']"
        [label]="'Username or Email'"
        [placeholder]="'Enter your username or email'"
        [customErrorMessages]="{
          invalidEmail: 'Please enter a valid email address'
        }"
      >
      <lib-mat-icon-button source="account_circle" (click)="$event.stopPropagation()"></lib-mat-icon-button>
    </lib-text-field>
      } @else {
      <lib-phone
        class="w-full"
        [control]="forgetForm.controls['phone']"
        [label]="'Phone Number'"
        [placeholder]="'+92XXXXXXXXX'"
        [customErrorMessages]="{
          pattern: 'Format: +92XXXXXXXXXX (10 digits after +92)'
        }"
        (input)="onPhoneInput($event)"
      >
        <lib-mat-icon-button source="phone" (click)="$event.stopPropagation()"></lib-mat-icon-button>
      </lib-phone>
      }

      <!-- Toggle Mode Button -->
      <div
        class="flex justify-end cursor-pointer select-none"
        (click)="toggleMode()"
      >
        <p class="text-[11px] text-blue-600 hover:underline">
          Use {{ isPhoneMode ? 'Email/Username' : 'Phone Number' }} instead
        </p>
      </div>

      <!-- Submit Button -->
      <lib-mat-flat-button
        class="w-full"
        [type]="'submit'"
        className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition-all"
        [disabled]="forgetForm.invalid"
        (matClick)="onSubmit()"
      >
        Send Reset Link
      </lib-mat-raised-button>

      <!-- Back to Login -->
      <div class="text-center">
        <a
          [routerLink]="'/layout/authentication/signin-layout'"
          class="text-[11px] text-blue-600 hover:underline"
        >
          Back to Login
        </a>
      </div>
    </form>
  </div>
</div>
`;

  tsCode = `
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {
  LibMatRaisedButtonComponent,
  LibMatIconButtonComponent
} from '@saad-ihhn/ihhn-host-lib/lib-buttons';
import {
  LibEncryptDecryptService,
  LibStatePermissionsService
} from '@saad-ihhn/ihhn-host-lib/services';
import {
  LibTextFieldComponent,
  LibPhoneComponent
} from '@saad-ihhn/ihhn-host-lib/lib-forms';
import { AuthService } from '../../../core/auth/auth.service';

@Component({
  standalone: true,
  imports: [
    RouterLink,
    LibTextFieldComponent,
    LibMatRaisedButtonComponent,
    LibPhoneComponent,
    LibMatIconButtonComponent
  ],
  templateUrl: './forget.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForgetComponent {
  private $authService = inject(AuthService);
  private $router = inject(Router);
  private $encryptService = inject(LibEncryptDecryptService);
  private $statePermission = inject(LibStatePermissionsService);

  isPhoneMode = false;

  forgetForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      (control) => {
        if (control.value?.includes('@')) {
          const emailPattern =
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
          return emailPattern.test(control.value)
            ? null
            : { invalidEmail: true };
        }
        return null;
      },
    ]),
    phone: new FormControl({ value: '', disabled: true }, [
      Validators.required,
      Validators.maxLength(13),
      Validators.pattern(/^\\+92\\d{10}$/),
    ]),
  });

  constructor() {
    if (this.$authService.isAuthenticated()) {
      this.$router.navigate([
        this.$statePermission.userData().firstRouteLink ??
          localStorage.getItem('firstRouteLink'),
      ]);
    } else {
      this.$encryptService.clearAllData();
      this.$encryptService.initializeKey();
    }
  }

  toggleMode() {
    this.isPhoneMode = !this.isPhoneMode;
    if (this.isPhoneMode) {
      this.forgetForm.get('username')?.disable();
      this.forgetForm.get('username')?.reset();
      this.forgetForm.get('phone')?.enable();
    } else {
      this.forgetForm.get('phone')?.disable();
      this.forgetForm.get('phone')?.reset();
      this.forgetForm.get('username')?.enable();
    }
  }

  onPhoneInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    let value = inputElement.value;
    value = value.replace(/(?!^\\+)\\D/g, '');
    if (value.startsWith('+')) {
      value = '+' + value.slice(1).replace(/\\D/g, '');
    } else {
      value = value.replace(/\\D/g, '');
    }
    value = value.substring(0, 13);
    this.forgetForm.get('phone')?.patchValue(value);
  }

  onSubmit() {
    if (this.forgetForm.valid) {
      const value = this.isPhoneMode
        ? this.forgetForm.value.phone
        : this.forgetForm.value.username;
      console.log('Reset link sent to:', value);
    } else {
      this.forgetForm.markAllAsTouched();
    }
  }
}
`;
}