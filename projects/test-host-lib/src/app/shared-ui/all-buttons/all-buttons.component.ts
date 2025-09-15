import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { LibMatButtonComponent, LibMatFabButtonComponent, LibButtonComponent, LibMatFlatButtonComponent, LibMatIconButtonComponent, LibMatMiniFabButtonComponent, LibMatRaisedButtonComponent, LibMatStrokedButtonComponent, LibMatSlideToggleComponent } from '@saad-ihhn/ihhn-host-lib/lib-buttons';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-all-buttons',
  imports: [ MatDividerModule, LibMatButtonComponent, MatCardModule, LibMatFabButtonComponent, LibMatRaisedButtonComponent, 
    LibMatStrokedButtonComponent, LibMatIconButtonComponent, LibMatMiniFabButtonComponent, LibMatFlatButtonComponent,
    LibButtonComponent,LibMatSlideToggleComponent ],
  template: `
  <div class="summary-container"> 
  <div class="header">
    <mat-card class="summary-card">
      <mat-card-content>
   
        <div class="flex flex-grow">
          <div class="size-100">
<pre><code>&lt;lib-mat-button&gt;
  Click Me
&lt;/lib-mat-button&gt; <br />imports: <br />LibMatButtonComponent</code></pre>
            <ul class="list">
              <li><lib-mat-button>Click Me</lib-mat-button></li>
              <li><lib-mat-button color="accent" (matClick)="onButtonClick()">Home</lib-mat-button></li>
              <li><lib-mat-button color="warn" [matBadge]="'1'" > Notifications</lib-mat-button></li>
              <li><lib-mat-button color="primary" [disabled]="true" [source]="'lock'">Disabled</lib-mat-button></li>
              <li><lib-mat-button class="custom-btn-black" color="primary">Star</lib-mat-button></li>
            </ul> 
          </div>

          <div class="size-100">
<pre><code>&lt;lib-mat-raised-button&gt;
  Click Me
&lt;/lib-mat-raised-button&gt;  <br />imports: <br />LibMatRaisedButtonComponent</code></pre>
            <ul class="list">
              <li><lib-mat-raised-button>Click Me</lib-mat-raised-button></li>
              <li><lib-mat-raised-button color="accent" (matClick)="onButtonClick()">Home</lib-mat-raised-button></li>
              <li><lib-mat-raised-button color="warn" [matBadge]="'1'" > Notifications</lib-mat-raised-button></li>
              <li><lib-mat-raised-button color="primary" [disabled]="true" [source]="'lock'">Disabled</lib-mat-raised-button></li>
              <li><lib-mat-raised-button class="custom-btn-black" color="primary">Star</lib-mat-raised-button></li>
            </ul> 
          </div>

          <div class="size-100">
<pre><code>&lt;lib-mat-stroked-button&gt;
  Click Me
&lt;/lib-mat-stroked-button&gt;<br />imports: <br />LibMatStrokedButtonComponent</code></pre>
            <ul class="list">
              <li><lib-mat-stroked-button [source]="'home'">Click Me</lib-mat-stroked-button></li>
              <li><lib-mat-stroked-button color="accent" (matClick)="onButtonClick()">Home</lib-mat-stroked-button></li>
              <li><lib-mat-stroked-button color="warn" [matBadge]="'1'" > Notifications</lib-mat-stroked-button></li>
              <li><lib-mat-stroked-button color="primary" [disabled]="true" [source]="'lock'">Disabled</lib-mat-stroked-button></li>
              <li><lib-mat-stroked-button class="custom-btn-black" color="primary">Star</lib-mat-stroked-button></li>
            </ul> 
          </div>

          <div class="size-100">
<pre><code>&lt;lib-mat-fab-button&gt;
  Click Me
&lt;/mat-fab-button&gt;<br />imports: <br />LibMatFabComponent</code></pre>
            <ul class="list">
              <li><lib-mat-fab-button class="mr-4" [source]="'delete'"></lib-mat-fab-button> <lib-mat-fab-button color="accent" (matClick)="onButtonClick()" [source]="'home'"></lib-mat-fab-button></li>
              <li><lib-mat-fab-button color="warn" [matBadge]="'1'" class="mr-4" [source]="'info'"> Notifications</lib-mat-fab-button> <lib-mat-fab-button color="primary" [disabled]="true" [source]="'lock'">Disabled</lib-mat-fab-button></li>
              <li><lib-mat-fab-button class="custom-btn-black mr-4" color="primary" [source]="'star'">Star</lib-mat-fab-button></li>
            </ul> 
          </div>
        </div>
        <div class="flex flex-grow">
          <div class="size-100">
<pre><code>&lt;lib-mat-icon-button&gt;
  Click Me
&lt;/lib-mat-fab&gt;<br />imports: <br />LibMatIconButtonComponent</code></pre>
            <ul class="list">
              <li><lib-mat-icon-button [source]="'more_vert'"></lib-mat-icon-button></li>
              <li><lib-mat-icon-button color="accent" [source]="'home'" (matClick)="onButtonClick()"></lib-mat-icon-button></li>
              <li><lib-mat-icon-button color="warn" [matBadge]="'1'" [source]="'info'" ></lib-mat-icon-button></li>
              <li><lib-mat-icon-button color="primary" [disabled]="true" [source]="'lock'"></lib-mat-icon-button></li>
              <li><lib-mat-icon-button class="custom-btn-black" color="primary" [source]="'star'"></lib-mat-icon-button></li>
            </ul> 
          </div>

          <div class="size-100">
<pre><code>&lt;lib-mat-mini-fab&gt;
  Click Me
&lt;/lib-mat-mini-fab&gt;<br />imports: <br />LibMatMiniFabComponent</code></pre>
            <ul class="list">
              <li><lib-mat-mini-fab-button [source]="'more_vert'"></lib-mat-mini-fab-button></li>
              <li><lib-mat-mini-fab-button color="accent" (matClick)="onButtonClick()" [source]="'home'"></lib-mat-mini-fab-button></li>
              <li><lib-mat-mini-fab-button color="warn" [matBadge]="'1'"  [source]="'info'" ></lib-mat-mini-fab-button></li>
              <li><lib-mat-mini-fab-button color="primary" [disabled]="true" [source]="'lock'"></lib-mat-mini-fab-button></li>
              <li><lib-mat-mini-fab-button class="custom-btn-black" color="primary" [source]="'star'"></lib-mat-mini-fab-button></li>
            </ul> 
          </div>

          <div class="size-100">
<pre><code>&lt;lib-mat-flat-button&gt;
  Click Me
&lt;/lib-mat-flat-button&gt;<br />imports: <br />LibMatFlatButtonComponent</code></pre>
            <ul class="list">
              <li><lib-mat-flat-button>Click Me</lib-mat-flat-button></li>
              <li><lib-mat-flat-button color="accent" (matClick)="onButtonClick()" [source]="'home'">Home</lib-mat-flat-button></li>
              <li><lib-mat-flat-button color="warn" [matBadge]="'1'" [source]="'notifications'"> Notifications</lib-mat-flat-button></li>
              <li><lib-mat-flat-button color="primary" [disabled]="true" [source]="'lock'">Disabled</lib-mat-flat-button></li>
              <li><lib-mat-flat-button class="custom-btn-black" color="primary" [source]="'star'">Star</lib-mat-flat-button></li>
            </ul> 
          </div>
          
          <div class="size-100">
<pre><code>&lt;lib-mat-slide-toggle&gt;
  Toggle Me
&lt;/lib-mat-slide-toggle&gt;<br />imports: <br />LibMatSlideToggleComponent</code></pre>
            <ul class="list">
              <li><lib-mat-slide-toggle [label]="'Default Toggle'"></lib-mat-slide-toggle></li>
              <li><lib-mat-slide-toggle color="accent" [checked]="true" [label]="'Checked Toggle'"></lib-mat-slide-toggle></li>
              <li><lib-mat-slide-toggle color="warn" [disabled]="true" [label]="'Disabled Toggle'"></lib-mat-slide-toggle></li>
              <li><lib-mat-slide-toggle [icon]="'dark_mode'" [label]="'Dark Mode'"></lib-mat-slide-toggle></li>
              <li><lib-mat-slide-toggle class="custom-toggle" color="primary" [label]="'Custom Style'"></lib-mat-slide-toggle></li>
            </ul> 
          </div>
        </div>
        
        <div class="flex flex-grow">
          <div class="size-100">
<pre><code>&lt;lib-button&gt;
  Click Me
&lt;/lib-button&gt;<br />imports: <br />LibButtonComponent</code></pre>
            <ul class="list">
              <li><lib-button className="bg-blue-500 text-white p-2 rounded">Click Me</lib-button></li>
              <li><lib-button className="bg-cyan-500 text-white p-2 rounded"  (matClick)="onButtonClick()">Home</lib-button></li>
              <li><lib-button className="bg-pink-500 text-white p-2 rounded"  [disabled]="true" >Disabled</lib-button></li>
              <li><lib-button className="bg-indigo-500 text-white p-2 rounded">Star</lib-button></li>
            </ul> 
          </div>
        </div>
        
        <mat-divider></mat-divider>
          <!-- Inputs Section -->
          <div class="section">
            <h3>Inputs:</h3>
            <ul class="list">
              <li><strong>color</strong>: Button color ('primary' | 'accent' | 'warn' | default: 'primary').</li>
              <li><strong>disabled</strong>: Whether the button is disabled (default: false).</li>
              <li><strong>type</strong>: Button type ('button' | 'submit' | 'reset'| default: 'button').</li>
              <li><strong>icon</strong>: Optional material icon.</li>
              <li><strong>className</strong>: Optional custom CSS class.</li>
              <li><strong>matBadge</strong>: Optional badge text.</li>
              <li><strong>checked</strong>: For toggle - initial state (default: false).</li>
              <li><strong>label</strong>: For toggle - display text.</li>
            </ul>
          </div>
          
          <!-- Output Section -->
          <div class="section">
            <h3>Output:</h3>
            <ul class="list">
              <li><strong>matClick</strong>: An event emitted when the button is clicked.</li>
              <li><strong>toggleChange</strong>: An event emitted when toggle state changes (emits boolean value).</li>
            </ul>
          </div>
      
      </mat-card-content>
    </mat-card>
  </div>
</div>
    
  `,
  styles: `
    .list{
      li{
        margin-bottom: 10px;
      }
    }
     .custom-toggle {
      /* Add your custom toggle styles here */
      margin-left: 8px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllButtonsComponent {

  onButtonClick(): void {
    console.log('Button clicked');
  }

  
}