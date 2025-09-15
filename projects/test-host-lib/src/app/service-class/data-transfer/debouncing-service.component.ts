import {
  Component,
  inject,
  signal,
  effect,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { LibDebouncingService } from '@saad-ihhn/ihhn-host-lib/services'
import { LibMatStrokedButtonComponent } from '@saad-ihhn/ihhn-host-lib/lib-buttons';
import { LibSearchComponent } from '@saad-ihhn/ihhn-host-lib/lib-forms';

@Component({
  selector: 'app-debouncing-service',
  standalone: true,
  imports: [
    LibMatStrokedButtonComponent,
    LibSearchComponent,
    ReactiveFormsModule,
  ],
  providers: [LibDebouncingService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="p-4 w-full overflow-x-auto">
      <section class="flex gap-6 min-w-[900px] items-start">
        <!-- Left Section: Code Usage -->
        <div class="w-1/2 bg-gray-900 text-white p-4 rounded-lg">
          <h2 class="text-xl font-bold mb-2">Debouncing Service - Usage</h2>
          <pre class="bg-gray-800 p-2 rounded text-sm overflow-x-auto text-green-300">
<code>
import {{ "{" }}LibDebouncingService{{ "}" }} from '&#64;saad-ihhn/ihhn-host-lib/services';

// Inject the debouncing service
private $debounce = inject(LibDebouncingService);

// Emit a value with delay
this.$debounce.emitValue('searchKey', 'value', 3000);

// Listen to debounced value
const signal = this.$debounce.onValue('searchKey');

// Clear key manually
this.$debounce.clearKey('searchKey');
</code>
          </pre>
        </div>

        <!-- Right Section: Live Demo -->
        <div class="w-1/2">
          <h2 class="text-lg font-semibold mb-3">Live Debounce Demo</h2>

          <lib-search
            [label]="'Search Input'"
            [placeholder]="'Start typing...'"
            [control]="inputControl"
          ></lib-search>

          <div class="mt-4 space-y-2">
            <p><strong>Input:</strong> {{ getRawInput() }}</p>
            <p><strong>Debounced Value (after 3s):</strong> {{ getDebouncedValue() }}</p>
          </div>

          <lib-mat-stroked-button class="mt-2" (matClick)="clear()">
            Clear
          </lib-mat-stroked-button>
        </div>
      </section>
    </div>
  `,
})
export class DebouncingServiceComponent {
  private $debounce = inject(LibDebouncingService);

  inputControl = new FormControl('');
  debouncedValue = signal<string | null>(null);

  constructor() {
    const signal$ = this.$debounce.onValue<string>('searchKey');

    effect(() => {
      this.debouncedValue.set(signal$());
    });

    this.inputControl.valueChanges.subscribe((value) => {
      this.emitDebouncedValue(value);
    });
  }

  getRawInput(): string {
    return this.inputControl.value || '—';
  }

  getDebouncedValue(): string {
    return this.debouncedValue() || ' Waiting...';
  }

  emitDebouncedValue(value: string | null) {
    this.$debounce.emitValue('searchKey', value ?? '', 3000);
  }

  clear() {
    this.$debounce.clearKey('searchKey');
    this.inputControl.setValue('', { emitEvent: false });
    this.debouncedValue.set(null);
  }
}
