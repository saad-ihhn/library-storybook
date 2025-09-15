import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LibMatButtonComponent } from '@saad-ihhn/ihhn-host-lib/lib-buttons';
import { LibTextareaComponent } from '@saad-ihhn/ihhn-host-lib/lib-forms';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    ReactiveFormsModule,
    FormsModule,
    LibTextareaComponent,
    LibMatButtonComponent,
  ],
  template: `
    <div class="summary-container">
      <div class="header">
        <mat-card class="summary-card">
          <mat-card-content>
            <div class="inputs-outputs-container">
              <form [formGroup]="textareaForm">
                <ul class="list">
                  <pre><code><br />Tag:<br/>&lt;lib-textarea&gt; &lt;/lib-textarea&gt; <br />imports: <br />LibTextareaComponent</code></pre>
                  <li>
                    <lib-textarea
                      [label]="label()"
                      [placeholder]="placeholder()"
                      [control]="textareaForm.controls['textarea1']"
                      [rows]="rows()"
                      [disabled]="isDisabled"
                    ></lib-textarea>
                  </li>
                  <li>
                    <lib-textarea
                      [label]="label()"
                      [placeholder]="placeholder()"
                      [control]="textareaForm.controls['textarea2']"
                      [rows]="4"
                      [disabled]="true"
                    ></lib-textarea>
                  </li>
                </ul>
                <lib-mat-button
                  color="primary"
                  (matClick)="showText()"
                  [disabled]="textareaForm.invalid">
                  Show Textarea Value
                </lib-mat-button>
              </form>
            </div>

            <mat-divider></mat-divider>
            <div class="section">
              <h3 class="section-title">Inputs:</h3>
              <ul class="list">
                <li><strong>label</strong>: Label for the textarea (default: 'Enter Text').</li>
                <li><strong>placeholder</strong>: Placeholder text (default: 'Type here...').</li>
                <li><strong>rows</strong>: Number of visible text rows (default: 3).</li>
                <li><strong>disabled</strong>: Whether the textarea is disabled (default: false).</li>
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
export class TextareaComponent {
  label = signal('Enter Text');
  placeholder = signal('Type here...');
  rows = signal(3);
  textareaForm = new FormGroup({
    textarea1: new FormControl('', [Validators.required, Validators.minLength(10)]),
    textarea2: new FormControl({ value: 'Disabled textarea', disabled: true }),
  });

  isDisabled = false;

  showText() {
    console.log('Textarea Value:', this.textareaForm.value.textarea1);
  }
}