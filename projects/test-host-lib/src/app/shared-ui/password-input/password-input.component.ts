import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import {FormControl,FormGroup,Validators,ReactiveFormsModule,FormsModule,} from '@angular/forms';
import { LibMatButtonComponent } from '@saad-ihhn/ihhn-host-lib/lib-buttons';
import { LibPasswordComponent } from '@saad-ihhn/ihhn-host-lib/lib-forms';
@Component({
  selector: 'app-password-input',
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    ReactiveFormsModule,
    FormsModule,
    LibPasswordComponent,
    LibMatButtonComponent 
  ],
  template: `
    <div class="summary-container">
      <div class="header">
        <mat-card class="summary-card">
          <mat-card-content>
            <div class="inputs-outputs-container">
              <form [formGroup]="passwordForm">
                <ul class="list">
                  <pre><code><br />Tag:<br/>&lt;lib-password&gt; &lt;/lib-password&gt; <br />imports: <br />LibPasswordComponent</code></pre>
                  <li>
                    <lib-password
                      [label]="label()"
                      [placeholder]="placeholder()"
                      [control]="passwordForm.controls['password1']"
                      [disabled]="isDisabled"
                    ></lib-password>
                  </li>

                  <li>
                    <lib-password
                      [label]="label()"
                      [placeholder]="placeholder()"
                      [control]="passwordForm.controls['password2']"
                      [disabled]="true"
                    ></lib-password>
                  </li>
                </ul>
                <lib-mat-button
                  color="primary"
                  (matClick)="showPassword()"
                  [disabled]="passwordForm.invalid">
                  Show Password Value
                </lib-mat-button>
              </form>
            </div>

            <mat-divider></mat-divider>

            <div class="section">
              <h3 class="section-title">Inputs:</h3>
              <ul class="list">
                <li>
                  <strong>label</strong>: Label for the input field (default:
                  'Password').
                </li>
                <li>
                  <strong>placeholder</strong>: Placeholder text (default:
                  'Enter your password').
                </li>
                <li>
                  <strong>disabled</strong>: Whether the input is disabled
                  (default: false).
                </li>
              </ul>
            </div>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styles: `
  .summary-container {
    margin: 0;
    padding: 20px;
    max-width: 100%;
  }

  .header {
    display: flex;
    justify-content: center;
  }

  .summary-card {
    width: 100%;
  }

  .section {
    margin-bottom: 20px;
  }

  .section-title {
    font-size: 1.2rem;
    font-weight: 600;
  }

  .list {
    list-style: none;
    padding-left: 0;
  }

  .list li {
    margin: 10px 0;
    font-size: 1rem;
  }

  .list li strong {
    font-weight: bold;
  }

  mat-divider {
    margin: 15px 0;
  }
`,
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordInputComponent {
  label=signal('Password');
  placeholder=signal('Enter your password');
  passwordForm = new FormGroup({
    password1: new FormControl('', [Validators.required,Validators.minLength(6)]), 
    password2: new FormControl({ value: '', disabled: true }), 
  });

  isDisabled = false; 

  showPassword() {
    console.log('Password Value:', this.passwordForm.value.password1);
  }
}
