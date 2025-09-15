import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { LibWidgetComponent } from '@saad-ihhn/ihhn-host-lib/lib-cards';

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [MatIconModule, LibWidgetComponent],
  template: `
    <lib-widget [widgetHeaderClass]="'bg-dark'">
      <div widgetHeaderStartContent>hello world</div>
      <div widgetHeaderMiddleContent>hello world</div>
      <div widgetHeaderEndContent>hello world</div>
    </lib-widget>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetComponent {

}