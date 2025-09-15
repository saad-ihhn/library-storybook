import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { ChangePasswordComponent } from './change-password.component';
import { DocumentationComponent } from '../../documentation/documentation.component';

@Component({
  selector: 'app-change-password-doc',
  standalone: true,
  imports: [DocumentationComponent],
  template: `
    <app-documentation
      [publishedDate]="'2025-05-21'"
      [title]="title"
      [htmlCode]="htmlCode"
      [component]="changePasswordComponent"
      [tsCode]="tsCode"
      [overviewContent]="overviewContent"
      [useCasesContent]="useCasesContent"
      [noteContent]="noteContent"
    >
    </app-documentation>
    <ng-template #overviewContent>
      <div class="space-y-4">
        <p class="text-on-surface">
          The
          <code class="bg-gray-100 px-1 py-0.5 rounded text-gray-800"
            >&lt;ChangePasswordComponent&gt;</code
          >
          provides a secure password change interface with validation for old password,
          new password, and confirmation fields.
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
                  <li>Three-field password change form (old, new, confirm)</li>
                  <li>Custom password matching validator</li>
                  <li>Minimum length validation (6 characters)</li>
                  <li>Clean UI with blurred background effect</li>
                  <li>Integration with authentication services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h3 class="text-xl font-semibold mt-6">Component Highlights</h3>
        <ul class="list-disc pl-5 space-y-2 text-on-surface">
          <li>Reactive form with cross-field validation</li>
          <li>Custom password component integration</li>
          <li>Automatic navigation if already authenticated</li>
          <li>Secure encryption service initialization</li>
          <li>Responsive design</li>
        </ul>
      </div>
    </ng-template>
    <ng-template #useCasesContent>
      <div class="space-y-6">
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Password Change Flow</h3>
            <p class="mt-2 text-gray-600">
              Standard password change process requiring users to enter their current password
              and confirm the new password with matching values.
            </p>
          </div>
        </div>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">
              Security Enforcement
            </h3>
            <p class="mt-2 text-gray-600">
              Ensures password changes follow security best practices with minimum length
              requirements and confirmation matching.
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
                  The component automatically checks authentication status and redirects if needed
                </li>
                <li>
                  Password fields must be at least 6 characters long
                </li>
                <li>
                  The new password and confirmation must match exactly
                </li>
                <li>Uses standalone Angular components and reactive forms</li>
                <li>Initializes encryption services for secure operations</li>
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
export class ChangePasswordDocComponent {
  @ViewChild('overviewContent', { static: true })
  overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true })
  useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;

  changePasswordComponent = ChangePasswordComponent;
  publishedDate = '2025-05-21';
  title = 'Change Password';

  htmlCode = `
<div class="relative z-10 w-full max-w-sm mx-auto bg-white/75 p-[35px_25px] rounded-lg backdrop-blur shadow-md">
  <!-- Logo -->
  <div class="flex flex-col items-center mb-6">
    <img src="../../../assets/images/auth/logo.svg" alt="Logo" />
  </div>

  <!-- Title -->
  <div class="flex flex-col items-center text-center mb-6">
    <h2 class="text-xl font-semibold text-gray-900">
      Change your password?
    </h2>
  </div>

  <!-- Form -->
  <form class="space-y-2">
    <lib-password
      class="w-full"
      [label]="'Old Password'"
      [control]="forgetForm.controls['oldPassword']"
    ></lib-password>

    <lib-password
      class="w-full"
      [label]="'New Password'"
      [control]="forgetForm.controls['newPassword']"
    ></lib-password>

    <lib-password
      class="w-full"
      [label]="'Confirm Password'"
      [control]="forgetForm.controls['confirmPassword']"
    ></lib-password>
    
    <!-- Submit Button -->
      <lib-mat-flat-button
      class="w-full"
      [type]="'submit'"
      class="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition-all"
      [type]="'button'"
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
`;

  tsCode = `
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {
  LibMatRaisedButtonComponent
} from '@saad-ihhn/ihhn-host-lib/lib-buttons';
import {
  LibEncryptDecryptService,
  LibStatePermissionsService
} from '@saad-ihhn/ihhn-host-lib/services';
import {
  LibPasswordComponent
} from '@saad-ihhn/ihhn-host-lib/lib-forms';
import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [RouterLink, LibPasswordComponent, LibMatRaisedButtonComponent],
  templateUrl: './change-password.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangePasswordComponent {
  private $authService = inject(AuthService);
  private $router = inject(Router);
  private $encryptService = inject(LibEncryptDecryptService);
  private $statePermission = inject(LibStatePermissionsService);

  forgetForm = new FormGroup(
    {
      oldPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      newPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    },
    { validators: this.passwordMatchValidator }
  );

  passwordMatchValidator(control: AbstractControl) {
    const newPassword = control.get('newPassword')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return newPassword === confirmPassword ? null : { passwordMismatch: true };
  }

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

  onSubmit() {}
}
`;
}