import {
  Component,
  HostListener,
  inject,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { LibLoadingService } from '@saad-ihhn/ihhn-host-lib/services';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterModule, MatSidenavModule, SideBarComponent, HeaderComponent],
  templateUrl: './main-layout.component.html',
  styles: [`
    .mat-drawer {
      color: initial !important;
      box-shadow: none !important;
      background-color: transparent !important;
      border-top-right-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
      overflow: visible !important;
    }
    .mat-drawer-container {
      overflow: visible !important;
    }
    :host ::ng-deep .mat-drawer .mat-drawer-inner-container {
      overflow: hidden;
    }
    mat-drawer-content {
      flex: 1;
      min-width: 0;
    }
    .mat-drawer,
    mat-drawer-content {
      transition: all 400ms cubic-bezier(0.4, 0.0, 0.2, 1) !important;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainLayoutComponent implements OnInit {
  $loadingService = inject(LibLoadingService);
  isSidebarOpen = true;
  isMobileScreen = false;
  isDrawerOpen = false;

  ngOnInit() {
    this.checkScreenSize();
  }

  onSidebarToggled(event: boolean): void {
    this.isSidebarOpen = event;
    if (this.isMobileScreen) {
      this.isDrawerOpen = false;
    }
  }

  toggleDrawer(): void {
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  onDrawerClosed(): void {
    this.isDrawerOpen = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    this.isMobileScreen = window.innerWidth <= 767;
    if (!this.isMobileScreen) {
      this.isDrawerOpen = false;
    }
  }
}