import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {FormControl,FormGroup,ReactiveFormsModule,Validators} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { LibMatButtonComponent } from '@saad-ihhn/ihhn-host-lib/lib-buttons';
import { LibNumberComponent } from '@saad-ihhn/ihhn-host-lib/lib-forms';
@Component({
  selector: 'app-number-input',
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    ReactiveFormsModule,
    LibNumberComponent,
    LibMatButtonComponent,
  ],
  template: `
    <div class="summary-container">
      <div class="header">
        <mat-card class="summary-card">
          <mat-card-content>
            <div class="form-container">
              <pre><code>Tag: &lt;lib-number&gt;&lt;/lib-number&gt; <br />imports: <br />LibNumberComponent</code></pre>
              <ul class="list">
                <li>
                  <lib-number
                    [label]="label()"
                    [placeholder]="placeholder()"
                    [step]="step()"
                    [control]="numberForm.controls['quantity']"
                  ></lib-number>
                </li>
                <li>
                  <lib-number
                     [label]="label()"
                    [placeholder]="placeholder()"
                    [step]="step()"
                    [control]="numberForm.controls['disabledQuantity']"
                     [disabled]="true"
                  ></lib-number>
                </li>
              </ul>
            </div>

            <lib-mat-button
              color="primary"
              (matClick)="showNumber()"
              [disabled]="numberForm.invalid">
              Show Number Value
            </lib-mat-button>

            <mat-divider></mat-divider>

            <div class="section">
              <h3 class="section-title">Inputs:</h3>
              <ul class="list">
                <li>
                  <strong>label</strong>: Label for the input field (default:
                  'Number').
                </li>
                <li>
                  <strong>placeholder</strong>: Placeholder text (default:
                  'Enter a number').
                </li>
                <li><strong>step</strong>: Step size for number input.</li>
                <li>
                  <strong>control</strong>: Binds to a reactive form control.
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
      padding: 16px;
    }
    .form-container {
      display: flex;
      flex-direction: column;
      gap: 16px;
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
export class NumberInputComponent {
  label =signal<string>('Number');
  placeholder =signal<string>('Enter a number');
  step =signal<number>(1);

  numberForm = new FormGroup({
    quantity: new FormControl(0, [
      Validators.required,
    ]),
    disabledQuantity: new FormControl({ value: 7, disabled: true }),
  });

  showNumber() {
    console.log('Selected Number:', this.numberForm.get('quantity')!.value);
  }
}
