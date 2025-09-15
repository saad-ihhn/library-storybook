import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { DocumentationComponent } from '../../shared-ui/documentation/documentation.component';
import { CodeViewerComponent } from '../../shared-ui/documentation/code-viewer/code-viewer.component';
import { ToSignalComponent } from './tosignal.component';

@Component({
  selector: 'app-to-signal-documentation',
  standalone: true,
  imports: [CodeViewerComponent, DocumentationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-documentation
      [publishedDate]="publishedDate"
      [title]="title"
      [component]="toSignalComponent"
      [overviewContent]="overviewContent"
      [useCasesContent]="useCasesContent"
      [noteContent]="noteContent"
      [otherContent]="otherContent"
      [htmlCode]="htmlCode"
      [tsCode]="tsCode"
    >
    </app-documentation>

    <ng-template #overviewContent>
      <div class="space-y-6">        
        <p class="text-gray-700">
          The <strong>ToSignal</strong> demonstrates a modern Angular pattern for converting observables to signals using the <code>toSignal()</code> utility. This approach combines the power of RxJS observables with the simplicity and reactivity of Angular signals, providing an elegant solution for managing asynchronous data streams in a reactive manner.
        </p>

        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <div class="flex">
            <div class="ml-3">
              <h3 class="text-sm font-medium text-blue-800">Architecture Highlights</h3>
              <div class="mt-2 text-sm text-blue-700">
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li><strong>Observable to Signal Conversion</strong>: Uses <code>toSignal()</code> to transform RxJS observables into reactive signals</li>
                  <li><strong>Reactive State Management</strong>: Leverages Angular signals for efficient UI updates</li>
                  <li><strong>Simplified Async Handling</strong>: Eliminates the need for manual subscription management</li>
                  <li><strong>Automatic Cleanup</strong>: Built-in memory management with signal-based approach</li>
                  <li><strong>Type Safety</strong>: Full TypeScript support with proper type inference</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h3 class="text-xl font-semibold mt-6">Key Features</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-white p-4 rounded-lg border border-gray-200">
            <h4 class="font-medium text-gray-800 mb-2">Signal Conversion</h4>
            <ul class="list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li>Automatic observable to signal transformation</li>
              <li>Reactive data binding without subscriptions</li>
              <li>Simplified async data handling</li>
              <li>Automatic cleanup and memory management</li>
            </ul>
          </div>
          
          <div class="bg-white p-4 rounded-lg border border-gray-200">
            <h4 class="font-medium text-gray-800 mb-2">Performance Benefits</h4>
            <ul class="list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li>Granular change detection with signals</li>
              <li>Efficient UI updates</li>
              <li>Reduced boilerplate code</li>
              <li>Optimized rendering performance</li>
            </ul>
          </div>
          
          <div class="bg-white p-4 rounded-lg border border-gray-200">
            <h4 class="font-medium text-gray-800 mb-2">Developer Experience</h4>
            <ul class="list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li>Simplified async operations</li>
              <li>Reduced cognitive overhead</li>
              <li>Better code readability</li>
              <li>Easier debugging</li>
            </ul>
          </div>
          
          <div class="bg-white p-4 rounded-lg border border-gray-200">
            <h4 class="font-medium text-gray-800 mb-2">Integration Patterns</h4>
            <ul class="list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li>Seamless RxJS integration</li>
              <li>Composable reactive patterns</li>
              <li>Easy migration from observables</li>
              <li>Backward compatibility</li>
            </ul>
          </div>
        </div>

        <h3 class="text-xl font-semibold mt-6">Technical Architecture</h3>
        <div class="bg-gray-50 p-4 rounded-lg">
          <div class="flex items-center justify-center mb-4">
            <div class="text-center">
              <div class="bg-white p-3 rounded-lg shadow-sm mb-2">
                <span class="font-medium text-purple-600">ToSignal</span>
              </div>
              <div class="flex justify-center space-x-8 mt-2">
                <div class="text-center">
                  <div class="bg-blue-100 p-2 rounded-lg">
                    <span class="text-sm font-medium text-blue-800">Observables</span>
                  </div>
                  <div class="text-xs text-gray-600 mt-1">RxJS Streams</div>
                </div>
                <div class="text-center">
                  <div class="bg-green-100 p-2 rounded-lg">
                    <span class="text-sm font-medium text-green-800">toSignal()</span>
                  </div>
                  <div class="text-xs text-gray-600 mt-1">Conversion</div>
                </div>
                <div class="text-center">
                  <div class="bg-yellow-100 p-2 rounded-lg">
                    <span class="text-sm font-medium text-yellow-800">Signals</span>
                  </div>
                  <div class="text-xs text-gray-600 mt-1">Reactive State</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-green-50 border-l-4 border-green-400 p-4">
          <div class="flex">
            <div class="ml-3">
              <h3 class="text-sm font-medium text-green-800">When to Use toSignal() Pattern</h3>
              <div class="mt-2 text-sm text-green-700">
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li><strong>Simple Data Fetching</strong>: When you need to display async data without complex transformations</li>
                  <li><strong>Template Integration</strong>: When you want to use async data directly in templates</li>
                  <li><strong>Reduced Boilerplate</strong>: When you want to avoid manual subscription management</li>
                  <li><strong>Reactive Updates</strong>: When you need reactive UI updates based on data changes</li>
                  <li><strong>Migration Path</strong>: When gradually migrating from observables to signals</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>

    <ng-template #useCasesContent>
      <div class="space-y-6">
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5 bg-gray-50 border-b">
            <h3 class="text-lg font-medium text-gray-900">Basic Data Fetching</h3>
            <p class="mt-2 text-gray-600">
              Simple API data fetching with automatic observable to signal conversion.
            </p>
          </div>
          <div class="p-5">
            <h4 class="font-medium text-gray-800 mb-3">Implementation Example:</h4>
            <app-code-viewer
              code="
// Basic data fetching with toSignal()
refreshAllData(): void {
    const obs$ = this.$httpService.get<DummyUsersResponse>('https://dummyjson.com/users');
    const signalValue = this.$httpService.toSignal(obs$);
    effect(() => {
      this.usersResource.set(signalValue() ?? null);
    });
}
              "
            ></app-code-viewer>
          </div>
        </div>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5 bg-gray-50 border-b">
            <h3 class="text-lg font-medium text-gray-900">Error Handling Pattern</h3>
            <p class="mt-2 text-gray-600">
              Implementing error handling with the toSignal() pattern.
            </p>
          </div>
          <div class="p-5">
            <h4 class="font-medium text-gray-800 mb-3">Implementation Example:</h4>
            <app-code-viewer
              code="
// Error handling with toSignal()
refreshAllData(): void {
  const obs$ = this.$httpService.get<DummyUsersResponse>('https://dummyjson.com/users')
    .pipe(
      catchError(error => {
        console.error('API Error:', error);
        return of({ users: [], total: 0, skip: 0, limit: 0 });
      })
    );
  
  const signalValue = this.$httpService.toSignal(obs$);
    effect(() => {
      this.usersResource.set(signalValue() ?? null);
    });
}
              "
            ></app-code-viewer>
          </div>
        </div>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5 bg-gray-50 border-b">
            <h3 class="text-lg font-medium text-gray-900">Template Integration</h3>
            <p class="mt-2 text-gray-600">
              Using converted signals directly in Angular templates.
            </p>
          </div>
          <div class="p-5">
            <h4 class="font-medium text-gray-800 mb-3">Template Usage:</h4>
            <app-code-viewer
              code='
<!-- Direct signal usage in template -->
<div class="max-h-[1350px] overflow-y-auto space-y-3">
  @for(user of usersResource()?.users || []; track user.id) {
  <div class="bg-gray-50 p-3 rounded-md border border-gray-200">
    <div class="flex items-center space-x-3">
      <img src="user.image" alt="" 
           class="w-10 h-10 rounded-full object-cover" />
      <div class="flex-1 min-w-0">
        <p class="font-medium text-sm text-gray-800 truncate">
 
        </p>
        <p class="text-gray-500 text-xs truncate">
        </p>
      </div>
    </div>
  </div>
  }
</div>'
            ></app-code-viewer>
          </div>
        </div>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5 bg-gray-50 border-b">
            <h3 class="text-lg font-medium text-gray-900">Reactive Updates</h3>
            <p class="mt-2 text-gray-600">
              Automatically updating UI when underlying data changes.
            </p>
          </div>
          <div class="p-5">
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-medium text-purple-800 mb-2">Reactive Benefits:</h4>
              <ul class="list-disc pl-5 text-purple-700 space-y-1">
                <li>Automatic UI updates on data changes</li>
                <li>No manual change detection required</li>
                <li>Efficient rendering with OnPush strategy</li>
                <li>Simplified state management</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ng-template>

    <ng-template #noteContent>
      <div class="space-y-6">
        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div class="flex">
            <div class="ml-3">
              <h3 class="text-sm font-medium text-yellow-800">Memory Management</h3>
              <div class="mt-2 text-sm text-yellow-700">
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li><strong>Automatic Cleanup</strong>: toSignal() automatically manages subscriptions</li>
                  <li><strong>Component Destruction</strong>: No need for manual unsubscribe in ngOnDestroy</li>
                  <li><strong>Signal Lifetime</strong>: Signals are automatically cleaned up with component</li>
                  <li><strong>No Memory Leaks</strong>: Built-in protection against common memory leak patterns</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-blue-50 border-l-4 border-blue-400 p-4">
          <div class="flex">
            <div class="ml-3">
              <h3 class="text-sm font-medium text-blue-800">Performance Considerations</h3>
              <div class="mt-2 text-sm text-blue-700">
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li><strong>Efficient Updates</strong>: Signals only trigger updates when values actually change</li>
                  <li><strong>Change Detection</strong>: Works optimally with OnPush change detection strategy</li>
                  <li><strong>Minimal Re-renders</strong>: Reduces unnecessary template re-renders</li>
                  <li><strong>Bundle Size</strong> Minimal impact on application bundle size</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-green-50 border-l-4 border-green-400 p-4">
          <div class="flex">
            <div class="ml-3">
              <h3 class="text-sm font-medium text-green-800">Error Handling Strategies</h3>
              <div class="mt-2 text-sm text-green-700">
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li><strong>Catch Errors Early</strong>: Handle errors in the observable pipeline</li>
                  <li><strong>Fallback Values</strong>: Provide default values for error cases</li>
                  <li><strong>Error Signaling</strong>: Consider separate error signals for better handling</li>
                  <li><strong>User Feedback</strong>: Implement proper user notification for errors</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-purple-50 border-l-4 border-purple-400 p-4">
          <div class="flex">
            <div class="ml-3">
              <h3 class="text-sm font-medium text-purple-800">Testing Strategies</h3>
              <div class="mt-2 text-sm text-purple-700">
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li><strong>Signal Testing</strong>: Test signal values and updates</li>
                  <li><strong>Observable Mocking</strong>: Mock HTTP responses as observables</li>
                  <li><strong>Error Scenarios</strong>: Test error handling pathways</li>
                  <li><strong>Template Integration</strong>: Test template rendering with signal data</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>

    <ng-template #otherContent>
      <div class="space-y-8">
        <h2 class="text-2xl font-bold text-gray-800">Advanced Patterns & Comparison</h2>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5 bg-gray-50 border-b">
            <h3 class="text-lg font-medium text-gray-900">Advanced toSignal() Patterns</h3>
            <p class="mt-2 text-gray-600">
              Advanced usage patterns for the toSignal() utility function.
            </p>
          </div>
          <div class="p-5">
            <h4 class="font-medium text-gray-800 mb-3">With Initial Value:</h4>
            <app-code-viewer
              code="
// Using toSignal() with initial value
const userData = toSignal(userObservable$, {
  initialValue: { users: [], total: 0, skip: 0, limit: 0 }
});
              "
            ></app-code-viewer>
            
            <h4 class="font-medium text-gray-800 mt-6 mb-3">With Error Handling:</h4>
            <app-code-viewer
              code="
// Comprehensive error handling
const userData = toSignal(
  userObservable$.pipe(
    catchError(error => {
      console.error('Fetch error:', error);
      return of({ users: [], total: 0, skip: 0, limit: 0, error: true });
    })
  ),
  { initialValue: { users: [], total: 0, skip: 0, limit: 0, loading: true } }
);
              "
            ></app-code-viewer>
          </div>
        </div>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5 bg-gray-50 border-b">
            <h3 class="text-lg font-medium text-gray-900">Comparison: toSignal() vs Manual Subscription</h3>
            <p class="mt-2 text-gray-600">
              Understanding the differences between toSignal() pattern and traditional manual subscriptions.
            </p>
          </div>
          <div class="p-5">
            <div class="overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Aspect</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">toSignal() Pattern</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Manual Subscription</th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr>
                    <td class="px-6 py-4 text-sm font-medium text-gray-900">Boilerplate Code</td>
                    <td class="px-6 py-4 text-sm text-gray-500">Low - Minimal setup required</td>
                    <td class="px-6 py-4 text-sm text-gray-500">High - More code for setup and cleanup</td>
                  </tr>
                  <tr class="bg-gray-50">
                    <td class="px-6 py-4 text-sm font-medium text-gray-900">Memory Management</td>
                    <td class="px-6 py-4 text-sm text-gray-500">Automatic - No manual cleanup needed</td>
                    <td class="px-6 py-4 text-sm text-gray-500">Manual - Requires ngOnDestroy implementation</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 text-sm font-medium text-gray-900">Reactivity</td>
                    <td class="px-6 py-4 text-sm text-gray-500">High - Built-in reactive updates</td>
                    <td class="px-6 py-4 text-sm text-gray-500">Manual - Need to trigger change detection</td>
                  </tr>
                  <tr class="bg-gray-50">
                    <td class="px-6 py-4 text-sm font-medium text-gray-900">Learning Curve</td>
                    <td class="px-6 py-4 text-sm text-gray-500">Low - Simple API</td>
                    <td class="px-6 py-4 text-sm text-gray-500">Medium - Need to understand subscription lifecycle</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 text-sm font-medium text-gray-900">Use Case</td>
                    <td class="px-6 py-4 text-sm text-gray-500">Simple data fetching, template binding</td>
                    <td class="px-6 py-4 text-sm text-gray-500">Complex scenarios, custom error handling</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5 bg-gray-50 border-b">
            <h3 class="text-lg font-medium text-gray-900">Migration Guide</h3>
            <p class="mt-2 text-gray-600">
              How to migrate from manual subscriptions to the toSignal() pattern.
            </p>
          </div>
          <div class="p-5">
            <h4 class="font-medium text-gray-800 mb-3">Before (Manual Subscription):</h4>
            <app-code-viewer
              code="
// Old pattern with manual subscription
export class OldComponent implements OnDestroy {
  private destroy$ = new Subject<void>();
  users: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://api.example.com/users')
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        this.users = data;
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
              "
            ></app-code-viewer>
            
            <h4 class="font-medium text-gray-800 mt-6 mb-3">After (toSignal Pattern):</h4>
            <app-code-viewer
              code="
// New pattern with toSignal()
export class NewComponent {
  private http = inject(HttpClient);
  
  users = toSignal(
    this.http.get('https://api.example.com/users'),
    { initialValue: [] }
  );

  // No ngOnDestroy needed!
}
              "
            ></app-code-viewer>
          </div>
        </div>

        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5 bg-gray-50 border-b">
            <h3 class="text-lg font-medium text-gray-900">Best Practices</h3>
            <p class="mt-2 text-gray-600">
              Recommended practices for using the toSignal() pattern effectively.
            </p>
          </div>
          <div class="p-5">
            <div class="space-y-4">
              <div class="bg-blue-50 p-3 rounded-lg">
                <h4 class="font-medium text-blue-800">Use Initial Values</h4>
                <p class="text-sm text-blue-700">Always provide initial values to avoid undefined signals</p>
              </div>
              <div class="bg-green-50 p-3 rounded-lg">
                <h4 class="font-medium text-green-800">Handle Errors in Observables</h4>
                <p class="text-sm text-green-700">Catch errors in the observable pipeline before conversion</p>
              </div>
              <div class="bg-yellow-50 p-3 rounded-lg">
                <h4 class="font-medium text-yellow-800">Keep Observables Pure</h4>
                <p class="text-sm text-yellow-700">Use RxJS operators for data transformation before toSignal()</p>
              </div>
              <div class="bg-purple-50 p-3 rounded-lg">
                <h4 class="font-medium text-purple-800">Use with OnPush Strategy</h4>
                <p class="text-sm text-purple-700">Combine with ChangeDetectionStrategy.OnPush for best performance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>
  `,
  styles: ``
})
export class ToSignalDocComponent {
  @ViewChild('overviewContent', { static: true }) overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true }) useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;

  toSignalComponent = ToSignalComponent;
  publishedDate = '2025-06-05';
  title = 'ToSignal API Management Component';

  htmlCode = `
<!-- Main container with background -->
<div class="min-h-screen p-4 bg-gray-50">
  <div class="container mx-auto">
    <!-- Header section -->
    <div class="text-center mb-8">
      <h1 class="text-3xl font-semibold text-gray-800 mb-2">
        To Signal API Demo
      </h1>
    </div>

    <!-- Single column layout for data display -->
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
      <!-- Data Display Column -->
      <div class="space-y-6">
        <h2 class="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
          List To Signal
        </h2>

        <!-- Users list card -->
        <div class="card p-5 max-h-full">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-medium text-gray-800">Users</h3>
            <div class="flex items-center space-x-2">
              <!-- Refresh button -->
              <lib-mat-flat-button
                (matClick)="refreshAllData()"
                size="small"
                class="text-sm"
              >
                Refresh
              </lib-mat-flat-button>
            </div>
          </div>

          <!-- Users list with signal-based data -->
          <div class="max-h-[1350px] overflow-y-auto space-y-3">
            <!-- Signal-based user iteration -->
            @for(user of usersResource()?.users || []; track user.id) {
            <div class="bg-gray-50 p-3 rounded-md border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
              <div class="flex items-center space-x-3">
                <img
                  [src]="user.image"
                  [alt]="user.firstName"
                  class="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div class="flex-1 min-w-0">
                  <p class="font-medium text-sm text-gray-800 truncate">
                    {{ user.firstName }} {{ user.lastName }}
                  </p>
                  <p class="text-gray-500 text-xs truncate">
                    {{ user.email }}
                  </p>
                </div>
              </div>
            </div>
            }
          </div>
        </div>
      </div>
    </div>

    <!-- Action buttons -->
    <div class="mt-8 text-center space-x-4">
      <lib-mat-flat-button (matClick)="refreshAllData()">
        Refresh All Data
      </lib-mat-flat-button>
      <lib-mat-flat-button (matClick)="logout()">
        Logout
      </lib-mat-flat-button>
    </div>
  </div>
</div>
  `;

  tsCode = `
import {
  Component,
  inject,
  effect,
  ChangeDetectionStrategy,
  signal,
  WritableSignal,
} from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  LibEncryptDecryptService,
  LibHttpService,
} from '@saad-ihhn/ihhn-host-lib/services';
import { LibMatFlatButtonComponent } from '@saad-ihhn/ihhn-host-lib/lib-buttons';

/**
 * User authentication response interface
 */
export interface IUserAuthResponse {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: 'male' | 'female' | 'other';
  image?: string;
  accessToken?: string;
  refreshToken?: string;
  address?: { city?: string; state?: string; country?: string };
}

/**
 * Dummy users API response interface
 */
interface DummyUsersResponse {
  users: IUserAuthResponse[];
  total: number;
  skip: number;
  limit: number;
}

@Component({
  selector: 'app-toSignal',
  standalone: true,
  imports: [LibMatFlatButtonComponent, FormsModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // ... styles
  template: \`
    <!-- Template content -->
  \`
})
export class ToSignalComponent {
  // Region: Dependency Injection
  private $httpService = inject(LibHttpService);
  private $authService = inject(AuthService);
  private $encryptDecrypt = inject(LibEncryptDecryptService);

  // Region: Signals
  readonly status = this.$httpService.status;

  // Trigger for refresh
  private refreshTrigger = signal(0);

  // Convert trigger signal to observable
  private refresh$ = toObservable(this.refreshTrigger);

  // Map trigger HTTP call
  private usersObs$ = this.refresh$.pipe(
    switchMap(() =>
      this.$httpService.get<DummyUsersResponse>('https://dummyjson.com/users')
    )
  );

  usersSignal = toSignal(this.usersObs$, { initialValue: null });

  refreshAllData(): void {
    this.refreshTrigger.update(v => v + 1);
  }

  // Region: Authentication Methods
  /**
   * Logs out the current user and clears encrypted data
   */
  logout(): void {
    this.$authService.logout();
    this.$encryptDecrypt.clearAllData();
  }
}
  `;
}