import { computed, inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LibHttpService, LibToastService } from '@saad-ihhn/ihhn-host-lib/services';
import { LibStatePermissionsService } from '@saad-ihhn/ihhn-host-lib/permissions';
import { IUserAuthResponse } from '../../api-call/crud-resources/crud-resources.component';

/**
 * Authentication service for handling user authentication and permission management
 * 
 * This service provides methods for:
 * - Checking authentication status
 * - User login functionality
 * - User logout functionality
 * - Managing user permissions
 * 
 * @service
 * @providedIn root
 * 
 * @example
 * ```typescript
 * // Inject and use the service
 * constructor(private authService: AuthService) {}
 * 
 * // Check authentication
 * this.authService.checkAuth();
 * 
 * // Login
 * this.authService.login({ email: 'user@example.com', password: 'password' });
 * 
 * // Logout
 * this.authService.logout();
 * ```
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //#region Properties
  /** Base URL for authentication API endpoints */
  private authUrl = 'https://dummyjson.com/user'; 
  
  /** Signal indicating authentication status */
  isAuthenticated = computed(() => this.$statePermission.isAuthenticated());
  
  /** Permission state management service */
  private $statePermission: LibStatePermissionsService<unknown, unknown, IUserAuthResponse> = inject(LibStatePermissionsService);
  
  /** Toast notification service */
  toast = inject(LibToastService);

  private $httpClient = inject(LibHttpService);

  private $router = inject(Router);
  //#endregion

  //#region Constructor
  /**
   * Creates an instance of AuthService
   * @param $http - HttpClient for making HTTP requests
   * @param $router - Router for navigation
   */
  constructor() {}
  //#endregion

  /**
   * Authenticates a user with provided credentials
   * @param credentials - User login credentials
   * @param credentials.email - User email address
   * @param credentials.password - User password
   */
  login(credentials: { email: string; password: string }) {
    return this.$httpClient.post<IUserAuthResponse>(`${this.authUrl}/login`, credentials).subscribe({
      next: (res: IUserAuthResponse) => {
        this.toast.success('Login successfully!', 'Success');
        this.$statePermission.updateIsAuthenticated(true);
        this.$statePermission.updateUserData(res);
        // this.$router.navigate(['/api']);
        window.history.back();
      },
      error: (err) => console.error('Login failed:', err)
    });
  }

  /**
   * Logs out the current user, clears authentication state, and navigates to login page
   */
  logout() {
    this.toast.success('Logout successfully!', 'Success');
    this.$statePermission.updateIsAuthenticated(false);
    this.$router.navigate(['/api/login']);
  }
  //#endregion
}