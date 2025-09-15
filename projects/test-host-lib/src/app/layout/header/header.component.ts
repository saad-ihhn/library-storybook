import { ChangeDetectionStrategy, Component, inject, signal, DOCUMENT, output } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Router, RouterModule, ActivatedRouteSnapshot, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LibScreenBreakpointService, LibThemeDarkLightService } from '@saad-ihhn/ihhn-host-lib/services';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatMenuModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  protected readonly $authService = inject(AuthService);
 // Breadcrumb functionality
  private customLabels = signal<Map<string, string>>(new Map());
  private navigationEnd = signal<void>(undefined);
  protected breadcrumbs = signal<Array<{label: string, url: string}>>([]);
  private readonly router = inject(Router);
  private readonly _document = inject(DOCUMENT);
  protected $themeService = inject(LibThemeDarkLightService);
  protected $screenSize = inject(LibScreenBreakpointService);
  toggleDrawer = output<void>();

  constructor() {
    // Initialize breadcrumb tracking
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => {
        this.navigationEnd.set(undefined);
        this.updateBreadcrumbs();
      });

    // Initial breadcrumb update
    this.updateBreadcrumbs();
  }
  
  toggleFullscreen(): void {
    const elem = this._document.documentElement;
    if (!this._document.fullscreenElement) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if ((elem as any).webkitRequestFullscreen) {
        (elem as any).webkitRequestFullscreen(); // Safari
      } else if ((elem as any).msRequestFullscreen) {
        (elem as any).msRequestFullscreen(); // IE/Edge
      }
    } else {
      // Exit fullscreen
      if (this._document.exitFullscreen) {
        this._document.exitFullscreen();
      } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen(); // Safari
      } else if ((document as any).msExitFullscreen) {
        (document as any).msExitFullscreen(); // IE/Edge
      }
    }
  }

   // Breadcrumb methods
  private updateBreadcrumbs(): void {
    const breadcrumbs = this.createBreadcrumbs(this.router.routerState.snapshot.root);
    this.breadcrumbs.set(breadcrumbs);
  }

  private createBreadcrumbs(
    route: ActivatedRouteSnapshot,
    url: string = '',
    breadcrumbs: Array<{label: string, url: string}> = []
  ): Array<{label: string, url: string}> {
    const children = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.url.map(segment => segment.path).join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      let label = child.data['breadcrumb'] ?? 
                (child.title ? child.title.split(' / ').pop() : '');
      
      const paramId = child.params['id'];
      if (paramId && this.customLabels().has(paramId)) {
        label = this.customLabels().get(paramId)!;
      }

      if (label && !breadcrumbs.some(b => b.url === url)) {
        breadcrumbs.push({ label, url });
      }

      return this.createBreadcrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }

  // For dynamic routes if needed
  setCustomLabel(id: string, label: string): void {
    this.customLabels.update(labels => {
      labels.set(id, label);
      return new Map(labels);
    });
    this.updateBreadcrumbs();
  }

  resetCustomLabel(id: string): void {
    this.customLabels.update(labels => {
      labels.delete(id);
      return new Map(labels);
    });
    this.updateBreadcrumbs();
  }
}