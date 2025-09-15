import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { CodeViewerComponent } from '../documentation/code-viewer/code-viewer.component';
import { ArrayFormComponent } from './array-form.component';
import { DocumentationComponent } from "../documentation/documentation.component";

@Component({
  selector: 'app-array-form-doc',
  standalone: true,
  imports: [CodeViewerComponent, DocumentationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-documentation 
      [publishedDate]="publishedDate" 
      [title]="title"
      [htmlCode]="htmlCode"
      [component]="arrayFormComponent" 
      [tsCode]="tsCode" 
      [overviewContent]="overviewContent"
      [useCasesContent]="useCasesContent" 
      [noteContent]="noteContent" 
      [otherContent]="otherContent">
    </app-documentation>

    <ng-template #overviewContent>
      <div class="space-y-4">
        <p class="text-on-surface">
          The <code class="bg-gray-100 px-1 py-0.5 rounded text-gray-800">ArrayFormComponent</code> demonstrates a dynamic form array implementation using Angular Reactive Forms. It allows users to add multiple field sets with various form controls and submit them all at once.
        </p>
        
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-blue-800">Dynamic Form Features</h3>
              <div class="mt-2 text-sm text-blue-700">
                <p>
                  This component includes several advanced features:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Dynamic addition and removal of form groups</li>
                  <li>Multiple field types (email, password, date, etc.)</li>
                  <li>Bulk submission of all form groups</li>
                  <li>Form validation for each field set</li>
                  <li>Disable/enable all forms for submission/edit modes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-semibold mt-6">Key Features</h3>
        <ul class="list-disc pl-5 space-y-2 text-on-surface">
          <li>FormArray implementation for dynamic forms</li>
          <li>Support for various input types (email, password, date, etc.)</li>
          <li>Add/remove field sets dynamically</li>
          <li>Bulk submission of all forms</li>
          <li>Form validation for each field</li>
          <li>Responsive grid layout</li>
          <li>Disable/enable all forms in bulk</li>
          <li>Custom form controls integration</li>
        </ul>
      </div>
    </ng-template>

    <ng-template #useCasesContent>
      <div class="space-y-6">    
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Basic Array Form Setup</h3>
            <p class="mt-2 text-gray-600">
              Basic implementation of a dynamic form array with add/remove functionality.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="basicSetupExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">FormArray with Validation</h3>
            <p class="mt-2 text-gray-600">
              Implementing validation for each field in the dynamic form array.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="validationExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Custom Form Controls</h3>
            <p class="mt-2 text-gray-600">
              Integrating custom form controls in the dynamic form array.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="customControlsExample"></app-code-viewer>
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
              <h3 class="text-sm font-medium text-yellow-800">Performance Notes</h3>
              <div class="mt-2 text-sm text-yellow-700">
                <p>
                  When using dynamic form arrays:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Consider using OnPush change detection for better performance</li>
                  <li>Limit the number of dynamic forms when possible</li>
                  <li>Use trackBy with ngFor to optimize rendering</li>
                  <li>Unsubscribe from observables to prevent memory leaks</li>
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
              <h3 class="text-sm font-medium text-purple-800">Validation Tips</h3>
              <div class="mt-2 text-sm text-purple-700">
                <p>
                  For form array validation:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Validate each form group individually</li>
                  <li>Consider cross-field validation within groups</li>
                  <li>Provide clear error messages for each field</li>
                  <li>Disable submit button when any form is invalid</li>
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
            <h3 class="text-lg font-medium text-gray-900">Nested Form Arrays</h3>
            <p class="mt-2 text-gray-600">
              Implementing nested form arrays for complex data structures.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="nestedArraysExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Component API</h3>
            <p class="mt-2 text-gray-600">
              Complete list of available properties and methods.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property/Method</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">form</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">FormGroup</td>
                  <td class="px-6 py-4 text-sm text-gray-500">The main form group containing the FormArray</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">fields</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">FormArray</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Getter for the form array containing all field groups</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">addFieldSet()</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Method</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Adds a new field group to the form array</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">removeFieldSet(index)</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Method</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Removes a field group at the specified index</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">onSubmitAll()</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Method</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Submits all form groups and disables them</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">onEditAll()</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Method</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Enables all form groups for editing</td>
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
export class ArrayFormDocComponent {
  @ViewChild('overviewContent', { static: true }) overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true }) useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;

  arrayFormComponent = ArrayFormComponent;
  publishedDate = '2025-06-03';
  title = 'Dynamic Array Form Component';

  htmlCode = `
    <form [formGroup]="form" class="p-4 space-y-6 max-w-5xl mx-auto">
      <div class="text-center">
        <button (click)="addFieldSet()" class="btn-primary">
          ➕ Add More Form
        </button>
      </div>

      <div formArrayName="fields" class="space-y-6">
        <div *ngFor="let fieldGroup of fields.controls; let i = index" [formGroupName]="i"
             class="relative rounded-2xl shadow-md border p-6">
          <button *ngIf="fields.length > 1" (click)="removeFieldSet(i)" class="btn-danger">
            ✖ Remove
          </button>

          <h2 class="text-lg font-semibold mb-4">Fieldset {{ i + 1 }}</h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input formControlName="email" placeholder="Email">
            <input formControlName="password" type="password" placeholder="Password">
            <!-- More fields... -->
          </div>
        </div>
      </div>

      <div class="flex justify-end space-x-4">
        <button (click)="onSubmitAll()" [disabled]="form.invalid" class="btn-submit">
          ✅ Submit All
        </button>
        <button (click)="onEditAll()" class="btn-edit">
          🔁 Update All
        </button>
      </div>
    </form>
  `;

  tsCode = `
    import { Component } from '@angular/core';
    import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
    
    @Component({
      selector: 'app-array-form',
      templateUrl: './array-form.component.html',
      styleUrls: ['./array-form.component.css']
    })
    export class ArrayFormComponent {
      form: FormGroup;
      submittedData: any = null;
      isAllSubmitted = false;

      constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
          fields: this.fb.array([])
        });
        this.addFieldSet();
      }

      get fields(): FormArray {
        return this.form.get('fields') as FormArray;
      }

      addFieldSet(): void {
        const grp = this.fb.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', Validators.required],
          // More fields with validators...
        });
        this.fields.push(grp);
      }

      removeFieldSet(index: number): void {
        this.fields.removeAt(index);
      }

      onSubmitAll(): void {
        if (this.form.invalid) return;
        this.submittedData = this.fields.controls.map(g => g.value);
        this.fields.controls.forEach(g => g.disable());
        this.isAllSubmitted = true;
      }

      onEditAll(): void {
        this.fields.controls.forEach(g => g.enable());
        this.isAllSubmitted = false;
      }
    }
  `;

  basicSetupExample = `
    // In your component class
    form: FormGroup;

    constructor(private fb: FormBuilder) {
      this.form = this.fb.group({
        fields: this.fb.array([])
      });
      this.addFieldSet();
    }

    get fields(): FormArray {
      return this.form.get('fields') as FormArray;
    }

    addFieldSet(): void {
      const grp = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]]
      });
      this.fields.push(grp);
    }

    // In template
    <form [formGroup]="form">
      <div formArrayName="fields">
        <div *ngFor="let fieldGroup of fields.controls; let i = index" [formGroupName]="i">
          <input formControlName="name" placeholder="Name">
          <input formControlName="email" placeholder="Email">
          <button (click)="removeFieldSet(i)">Remove</button>
        </div>
      </div>
      <button (click)="addFieldSet()">Add Field Set</button>
    </form>
  `;

  validationExample = `
    // In component
    addFieldSet(): void {
      const grp = this.fb.group({
        username: ['', [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('[a-zA-Z0-9]*')
        ]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [
          Validators.required,
          Validators.minLength(8),
          this.passwordValidator
        ]]
      });
      this.fields.push(grp);
    }

    passwordValidator(control: FormControl) {
      const value = control.value;
      if (!value) return null;
      
      const hasUpperCase = /[A-Z]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);
      const hasNumber = /[0-9]/.test(value);
      
      const valid = hasUpperCase && hasLowerCase && hasNumber;
      return valid ? null : { passwordStrength: true };
    }

    // In template
    <div *ngIf="fieldGroup.get('username').hasError('required')" class="error">
      Username is required
    </div>
    <div *ngIf="fieldGroup.get('username').hasError('minlength')" class="error">
      Username must be at least 3 characters
    </div>
  `;

  customControlsExample = `
    // In component
    addFieldSet(): void {
      const grp = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
        date: ['', Validators.required],
        // More custom controls...
      });
      this.fields.push(grp);
    }

    // In template
    <div [formGroupName]="i">
      <lib-email [control]="fieldGroup.get('email')"></lib-email>
      <lib-phone [control]="fieldGroup.get('phone')"></lib-phone>
      <lib-date-picker [control]="fieldGroup.get('date')"></lib-date-picker>
      <!-- More custom controls... -->
    </div>
  `;

  nestedArraysExample = `
    // In component
    createItem(): FormGroup {
      return this.fb.group({
        name: ['', Validators.required],
        addresses: this.fb.array([
          this.createAddress()
        ])
      });
    }

    createAddress(): FormGroup {
      return this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        zip: ['', Validators.required]
      });
    }

    getAddresses(formGroup: FormGroup): FormArray {
      return formGroup.get('addresses') as FormArray;
    }

    addAddress(formGroup: FormGroup) {
      this.getAddresses(formGroup).push(this.createAddress());
    }

    // In template
    <div formArrayName="fields">
      <div *ngFor="let item of fields.controls; let i = index" [formGroupName]="i">
        <input formControlName="name" placeholder="Name">
        
        <div formArrayName="addresses">
          <div *ngFor="let addr of getAddresses(item).controls; let j = index" [formGroupName]="j">
            <input formControlName="street" placeholder="Street">
            <input formControlName="city" placeholder="City">
            <input formControlName="zip" placeholder="Zip">
          </div>
          <button (click)="addAddress(item)">Add Address</button>
        </div>
      </div>
    </div>
  `;
}