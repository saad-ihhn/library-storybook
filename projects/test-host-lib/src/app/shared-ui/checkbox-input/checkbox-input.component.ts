import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { LibCheckboxComponent} from '@saad-ihhn/ihhn-host-lib/lib-forms';

@Component({
  selector: 'app-checkbox-input',
  standalone: true,
  imports: [
    MatDividerModule,
    MatCardModule,
    ReactiveFormsModule,
    LibCheckboxComponent,
  ],
  template: `
    <div class="summary-container">
      <div class="header">
        <mat-card class="summary-card">
          <mat-card-content>
            <div class="flex flex-grow">
              <div class="size-100">
                  <pre><code>Tag: &lt;lib-checkbox&gt;&lt;/lib-checkbox&gt; <br />imports: <br />LibCheckboxComponent</code></pre>
                <ul class="list">
                  <li>
                    <lib-checkbox
                      [label]='label()'
                      [control]="checkboxControl"
                    ></lib-checkbox>
                  </li>
                </ul>
              </div>
            </div>

            <mat-divider></mat-divider>

            <div class="section">
              <h3 class="section-title">Inputs:</h3>
              <ul class="list">
                <li>
                  <strong>label</strong>: Label for the checkbox (default:
                  'Check me!').
                </li>
                <li>
                  <strong>control</strong>: Binds checkbox to a FormControl.
                </li>
              </ul>
            </div>

            <mat-divider></mat-divider>
            <p>Checkbox Value: {{ checkboxControl.value }}</p>
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
      .button-container {
        display: flex;
        justify-content: center;
        margin-top: 15px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxInputComponent {
  label=signal('Check me!'); 
  checkboxControl = new FormControl(false); // ✅ Reactive Form Control
}
