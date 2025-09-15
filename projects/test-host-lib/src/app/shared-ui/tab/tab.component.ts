import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentTwo } from './second-tab.component';
import { ComponentOne } from './first-tab.component';
import { ComponentThird } from './third-tab.component';
import { TTabConfig } from '@saad-ihhn/ihhn-host-lib/lib-tab';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [CommonModule, ComponentOne],
  template: `
    <app-component-one>
      <ng-template #myContent>
        <p>Hellow world</p>
      </ng-template>
    </app-component-one>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabComponent {
  readonly tabs: TTabConfig[] = [
    {
      label: 'First',
      type: 'component',
      component: ComponentOne,
      inputs: {
        count: () => 0,
      },
      outputs: {
        increment: (event: number) => this.handleIncrement(event),
        decrement: (event: number) => this.handleDecrement(event),
      },
    },
    {
      label: 'Second',
      type: 'component',
      component: ComponentTwo,
      inputs: {
        count: () => 0,
      },
      outputs: {
        increment: (event: number) => this.handleIncrement(event, 1),
        decrement: (event: number) => this.handleDecrement(event, 1),
      },
    },
    {
      label: 'Disabled Tab',
      type: 'component',
      component: ComponentThird,
      disabled: true
    }
  ];

  handleIncrement(newCount: number, index: number = 0): void {
    if (this.tabs[index].type == 'component') {
      this.tabs[index].inputs = {
        ...this.tabs[index].inputs,
        count: () => newCount + 1
      };
    }
  }

  handleDecrement(newCount: number, index: number = 0): void {
    if (this.tabs[index].type == 'component') {
      this.tabs[index].inputs = {
        ...this.tabs[index].inputs,
        count: () => newCount - 1
      };
    }
  }
}