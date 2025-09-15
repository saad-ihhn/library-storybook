import { CommonModule } from "@angular/common";
import { AfterContentInit, Component, ContentChild, input, output, TemplateRef } from "@angular/core";
import { LibMatFlatButtonComponent } from "@saad-ihhn/ihhn-host-lib/lib-buttons";
@Component({
  selector: 'app-component-one',
  standalone: true,
  imports: [CommonModule, LibMatFlatButtonComponent],
  template: `
    <p>Component First: Count is {{ count() }}</p>
    <p>Ng content: <ng-container *ngTemplateOutlet="myContentElement"></ng-container></p>
    <div class="flex items-center gap-2">
      <lib-mat-flat-button (matClick)="increment.emit(count())" [className]="'mt-2'">Increment</lib-mat-flat-button>
      <lib-mat-flat-button (matClick)="decrement.emit(count())" [className]="'mt-2'" [disabled]="count() <= 0">Decrement</lib-mat-flat-button>
    </div>
  `,
})
export class ComponentOne implements AfterContentInit {
  count = input<number>(0);
  increment = output<number>();
  decrement = output<number>();

   @ContentChild('myContent', { static: true })
  myContentElement!: TemplateRef<any>;

  // The content will now be available in `ngOnInit`, so `ngAfterContentInit` is
  // no longer needed for this specific task, but you can still use it for other
  // logic if you need to.
  ngAfterContentInit(): void {
    if (this.myContentElement) {
      console.log('Content element is available:', this.myContentElement);
      console.log('Native Element:', this.myContentElement.elementRef.nativeElement);
      console.log('Text content:', this.myContentElement.elementRef.nativeElement.textContent);
    } else {
      console.log('Content element is still undefined. Something is wrong.');
    }
  }
}