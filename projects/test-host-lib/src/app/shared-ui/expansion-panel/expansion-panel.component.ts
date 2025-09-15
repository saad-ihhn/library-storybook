import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LibMatButtonComponent } from '@saad-ihhn/ihhn-host-lib/lib-buttons';
import { LibExpansionPanelComponent } from '@saad-ihhn/ihhn-host-lib/lib-expansion-panel';
@Component({
  selector: 'app-expansion-panel-story',
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    LibExpansionPanelComponent,
     LibMatButtonComponent
  ],
  template: `
    <div class="summary-container">
      <div class="header">
        <mat-card class="summary-card">
          <mat-card-content>
 <pre><code><br />Tag:<br/>&lt;lib-expansion-panel&gt; &lt;/lib-expansion-panel&gt; <br />Imports: <br />LibExpansionPanelComponent</code></pre>
            <div class="section ">
              <h3 class="section-title ">Examples:</h3>
              <div class="examples-container mt-4">
                <div class="example">
                  <lib-expansion-panel
                    [title]="title()"
                    [description]="description()"
                    [expanded]="isExpanded()"
                    (opened)="onPanelOpened()"
                    (closed)="onPanelClosed()"
                  >
                    <p>Panel content goes here. You can put any components or HTML inside.</p>
                  </lib-expansion-panel>
                </div>

                <div class="example">
                  <lib-expansion-panel
                    title="User Settings"
                    description="Manage your preferences"
                    icon="settings"
                  >
                    <div class="panel-content">
                      <p>Notification preferences</p>
                      <p>Privacy settings</p>
                      <p>Account details</p>
                    </div>
                    <div actions>
                      <lib-mat-button  LibMatButtonComponent mat-button color="primary" (click)="saveSettings()">
                        <mat-icon>save</mat-icon> Save
                      </lib-mat-button>

                      <lib-mat-button  mat-button (click)="cancel()">
                        <mat-icon>cancel</mat-icon> Cancel
                      </lib-mat-button>
                    </div>
                  </lib-expansion-panel>
                </div>

                <div class="example">
                  <lib-expansion-panel
                    title="Admin Panel"
                    description="Available only for administrators"
                    [disabled]="true"
                  >
                    <p>This content requires admin privileges.</p>
                  </lib-expansion-panel>
                </div>
              </div>
            </div>

            <mat-divider></mat-divider>

            <div class="section">
              <h3 class="section-title">Inputs:</h3>
              <ul class="list">
                <li><strong>title</strong>: Header text (default: 'Panel Title').</li>
                <li><strong>description</strong>: Subheader text (default: '').</li>
                <li><strong>icon</strong>: Material icon name (default: '').</li>
                <li><strong>expanded</strong>: Initial expanded state (default: false).</li>
                <li><strong>disabled</strong>: Whether the panel is disabled (default: false).</li>
              </ul>
            </div>

            <mat-divider></mat-divider>

            <div class="section">
              <h3 class="section-title">Outputs:</h3>
              <ul class="list">
                <li><strong>opened</strong>: Emits when panel expands.</li>
                <li><strong>closed</strong>: Emits when panel collapses.</li>
                <li><strong>toggle</strong>: Emits current state (true=expanded).</li>
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
      text-align: center;
    }

    .examples-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      width: 100%;
    }

    .example {
      width: 100%;
      max-width: 600px; /* Specific width for examples */
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

    .panel-content {
      padding: 10px 0;
    }

    button[mat-button] {
      margin-right: 8px;
    }

    pre {
      background-color: #f5f5f5;
      padding: 10px;
      border-radius: 4px;
      overflow-x: auto;
    }

    code {
      font-family: 'Courier New', monospace;
      font-size: 0.9rem;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpansionPanelStoryComponent {
  title = signal('Basic Panel');
  description = signal('Click the header to expand/collapse');
  isExpanded = signal(false);

  onPanelOpened() {
    console.log('Panel opened');
    this.isExpanded.set(true);
  }

  onPanelClosed() {
    console.log('Panel closed');
    this.isExpanded.set(false);
  }

  saveSettings() {
    alert('Settings saved!');
  }

  cancel() {
    alert('Changes discarded');
  }
}