import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { DataTransferComponent } from './data-transfer.component';
import { CodeViewerComponent } from '../../shared-ui/documentation/code-viewer/code-viewer.component';
import { DocumentationComponent } from "../../shared-ui/documentation/documentation.component";

@Component({
  selector: 'app-data-transfer-documentation',
  standalone: true,
  imports: [CodeViewerComponent, DocumentationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-documentation 
      [publishedDate]="publishedDate" 
      [title]="title"
      [htmlCode]="htmlCode"
      [component]="dataTransferComponent" 
      [tsCode]="tsCode" 
      [overviewContent]="overviewContent"
      [useCasesContent]="useCasesContent" 
      [noteContent]="noteContent" 
      [otherContent]="otherContent">
    </app-documentation>

    <ng-template #overviewContent>
      <div class="space-y-4">
        <p class="text-on-surface">
          The <code class="bg-gray-100 px-1 py-0.5 rounded text-gray-800">DataTransferComponent</code> demonstrates two approaches for data transfer between components: traditional Observable-based and modern Signal-based.
        </p>
        
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-blue-800">Data Transfer Features</h3>
              <div class="mt-2 text-sm text-blue-700">
                <p>
                  This component showcases two powerful data transfer methods:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li><strong>Observable-based</strong>: Traditional RxJS approach with BehaviorSubject</li>
                  <li><strong>Signal-based</strong>: Modern Angular Signals approach</li>
                  <li>Component-to-component communication</li>
                  <li>Type-safe data transfer</li>
                  <li>Automatic cleanup</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-semibold mt-6">Key Features</h3>
        <ul class="list-disc pl-5 space-y-2 text-on-surface">
          <li>Two implementation approaches (Observables and Signals)</li>
          <li>Type-safe data transfer with generics</li>
          <li>Automatic subscription cleanup</li>
          <li>CRUD operations for Signal-based approach</li>
          <li>Memory management with cleanup methods</li>
          <li>Interactive examples for both approaches</li>
          <li>Cross-component communication demonstration</li>
        </ul>
      </div>
    </ng-template>

    <ng-template #useCasesContent>
      <div class="space-y-6">    
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Observable-based Data Transfer</h3>
            <p class="mt-2 text-gray-600">
              Traditional RxJS implementation with BehaviorSubject.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="observableExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Signal-based Data Transfer</h3>
            <p class="mt-2 text-gray-600">
              Modern Angular Signals implementation.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="signalExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Cross-Component Communication</h3>
            <p class="mt-2 text-gray-600">
              Sharing data between unrelated components.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="crossComponentExample"></app-code-viewer>
          </div>
        </div>
      </div>
    </ng-template>

    <ng-template #noteContent>
      <div class="space-y-4">    
        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-yellow-800">Memory Management</h3>
              <div class="mt-2 text-sm text-yellow-700">
                <p>
                  Important cleanup considerations:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Always unsubscribe from observables to prevent memory leaks</li>
                  <li>Use <code>takeUntil</code> pattern for clean unsubscribe</li>
                  <li>Clear data when no longer needed</li>
                  <li>Signal-based approach automatically handles cleanup</li>
                  <li>Prefer Signals for simpler state management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-purple-50 border-l-4 border-purple-400 p-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-purple-800">Performance Considerations</h3>
              <div class="mt-2 text-sm text-purple-700">
                <p>
                  Choosing between approaches:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Signals are more efficient for simple state</li>
                  <li>Observables better for complex async operations</li>
                  <li>Signals integrate better with Angular's change detection</li>
                  <li>Observables offer more operators for data transformation</li>
                  <li>Consider your team's familiarity with each approach</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>

    <ng-template #otherContent>
      <div class="space-y-6">
        <h2 class="text-2xl font-bold">API Reference</h2>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">LibDataTransferService (Observable)</h3>
            <p class="mt-2 text-gray-600">
              Methods available in the Observable-based service.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">getDataObservable(key)</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Returns Observable for the given key</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">setData(key, data)</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Sets data for the given key</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">clearData(key)</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Clears data for the given key</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">removeData(key)</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Removes the BehaviorSubject for the given key</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">cleanup()</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Cleans up all BehaviorSubjects</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">LibDataTransferSignalService (Signal)</h3>
            <p class="mt-2 text-gray-600">
              Methods available in the Signal-based service.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">getDataSignal(key)</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Returns Signal for the given key</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">addItem(key, item)</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Adds item to the array for the given key</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">updateItem(key, index, item)</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Updates item at index for the given key</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">removeItem(key, index)</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Removes item at index for the given key</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ng-template>
  `,
  styles: ``
})
export class DataTransferDocComponent {
  @ViewChild('overviewContent', { static: true }) overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true }) useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;

  dataTransferComponent = DataTransferComponent;
  publishedDate = '2025-06-03';
  title = 'Data Transfer Service';

  htmlCode = `
    <!-- Observable-based example -->
    <div>
      <h3>User Profile (Observable):</h3>
      @for (user of userProfile; track user.name) {
        <div>{{ user.name }} - {{ user.age }}</div>
      }
    </div>

    <!-- Signal-based example -->
    <div>
      <button (click)="addUser()">Add User</button>
      <h3>Users (Signal):</h3>
      @for (user of usersSignal(); track user.name) {
        <div>{{ user.name }} - {{ user.age }}</div>
      }
    </div>
  `;

  tsCode = `
    import { Component, inject } from '@angular/core';
    import { LibDataTransferService, LibDataTransferSignalService } from '@saad-ihhn/ihhn-host-lib/services';

    interface IUser {
      name: string;
      age: number;
    }

    @Component({
      selector: 'app-data-transfer',
      template: '...'
    })
    export class DataTransferComponent {
      // Observable-based
      userProfile: IUser[] = [];
      constructor(private dataTransfer: LibDataTransferService<IUser[]>) {
        this.dataTransfer.getDataObservable('users').subscribe(users => {
          this.userProfile = users || [];
        });
      }

      // Signal-based
      private signalTransfer = inject(LibDataTransferSignalService);
      usersSignal = this.signalTransfer.getDataSignal<IUser[]>('users');
      
      addUser() {
        this.signalTransfer.addItem('users', { name: 'John', age: 30 });
      }
    }
  `;

  observableExample = `
    // Setting up Observable-based data transfer
    constructor(private dataTransfer: LibDataTransferService<IUser[]>) {
      // Subscribe to data
      this.dataTransfer.getDataObservable('users')
        .pipe(takeUntil(this.destroy$))
        .subscribe(users => {
          this.users = users || [];
        });

      // Set initial data
      this.dataTransfer.setData('users', [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 }
      ]);
    }

    // Cleanup
    ngOnDestroy() {
      this.destroy$.next();
      this.dataTransfer.clearData('users');
    }
  `;

  signalExample = `
    // Signal-based data transfer
    private signalTransfer = inject(LibDataTransferSignalService);
    usersSignal = this.signalTransfer.getDataSignal<IUser[]>('users');

    // Add user
    addUser() {
      this.signalTransfer.addItem('users', { name: 'Charlie', age: 28 });
    }

    // Update user
    updateUser(index: number) {
      this.signalTransfer.updateItem('users', index, { name: 'Updated', age: 35 });
    }

    // Remove user
    removeUser(index: number) {
      this.signalTransfer.removeItem('users', index);
    }
  `;

  crossComponentExample = `
    // Component A - Setting data
    export class ComponentA {
      constructor(private dataTransfer: LibDataTransferService<string>) {
        this.dataTransfer.setData('message', 'Hello from Component A');
      }
    }

    // Component B - Receiving data
    export class ComponentB {
      message = '';
      
      constructor(private dataTransfer: LibDataTransferService<string>) {
        this.dataTransfer.getDataObservable('message')
          .subscribe(msg => this.message = msg || '');
      }
    }

    // With Signals (even simpler)
    // Component A:
    private signalTransfer = inject(LibDataTransferSignalService);
    messageSignal = this.signalTransfer.getDataSignal<string>('message');
    updateMessage() {
      this.messageSignal.set('New message');
    }

    // Component B:
    private signalTransfer = inject(LibDataTransferSignalService);
    message = this.signalTransfer.getDataSignal<string>('message');
  `;
}