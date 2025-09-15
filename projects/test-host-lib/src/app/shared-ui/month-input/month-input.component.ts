import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LibMatButtonComponent } from '@saad-ihhn/ihhn-host-lib/lib-buttons';
import { LibMonthComponent } from '@saad-ihhn/ihhn-host-lib/lib-forms';
@Component({
  selector: 'app-month-input',
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    ReactiveFormsModule,
    FormsModule,
    LibMonthComponent, 
    LibMatButtonComponent
  ],
  template: `
    <div class="summary-container">
      <div class="header">
        <mat-card class="summary-card">
          <mat-card-content>
            <div class="inputs-outputs-container">
              <form [formGroup]="monthForm">
                <ul class="list">
                  <pre><code><br />Tag:<br/>&lt;lib-month&gt; &lt;/lib-month&gt; <br />imports: <br />LibMonthComponent</code></pre>
                  <li>
                    <lib-month
                      [label]="label()"
                      [placeholder]="placeholder()"
                      [control]="monthForm.controls['month1']"
                      [disabled]="isDisabled"
                    ></lib-month>
                  </li>

                  <li>
                    <lib-month
                      [label]="label()"
                      [placeholder]="placeholder()"
                      [control]="monthForm.controls['month2']"
                      [disabled]="true"
                    ></lib-month>
                  </li>
                </ul>

                <lib-mat-button color="primary" (matClick)="showMonth()" [disabled]="monthForm.invalid">
                  Show Selected Month
                </lib-mat-button>

              </form>
            </div>

            <mat-divider></mat-divider>

            <div class="section">
              <h3 class="section-title">Inputs:</h3>
              <ul class="list">
                <li><strong>label</strong>: Label for the input field (default: 'Select Month').</li>
                <li><strong>placeholder</strong>: Placeholder text (default: 'YYYY-MM').</li>
                <li><strong>disabled</strong>: Whether the input is disabled (default: false).</li>
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
      color: #333;
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
export class MonthInputComponent {
  label=signal("Select Month");
  placeholder=signal("YYYY-MM");
  monthForm = new FormGroup({
    month1: new FormControl('', [Validators.required]), 
    month2: new FormControl({ value: '', disabled: true }) 
  });

  isDisabled = false; 

  showMonth() {
    console.log('Selected Month:', this.monthForm.value.month1);
  }
}
