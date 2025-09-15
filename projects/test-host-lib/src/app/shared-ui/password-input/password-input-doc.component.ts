import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { CodeViewerComponent } from '../documentation/code-viewer/code-viewer.component';
import { PasswordInputComponent } from './password-input.component';
import { DocumentationComponent } from "../documentation/documentation.component";

@Component({
  selector: 'app-password-input-documentation',
  standalone: true,
  imports: [CodeViewerComponent, DocumentationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-documentation 
      [publishedDate]="publishedDate" 
      [title]="title"
      [htmlCode]="htmlCode"
      [component]="passwordComponent" 
      [tsCode]="tsCode" 
      [overviewContent]="overviewContent"
      [useCasesContent]="useCasesContent" 
      [noteContent]="noteContent" 
      [otherContent]="otherContent">
    </app-documentation>

    <ng-template #overviewContent>
      <div class="space-y-4">
        <p class="text-on-surface">
          The <code class="bg-gray-100 px-1 py-0.5 rounded text-gray-800">&lt;lib-password&gt;</code> component is a secure password input field with built-in validation and masking capabilities. It provides a user-friendly way to handle password inputs while maintaining security best practices.
        </p>
        
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-blue-800">Security Features</h3>
              <div class="mt-2 text-sm text-blue-700">
                <p>
                  This component includes several security-focused features:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Input masking by default (shows dots instead of characters)</li>
                  <li>Built-in validation for password strength</li>
                  <li>Secure handling of form data</li>
                  <li>Prevents autofill and autocomplete in most browsers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-semibold mt-6">Key Features</h3>
        <ul class="list-disc pl-5 space-y-2 text-on-surface">
          <li>Secure password masking</li>
          <li>Customizable label and placeholder text</li>
          <li>Disabled state support</li>
          <li>FormControl integration for validation</li>
          <li>Built-in password strength indicators</li>
          <li>Responsive design</li>
          <li>Accessibility support (ARIA attributes)</li>
          <li>Error state visualization</li>
        </ul>
      </div>
    </ng-template>

    <ng-template #useCasesContent>
      <div class="space-y-6">    
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Basic Password Input</h3>
            <p class="mt-2 text-gray-600">
              Standard password input field with label and placeholder in a form context.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="basicSetupExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">FormGroup Integration</h3>
            <p class="mt-2 text-gray-600">
              Using the password field within a FormGroup with validation.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="formControlExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Password Confirmation</h3>
            <p class="mt-2 text-gray-600">
              Implementing password confirmation with matching validation.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="confirmationExample"></app-code-viewer>
          </div>
        </div>
      </div>
    </ng-template>

    <ng-template #noteContent>
      <div class="space-y-4">    
        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-yellow-800">Security Notes</h3>
              <div class="mt-2 text-sm text-yellow-700">
                <p>
                  When using this component:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Always implement server-side validation in addition to client-side</li>
                  <li>Never store passwords in plain text</li>
                  <li>Consider adding rate limiting to prevent brute force attacks</li>
                  <li>Use HTTPS for all password transmissions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-purple-50 border-l-4 border-purple-400 p-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-purple-800">UX Recommendations</h3>
              <div class="mt-2 text-sm text-purple-700">
                <p>
                  For better user experience:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Provide clear password requirements</li>
                  <li>Consider adding a "show password" toggle</li>
                  <li>Give immediate feedback on password strength</li>
                  <li>Use consistent styling with other form fields</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>

    <ng-template #otherContent>
      <div class="space-y-6">
        <h2 class="text-2xl font-bold">Advanced Usage</h2>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Password Strength Meter</h3>
            <p class="mt-2 text-gray-600">
              Implementing a visual password strength indicator.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="strengthMeterExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Input Properties</h3>
            <p class="mt-2 text-gray-600">
              Complete list of available input properties.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">label</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                  <td class="px-6 py-4 text-sm text-gray-500">The label text for the password field (default: 'Password')</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">placeholder</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Placeholder text displayed when the input is empty (default: 'Enter your password')</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">control</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">FormControl</td>
                  <td class="px-6 py-4 text-sm text-gray-500">The FormControl instance for this input</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">disabled</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Whether the input is disabled (default: false)</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">showStrengthMeter</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Whether to show password strength meter (default: false)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ng-template>
  `,
  styles: ``
})
export class PasswordInputDocComponent {
  @ViewChild('overviewContent', { static: true }) overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true }) useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;

  passwordComponent = PasswordInputComponent;
  publishedDate = '2025-05-21';
  title = 'Password Input Component';

  htmlCode = `
    <lib-password
      [label]="'Password'"
      [placeholder]="'Enter your password'"
      [control]="passwordControl"
      [disabled]="false"
    ></lib-password>
  `;

  tsCode = `
    import { Component, signal } from '@angular/core';
    import { FormControl, Validators } from '@angular/forms';
    import { LibPasswordComponent } from '@saad-ihhn/ihhn-host-lib/lib-forms';
    
    @Component({
      selector: 'app-password-demo',
      standalone: true,
      imports: [LibPasswordComponent],
      template: \`
        <lib-password
          [label]="label()"
          [placeholder]="placeholder()"
          [control]="passwordControl"
          [disabled]="isDisabled"
        ></lib-password>
      \`,
    })
    export class PasswordDemoComponent {
      label = signal('Password');
      placeholder = signal('Enter your password');
      passwordControl = new FormControl('', [Validators.required, Validators.minLength(8)]);
      isDisabled = false;
    }
  `;

  basicSetupExample = `
    @Component({
      selector: 'app-password-demo',
      standalone: true,
      imports: [LibPasswordComponent],
      template: \`
        <lib-password
          [label]="'Create Password'"
          [placeholder]="'Enter a strong password'"
          [control]="passwordControl"
        ></lib-password>
      \`,
    })
    export class PasswordDemoComponent {
      passwordControl = new FormControl('', [
        Validators.required, 
        Validators.minLength(8),
        Validators.pattern(/[A-Z]/),  // At least one uppercase
        Validators.pattern(/[a-z]/),  // At least one lowercase
        Validators.pattern(/[0-9]/)   // At least one number
      ]);
    }
  `;

  formControlExample = `
    // In your component class
    userForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ])
    });

    // In template
    <form [formGroup]="userForm">
      <lib-password
        [label]="'Password'"
        [control]="userForm.controls.password"
      ></lib-password>
    </form>
  `;

  confirmationExample = `
    // Custom validator for password confirmation
    function passwordMatchValidator(group: FormGroup) {
      const password = group.get('password')?.value;
      const confirmPassword = group.get('confirmPassword')?.value;
      return password === confirmPassword ? null : { mismatch: true };
    }

    // In component
    passwordForm = new FormGroup({
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      confirmPassword: new FormControl('', [Validators.required])
    }, { validators: passwordMatchValidator });

    // In template
    <form [formGroup]="passwordForm">
      <lib-password
        [label]="'New Password'"
        [control]="passwordForm.controls.password"
      ></lib-password>
      
      <lib-password
        [label]="'Confirm Password'"
        [control]="passwordForm.controls.confirmPassword"
      ></lib-password>
      
      <div *ngIf="passwordForm.hasError('mismatch')" class="error-message">
        Passwords do not match
      </div>
    </form>
  `;

  strengthMeterExample = `
    // Password strength calculation
    calculatePasswordStrength(password: string): number {
      let strength = 0;
      
      // Length contributes up to 40%
      strength += Math.min(password.length / 12 * 40, 40);
      
      // Character variety contributes up to 60%
      if (/[A-Z]/.test(password)) strength += 10;
      if (/[a-z]/.test(password)) strength += 10;
      if (/[0-9]/.test(password)) strength += 10;
      if (/[^A-Za-z0-9]/.test(password)) strength += 10;
      if (password.length >= 8) strength += 20;
      
      return Math.min(strength, 100);
    }

    // In template
    <lib-password
      [label]="'Password'"
      [control]="passwordControl"
      [showStrengthMeter]="true"
    ></lib-password>
    
    <div *ngIf="passwordControl.value" class="strength-meter">
      <div class="meter-bar" [style.width.%]="calculatePasswordStrength(passwordControl.value)"></div>
      <div class="strength-label">
        Strength: {{ calculatePasswordStrength(passwordControl.value) | number:'1.0-0' }}%
      </div>
    </div>
  `;
}