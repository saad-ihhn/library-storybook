import { Component, HostListener, inject, effect, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LibToastService, LibThrottlingService } from '@saad-ihhn/ihhn-host-lib/services';
import { LibTextFieldComponent } from '@saad-ihhn/ihhn-host-lib/lib-forms';

@Component({
  selector: 'app-throttling-service',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LibTextFieldComponent],
  template: `
    <div class="p-6 space-y-8 rounded shadow-md">

   <h2 class="text-lg font-semibold mb-3">Live Throttling Service Demo</h2>
      <!-- Scroll -->
      <div class="space-y-2">
        <h3 class="text-lg font-semibold text-on-surface">🖱️ Scroll Example</h3>
        <div
          class="h-[200px] overflow-y-scroll border border-blue-300 rounded p-2 bg-white"
          (scroll)="onScroll($event)"
        >
          <div
            class="h-[1000px] bg-gradient-to-b from-blue-100 to-blue-300"
          ></div>
        </div>
        <p class="text-sm">
          Raw scroll emits immediately, but throttled value updates every
          <strong>5000ms</strong>.
        </p>
        <div class="text-blue-600 font-mono">
        🖱️ Throttled Scroll Y: {{ scrollY() }}px
        </div>

        <div class="p-2 bg-gray-900 mt-3 text-white rounded-lg">
          <h2 class="text-xl font-bold mb-3">
            Scroll event with throttling Service - Usage
          </h2>
          <pre class="overflow-x-auto p-1 bg-gray-800 rounded">
            <code class="text-sm text-green-300">
            // Import and inject the throttling service
            private $throttle = inject(LibThrottlingService);

          constructor()   {{ "{" }}
            // Effect that runs whenever the throttled scroll value changes

           effect(() => {{ "{" }}
           const value = this.scrollY(); // Get the latest throttled scroll value
           
           if (value !== null) {{ "{" }}
           // Show a toast message after throttled value is emitted 
           this.toastService.success('🖱️ API called!');
           // 👉 Example: Make your API call here with the scroll value
           // this.apiService.fetchDataOnScroll(value).subscribe();
           {{ "}" }}
           {{ "}" }});
          {{ "}" }}

            //  Scroll event handler (bind this to scrollable div)
            onScroll(event: Event) {{ "{" }}
            const scrollTop = (event.target as HTMLElement).scrollTop;

            //  Emit scroll position to the throttling service
            // It will delay the output by 5000ms (5 seconds)
            this.$throttle.emitValue('scroll', scrollTop, 5000); // Throttled to 5000ms
            {{ "}" }}
  </code>
</pre>
        </div>
      </div>

      <!-- Search -->
      <div class="space-y-2">
        <h3 class="text-lg font-semibold text-on-surface">🔍 Search Input</h3>
        <lib-text-field
          [label]="'Search'"
          [placeholder]="'Type to search...'"
          [control]="textFieldForm.controls['search']"
          [disabled]="false"
        ></lib-text-field>
        <p class="text-sm">
          Throttled search updates every <strong>500ms</strong> to avoid
          excessive processing.
        </p>
        <div class="text-blue-600 font-mono">
          🔍 Throttled Search Query: {{ searchQuery() }}
        </div>

        <div class="p-2 bg-gray-900 mt-3 text-white rounded-lg">
          <h2 class="text-xl font-bold mb-3">
            Throttled search input Service - Usage
          </h2>
          <pre class="overflow-x-auto p-1 bg-gray-800 rounded">
            <code class="text-sm text-green-300">
            // Import and inject the throttling service
            private $throttle = inject(LibThrottlingService);
  
          constructor()   {{ "{" }}
            //  Effect that runs reactively whenever the throttled search value changes

           effect(() => {{ "{" }}
           const value = this.searchQuery(); // Get the latest throttled search query value
           
           if (value !== null) {{ "{" }}
           // Show a toast message once  after throttled value is emitted 
           this.toastService.success('🔍 Search query throttled!');  
           // 👉 Example: You can perform API search here
           // this.apiService.search(value).subscribe();
           {{ "}" }}
           {{ "}" }});
          {{ "}" }}
           
          //  Subscribes to the raw valueChanges from the search input field
          this.textFieldForm.controls['search'].valueChanges.subscribe((value) =>     {{ "{" }}
            // Emit the new search value with throttling
            // Only one value will be emitted every 500ms
          this.$throttle.emitValue('search', value ?? '', 500);
          {{ "}" }});
  </code>
  </pre>
        </div>
      </div>

      <!-- Name Input -->
      <div class="space-y-2">
        <h3 class="text-lg font-semibold text-on-surface">📝 Name Input</h3>
        <lib-text-field
          [label]="'Your Name'"
          [placeholder]="'Type your name...'"
          [control]="textFieldForm.controls['name']"
          [disabled]="false"
        ></lib-text-field>
        <p class="text-sm">Name input throttled to <strong>300ms</strong>.</p>
        <div class="text-blue-600 font-mono">
          📝 Throttled Name: {{ customTextValue() }}
        </div>

        <div class="p-2 bg-gray-900 mt-3 text-white rounded-lg">
          <h2 class="text-xl font-bold mb-3">
            Throttled name input Service - Usage
          </h2>
          <pre class="overflow-x-auto p-1 bg-gray-800 rounded">
            <code class="text-sm text-green-300">
            // Import and inject the throttling service
            private $throttle = inject(LibThrottlingService);

           constructor()   {{ "{" }}
           // Effect that reacts to changes in the throttled value for "name" input

           effect(() => {{ "{" }}
           const value = this.customTextValue();// Get the latest throttled name value
           
           if (value !== null) {{ "{" }}
           // Show a success toast when the throttled name value is emitted
           this.toastService.success('📝 Name throttled successfully!');
           // 👉 Optional: Call your API here using the throttled value
           // this.apiService.submitName(value).subscribe();
           {{ "}" }}
           {{ "}" }});
          {{ "}" }}
          
          // 👇 Subscribe to value changes in the raw name input field
          this.textFieldForm.controls['name'].valueChanges.subscribe((value) =>  {{ "{" }}
          // Emit the name value with a throttling delay of 300ms
          // Prevents emitting on every keystroke — only once every 300ms 
          this.$throttle.emitValue('customTextField', value ?? '', 300);
          {{ "}" }});
  </code>
  </pre>
        </div>
      </div>

      <!-- Resize -->
      <div class="space-y-2">
        <h3 class="text-lg font-semibold text-on-surface">📐 Window Resize</h3>
        <p class="text-sm">
          Try resizing the window — emits are throttled to every
          <strong>300ms</strong>.
        </p>
        <div class="text-blue-600 font-mono">
          📐 Window Width: {{ windowWidth() }}px
        </div>

        <div class="p-2 bg-gray-900 mt-3 text-white rounded-lg">
          <h2 class="text-xl font-bold mb-3">
            Resize event with throttling Service - Usage
          </h2>
          <pre class="overflow-x-auto p-1 bg-gray-800 rounded">
            <code class="text-sm text-green-300">
            // Import and inject the throttling service
            private $throttle = inject(LibThrottlingService);

          constructor()   {{ "{" }}
            // Effect that reacts to changes in the throttled window resize value

           effect(() => {{ "{" }}
           const value = this.windowWidth(); // Get the latest throttled window width

           if (value !== null) {{ "{" }}
           // Show a success toast when the throttled resize value is emitted
           this.toastService.success('📐 Resize event throttled!');
           // 👉 Optional: Call your API here using the throttled width
           // this.apiService.updateLayoutBasedOnWidth(value).subscribe();
           {{ "}" }}
           {{ "}" }});
          {{ "}" }}

            // Method that runs whenever the window is resized
            onResize() {{ "{" }}
            //Emit the window width, throttled to 300ms
            // This prevents rapid and excessive updates during continuous resizing
            this.$throttle.emitValue('resize', window.innerWidth, 300); // Throttled to 300ms
            {{ "}" }}
  </code>
  </pre>
        </div>
      </div>
    </div>
  `,
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThrottlingServiceComponent {
  private $throttle = inject(LibThrottlingService);
  private toastService = inject(LibToastService);

  scrollY = this.$throttle.onValue<number>('scroll');
  searchQuery = this.$throttle.onValue<string>('search');
  customTextValue = this.$throttle.onValue<string>('customTextField');
  windowWidth = this.$throttle.onValue<number>('resize');

  textFieldForm = new FormGroup({
    search: new FormControl(''),
    name: new FormControl(''),
  });

  constructor() {
    // Throttle "name" field
    this.textFieldForm.controls['name'].valueChanges.subscribe((value) => {
      this.$throttle.emitValue('customTextField', value ?? '', 300);
    });

    // Throttle "search" field
    this.textFieldForm.controls['search'].valueChanges.subscribe((value) => {
      this.$throttle.emitValue('search', value ?? '', 500);
    });

    // Toast for throttled name
    effect(() => {
      const value = this.customTextValue();
      if (value !== null) {
        this.toastService.success('📝 Name throttled successfully!');
      }
    });

    // Toast for throttled search
    effect(() => {
      const value = this.searchQuery();
      if (value !== null) {
        this.toastService.success('🔍 Search query throttled!');
      }
    });

    // Toast for scroll
    effect(() => {
      const value = this.scrollY();
      if (value !== null) {
        this.toastService.success('🖱️ API called!');
    // 👉 Example: You can call your API here too
    // this.apiService.fetchDataOnScroll(value).subscribe();
      }
    });

    // Toast for resize
    effect(() => {
      const value = this.windowWidth();
      if (value !== null) {
        this.toastService.success('📐 Resize event throttled!');
      }
    });
  }

  // Scroll event handler with throttle
  onScroll(event: Event) {
    const scrollTop = (event.target as HTMLElement).scrollTop;
    this.$throttle.emitValue('scroll', scrollTop, 5000);
  }

  // Window resize event handler with throttle
  @HostListener('window:resize')
  onResize() {
    this.$throttle.emitValue('resize', window.innerWidth, 300);
  }
}
