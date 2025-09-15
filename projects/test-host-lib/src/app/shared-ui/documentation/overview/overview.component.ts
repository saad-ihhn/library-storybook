import {
  ChangeDetectionStrategy,
  Component,
  input,
  TemplateRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-4 theme-grey-color">
      @if (overviewContent()) {
        <h3 class="text-xl font-semibold">Overview</h3>
        <div class="overview">
          <ng-template *ngTemplateOutlet="overviewContent() ?? null"></ng-template>
        </div>
      }

      @if (useCasesContent()) {
        <h3 class="text-lg font-semibold mt-6">Use Cases</h3>
        <div class="usecases">
          <ng-template *ngTemplateOutlet="useCasesContent() ?? null"></ng-template>
        </div>
      }

      @if (otherContent()) {
        <div class="otherContent">
          <ng-template *ngTemplateOutlet="otherContent() ?? null"></ng-template>
        </div>
      }

      @if (noteContent()) {
        <div class="text-sm italic">
          <Strong>Note:</Strong>
          <ng-template *ngTemplateOutlet="noteContent() ?? null"></ng-template>
        </div>
      }
    </div>
  `,
  styles: [`
    .theme-grey-color {
      color: var(--mat-sys-on-surface);
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverviewComponent {
  overviewContent = input<TemplateRef<any>>();
  useCasesContent = input<TemplateRef<any>>();
  noteContent = input<TemplateRef<any>>();
  otherContent = input<TemplateRef<any>>();
}