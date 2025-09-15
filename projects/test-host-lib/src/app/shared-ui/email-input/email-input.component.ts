import { Component, input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule,FormsModule,FormControl,FormGroup,Validators} from '@angular/forms';
import { LibMatButtonComponent } from '@saad-ihhn/ihhn-host-lib/lib-buttons'; 
import { LibEmailComponent } from '@saad-ihhn/ihhn-host-lib/lib-forms'; 
@Component({
  selector: 'app-email-input',
  standalone: true,
  imports: [
    MatDividerModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    LibEmailComponent,
    LibMatButtonComponent, 
  ],
  template: `
    <div class="summary-container">
      <div class="header">
        <mat-card class="summary-card">
          <mat-card-content>
            <div class="flex flex-grow">
              <div class="size-100">
                <pre><code><br />Tag:<br/>&lt;lib-email&gt; &lt;/lib-email&gt; <br />imports: <br />LibEmailComponent</code></pre>
                <ul class="list">
                  <li>
                    <lib-email
                      [label]="label()"
                      [placeholder]="placeholder()"
                      [control]="emailForm.controls['email1']"
                      [disabled]="isDisabled"
                    ></lib-email>
                  </li>
                  <li>
                    <lib-email
                      [label]="label()"
                      [placeholder]="placeholder()"
                      [control]="emailForm.controls['email2']"
                      [disabled]="true"
                    ></lib-email>
                  </li>
                </ul>
              </div>
            </div>
           
            <lib-mat-button
              color="primary"
              (matClick)="showEmail()"
              [disabled]="emailForm.invalid">
              Show Email Value
            </lib-mat-button>

            <mat-divider></mat-divider>
            <div class="section">
              <h3 class="section-title">Inputs:</h3>
              <ul class="list">
                <li>
                  <strong>label</strong>: Label for the input field (default:
                  'Email').
                </li>
                <li>
                  <strong>placeholder</strong>: Placeholder text (default:
                  'Enter your email').
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
      max-width: 100%;
    }
    .header {
      display: flex;
      justify-content: center;
    }
    .summary-card {
      width: 100%;
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
})
export class EmailInputComponent {
  label=input<string>('Email');
  placeholder=input<string>('Enter your email');
  emailForm = new FormGroup({
    email1: new FormControl('', [Validators.required, Validators.email]),
    email2: new FormControl({ value: '', disabled: true }),
  });
  isDisabled = false;

  showEmail() {
    console.log('Email Value:', this.emailForm.value.email1);
  }
}
