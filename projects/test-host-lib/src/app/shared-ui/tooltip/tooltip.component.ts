import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LibTooltipComponent } from '@saad-ihhn/ihhn-host-lib/lib-tooltip';
import { LibMatFlatButtonComponent, LibMatRaisedButtonComponent } from '@saad-ihhn/ihhn-host-lib/lib-buttons';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    LibTooltipComponent,
    LibMatRaisedButtonComponent,
    LibMatFlatButtonComponent
  ],
  template: `
    <div class="summary-container">
      <div class="header">
        <mat-card class="summary-card">
          <mat-card-content>
            <div class="inputs-outputs-container">
              <pre><code><br />Tag:<br/>&lt;lib-tooltip&gt; &lt;/lib-tooltip&gt; <br />imports: <br />LibTooltipComponent</code></pre>
              
              <div class="demo-section">
                <h3>Basic Usage</h3>
                <lib-tooltip [message]="message()">
                  <lib-mat-raised-button>Hover me</lib-mat-raised-button>
                </lib-tooltip>
              </div>

              <div class="demo-section">
                <h3>With Icon</h3>
                <lib-tooltip [message]="message()">
                  <mat-icon>help_outline</mat-icon>
                </lib-tooltip>
              </div>

              <div class="position-examples">
                <h3 class="flex justify-center mb-4">All Position Examples</h3>
                <div class="position-grid">
                  <div class="position-example">
                    <lib-tooltip [message]="'Left position tooltip'" position="left">
                      <lib-mat-flat-button>Click Me</lib-mat-flat-button>
                    </lib-tooltip>
                    <div class="position-label">position="left"</div>
                  </div>
                  
                  <div class="position-example">
                    <lib-tooltip [message]="'Right position tooltip'" position="right">
                      <lib-mat-flat-button>Click Me</lib-mat-flat-button>
                    </lib-tooltip>
                    <div class="position-label">position="right"</div>
                  </div>
                  
                  <div class="position-example">
                    <lib-tooltip [message]="'Above position tooltip'" position="above">
                      <lib-mat-flat-button>Click Me</lib-mat-flat-button>
                    </lib-tooltip>
                    <div class="position-label">position="above"</div>
                  </div>
                  
                  <div class="position-example">
                    <lib-tooltip [message]="'Below position tooltip'" position="below">
                      <lib-mat-flat-button>Click Me</lib-mat-flat-button>
                    </lib-tooltip>
                    <div class="position-label">position="below"</div>
                  </div>
                  
                  <div class="position-example">
                    <lib-tooltip [message]="'Before position tooltip'" position="before">
                      <lib-mat-flat-button>Click Me</lib-mat-flat-button>
                    </lib-tooltip>
                    <div class="position-label">position="before"</div>
                  </div>
                  
                  <div class="position-example">
                    <lib-tooltip [message]="'After position tooltip'" position="after">
                      <lib-mat-flat-button>Click Me</lib-mat-flat-button>
                    </lib-tooltip>
                    <div class="position-label">position="after"</div>
                  </div>
                </div>
              </div>

              <div class="demo-section">
                <h3>With Custom Delays</h3>
                <lib-tooltip [message]="'Tooltip with 500ms delay'" [showDelay]="500" [hideDelay]="300">
                  <lib-mat-raised-button>Delayed Tooltip</lib-mat-raised-button>
                </lib-tooltip>
              </div>

              <div class="demo-section">
                <h3>Disabled Tooltip</h3>
                <lib-tooltip [message]="'This tooltip is disabled'" [disabled]="true">
                  <lib-mat-raised-button color="warn">Disabled</lib-mat-raised-button>
                </lib-tooltip>
              </div>
            </div>

            <mat-divider></mat-divider>

            <div class="section">
              <h3 class="section-title">Inputs:</h3>
              <ul class="list">
                <li><strong>message</strong>: Tooltip text content (default: '').</li>
                <li><strong>position</strong>: Position relative to element ('left' | 'right' | 'above' | 'below' | 'before' | 'after') (default: 'below').</li>
                <li><strong>disabled</strong>: Whether tooltip is disabled (default: false).</li>
                <li><strong>showDelay</strong>: Delay before showing (ms) (default: 0).</li>
                <li><strong>hideDelay</strong>: Delay before hiding (ms) (default: 0).</li>
                <li><strong>touchGestures</strong>: How touch gestures are handled ('auto' | 'on' | 'off') (default: 'auto').</li>
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

    .demo-section {
      margin: 20px 0;
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: flex-start;
    }

    .position-examples {
      margin: 30px 0;
    }

    .position-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 20px;
      margin-top: 15px;
    }

    .position-example {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      padding: 15px;
      border: 1px solid #eee;
      border-radius: 8px;
    
    }

    .position-label {
      font-family: monospace;
      font-size: 0.9rem;
      color: #666;
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

    .code-example {
      background: #f5f5f5;
      padding: 15px;
      border-radius: 4px;
      overflow-x: auto;
    }

    mat-divider {
      margin: 15px 0;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipComponent {
  message = signal('This is a tooltip message');
  position = signal<'left' | 'right' | 'above' | 'below' | 'before' | 'after'>('below');
}