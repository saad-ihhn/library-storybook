import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { LibMatButtonComponent } from '@saad-ihhn/ihhn-host-lib/lib-buttons';
import { LibDateRangePickerComponent } from '@saad-ihhn/ihhn-host-lib/lib-forms';
@Component({
  selector: 'app-date-range-picker-input',
  standalone: true,
  imports: [
    MatDividerModule,
    MatCardModule,
    LibDateRangePickerComponent,
    LibMatButtonComponent,
  ],
  template: `
    <div class="summary-container">
      <div class="header">
        <mat-card class="summary-card">
          <mat-card-content>
            <div class="flex flex-grow">
              <div class="size-100">
                <pre><code><br />Tag:<br/>&lt;lib-date-range-picker&gt;&lt;/lib-date-range-picker&gt;<br />imports:<br />LibDateRangePickerComponent</code></pre>
                <ul class="list">
                  <li>
                    <lib-date-range-picker
                      [range]="range"
                      placeholder="Booking Date Range"
                      hint="MM/DD/YYYY – MM/DD/YYYY"
                    >
                    </lib-date-range-picker>
                  </li>
                </ul>
              </div>
            </div>

            <lib-mat-button color="primary" (matClick)="showDateRange()">
              Show Date Range
            </lib-mat-button>

            <mat-divider></mat-divider>
            <div class="section">
              <h3 class="section-title">Inputs:</h3>
              <ul class="list">
                <li>
                  <strong>label</strong>: Label for the date range input
                  (default: 'Enter a date range').
                </li>
                <li>
                  <strong>hint</strong>: Optional hint text below the input
                  (Example: 'MM/DD/YYYY – MM/DD/YYYY').
                </li>
              </ul>
            </div>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styles: [
    `
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
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateRangePickerInputComponent {
  label = signal('Booking Date Range');
  hint = signal('MM/DD/YYYY – MM/DD/YYYY');

  
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  showDateRange() {
    console.log('Selected Range:', this.range.value);
  }
}
