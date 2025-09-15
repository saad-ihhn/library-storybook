import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  inject,
  OnInit,
  Output
} from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Router, RouterModule } from '@angular/router';
import { LibThemeDarkLightService } from '@saad-ihhn/ihhn-host-lib/services';
import { MatTooltipModule } from '@angular/material/tooltip';
import menus from './side-bar-menus-list.json';
import { LibMatIconButtonComponent, LibMatSlideToggleComponent } from '@saad-ihhn/ihhn-host-lib/lib-buttons';

// Interface for submenu items
interface SubMenuItem {
  label: string;
  route?: string;
  hasSubMenu?: boolean;
  subMenu?: SubMenuItem[];
  icon?: string;
  color?: string;
}

// Interface for main menu items
interface MenuItem {
  icon?: string;
  label: string;
  route?: string;
  color: string;
  hasSubMenu?: boolean;
  subMenu?: SubMenuItem[];
}

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSlideToggleModule,
    LibMatIconButtonComponent,
    MatTooltipModule,
    NgOptimizedImage,
    LibMatSlideToggleComponent
  ],
  templateUrl: './side-bar.component.html',
  styles: [`
    /* Hide scrollbar by default */
    nav::-webkit-scrollbar {
      width: 0;
      background: transparent;
      transition: width 0.2s ease;
    }

    /* Show scrollbar on hover */
    nav:hover::-webkit-scrollbar {
      width: 3px;
      overflow-y: scroll;
      box-shadow: inset 0 0 5pxrgba(133, 146, 158, 0.21);
      height: 4px;
    }

    /* Thumb styling */
    nav::-webkit-scrollbar-thumb {
      background:rgba(62, 116, 254, 0.3);
      border-radius: 3px;
      cursor: grabbing;
    }

    /* Ensure the thumb is visible only on hover */
    nav:not(:hover)::-webkit-scrollbar-thumb {
      background: transparent;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideBarComponent implements OnInit {
  protected readonly $themeService = inject(LibThemeDarkLightService);
  protected readonly router = inject(Router);

  isSidebarOpen = true;
  @Output() sidebarToggled = new EventEmitter<boolean>();
  hoveredItem: string | null = null;
  activeMobileItem: number | null = null;
  private openSubMenus: Set<string> = new Set();
  isMobileScreen = false;
  menuItems: MenuItem[] = (menus as MenuItem[]);

  constructor() {
    this.checkScreenSize();
  }

  ngOnInit(): void {}
  
  toggleTheme(): void {
    this.$themeService.toggleTheme();
  }

  handleSidebarClick(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('li') && this.isMobileScreen) {
      this.activeMobileItem = null;
    }
  }

  handleMobileClick(item: MenuItem, index: number, event: Event): void {
    event.stopPropagation();
    
    if (item.hasSubMenu) {
      this.activeMobileItem = this.activeMobileItem === index ? null : index;
    } else if (item.route) {
      this.sidebarToggled.emit(false);
    }
  }

  handleItemClick(item: MenuItem, event: Event): void {
    if (!item.route) {
      event.preventDefault();
    }
    if (this.isMobileScreen && !item.hasSubMenu && item.route) {
      this.sidebarToggled.emit(false);
    }
  }

  handleSubItemClick(subItem: SubMenuItem, event: Event): void {
    if (!subItem.route && subItem.hasSubMenu) {
      event.preventDefault();
    }
    if (this.isMobileScreen && !subItem.hasSubMenu && subItem.route) {
      this.sidebarToggled.emit(false);
    }
  }

  handleNestedItemClick(event: Event): void {
    if (this.isMobileScreen) {
      this.sidebarToggled.emit(false);
    }
  }

  toggleSubMenu(subItemLabel: string, parentIndex: number, event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    const key = `${subItemLabel}-${parentIndex}`;
    const keysToRemove = Array.from(this.openSubMenus).filter(
      (k) => k.endsWith(`-${parentIndex}`) && k !== key
    );
    keysToRemove.forEach((k) => this.openSubMenus.delete(k));
    
    if (this.openSubMenus.has(key)) {
      this.openSubMenus.delete(key);
    } else {
      this.openSubMenus.add(key);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    this.isMobileScreen = window.innerWidth <= 767;
    if (this.isMobileScreen) {
      this.isSidebarOpen = false;
    }
  }

  trackByLabel(_: number, item: MenuItem | SubMenuItem): string {
    return item.label;
  }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.sidebarToggled.emit(this.isSidebarOpen);
  }

  setHoveredItem(itemLabel: string | null, index: number): void {
    if (itemLabel) {
      this.hoveredItem = `${itemLabel}-${index}`;
    } else {
      if (this.hoveredItem) {
        const currentIndex = this.hoveredItem.split('-').pop();
        if (currentIndex) {
          this.openSubMenus.forEach((key) => {
            if (key.endsWith(`-${currentIndex}`)) {
              this.openSubMenus.delete(key);
            }
          });
        }
        this.hoveredItem = null;
      }
    }
  }

  isSubMenuOpen(subItemLabel: string, parentIndex: number): boolean {
    return this.openSubMenus.has(`${subItemLabel}-${parentIndex}`);
  }

  getSubmenuTopPosition(
    itemLabel: string,
    index: number,
    length: number | undefined
  ): number {
    const key = `${itemLabel}-${index}`;
    const element = document.querySelector(
      `[data-item="${key}"]`
    ) as HTMLElement;
    const top = element?.getBoundingClientRect().top ?? 0;
    if (index === 0) return top;
    const offset = 60;
    const windowHeight = window.innerHeight - offset;
    const subMenuHeightTotal = 33 * (length ?? 0);
    if (top + subMenuHeightTotal > windowHeight) {
      const adjustedTop = windowHeight - subMenuHeightTotal;
      return adjustedTop > 0 ? adjustedTop : 0;
    }
    return top;
  }
}