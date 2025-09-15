import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe, NgOptimizedImage } from '@angular/common'
import { LibMatButtonComponent } from '@saad-ihhn/ihhn-host-lib/lib-buttons';
import { DateTimeFormat } from '@saad-ihhn/ihhn-host-lib/enums';
@Component({
  selector: 'app-access-denied',
  imports: [RouterLink, DatePipe, NgOptimizedImage, LibMatButtonComponent],
  templateUrl: './access-denied.component.html',
  styleUrl: './access-denied.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccessDeniedComponent {
  currentTime = new Date();
  DateTimeFormat = DateTimeFormat.CUSTOM;
  requestId = 'REQ_' + Math.random().toString(36).substr(2, 9).toUpperCase();
}
