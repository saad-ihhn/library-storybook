import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LibTextFieldComponent } from '@saad-ihhn/ihhn-host-lib/lib-forms';
import { LibMatButtonComponent } from '@saad-ihhn/ihhn-host-lib/lib-buttons';

@Component({
  selector: 'app-text-field-input',
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    ReactiveFormsModule,
    FormsModule,
    LibTextFieldComponent,
    LibMatButtonComponent, 
  ],
  template: `
    <div class="summary-container">
      <div class="header">
        <mat-card class="summary-card">
          <mat-card-content>
            <div class="inputs-outputs-container">
              <form [formGroup]="textFieldForm">
                <ul class="list">
                  <pre><code><br />Tag:<br/>&lt;lib-text-field&gt; &lt;/lib-text-field&gt; <br />imports: <br />LibTextFieldComponent</code></pre>
                  <li>
                    <lib-text-field
                      [label]="label()"
                      [placeholder]="placeholder()"
                      [control]="textFieldForm.controls['text1']"
                      [disabled]="isDisabled"
                    ></lib-text-field>
                  </li>
                  <li>
                    <lib-text-field
                      [label]="label()"
                      [placeholder]="placeholder()"
                      [control]="textFieldForm.controls['text2']"
                      [disabled]="true"
                    ></lib-text-field>
                  </li>
                </ul>
                <lib-mat-button
                  color="primary"
                  (matClick)="showText()"
                  [disabled]="textFieldForm.invalid">
                  Show Text Value
                </lib-mat-button>
              </form>
            </div>

            <mat-divider></mat-divider>
            <div class="section">
              <h3 class="section-title">Inputs:</h3>
              <ul class="list">
                <li><strong>label</strong>: Label for the input field (default: 'Enter Text').</li>
                <li><strong>placeholder</strong>: Placeholder text (default: 'Type here...').</li>
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
export class TextFieldInputComponent {
  label = signal('Enter Text');
  placeholder = signal('Type here...');
  textFieldForm = new FormGroup({
    text1: new FormControl('', [Validators.required]), 
    text2: new FormControl({ value: '', disabled: true }),
  });

  isDisabled = false;

  showText() {
    console.log('Text Value:', this.textFieldForm.value.text1);
  }
}
