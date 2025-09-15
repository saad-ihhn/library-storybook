import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LibCardComponent } from '@saad-ihhn/ihhn-host-lib/lib-lists';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [LibCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <lib-card 
      (cardClick)="onCardClick()" 
      (cardDblClick)="onCardDblClick()"
      [hasHeader]="true"
    >
      <!-- Header -->
      <div card-header class="flex justify-between items-center w-full">
        <span class="font-medium text-blue-700">John Doe</span>
        <time class="text-blue-700">2025-09-08 10:30 AM</time>
      </div>

      <!-- Body -->
      <div class="relative">
        <small #small class="relative text-gray-800 transition-all duration-300 line-clamp-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec justo ac 
          sapien consequat fermentum. Pellentesque habitant morbi tristique senectus 
          et netus et malesuada fames ac turpis egestas.
          <span class="absolute bg-white pl-1 text-[10px] text-blue-600 hover:underline"
            (click)="toggleExpand(small)">
            See More
          </span>
        </small>
      </div>
    </lib-card>
  `,
})
export class CardComponent {
  onCardClick() {
    console.log('Card clicked');
  }

  onCardDblClick() {
    console.log('Card double-clicked');
  }

  toggleExpand(el: HTMLElement) {
    console.log('Toggle expand clicked', el);
  }
}