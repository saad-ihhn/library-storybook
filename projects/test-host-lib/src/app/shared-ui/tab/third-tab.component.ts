import { CommonModule } from "@angular/common";
import { Component, input, output } from "@angular/core";
import { LibMatFlatButtonComponent } from "@saad-ihhn/ihhn-host-lib/lib-buttons";

@Component({
  selector: 'app-component-third',
  standalone: true,
  imports: [CommonModule, LibMatFlatButtonComponent],
  template: `
    <p>Component Third: Count is {{ count() }}</p>
    <div class="flex items-center gap-2">
      <lib-mat-flat-button (matClick)="increment.emit(count())" [className]="'mt-2'">Increment</lib-mat-flat-button>
      <lib-mat-flat-button (matClick)="decrement.emit(count())" [className]="'mt-2'" [disabled]="count() <= 0">Decrement</lib-mat-flat-button>
    </div>
  `,
})
export class ComponentThird {
  count = input<number>(0);
  increment = output<number>();
  decrement = output<number>();
}