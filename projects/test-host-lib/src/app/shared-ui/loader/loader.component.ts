import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { LibLoaderComponent } from '@saad-ihhn/ihhn-host-lib/lib-loader';
import { LibMatButtonComponent } from '@saad-ihhn/ihhn-host-lib/lib-buttons';
@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    LibMatButtonComponent,
    LibLoaderComponent,
    CommonModule
  ],
  template: `
    <div class="summary-container">
      <div class="header">
        <mat-card class="summary-card">
          <mat-card-content>

          <pre><code><br />Tag:<br/>&lt;lib-loader&gt; &lt;/lib-loader&gt; <br/>imports: <br/>LibLoaderComponent</code></pre>

            <mat-divider></mat-divider>
            <h3>Select Loader Type</h3>
            <div class="loader-container" *ngIf="isLoading()">
              <lib-loader 
                [imageSrc]="useImageLoader() ? loaderImage : undefined" 
                [color]="'primary'" 
                [diameter]="60" 
                [mode]="'indeterminate'">
              </lib-loader>
            </div>

            <mat-divider></mat-divider>

            <lib-mat-button color="primary" (matClick)="startSpinner()">
              Start Spinner Loader
            </lib-mat-button>

            <lib-mat-button color="accent" (matClick)="startImageLoader()">
              Start Image Loader
            </lib-mat-button>

            <mat-divider></mat-divider>

            <div class="section">
              <h3 class="section-title">Inputs:</h3>
              <ul class="list">
                <li><strong>imageSrc</strong>: URL of an image-based loader.</li>
                <li><strong>color</strong>: Color of the spinner ('primary', 'accent', 'warn').</li>
                <li><strong>diameter</strong>: Size of the spinner (default: '50').</li>
                <li><strong>mode</strong>: 'indeterminate' (default) or 'determinate' for progress control.</li>
                <li><strong>value</strong>: Used only when mode is 'determinate'.</li>
              </ul>
            </div>

            <mat-divider></mat-divider>

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

    .loader-container {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(255, 255, 255, 0.7);
      z-index: 1000;
    }

    mat-divider {
      margin: 15px 0;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent {
  isLoading = signal(false);
  useImageLoader = signal(false);
  loaderImage = 'public/assets/images/logo.png.gif'; // Path to your image loader

  startSpinner() {
    this.isLoading.set(true);
    this.useImageLoader.set(false);
    setTimeout(() => this.isLoading.set(false), 3000);
  }

  startImageLoader() {
    this.isLoading.set(true);
    this.useImageLoader.set(true);
    setTimeout(() => this.isLoading.set(false), 3000);
  }
}
