import { Component, input, OnInit, OnDestroy, signal, effect,EnvironmentInjector, ChangeDetectionStrategy  } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import {LibDebouncingService, LibToastService} from '@saad-ihhn/ihhn-host-lib/services'
import { runInInjectionContext, inject } from '@angular/core';
import { LibSearchComponent } from '@saad-ihhn/ihhn-host-lib/lib-forms';


@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [
    MatDividerModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    LibSearchComponent,
  ],
  providers: [LibDebouncingService],
  template: `
    <div class="summary-container">
      <div class="header">
        <mat-card class="summary-card">
          <mat-card-content>
            <div class="flex flex-grow">
              <div class="size-100">

                <!-- Component usage info -->
                <pre><code><br />Tag:<br/>&lt;lib-search&gt; &lt;/lib-search&gt; <br />imports: <br />LibSearchComponent</code></pre>

                <!-- Two example lib-search usages -->
                <ul class="list">
                  <li>
                    <lib-search
                      [label]="label()"
                      [placeholder]="placeholder()"
                      [control]="searchForm.controls['search1']"
                      [disabled]="isDisabled"
                    ></lib-search>
                  </li>
                  <li>
                    <lib-search
                      [label]="label()"
                      [placeholder]="placeholder()"
                      [control]="searchForm.controls['search2']"
                      [disabled]="true"
                    ></lib-search>
                  </li>
                </ul>
              </div>
            </div>

            <mat-divider></mat-divider>

            <!-- Input property descriptions -->
            <div class="section">
              <h3 class="section-title">Inputs:</h3>
              <ul class="list">
                <li><strong>label</strong>: Label for the search input (default: 'Search').</li>
                <li><strong>placeholder</strong>: Placeholder text (default: 'Type to search...').</li>
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
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent implements OnInit, OnDestroy {

  private debounceService = inject(LibDebouncingService);
  private toastService = inject(LibToastService);

  private readonly debounceKey = 'server-search';
  private readonly delay = 3000;

  label = signal('Search');
  placeholder = signal('Type to search...');
  isDisabled = false;

  searchForm = new FormGroup({
    search1: new FormControl(''),
    search2: new FormControl({ value: '', disabled: true })
  });

  private injector = inject(EnvironmentInjector); // get the injector
  private search1Signal = signal<string>('');


ngOnInit(): void {
  const control = this.searchForm.get('search1');

  if (control) {
    control.valueChanges.subscribe(value => {
      this.search1Signal.set(value ?? '');
      this.debounceService.emitValue(this.debounceKey, value ?? '', this.delay);
    });

    runInInjectionContext(this.injector, () => {
      effect(() => {
        const value = this.debounceService.onValue<string>(this.debounceKey)();
        if (value) {
          this.searchData(value);
        }
      });
    });
  }
}

  ngOnDestroy(): void {
    this.debounceService.clearKey(this.debounceKey);
  }

  searchData(searchValue: string): void {
    console.log('API Call triggered with search value:', searchValue);
    this.toastService.success('✅ Debounced signal works perfectly!');
  }
}
