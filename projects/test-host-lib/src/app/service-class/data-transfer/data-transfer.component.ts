import { Component, OnDestroy, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { LibDataTransferService, LibDataTransferSignalService } from '@saad-ihhn/ihhn-host-lib/services'
import { SendDataTransferComponent } from './send-data-transfer.component';
import { LibMatButtonComponent } from '@saad-ihhn/ihhn-host-lib/lib-buttons';
@Component({
  imports: [SendDataTransferComponent, LibMatButtonComponent, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
  template: `
  <div class="grid grid-cols-2 gap-4">
    
  <div>
    <div class="p-2 bg-gray-900 mt-3 text-white rounded-lg">
  <h2 class="text-xl font-bold mb-3">Data Transfer used subscribe - Usage</h2>

  <pre class="overflow-x-auto p-1 bg-gray-800 rounded">
    <code class="text-sm text-green-300">
import {{ '{' }} LibDataTransferService {{ '}' }} from '&#64;saad-ihhn/ihhn-host-lib/services';

//used for auto destroy subscribe
private _destroy = new Subject&lt;void&gt;;
userProfile: IUser[] = [{{ '{' }} name: '', age: 0 {{ '}' }}];

constructor(private $dataTransferService: LibDataTransferService&lt;Array&lt;IUser&gt;&gt;) 
{{ '{' }}
  //unique key 'userProfile' subscribe and on leave page auto  unsubcribe
  this.$dataTransferService
    .getDataObservable('userProfile')
    .pipe(takeUntil(this._destroy))
    .subscribe((user: IUser[] | null) =&gt; {{ '{' }}
      if (user) {{ '{' }}
        this.userProfile = user;
        console.log('User Profile Data:', user);
      {{ '}' }}
    {{'}'}});

  //'setData(key, data)' this function setdata with unique key subscribe 
  this.$dataTransferService.setData('userProfile', [ 
    {{ '{' }} name: 'Jane Doe', age: 25 {{ '}' }}
    ]);
{{ '}' }}

//optional used unsubcribe 
ngOnDestroy(): void {{ '{' }}
  this._destroy.next(); //next() empty
  this._destroy.complete();  //complete subcribe

  //clearData() with unique key
  this.$dataTransferService.clearData('userProfile');   
  
  //removeData() with unique key
  this.$dataTransferService.removeData('userProfile');  
  
  //cleanup() completed all unique key subcibe 
  this.$dataTransferService.cleanup();  
{{ '}' }}
    </code>
  </pre>
    </div>
  </div>

  <div>
    <div class="p-2 bg-gray-900 mt-3 text-white rounded-lg">
  <h2 class="text-xl font-bold mb-3">Data Transfer used signals - Usage</h2>

  <pre class="overflow-x-auto p-1 bg-gray-800 rounded">
    <code class="text-sm text-green-300">
import {{ '{' }} LibDataTransferSignalService {{ '}' }} from '&#64;saad-ihhn/ihhn-host-lib/services';

// inject the services LibDataTransferSignalService
private $dataService = inject(LibDataTransferSignalService);

//pass unique key name for create signal  
usersSignal = this.$dataService.getDataSignal('users');

addUser() {{ '{' }}
  //add data in signal first parameter unique key. 
  //second parameter array of index. third parameter pass add new object.
  this.$dataService.addItem('users', {{ '{' }} name: 'John Doe', age: 30 {{ '}' }} );
{{ '}' }}

updateFirstUser() {{ '{' }}
  //update data in signal first parameter unique key. 
  //second parameter array of index. third parameter pass update object.
  this.$dataService.updateItem('users', 0, {{ '{' }} name: 'Jane Smith', age: 28 {{ '}' }});
{{ '}' }}

removeFirstUser() {{ '{' }}
  //remove signal data 'removeItem('users', 0)' first parameter unique key. 
  //second parameter array of index
  this.$dataService.removeItem('users', 0);
{{ '}' }}
    </code>
  </pre>
    </div>
  </div>

    <div>
    <h1>Data Transfer used subscribe</h1>
    <p>
     userProfile: <br />
     @for (item of userProfile; track item.name) {
        {{ item.name }} - {{ item.age }}<br />
      }
    </p>
    ======================================================
    <h1>Data Transfer used signal</h1>
    <lib-mat-button color="accent" (matClick)="addUser()">Add User</lib-mat-button>
    <lib-mat-button color="accent" (matClick)="updateFirstUser()">Update First User</lib-mat-button>
    <lib-mat-button color="accent" (matClick)="removeFirstUser()">Remove First User</lib-mat-button>

    <h3>Users:</h3>
    <div *ngFor="let user of usersSignal()">
      {{ user.name }} - {{ user.age }}  - {{user.lastname}}
    </div>
    ======================================================
    <br />
    data transfer one component to another component
    <app-send-data-transfer></app-send-data-transfer>
    </div>
  </div>  
    
  `,
  styles: ``
})
export class DataTransferComponent implements OnDestroy {

  private _destroy = new Subject<void>();

  userProfile:IUser[] = [{name: '', age: 0}]; 

  constructor(private $dataTransferService: LibDataTransferService<Array<IUser>>) {
    this.$dataTransferService.setData('userProfile', [{ name: 'Jane Doe', age: 25 },{ name: 'Jane Doe', age: 25 }]);

    this.$dataTransferService
      .getDataObservable('userProfile')
      .pipe(takeUntil(this._destroy))
      .subscribe((user: IUser[] | null) => {
        if (user) {
          this.userProfile = user;
          console.log('User Profile Data:', user);
        } else {
          console.log('No user data available.');
        }
      });
  }

  // Emits a value to complete all subscriptions when the component is destroyed
  ngOnDestroy(): void {
    this._destroy.next();
    this._destroy.complete();
    // Clear data for a specific identifier
     this.$dataTransferService.clearData('userProfile');

    // Remove a specific identifier and its corresponding BehaviorSubject
     this.$dataTransferService.removeData('userProfile');

    // Clean up all BehaviorSubject instances
     this.$dataTransferService.cleanup();
  }

  
// =============================================================================

  //signal
  private $dataService = inject(LibDataTransferSignalService);

  usersSignal = this.$dataService.getDataSignal('users');

  addUser() {
    this.$dataService.addItem('users', { name: 'John Doe', age: 30, 'lastname':'saad' });
  }

  updateFirstUser() {
    this.$dataService.updateItem('users', 0, { name: 'Jane Smith', age: 28, 'lastname':'saad' });
  }

  removeFirstUser() {
    this.$dataService.removeItem('users', 0);
  }
}


export interface IUser {
  name: string;
  age: number;
}
