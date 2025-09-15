import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../core/auth/auth.service';
import { Router, RouterLink } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  LibPasswordComponent,
  LibTextFieldComponent,
} from '@saad-ihhn/ihhn-host-lib/lib-forms';
import {
  LibMatFlatButtonComponent,
  LibMatIconButtonComponent,
} from '@saad-ihhn/ihhn-host-lib/lib-buttons';

/**
 * Login Component for user authentication
 * 
 * This component provides a login form with username/email and password fields,
 * handles form validation, and integrates with the authentication service.
 * 
 * @component
 * @standalone
 * @selector app-login
 * 
 * @example
 * ```html
 * <app-login></app-login>
 * ```
 */
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    LibTextFieldComponent,
    LibPasswordComponent,
    LibMatFlatButtonComponent,
    LibMatIconButtonComponent,
    RouterLink,
  ],
  //#region Template
  template: `
    <div
      class="video relative w-full h-screen flex items-center justify-center"
    >
      <!-- Background Video -->
      <video
        loading="lazy"
        [autoplay]="true"
        [muted]="true"
        [loop]="true"
        class="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="public/assets/videos/auth/bg.mp4" type="video/mp4" />
      </video>
      <!-- Card Content -->
      <div
        class="relative z-10 w-full max-w-sm bg-white/80 p-[35px_25px] rounded-lg backdrop-blur shadow-md"
      >
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
                invalidEmail: 'Please enter a valid email address'
              }"
            >
              <lib-mat-icon-button
                source="account_circle"
                (click)="$event.stopPropagation()"
              ></lib-mat-icon-button>
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
              <small> Forgot Password? </small>
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
              <div
                class="absolute border-4 border-current rounded-full opacity-100"
              ></div>
              <div
                class="absolute border-4 border-current rounded-full opacity-100"
              ></div>
            </div>
            <span class="loading-text"
              >Credential authorizing<span
                class="after:inline-block after:w-4 after:text-left dots"
              ></span
            ></span>
            } @else { LOGIN }
          </lib-mat-flat-button>
        </form>
      </div>
    </div>
  `,
  //#endregion
  styles: [],
})
export class LoginComponent {
  //#region Properties
  /** Loading state signal for form submission */
  isLoading = signal<boolean>(false);
  
  /** Authentication service for login operations */
  private $authService = inject(AuthService);
  
  /** Router service for navigation */
  private $router = inject(Router);
  //#endregion

  //#region Constructor
  /**
   * Creates an instance of LoginComponent
   * Redirects to fetch-data if already authenticated
   */
  constructor() {
    if (this.$authService.isAuthenticated()) {
      this.$router.navigate(['/api']);
    }
  }
  //#endregion

  //#region Form Definition
  /**
   * Login form group with validation rules
   * - username: accepts email or username with validation
   * - password: requires minimum 6 characters
   */
  loginForm = new FormGroup({
    username: new FormControl('emilys', [
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
    password: new FormControl('emilyspass', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  //#endregion

  //#region Public Methods
  /**
   * Handles form submission
   * Validates form, extracts credentials, and initiates login process
   * Sets loading state during authentication
   */
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
    this.$authService.login(credentials);    
    setTimeout(() => {
      this.isLoading.set(false);
    }, 2000);
  }
  //#endregion
}