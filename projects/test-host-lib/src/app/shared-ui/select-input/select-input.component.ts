import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { LibMatButtonComponent } from '@saad-ihhn/ihhn-host-lib/lib-buttons';
import { LibSelectFieldComponent } from '@saad-ihhn/ihhn-host-lib/lib-forms';

@Component({
  selector: 'app-select-input',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatDividerModule,
    MatCardModule,
    LibSelectFieldComponent,
    LibMatButtonComponent,
  ],
  template: `
    <div class="summary-container">
      <div class="header">
        <mat-card class="summary-card">
          <mat-card-content>
            <div class="flex flex-grow">
              <div class="size-100">
                <pre><code><br />Tag:<br/>&lt;lib-select&gt;&lt;/lib-select&gt; <br />Imports: <br />LibSelectComponent</code></pre>
                <ul class="list">
                  <li>
                    <lib-select-field
                      [label]="label()"
                      [placeholder]="placeholder()"
                      [options]="countryOptions"
                      [displayFn]="displayFn"
                      [control]="selectForm.controls['country']"
                      [disabled]="isDisabled"
                    ></lib-select-field>
                  </li>
                  <li>
                    <lib-select-field
                      [label]="'Disabled Select'"
                      [placeholder]="'Disabled options'"
                      [options]="cityOptions"
                      [control]="selectForm.controls['disabledCountry']"
                      [disabled]="true"
                      [displayFn]="displayFn"
                    ></lib-select-field>
                  </li>
                  
                </ul>
              </div>
            </div>

            <lib-mat-button
              color="primary"
              (matClick)="showSelectedValues()"
              [disabled]="selectForm.invalid">
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
                  <strong>placeholder</strong>: Placeholder text (default: 'Select an option').
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
export class SelectInputComponent {
  label = input<string>('Country');
  placeholder = input<string>('Select your country');

  selectForm = new FormGroup({
    country: new FormControl('pk', Validators.required),
    disabledCountry: new FormControl({ value: [], disabled: true }),
  });

  isDisabled = false;

  countryOptions = [
    { value: 'pk', label: 'Pakistan' },
    { value: 'in', label: 'India' },
    { value: 'us', label: 'United States' },
  ];

  cityOptions = [
    { value: 'karachi', label: 'Karachi' },
    { value: 'mumbai', label: 'Mumbai' },
    { value: 'newyork', label: 'New York' },
  ];

  displayFn = (item: any) => item ? item.label : '';


  showSelectedValues() {
    console.log('Selected Values:', this.selectForm.value);
  }
}
