import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LibToastService } from '@saad-ihhn/ihhn-host-lib/services';
import { LibMatStrokedButtonComponent } from '@saad-ihhn/ihhn-host-lib/lib-buttons';

@Component({
  selector: 'app-toast-service',
  standalone: true,
  imports: [LibMatStrokedButtonComponent],
  template: `
    <div class="grid grid-cols-2 gap-4">
      <div class="p-2 bg-gray-900 mt-3 text-white rounded-lg">
        <h2 class="text-xl font-bold mb-3">Toast Notifications - usage</h2>
        <pre class="overflow-x-auto p-1 bg-gray-800 rounded">
            <code class="text-sm text-green-300">
import {{ '{' }} LibToastService {{ '}' }} from '@saad-ihhn/ihhn-host-lib/services';

private $toast = inject(LibToastService);

// Show Success Toast
this.$toast.success('This is a success message');

// Show Info Toast
this.$toast.info('This is an info message');

// Show Warning Toast
this.$toast.warning('This is a warning message');

// Show Error Toast
this.$toast.error('This is an error message');
  </code>
</pre>
      </div>

      <div>
        <h2 class="text-lg font-semibold mb-3">Live Toast Demo</h2>
        <div class="flex flex-wrap gap-2">
          <lib-mat-stroked-button (matClick)="showSuccess()">Success</lib-mat-stroked-button>
          <lib-mat-stroked-button (matClick)="showInfo()">Info</lib-mat-stroked-button>
          <lib-mat-stroked-button (matClick)="showWarning()">Warning</lib-mat-stroked-button>
          <lib-mat-stroked-button (matClick)="showError()">Error</lib-mat-stroked-button>
        </div>
      </div>
    </div>
  `,
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastServiceComponent {
  private $toast = inject(LibToastService);

  showSuccess() {
    this.$toast.success('This is a success toast!');
  }

  showInfo() {
    this.$toast.info('This is an info toast!');
  }

  showWarning() {
    this.$toast.warning('This is a warning toast!');
  }

  showError() {
    this.$toast.error('This is an error toast!');
  }
}
