import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LibMatButtonComponent } from '@saad-ihhn/ihhn-host-lib/lib-buttons';
import { LibPaginatorComponent } from '@saad-ihhn/ihhn-host-lib/lib-paginator';

@Component({
  selector: 'app-paginator-story',
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    LibPaginatorComponent,
    LibMatButtonComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  template: `
    <div class="summary-container">
      <mat-card class="summary-card">
        <mat-card-content>
          <form>
            <ul class="list">
              <pre><code><br />Tag:<br/>&lt;lib-paginator&gt;&lt;/lib-paginator&gt; <br />imports:<br />LibPaginatorComponent</code></pre>

              <li>
                <lib-paginator
                  [length]="length()"
                  [pageSize]="pageSize()"
                  [pageSizeOptions]="pageSizeOptions()"
                  (page)="onPageChange($event)"
                ></lib-paginator>
              </li>
            </ul>

            <lib-mat-button color="primary" (matClick)="increaseLength()">
              Increase Length
            </lib-mat-button>

            <lib-mat-button color="warn" (matClick)="decreaseLength()">
              Decrease Length
            </lib-mat-button>
          </form>

          <mat-divider></mat-divider>

          <h3 class="section-title">Inputs:</h3>
          <ul class="list">
            <li><strong>length</strong>: Total number of records (default: 100)</li>
            <li><strong>pageSize</strong>: Number of items per page (default: 10)</li>
            <li><strong>pageSizeOptions</strong>: Page size options as array (default: [5, 10, 25, 100])</li>
          </ul>

          <mat-divider></mat-divider>

          <h3 class="section-title">Output:</h3>
          <ul class="list">
            <li><strong>(page)</strong>: Event emitted on page change</li>
          </ul>

          <mat-divider></mat-divider>

          <div class="page-event">
            <p><strong>Last Page Event:</strong> {{ lastPageEvent }}</p>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .summary-container { padding: 20px; }
    .summary-card { width: 100%; }
    .list { list-style: none; padding: 0; }
    .list li { margin: 10px 0; font-size: 1rem; }
    mat-divider { margin: 15px 0; }
    button { margin-right: 10px; }
    .page-event { font-size: 1rem; margin-top: 20px; }
  `],
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorComponent {
  length = signal(100);
  pageSize = signal(10);
  pageSizeOptions = signal([5, 10, 25, 100]);
  lastPageEvent = '';

  onPageChange(event: any) {
    this.lastPageEvent = JSON.stringify(event);
  }

  increaseLength() {
    this.length.set(this.length() + 50);
  }

  decreaseLength() {
    this.length.set(Math.max(this.length() - 50, 50));
  }
}
