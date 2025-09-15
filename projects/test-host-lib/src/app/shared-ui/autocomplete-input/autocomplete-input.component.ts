import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { LibMatButtonComponent } from '@saad-ihhn/ihhn-host-lib/lib-buttons';
import { LibAutocompleteComponent } from '@saad-ihhn/ihhn-host-lib/lib-forms';

@Component({
  selector: 'app-autocomplete-input',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatDividerModule,
    LibAutocompleteComponent,
    LibMatButtonComponent
  ],
  template: `
    <div class="summary-container">
      <div class="header">
        <mat-card class="summary-card">
          <mat-card-content>
            <div class="flex flex-grow">
              <div class="size-100">
                 <pre><code>Tag: &lt;lib-autocomplete&gt;&lt;/lib-autocomplete&gt; <br />imports: <br />LibAutocompleteComponent</code></pre>
                <ul class="list">
                  <li>
                    <lib-autocomplete
                      [label]="'Country'"
                      [displayFn]="show"
                      [placeholder]="'Select your country'"
                      [options]="countryOptions()"
                      [control]="form.controls['country']"
                      [disabled]="false">
                    </lib-autocomplete>
                  </li>
                  <li>
                    <lib-autocomplete
                      [label]="'Disabled Select'"
                      [placeholder]="'Disabled options'"
                      [options]="cityOptions()"
                      [control]="form.controls['disabledCity']"
                      [disabled]="true">
                    </lib-autocomplete>
                  </li>
                </ul>
              </div>
            </div>

            <lib-mat-button
              color="primary"
              (matClick)="showSelectedValues()"
              [disabled]="form.invalid">
              Show Selected Values
            </lib-mat-button>

            <mat-divider></mat-divider>

            <div class="section">
              <h3 class="section-title">Inputs:</h3>
              <ul class="list">
                <li><strong>label</strong>: Label for the autocomplete field (default: 'Select').</li>
                <li><strong>placeholder</strong>: Placeholder text (default: 'Choose an option').</li>
                <li><strong>options</strong>: Array of options to be displayed in the dropdown.</li>
                <li><strong>control</strong>: FormControl instance for the input field.</li>
                <li><strong>disabled</strong>: Whether the input field is disabled (default: false).</li>
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
})
export class AutocompleteInputComponent {
  // Reactive FormGroup
  form = new FormGroup({
    country: new FormControl('', Validators.required),
    disabledCity: new FormControl({ value: '', disabled: true })
  });

  // Signal-based reactive data sources
  countryOptions = signal([{
    "id": 2,
    "name": "ER PHARMACY",
    "description": "ER PHARMACY",
    "type": "PHARMACY",
    "location": "group"
  },
  {
    "id": 3,
    "name": "PHARMACY",
    "description": "PHARMACY",
    "type": "PHARMACY",
    "location": "group"
  },
  {
    "id": 13,
    "name": "PEAD DAY CARE",
    "description": "PEAD DAY CARE",
    "type": "WARDS",
    "location": "group"
  }]);
  cityOptions = signal(['Karachi', 'Mumbai', 'New York']);

  show(option: any) {
    return option.name;

  }

  showSelectedValues(): void {
    console.log('Selected Country:', this.form.get('country')?.value);
  }
}
