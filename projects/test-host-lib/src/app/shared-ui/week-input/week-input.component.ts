import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule, FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { LibMatButtonComponent } from '@saad-ihhn/ihhn-host-lib/lib-buttons'; 
import { LibWeekComponent } from '@saad-ihhn/ihhn-host-lib/lib-forms';
@Component({
  selector: 'app-week-input',
  standalone: true,
  imports: [
    MatDividerModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    LibWeekComponent,  
    LibMatButtonComponent,  
  ],
  template: `
    <div class="summary-container">
      <div class="header">
        <mat-card class="summary-card">
          <mat-card-content>
            <div class="flex flex-grow">
              <div class="size-100">
                <pre><code><br />Tag:<br/>&lt;lib-week&gt; &lt;/lib-week&gt; <br />imports: <br />LibWeekComponent</code></pre>
                <ul class="list">
                  <li>
                    <lib-week
                      [label]="label()"
                      [placeholder]="placeholder()"
                      [control]="weekForm.controls['week1']"
                    ></lib-week>
                  </li>
                  <li>
                    <lib-week
                      [label]="label()"
                      [placeholder]="placeholder()"
                      [disabled]="true"
                      [control]="weekForm.controls['week2']"
                    ></lib-week>
                  </li>
                </ul>
              </div>
            </div>

            <lib-mat-button
              color="primary"
              (matClick)="showWeekValue()"
              [disabled]="weekForm.invalid">
              Show Week Value
            </lib-mat-button>

            <mat-divider></mat-divider>
            <div class="section">
              <h3 class="section-title">Inputs:</h3>
              <ul class="list">
                <li>
                  <strong>label</strong>: Label for the input field (default:
                  'Week').
                </li>
                <li>
                  <strong>placeholder</strong>: Placeholder text (default:
                  'Pick a week').
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
export class WeekInputComponent {
  weekForm = new FormGroup({
    week1: new FormControl('', Validators.required),
    week2: new FormControl({ value: '', disabled: true }),
  });
  isDisabled = false;

  label = signal('Select Week');
  placeholder = signal('Pick a week');
  
  ngOnInit() {
    // Toggle the disabled state programmatically as needed.
    if (this.isDisabled) {
      this.weekForm.get('week1')?.disable();
    } else {
      this.weekForm.get('week1')?.enable();
    }
  }

  showWeekValue() {
    console.log('Selected Week:', this.weekForm.value.week1);
  }
}
