import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { LibMatButtonComponent } from '@saad-ihhn/ihhn-host-lib/lib-buttons';
import { LibRadioBtnComponent } from '@saad-ihhn/ihhn-host-lib/lib-forms';

@Component({
  selector: 'app-radio-btn',
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    ReactiveFormsModule,
    LibRadioBtnComponent,
    LibMatButtonComponent,
  ],
  template: `
    <div class="summary-container">
      <div class="header">
        <mat-card class="summary-card">
          <mat-card-content>
            <div class="inputs-outputs-container">
              <form [formGroup]="radioForm">
                <ul class="list">
                  <pre><code><br />Tag:<br/>&lt;lib-radio-btn&gt; &lt;/lib-radio-btn&gt; <br />imports: <br />LibRadioBtnComponent</code></pre>
                  <li>
                    <lib-radio-btn
                      [control]="radioForm.controls['selection']"
                      [value]="'1'"
                      [label]="labelOne()"
                    ></lib-radio-btn>
                  </li>

                  <li>
                    <lib-radio-btn
                      [control]="radioForm.controls['selection']"
                      [value]="'2'"
                      [label]="labelTwo()"
                    ></lib-radio-btn>
                  </li>
                </ul>

                <lib-mat-button
                  color="primary"
                  (matClick)="showSelection()"
                  [disabled]="radioForm.invalid">
                  Show Selected Value
                </lib-mat-button>
              </form>
            </div>

            <mat-divider></mat-divider>

            <div class="section">
              <h3 class="section-title">Inputs:</h3>
              <ul class="list">
                <li>
                  <strong>value</strong>: The value of the radio button.
                </li>
                <li>
                  <strong>label</strong>: The text label for the radio button.
                </li>
                <li>
                  <strong>control</strong>: The FormControl bound to the radio group.
                </li>
              </ul>
            </div>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
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
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioBtnComponent {
  labelOne = signal('Yes');
  labelTwo = signal('No');

  radioForm = new FormGroup({
    selection: new FormControl('', Validators.required),
  });

  showSelection() {
    console.log('Selected Value:', this.radioForm.value.selection);
  }
}
