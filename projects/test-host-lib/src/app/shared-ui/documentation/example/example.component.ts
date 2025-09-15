import { Component, computed, input, Type, signal, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibTabComponent, TTabConfig } from '@saad-ihhn/ihhn-host-lib/lib-tab';
import { LibThemeDarkLightService } from '@saad-ihhn/ihhn-host-lib/services'
import { CodeViewerComponent } from '../code-viewer/code-viewer.component';
import { LibMatIconButtonComponent } from '@saad-ihhn/ihhn-host-lib/lib-buttons';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule, LibMatIconButtonComponent, LibTabComponent],
  template: `
    <div class="flex flex-col rounded-md p-4 shadow-md border" 
    [ngClass]="{'border-slate-700': $themeService.isDarkTheme(), 'border-gray-100': !$themeService.isDarkTheme()}">
      <header class="w-full">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <h3 class="text-xl font-semibold">{{title()}}</h3>
          </div>
          <div class="flex items-center">
            <lib-mat-icon-button 
              [source]="'code'" 
              [className]="'text-white'"
              (click)="toggleCode()">
            </lib-mat-icon-button>
          </div>
        </div>
      </header>
      <section class="w-full">
        @if (showCode()) {
          <div class="view-section mt-5">
            @if (component()) {
              <ng-template *ngComponentOutlet="component() ?? null"></ng-template>
            }
          </div>
        } @else {
          <div class="code-section">
            <lib-tab [tabConfig]="tabsConfig()" [selectedIndex]="0" [stretchTabs]="true" class="w-full"></lib-tab>
          </div>
        }
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleComponent implements OnInit {
  component = input<Type<any>>();
  title = input<string>('');
  htmlCode = input<string>('');
  tsCode = input<string>('');
  cssCode = input<string>('');
  showCode = signal(true);
  protected $themeService = inject(LibThemeDarkLightService);

  ngOnInit(): void {}

  tabsConfig = computed<TTabConfig[]>(() => {
    const tabs: TTabConfig[] = [];
    if (this.htmlCode()) {
      tabs.push({
        label: "HTML",
        type: 'component',
        component: CodeViewerComponent,
        inputs: { code: this.htmlCode, language: 'html' }
      });
    }
    if (this.cssCode()) {
      tabs.push({
        label: "CSS",
        type: 'component',
        component: CodeViewerComponent,
        inputs: { code: this.cssCode, language: 'css' }
      });
    }
    if (this.tsCode()) {
      tabs.push({
        label: "TS",
        type: 'component',
        component: CodeViewerComponent,
        inputs: { code: this.tsCode, language: 'typescript' }
      });
    }
    return tabs;
  });

  toggleCode() {
    this.showCode.update(v => !v);
  }
}