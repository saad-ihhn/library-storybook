import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LibNotificationCardComponent } from '@saad-ihhn/ihhn-host-lib/lib-lists';

@Component({
  selector: 'app-widget-notification-preview',
  standalone: true,
  imports: [LibNotificationCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <lib-notification-card
      [sender]="'System Admin'"
      (onClick)="handleClick()"
      (onDblClick)="handleDoubleClick()"
    >
      <p>System maintenance scheduled for 10:00 PM.</p>
    </lib-notification-card>
  `,
})
export class NotificationPreviewComponent {
  flag = false;
  handleClick() {
    console.log('Card clicked');
  }

  handleDoubleClick() {
    console.log('Card double-clicked');
  }
}
