import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { LibMatButtonComponent } from '@saad-ihhn/ihhn-host-lib/lib-buttons';
import { LibMultiSelectComponent } from '@saad-ihhn/ihhn-host-lib/lib-forms';

@Component({
  selector: 'app-multi-select-input',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatDividerModule,
    MatCardModule,
    LibMultiSelectComponent,
    LibMatButtonComponent
  ],
  template: `
    <div class="summary-container">
      <div class="header">
        <mat-card class="summary-card">
          <mat-card-content>
            <div class="flex flex-grow">
              <div class="size-100">
                <pre><code><br />Tag:<br/>&lt;lib-multi-select&gt;&lt;/lib-multi-select&gt; <br />Imports: <br />LibMultiSelectComponent</code></pre>
                <ul class="list">
                  <li>
                    <lib-multi-select
                      [label]="label"
                      [placeholder]="placeholder"
                      [options]="languageOptions"
                      [control]="multiSelectForm.controls['languages']"
                      [disabled]="isDisabled"
                    ></lib-multi-select>
                  </li>
                  <li>
                    <lib-multi-select
                      [label]="'Disabled Select'"
                      [placeholder]="'Disabled options'"
                      [options]="languageOptions"
                      [control]="multiSelectForm.controls['disabledLanguages']"
                      [disabled]="true"
                    ></lib-multi-select>
                  </li>
                </ul>
              </div>
            </div>

            <lib-mat-button 
              color="primary"
              (matClick)="showSelectedValues()"
              [disabled]="multiSelectForm.invalid">
              Show Selected Values
            </lib-mat-button>

            <mat-divider></mat-divider>
            <div class="section">
              <h3 class="section-title">Inputs:</h3>
              <ul class="list">
                <li>
                  <strong>label</strong>: Label for the select field (default: 'Select').
                </li>
                <li>
                  <strong>placeholder</strong>: Placeholder text (default: 'Choose options').
                </li>
                <li>
                  <strong>options</strong>: Array of options with 'value' and 'label' properties.
                </li>
                <li>
                  <strong>control</strong>: FormControl instance for the select field.
                </li>
                <li>
                  <strong>disabled</strong>: Whether the select is disabled (default: false).
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
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiSelectInputComponent {
  label: string = 'Languages';
  placeholder: string = 'Select your languages';

  multiSelectForm = new FormGroup({
    languages: new FormControl([], Validators.required),
    disabledLanguages: new FormControl({ value: [], disabled: true }),
  });

  isDisabled = false;

  languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'ur', label: 'Urdu' },
    { value: 'hi', label: 'Hindi' },
  ];

  showSelectedValues() {
    console.log('Selected Values:', this.multiSelectForm.value);
  }
}
