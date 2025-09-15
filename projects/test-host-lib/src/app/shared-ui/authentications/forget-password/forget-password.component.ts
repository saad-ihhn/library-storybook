import { Component, ChangeDetectionStrategy, computed, signal } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, AbstractControl, ValidatorFn } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  LibTextFieldComponent,
  LibNumberComponent,
  LibPhoneComponent,
  LibPasswordComponent
} from '@saad-ihhn/ihhn-host-lib/lib-forms';
import { CommonModule } from '@angular/common';
import { LibMatFlatButtonComponent, LibMatIconButtonComponent } from '@saad-ihhn/ihhn-host-lib/lib-buttons';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LibTextFieldComponent,
    LibMatFlatButtonComponent,
    LibPhoneComponent,
    LibNumberComponent,
    LibPasswordComponent,
    LibMatIconButtonComponent,
    RouterLink,
    ReactiveFormsModule
  ],
  template: `
    <div class="relative w-full h-screen flex items-center justify-center">
      <!-- Background Video -->
      <video loading="lazy" [autoplay]="true" [muted]="true" [loop]="true" class="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src="public/assets/videos/auth/bg.mp4" type="video/mp4" />
      </video>

      <!-- Card Content -->
      <div class="relative z-10 w-full max-w-sm bg-white/80 p-[35px_25px] rounded-lg backdrop-blur shadow-md">
        <!-- Logo -->
        <div class="flex flex-col items-center mb-6">
          <img src="public/assets/images/auth/logo.svg" alt="Logo"/>
        </div>

        <!-- Title -->
        <div class="flex flex-col items-center text-center mb-6">
          <h4 class="font-semibold text-gray-900">
            Forget your password?
          </h4>
          <small class="text-on-surface mt-2">
            Enter your {{ isPhoneMode() ? 'phone number' : 'email or username' }} to receive
            reset instructions.
          </small>
        </div>

        <!-- Form -->
        <form [formGroup]="forgetForm" class="space-y-2">
          @if (!isPhoneMode()) {
            <div class="relative">
              <lib-text-field
                [class]="'w-full'"
                [control]="forgetForm.controls['username']"
                [label]="'Username or Email'"
                [placeholder]="'Enter your username or email'"
                [customErrorMessages]="{
                  invalidEmail: 'Please enter a valid email address'
                }"
              >
                <lib-mat-icon-button source="account_circle"></lib-mat-icon-button>
              </lib-text-field>
            </div>
          } @else {
            <div class="relative">
              <lib-phone
                [class]="'w-full' + (isPhoneSecurityCodeMode() ? ' !mb-4' : '')"
                [control]="forgetForm.controls['phone']"
                [label]="'Phone Number'"
                [placeholder]="'+92XXXXXXXXX'"
                [customErrorMessages]="{
                  pattern: 'Format: +92XXXXXXXXXX (10 digits after +92)'
                }"
                (input)="onPhoneInput($event)"
              >
                <lib-mat-icon-button source="phone"></lib-mat-icon-button>
              </lib-phone>
              @if (isPhoneSecurityCodeMode()) {
                <lib-number
                  [class]="'w-full !mb-4'"
                  [control]="forgetForm.controls['securityCode']"
                  [label]="'Code'"
                  [placeholder]="'Enter security code'"
                >
                  <lib-mat-icon-button source="phone"></lib-mat-icon-button>
                </lib-number>
                
                <lib-password
                  [class]="'w-full !mb-4'"
                  [label]="'Password'"
                  [control]="forgetForm.controls['newPassword']"
                  (input)="checkPasswordStrength()"
                ></lib-password>
                
                <lib-password
                  [class]="'w-full'"
                  [label]="'Confirm Password'"
                  [control]="forgetForm.controls['confirmPassword']"
                  [customErrorMessages]="{
                    passwordMismatch: 'Passwords do not match'
                  }"
                ></lib-password>
              }
              
              <div class="absolute top-0 right-0 flex items-center cursor-pointer select-none" (click)="toggleSecurityCodeFields()">
                <small class="text-blue-600 hover:underline">
                  {{ isPhoneSecurityCodeMode() ? 'Hide Security Code' : 'I Have Security Code' }}
                </small>
              </div>
            </div>
          }

          <!-- Toggle Mode Button -->
          <div class="flex justify-end cursor-pointer select-none" (click)="toggleMode()">
            <small class="text-blue-600 hover:underline">
              Use {{ isPhoneMode() ? 'Email/Username' : 'Phone Number' }} instead
            </small>
          </div>

          @if (isPhoneSecurityCodeMode()) {
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
          }

          <!-- Submit Button -->
          <lib-mat-flat-button
            class="w-full"
            [type]="'submit'"
            [className]="'w-full'"
            [disabled]="forgetForm.invalid || isLoading() || (isPhoneSecurityCodeMode() && passwordScore() < 2)"
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
              {{ isPhoneSecurityCodeMode() ? 'Reset Password' : 'Send Reset Link' }}
            }
          </lib-mat-flat-button>

          <!-- Back to Login -->
          <div class="text-center">
            <a 
              [routerLink]="['/layout/authentication/signin']" 
              class="text-blue-600 hover:underline cursor-pointer"
            >
              <small>
                Back to Login
              </small>
            </a>
          </div>
        </form>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForgetPasswordComponent {
  isPhoneMode = signal<boolean>(false);
  isPhoneSecurityCodeMode = signal<boolean>(false);
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

  readonly forgetForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      (control) => {
        if (control.value?.includes('@')) {
          const emailPattern =
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
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
      Validators.pattern(/^\+92\d{10}$/),
    ]),
    securityCode: new FormControl(''),
    newPassword: new FormControl(''),
    confirmPassword: new FormControl('')
  }, { validators: this.passwordMatchValidator });

  checkPasswordStrength(): void {
    const password = this.forgetForm.controls['newPassword'].value || '';
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

  toggleMode(): void {
    this.isPhoneMode.update(v => !v);
    const usernameControl = this.forgetForm.get('username');
    const phoneControl = this.forgetForm.get('phone');
    const securityCodeControl = this.forgetForm.get('securityCode');
    const newPasswordControl = this.forgetForm.get('newPassword');
    const confirmPasswordControl = this.forgetForm.get('confirmPassword'); 
    if (this.isPhoneMode()) {
      usernameControl?.disable();
      usernameControl?.reset();
      phoneControl?.enable();
      securityCodeControl?.enable();
      newPasswordControl?.enable();
      confirmPasswordControl?.enable();
    } else {
      phoneControl?.disable();
      phoneControl?.reset();
      securityCodeControl?.disable();
      newPasswordControl?.disable();
      confirmPasswordControl?.disable();
      usernameControl?.enable();
    }
    securityCodeControl?.reset();
    newPasswordControl?.reset();
    confirmPasswordControl?.reset();
    this.isPhoneSecurityCodeMode.set(false);
  }

  toggleSecurityCodeFields(): void {
    this.isPhoneSecurityCodeMode.update(v => !v);
    const securityCodeControl = this.forgetForm.get('securityCode');
    const newPasswordControl = this.forgetForm.get('newPassword');
    const confirmPasswordControl = this.forgetForm.get('confirmPassword'); 
    if (this.isPhoneSecurityCodeMode()) {
      securityCodeControl?.setValidators([Validators.required, Validators.maxLength(4)]);
      newPasswordControl?.setValidators([Validators.required, Validators.minLength(6)]);
      confirmPasswordControl?.setValidators([Validators.required]);
    } else {
      securityCodeControl?.clearValidators();
      newPasswordControl?.clearValidators();
      confirmPasswordControl?.clearValidators();
      securityCodeControl?.reset();
      newPasswordControl?.reset();
      confirmPasswordControl?.reset();
      this.passwordScore.set(0);
    }
    securityCodeControl?.updateValueAndValidity();
    newPasswordControl?.updateValueAndValidity();
    confirmPasswordControl?.updateValueAndValidity();
    if (this.isPhoneSecurityCodeMode()) {
      this.forgetForm.updateValueAndValidity();
    }
  }

  onPhoneInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    let value = inputElement.value;
    value = value.startsWith('+') 
      ? '+' + value.slice(1).replace(/\D/g, '')
      : value.replace(/\D/g, '');
    
    value = value.substring(0, 13);
    this.forgetForm.get('phone')?.patchValue(value, { emitEvent: false });
  }

  onSubmit(): void {
    if (this.forgetForm.invalid) {
      this.forgetForm.markAllAsTouched();
      return;
    }
    const value = this.isPhoneMode()
      ? this.forgetForm.value.phone
      : this.forgetForm.value.username;
    this.isLoading.set(true);
    setTimeout(() => {
      this.isLoading.set(false);
      console.log('Reset link sent to:', value);
    }, 2000);
  }
}