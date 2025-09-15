import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { LibToastService } from '@saad-ihhn/ihhn-host-lib/services';
import { LibMatButtonComponent } from '@saad-ihhn/ihhn-host-lib/lib-buttons';


@Component({
  selector: 'app-toasts',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    LibMatButtonComponent
  ],
  template: `
    <div class="toast-container">
      <mat-card>
        <mat-card-title>Toast Notification Demo</mat-card-title>
        <mat-card-content>
          <p>Click the buttons below to show toast messages.</p>
          <mat-divider></mat-divider>

          <div class="btn-group">
            <lib-mat-button  color="primary" (matClick)="showSuccess()">Success</lib-mat-button>
            <lib-mat-button  color="accent" (matClick)="showInfo()">Info</lib-mat-button>
            <lib-mat-button  color="warn" (matClick)="showWarning()">Warning</lib-mat-button>
            <lib-mat-button color="warn" (matClick)="showError()">Error</lib-mat-button>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: `
    .toast-container {
      padding: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    mat-card {
      width: 100%;
      max-width: 600px;
      padding: 24px;
    }

    .btn-group {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      margin-top: 16px;
    }
  `,
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastsComponent {
  private toastService = inject(LibToastService);

  showSuccess() {
    this.toastService.success('✅ Success message from Toast!');
  }

  showInfo() {
    this.toastService.info('ℹ️ Info message from Toast!');
  }

  showWarning() {
    this.toastService.warning('⚠️ Warning message from Toast!');
  }

  showError() {
    this.toastService.error('❌ Error message from Toast!');
  }
}
