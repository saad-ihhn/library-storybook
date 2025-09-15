import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LibProgressBarComponent } from '@saad-ihhn/ihhn-host-lib/lib-progress-bar';
import { LibMatButtonComponent } from '@saad-ihhn/ihhn-host-lib/lib-buttons';
@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    LibMatButtonComponent,
    LibProgressBarComponent,
    CommonModule,
    FormsModule
  ],
  template: `
    <div class="summary-container">
      <div class="header">
        <mat-card class="summary-card">
          <mat-card-content>
            <h3>Select Progress Bar Type</h3>
            <ul class="list">
              <pre><code>Tag: &lt;lib-progress-bar&gt; &lt;/lib-progress-bar&gt; <br />imports: LibProgressBarComponent</code></pre>
            </ul>

            <mat-divider></mat-divider>

            <lib-mat-button color="primary" (matClick)="startProgress('determinate')">
              Determinate Progress Bar
            </lib-mat-button>

            <lib-mat-button color="accent" (matClick)="startProgress('indeterminate')">
              Indeterminate Progress Bar
            </lib-mat-button>

            <lib-mat-button color="warn" (matClick)="startProgress('buffer')">
              Buffer Progress Bar
            </lib-mat-button>

            <lib-mat-button color="primary" (matClick)="startProgress('query')">
              Query Progress Bar
            </lib-mat-button>

            <mat-divider></mat-divider>

            <!-- Progress Bar Display -->
            <lib-progress-bar [mode]="modeSignal()" [value]="progressValueSignal()"></lib-progress-bar>

            <mat-divider></mat-divider>

            <div class="section">
              <h3 class="section-title">Inputs:</h3>
              <ul class="list">
                <li><strong>mode</strong>: Progress mode ('determinate' | 'indeterminate' | 'buffer' | 'query')</li>
                <li><strong>value</strong>: Numeric value for 'determinate' mode</li>
              </ul>
            </div>

            <mat-divider></mat-divider>

            <!-- Progress Control (Only for Determinate) -->
            <div class="section" *ngIf="modeSignal() === 'determinate'">
              <h3 class="section-title">Adjust Progress</h3>
              <input type="range" min="0" max="100" [(ngModel)]="progressValue" (ngModelChange)="updateProgress($event)" />
              <p>Current Progress: {{ progressValue }}%</p>
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
export class ProgressBarComponent {
  progressValue = 80;
  modeSignal = signal<'determinate' | 'indeterminate' | 'buffer' | 'query'>('determinate');
  progressValueSignal = signal<number>(this.progressValue);

  startProgress(mode: 'determinate' | 'indeterminate' | 'buffer' | 'query') {
    this.modeSignal.set(mode);
    if (mode !== 'determinate') {
      this.progressValueSignal.set(0); // Reset value for non-determinate modes
    }
  }
  updateProgress(value: number) {
    this.progressValueSignal.set(value);
  }
}
