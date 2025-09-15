import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { CodeViewerComponent } from '../documentation/code-viewer/code-viewer.component';
import { DocumentationComponent } from "../documentation/documentation.component";
import { EmailInputComponent } from './email-input.component';

@Component({
  selector: 'app-email-input-documentation',
  standalone: true,
  imports: [CodeViewerComponent, DocumentationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-documentation 
      [publishedDate]="publishedDate" 
      [title]="title"
      [htmlCode]="htmlCode"
      [component]="emailInputComponent" 
      [tsCode]="tsCode" 
      [overviewContent]="overviewContent"
      [useCasesContent]="useCasesContent" 
      [noteContent]="noteContent" 
      [otherContent]="otherContent">
    </app-documentation>

    <ng-template #overviewContent>
      <div class="space-y-4">
        <p class="text-on-surface">
          The <code class="bg-gray-100 px-1 py-0.5 rounded text-gray-800">&lt;lib-email&gt;</code> component is a specialized input field designed specifically for email addresses. It includes built-in email validation and formatting features.
        </p>
        
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-blue-800">Email-Specific Features</h3>
              <div class="mt-2 text-sm text-blue-700">
                <p>
                  This component includes special handling for email addresses:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Built-in email format validation</li>
                  <li>Automatic domain suggestions</li>
                  <li>Email format detection and highlighting</li>
                  <li>International email support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-semibold mt-6">Key Features</h3>
        <ul class="list-disc pl-5 space-y-2 text-on-surface">
          <li>Real-time email format validation</li>
          <li>Common domain auto-completion (e.g., {{'@gmail.com, @yahoo.com'}})</li>
          <li>Visual feedback for valid/invalid email formats</li>
          <li>Support for international email addresses</li>
          <li>Configurable validation rules</li>
          <li>Mobile-friendly keyboard input</li>
          <li>Accessibility compliant</li>
        </ul>
      </div>
    </ng-template>

    <ng-template #useCasesContent>
      <div class="space-y-6">    
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Basic Email Input</h3>
            <p class="mt-2 text-gray-600">
              Standard email input field with built-in validation.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="basicSetupExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Registration Form</h3>
            <p class="mt-2 text-gray-600">
              Using the email field in a user registration form.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="registrationFormExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Custom Validation</h3>
            <p class="mt-2 text-gray-600">
              Adding custom validation rules for business emails.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="customValidationExample"></app-code-viewer>
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
              <h3 class="text-sm font-medium text-yellow-800">Validation Notes</h3>
              <div class="mt-2 text-sm text-yellow-700">
                <p>
                  Important considerations for email validation:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>The built-in validator follows RFC 5322 standards</li>
                  <li>Consider adding domain-specific validation if needed</li>
                  <li>For strict validation, combine with backend verification</li>
                  <li>International emails may require special handling</li>
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
                  For better user experience with email inputs:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Use clear error messages for invalid formats</li>
                  <li>Consider adding a confirmation email field</li>
                  <li>Provide visual feedback during typing</li>
                  <li>Set appropriate input mode for mobile devices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>

    <ng-template #otherContent>
      <div class="space-y-6">
        <h2 class="text-2xl font-bold">Advanced Email Features</h2>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Domain Suggestions</h3>
            <p class="mt-2 text-gray-600">
              Implementing domain auto-completion for email inputs.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="domainSuggestionsExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Input Properties</h3>
            <p class="mt-2 text-gray-600">
              Complete list of email-specific input properties.
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
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">enableDomainSuggestions</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Whether to show domain suggestions (default: true)</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">allowedDomains</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string[]</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Whitelist of allowed email domains</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">blockedDomains</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string[]</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Blacklist of blocked email domains</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">enableInternational</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Support for international email addresses (default: true)</td>
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
export class EmailInputDocComponent {
  @ViewChild('overviewContent', { static: true }) overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true }) useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;

  emailInputComponent = EmailInputComponent;
  publishedDate = '2025-05-21';
  title = 'Email Input Component';

  htmlCode = `
    <lib-email
      label="Email Address"
      placeholder="user@example.com"
      [control]="emailControl"
      [enableDomainSuggestions]="true"
    ></lib-email>
  `;

  tsCode = `
    // In your component class
    emailControl = new FormControl('', [Validators.required, Validators.email]);
    
    // Optional: Configure allowed domains
    allowedDomains = ['ourcompany.com', 'partner.com'];
  `;

  basicSetupExample = `
    @Component({
      selector: 'app-email-example',
      standalone: true,
      imports: [LibEmailComponent, ReactiveFormsModule],
      template: \`
        <lib-email
          label="Work Email"
          placeholder="name@company.com"
          [control]="emailControl"
        ></lib-email>
      \`,
    })
    export class EmailExampleComponent {
      emailControl = new FormControl('', [Validators.required, Validators.email]);
    }
  `;

  registrationFormExample = `
    @Component({
      selector: 'app-registration-form',
      template: \`
        <form [formGroup]="registerForm">
          <lib-email
            label="Email"
            placeholder="Your email address"
            [control]="registerForm.controls.email"
          ></lib-email>
          
          <lib-email
            label="Confirm Email"
            placeholder="Re-enter your email"
            [control]="registerForm.controls.confirmEmail"
          ></lib-email>
        </form>
      \`,
    })
    export class RegistrationFormComponent {
      registerForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        confirmEmail: new FormControl('', [
          Validators.required,
          this.emailMatchValidator.bind(this)
        ])
      });

      emailMatchValidator(control: FormControl) {
        return control.value === this.registerForm?.controls.email.value 
          ? null 
          : { emailMismatch: true };
      }
    }
  `;

  customValidationExample = `
    // Custom validator for company emails only
    function companyEmailValidator(allowedDomains: string[]) {
      return (control: FormControl) => {
        if (!control.value) return null;
        
        const email = control.value as string;
        const domain = email.split('@')[1];
        
        if (!domain) return { invalidEmail: true };
        
        return allowedDomains.includes(domain) 
          ? null 
          : { invalidDomain: true };
      };
    }

    @Component({
      selector: 'app-company-email',
      template: \`
        <lib-email
          label="Company Email"
          [control]="companyEmailControl"
          [allowedDomains]="allowedDomains"
        ></lib-email>
      \`,
    })
    export class CompanyEmailComponent {
      allowedDomains = ['company.com', 'partner.com'];
      companyEmailControl = new FormControl('', [
        Validators.required,
        Validators.email,
        companyEmailValidator(this.allowedDomains)
      ]);
    }
  `;

  domainSuggestionsExample = `
    @Component({
      selector: 'app-email-with-suggestions',
      template: \`
        <lib-email
          label="Personal Email"
          [control]="emailControl"
          [enableDomainSuggestions]="true"
          [commonDomains]="['gmail.com', 'yahoo.com', 'outlook.com']"
        ></lib-email>
      \`,
    })
    export class EmailWithSuggestionsComponent {
      emailControl = new FormControl('');
      
      // Optional: Handle domain selection
      onDomainSelected(domain: string) {
        console.log('Selected domain:', domain);
      }
    }
  `;
}