import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, computed, signal } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ReactiveFormsModule,
  ValidatorFn
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  LibPasswordComponent
} from '@saad-ihhn/ihhn-host-lib/lib-forms';
import { LibMatFlatButtonComponent } from '@saad-ihhn/ihhn-host-lib/lib-buttons';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [CommonModule, RouterLink, LibPasswordComponent, LibMatFlatButtonComponent, ReactiveFormsModule],
  template: `
      <div class="relative z-10 w-full max-w-sm bg-white/80 p-[35px_25px] rounded-lg backdrop-blur shadow-md mx-auto">
      <!-- Logo -->
      <div class="flex flex-col items-center mb-6">
        <img src="public/assets/images/auth/logo.svg" alt="Logo" />
      </div>

      <!-- Title -->
      <div class="flex flex-col items-center text-center mb-6">
        <h4 class="text-xl font-semibold text-gray-900">
          Change your password?
        </h4>
        <small class="text-on-surface mt-2">
          Enter your old password and a new password to change it.
        </small>
      </div>

      <!-- Form -->
      <form [formGroup]="changePasswordForm" class="space-y-2">
        <lib-password
          class="w-full"
          [label]="'Old Password'"
          [control]="changePasswordForm.controls['oldPassword']"
        ></lib-password>

        <lib-password
          class="w-full"
          [label]="'New Password'"
          [control]="changePasswordForm.controls['newPassword']"
          (input)="checkPasswordStrength()"
        ></lib-password>

        <lib-password
          class="w-full"
          [label]="'Confirm Password'"
          [control]="changePasswordForm.controls['confirmPassword']"
          [customErrorMessages]="{
            passwordMismatch: 'New password and Confirm password must match'
          }"
        ></lib-password>

        <!-- Password Strength Indicator -->
        <div class="w-full mb-4">
          <div class="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
            <div 
              class="h-full transition-all duration-300 ease-out"
              [ngClass]="{
                'bg-red-500': passwordStrength() === 'Weak',
                'bg-yellow-500': passwordStrength() === 'Moderate',
                'bg-green-500': passwordStrength() === 'Strong',
                'bg-blue-500': passwordStrength() === 'Very Strong'
              }"
              [style.width.%]="passwordScore() * 25"
            ></div>
          </div>
          <div class="flex justify-between items-center mt-1">
            <small class="font-medium" [ngClass]="{
              'text-red-500': passwordStrength() === 'Weak',
              'text-yellow-500': passwordStrength() === 'Moderate',
              'text-green-500': passwordStrength() === 'Strong',
              'text-blue-500': passwordStrength() === 'Very Strong'
            }">
              {{ passwordStrength() }}
              @if (passwordStrength()) {
                ({{ passwordFeedback() }})
              }
            </small>
            <small class="text-gray-500">
              @if (passwordScore() > 0) {
                {{ passwordScore() }}/4
              }
            </small>
          </div>
        </div>

        <!-- Submit Button -->
          <lib-mat-flat-button
          class="w-full"
          [type]="'submit'"
          [className]="'w-full'"
          [disabled]="changePasswordForm.invalid || isLoading() || passwordScore() < 2"
          [color]="'primary'"
          (matClick)="onSubmit()"
        >
          @if (isLoading()) {
            <div class="loader-ripple inline-block relative w-[30px] h-6">
              <div class="absolute border-4 border-current rounded-full opacity-100"></div>
              <div class="absolute border-4 border-current rounded-full opacity-100"></div>
            </div>
            <span class="loading-text">Credential authorizing<span class="after:inline-block after:w-4 after:text-left dots"></span></span>
          } @else {
            Reset Password
          }
        </lib-mat-flat-button>

        <!-- Back to Login -->
        <div class="text-center">
          <a
            [routerLink]="'/layout/authentication/signin'"
            class="text-blue-600 hover:underline"
          >
            <small>
              Back to Login
            </small>
          </a>
        </div>
      </form>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangePasswordComponent {
  isLoading = signal<boolean>(false);
  passwordScore = signal<number>(0);
  passwordStrength = computed(() => {
    const score = this.passwordScore();
    if (score <= 1) return 'Weak';
    if (score === 2) return 'Moderate';
    if (score === 3) return 'Strong';
    return 'Very Strong';
  });
  passwordFeedback = computed(() => {
    const score = this.passwordScore();
    if (score <= 1) return 'Too easy to guess';
    if (score === 2) return 'Could be stronger';
    if (score === 3) return 'Good password';
    return 'Excellent password';
  });

  constructor() {}

  private passwordMatchValidator: ValidatorFn = (formGroup: AbstractControl) => {
    const newPassword = formGroup.get('newPassword')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    if (!newPassword || !confirmPassword) {
      return null;
    }
    const confirmControl = formGroup.get('confirmPassword');
    if (newPassword !== confirmPassword) {
      confirmControl?.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } else {
      confirmControl?.setErrors(null);
      return null;
    }
  };

  changePasswordForm = new FormGroup({
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
        Validators.minLength(6)
      ]),
    }, { validators: this.passwordMatchValidator }
  );

  checkPasswordStrength(): void {
    const password = this.changePasswordForm.controls['newPassword'].value || '';
    const hasMinLength = password.length >= 6;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[^A-Za-z0-9]/.test(password); 
    let partialScore = [
      hasUppercase,
      hasLowercase,
      hasNumber,
      hasSpecialChar
    ].filter(Boolean).length;
    if (!hasMinLength) partialScore--;
    this.passwordScore.set(partialScore);
  }

  onSubmit() {
    if (this.changePasswordForm.invalid) {
      this.changePasswordForm.markAllAsTouched();
      return;
    }
    const value = this.changePasswordForm.value;
    this.isLoading.set(true);
    setTimeout(() => {
      this.isLoading.set(false);
      console.log('Password changed successfully:', value);
    }, 2000);
  }
}