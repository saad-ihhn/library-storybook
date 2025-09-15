import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LibPhoneComponent } from '@saad-ihhn/ihhn-host-lib/lib-forms';
import { LibMatButtonComponent } from '@saad-ihhn/ihhn-host-lib/lib-buttons';
@Component({
  selector: 'app-phone-input',
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    ReactiveFormsModule,
    FormsModule,
    LibPhoneComponent,
    LibMatButtonComponent
  ],
  template: `
    <div class="summary-container">
      <mat-card class="summary-card">
        <mat-card-content>
          <form [formGroup]="telForm">
            <ul class="list">
             <pre><code><br />Tag:<br/>&lt;lib-phone&gt; &lt;/lib-phone&gt; <br />imports: <br />LibPhoneComponent</code></pre>
              <li>
                <lib-phone
                  [label]="label()"
                  [placeholder]="placeholder()"
                  [control]="telForm.controls['phone1']"
                ></lib-phone>
              </li>

              <li>
                <lib-phone
                  [label]="label()"
                  [placeholder]="placeholder()"
                  [control]="telForm.controls['phone2']"
                  [disabled]="true"
                ></lib-phone>
              </li>
            </ul>
            <lib-mat-button color="primary" (matClick)="showPhone()" [disabled]="telForm.invalid">
              Show Phone Number
            </lib-mat-button>
          </form>

          <mat-divider></mat-divider>

          <h3 class="section-title">Inputs:</h3>
          <ul class="list">
            <li><strong>label</strong>: Custom label for the field (default: 'Phone Number').</li>
            <li><strong>placeholder</strong>: Custom placeholder (default: 'Enter phone number').</li>
            <li><strong>disabled</strong>: Whether the input is disabled (default: false).</li>
          </ul>

        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .summary-container { padding: 20px; }
    .summary-card { width: 100%; }
    .list { list-style: none; padding: 0; }
    .list li { margin: 10px 0; font-size: 1rem; }
    mat-divider { margin: 15px 0; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhoneInputComponent {
  label=signal('Phone Number');
  placeholder=signal('Enter phone number');
  telForm = new FormGroup({
    phone1: new FormControl('', [Validators.required, Validators.pattern('^\\+?[0-9]\\d{0,14}$')]), 
    phone2: new FormControl({ value: '', disabled: true }) 
  });

  showPhone() {
    console.log('Entered Phone Number: ' + this.telForm.value.phone1);
  }
}
