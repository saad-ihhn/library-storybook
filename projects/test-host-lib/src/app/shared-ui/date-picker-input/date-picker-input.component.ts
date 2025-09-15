import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import {ReactiveFormsModule,FormsModule,FormControl,FormGroup,Validators,} from '@angular/forms';
import { LibMatButtonComponent } from '@saad-ihhn/ihhn-host-lib/lib-buttons';
import { LibDatePickerComponent } from '@saad-ihhn/ihhn-host-lib/lib-forms';

@Component({
  selector: 'app-date-picker-input',
  standalone: true,
  imports: [
    MatDividerModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    LibDatePickerComponent,
    LibMatButtonComponent, 
  ],
  template: `
    <div class="summary-container">
      <div class="header">
        <mat-card class="summary-card">
          <mat-card-content>
            <div class="flex flex-grow">
              <div class="size-100">
                <pre><code><br />Tag:<br/>&lt;lib-date-picker&gt; &lt;/lib-date-picker&gt; <br />imports: <br />LibDatePickerComponent</code></pre>
                <ul class="list">
                  <li>
                    <lib-date-picker
                      [label]="label()"
                      [placeholder]="placeholder()"
                      [control]="dateForm.controls['date1']"
                      [disabled]="isDisabled"
                    ></lib-date-picker>
                  </li>
                  <li>
                    <lib-date-picker 
                      [label]="label()"
                      [placeholder]="placeholder()"
                      [control]="dateForm.controls['date2']"
                      [disabled]="true"
                    ></lib-date-picker>
                  </li>
                </ul>
              </div>
            </div>
            
            <lib-mat-button
              color="primary"
              (matClick)="showDate()"
              [disabled]="dateForm.invalid">
              Show Date Value
            </lib-mat-button>

            <mat-divider></mat-divider>
            <div class="section">
              <h3 class="section-title">Inputs:</h3>
              <ul class="list">
                <li>
                  <strong>label</strong>: Label for the input field (default:
                  'Select Date').
                </li>
                <li>
                  <strong>placeholder</strong>: Placeholder text (default:
                  'Pick a date').
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePickerInputComponent {
  label=signal('Select Date');
  placeholder=signal('Pick a date');
  dateForm = new FormGroup({
    date1: new FormControl('', [Validators.required]),
    date2: new FormControl({ value: '', disabled: true }),
  });
  isDisabled = false;

  showDate() {
    console.log('Selected Date:', this.dateForm.value.date1);
  }
}


