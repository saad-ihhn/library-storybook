import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  OnInit,
  TemplateRef,
  Type
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LibTabComponent, TTabConfig } from '@saad-ihhn/ihhn-host-lib/lib-tab';
import { LibThemeDarkLightService } from '@saad-ihhn/ihhn-host-lib/services';
import { getRelativeDateLabel } from '@saad-ihhn/ihhn-host-lib/utilis';
import { OverviewComponent } from './overview/overview.component';
import { ExampleComponent } from './example/example.component';

@Component({
  selector: 'app-documentation',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LibTabComponent],
  template: `
    <div class="shadow-md p-6 rounded-lg space-y-4 border" [ngClass]="{'bg-slate-900 text-white border-slate-700': $themeService.isDarkTheme(), 'bg-white text-black border-gray-100': !$themeService.isDarkTheme()}">
      <div class="flex flex-col items-start justify-between">
        <h1 class="font-semibold">{{title() + ' Documentation'}}</h1>
        <p class="text-sm text-gray-400 mt-1 flex items-center">
          Published
          <span class="mx-1" [ngClass]="{'text-white': $themeService.isDarkTheme(), 'text-gray-800': !$themeService.isDarkTheme()}">
            {{ displayDate }}
          </span>
          <span class="w-1 h-1 bg-gray-500 rounded-full inline-block"></span>
          <a
            href="https://ihhn-library-50c77.web.app/"
            target="_blank"
            class="text-blue-400 hover:underline flex items-center"
          >
            <img
              src="public/assets/images/verified-badge.svg"
              alt="verified-badge"
              class="badge-color h-[15px] mx-[5px]"
              [ngClass]="{'filter invert': $themeService.isDarkTheme()}"
            />
            ihhn-library
          </a>
        </p>
      </div>
      <div class="flex flex-col items-start justify-between">
        <lib-tab
          [tabConfig]="tabsConfig()"
          [selectedIndex]="0"
          [stretchTabs]="true"
          class="w-full"
        ></lib-tab>
      </div>
    </div>
  `,
  styles: [
    `
      :host ::ng-deep .mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
        color: var(--mat-sys-on-surface);
      }
      :host ::ng-deep .mat-mdc-tab .mdc-tab__text-label {
        color: var(--mat-sys-on-surface);
      }
      :host ::ng-deep .mat-mdc-tab:hover .mdc-tab__text-label,
      :host ::ng-deep .mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label {
        color: var(--mat-sys-on-surface) !important;
      }
      :host ::ng-deep .tab-content {
        padding: 0 !important;
        padding-top: 16px !important;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentationComponent implements OnInit {
  component = input.required<Type<any>>();
  displayDate: string = '';
  publishedDate = input.required<string>();
  htmlCode = input<string>();
  tsCode = input<string>();
  cssCode = input<string>();
  title = input.required<string>();
  overviewContent = input<TemplateRef<any>>();
  useCasesContent = input<TemplateRef<any>>();
  noteContent = input<TemplateRef<any>>();
  otherContent = input<TemplateRef<any>>();
  protected $themeService = inject(LibThemeDarkLightService);

  tabsConfig = computed<TTabConfig[]>(() => [
    {
      label: 'Overview',
      type: 'component',
      component: OverviewComponent,
      inputs: {
        overviewContent: this.overviewContent,
        useCasesContent: this.useCasesContent,
        noteContent: this.noteContent,
        otherContent: this.otherContent
      },
    },
    {
      label: 'Example',
      type: 'component',
      component: ExampleComponent,
      inputs: {
        title: this.title,
        tsCode: this.tsCode,
        htmlCode: this.htmlCode,
        component: this.component
      },
    },
  ]);

  ngOnInit(): void {
    const inputDate = new Date(this.publishedDate());
    this.displayDate = getRelativeDateLabel({ startDate: inputDate, isAgo: true, checkToday: true });
  }
}