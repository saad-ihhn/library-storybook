import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LibUrlComponent } from '@saad-ihhn/ihhn-host-lib/lib-forms';
import { LibMatButtonComponent } from '@saad-ihhn/ihhn-host-lib/lib-buttons';
@Component({
  selector: 'app-url-input',
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    ReactiveFormsModule,
    FormsModule,
    LibUrlComponent,
    LibMatButtonComponent
  ],
  template: `
    <div class="summary-container">
      <div class="header">
        <mat-card class="summary-card">
          <mat-card-content>
            <div class="inputs-outputs-container">
              <form [formGroup]="urlForm">
                <ul class="list">
                  <pre><code><br />Tag:<br/>&lt;lib-url&gt; &lt;/lib-url&gt; <br />imports: <br />LibUrlComponent</code></pre>
                  <li>
                    <lib-url
                      [label]="label()"
                      [placeholder]="placeholder()"
                      [control]="urlForm.controls['url1']"
                      [disabled]="isDisabled"
                    ></lib-url>
                  </li>
                  <li>
                    <lib-url
                     [label]="label()"
                      [placeholder]="placeholder()"
                      [control]="urlForm.controls['url2']"
                      [disabled]="true"
                    ></lib-url>
                  </li>
                </ul>
                <lib-mat-button color="primary" (click)="showUrl()" [disabled]="urlForm.invalid">Show URL Value</lib-mat-button>
              </form>
            </div>

            <mat-divider></mat-divider>

            <div class="section">
              <h3 class="section-title">Inputs:</h3>
              <ul class="list">
                <li><strong>label</strong>: Label for the input field (default: 'Website URL').</li>
                <li><strong>placeholder</strong>: Placeholder text (default: 'Enter website URL').</li>
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
      color: #333;
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
export class UrlInputComponent {
  label = signal('Website URL');
  placeholder = signal('Enter your website');
  urlForm = new FormGroup({
    url1: new FormControl('', [Validators.required, Validators.pattern(/^(https?:\/\/)?([\w\d\-]+\.)+\w{2,}(\/.*)?$/)]), 
    url2: new FormControl({ value: '', disabled: true }) 
  });

  isDisabled = false; 

  showUrl() {
    console.log('URL Value:', this.urlForm.value.url1);
  }
}
