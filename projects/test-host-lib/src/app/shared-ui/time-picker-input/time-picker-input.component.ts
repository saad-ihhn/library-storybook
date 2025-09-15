import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { LibTimePickerComponent } from '@saad-ihhn/ihhn-host-lib/lib-forms';
import { LibMatButtonComponent } from '@saad-ihhn/ihhn-host-lib/lib-buttons';
@Component({
  selector: 'app-time-picker-input',
  standalone: true,
  imports: [
    MatDividerModule,
    MatCardModule,
    ReactiveFormsModule,
    LibTimePickerComponent,
    LibMatButtonComponent, 
  ],
  template: `
    <div class="summary-container">
      <div class="header">
        <mat-card class="summary-card">
          <mat-card-content>
            <div class="flex flex-grow">
              <div class="size-100">
                <pre><code><br />Tag:<br/>&lt;lib-time-picker&gt; &lt;/lib-time-picker&gt; <br />imports: <br />LibTimePickerComponent</code></pre>
                <ul class="list">
                  <li>
                    <lib-time-picker
                      [label]="label()"
                      [placeholder]="placeholder()"
                      [control]="timeForm.controls['time1']"
                      [disabled]="isDisabled"
                    ></lib-time-picker>
                  </li>
                  
                  <li>
                    <lib-time-picker
                       [label]="label()"
                      [placeholder]="placeholder()"
                      [control]="timeForm.controls['time2']"
                      [disabled]="true"
                    ></lib-time-picker>
                  </li>
                </ul>
              </div>
            </div>

            <lib-mat-button
              color="primary"
              (matClick)="showTime()"
              [disabled]="timeForm.invalid">
              Show Time Value
            </lib-mat-button>

            <mat-divider></mat-divider>

            <div class="section">
              <h3 class="section-title">Inputs:</h3>
              <ul class="list">
                <li>
                  <strong>label</strong>: Label for the input field (default: 'Pick a Time').
                </li>
                <li>
                  <strong>placeholder</strong>: Placeholder text (default: 'Select a time').
                </li>
                <li>
                  <strong>disabled</strong>: Whether the input is disabled (default: false).
                </li>
                <li>
                  <strong>timeFormat</strong>: Time format, e.g., 'hh:mm a' for 12-hour or 'HH:mm' for 24-hour (optional).
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
export class TimePickerInputComponent {
  label=signal("Pick a Time")
  placeholder=signal("Select a time")
  timeForm = new FormGroup({
    time1: new FormControl('', [Validators.required]),
    time2: new FormControl({ value: '', disabled: true }),
  });

  isDisabled = false;

  showTime() {
    console.log('Selected Time:', this.timeForm.value.time1);
  }
}
