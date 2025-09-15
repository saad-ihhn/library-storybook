import { MatTooltip } from '@angular/material/tooltip';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  input,
  AfterViewInit,
  ElementRef,
  ViewChild,
  effect
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibMatIconButtonComponent } from '@saad-ihhn/ihhn-host-lib/lib-buttons';
import { LibToastService } from '@saad-ihhn/ihhn-host-lib/services'
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';

// Register languages
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('html', xml);
hljs.registerLanguage('css', css);

@Component({
  selector: 'app-code-viewer',
  standalone: true,
  imports: [CommonModule, LibMatIconButtonComponent, MatTooltip],
  template: `
    <div class="relative w-full">
      <lib-mat-icon-button
        (click)="copyCode()"
        tabindex="0"
        (keyup.enter)="copyCode()"
        aria-label="Copy code"
        [source]="'content_copy'"
        class="!absolute top-5 right-5 z-10"
        [color]="'dark'"
        [matTooltip]="'Copy Source Code'"
      >
        Copy
      </lib-mat-icon-button>
      <pre class="m-0 overflow-x-auto text-sm leading-6"><code #codeElement class="shadow-md relative rounded-lg !p-0 block hljs language-{{language}}">{{ code() }}</code></pre>
    </div>
  `,
  styles: [`
    @import 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/github.min.css';
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeViewerComponent implements AfterViewInit {
  private toastService = inject(LibToastService);
  code = input<string>('');
  @Input() language: string = 'typescript';
  @ViewChild('codeElement') codeElement!: ElementRef<HTMLElement>;

  constructor() {
    effect(() => {
      if (this.code()) {
        setTimeout(() => this.highlightCode());
      }
    });
  }

  ngAfterViewInit() {
    const codeBlocks = this.codeElement.nativeElement.querySelectorAll('pre code');
    codeBlocks.forEach((block: any) => {
      block.removeAttribute('data-highlighted');
      hljs.highlightElement(block);
    });
  }

  private highlightCode() {
    if (this.codeElement?.nativeElement) {
      hljs.highlightElement(this.codeElement.nativeElement);
    }
  }

  copyCode() {
    navigator.clipboard
      .writeText(this.code())
      .then(() => {
        this.toastService.success('Code copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy code:', err);
        this.toastService.error('Failed to copy code');
      });
  }
}