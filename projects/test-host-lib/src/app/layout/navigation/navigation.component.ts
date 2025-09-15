import { CommonModule } from '@angular/common';
import { Component, inject, computed } from '@angular/core';
import { LibStatePermissionsService, UserPermissionDirective, hasPermission, EPermissionAction, permissions, accessLinks   } from '@saad-ihhn/ihhn-host-lib/permissions';
import { LibMatButtonComponent } from '@saad-ihhn/ihhn-host-lib/lib-buttons';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule, LibMatButtonComponent, UserPermissionDirective ],
  template: `
  <!-- <ul>
    <h2>old pattern create menus </h2>
    @for (item of $permission.menuItems(); track $index) {
      @if(item.isDefaultSide) {
        @for (item1 of item.accessModules.encounterRemote.remoteNavigation; track $index) {
          <li><b>{{ item1.moduleName }}</b></li>
          @for (item2 of item1.systemFunctions; track $index) {
            <li>{{ item2.functionName }}</li>
          }
        }
      }
    }
  </ul> -->
  
=============================================
    <h2>User Data</h2>
    <ul>
        <li>
         {{$permission.userData() | json}}
        </li>
      
    </ul> 

  ============================================
    <h2>Remote "pharmacyRemote"</h2>
    <ul>
      <!-- {{pharmacyRemote() | json}} -->
      @for (key of pharmacyRemote(); track $index) {
        <li>
        <b>{{key.moduleName}}</b> 
         @for (key of key.systemFunctions; track $index) {
          <ul class="list">
            <li class="ml-2">
              {{key.functionName}} 
            </li>
          </ul>
        }
        <!-- <strong>{{ key.title }}</strong> -->
         
        </li>
      }
    </ul>
    ===========================================
     <h2>Remote "encounterRemote"</h2>
    <ul>
      @for (key of encounterRemote(); track $index) {
        <li>
        <b>{{key.moduleName}}</b> 
        @for (item of key.systemFunctions; track $index) {
          <ul class="list">
            <li class="ml-2">
              {{item.functionName}} 
            </li>
          </ul>
        }
        </li>
      }
    </ul>
=================================================
    <!-- <h2>user Permissions</h2>
    <ul>
      encounter userPermissions
      @for (key of $permission.userPermissions(); track $index) {
        <li>
          {{key.moduleName}} 
          <strong>{{ key.url }}</strong>
         
        </li>
      }
    </ul> -->
--------------------------------------
    <!-- <ul>
    pharmacy userPermissions
      @for (key of $permission.userPermissions()?.pharmacyRemote; track $index) {
        <li>
          {{key.moduleName}} 
          <strong>{{ key.url }}</strong>
         
        </li>
      }
    </ul> -->

    ============================================
    <h2>isAuthenticated: <b>{{$permission.isAuthenticated()}}</b></h2>
    
    <h2>isPasswordExpired: <b>{{$permission.isPasswordExpired()}}</b></h2>
    
     <br>
     
    
     <lib-mat-button  (matClick)="updateData()">
      Update Data
      </lib-mat-button> 

      <h2>Add Permission in template</h2>
      <!-- <lib-mat-button [hasUserPermission]="{ functionName: 'Dashboard', action: EPermissionAction.View }">
        View Dashboard
      </lib-mat-button> -->

     
      <lib-mat-button *hasUserPermission="{ functionName: 'PatientRegistration', action: EPermissionAction.Print }">
        Edit User
      </lib-mat-button>

      <lib-mat-button *hasUserPermission="{ functionName: 'PatientRegistration', action: EPermissionAction.Update}">
        Edit
      </lib-mat-button>
      <lib-mat-button *hasUserPermission="{ functionName: 'PatientRegistration', action: EPermissionAction.Print}">
        Print
      </lib-mat-button>
      <lib-mat-button *hasUserPermission="{ functionName: 'PatientRegistration', action: 'VW'}">
        View
      </lib-mat-button>
  `,
  styles: ``
})
export class NavigationComponent{
  readonly $permission = inject(LibStatePermissionsService);
  readonly hasViewPermission = hasPermission('PatientRegistration', EPermissionAction.Pharmacist);
  readonly EPermissionAction = EPermissionAction;


  // menuItems = this.$permission.menuItems();
  pharmacyRemote = computed(() => this.$permission.currentActiveSite()?.accessModules?.pharmacyRemote?.remoteNavigation);
  encounterRemote = computed(() => this.$permission.currentActiveSite()?.accessModules?.encounterRemote?.remoteNavigation);

 
  updateData():void {
    // this.$permission.updateState({ menuItems: sampleMenu, userPermissions: samplePermissions, userData: {}, hostMenuItems: [] });
    // this.$permission.updateMenuItems(menuItems.menuItems);
    // console.log('menuItems:', this.$permission.menuItems());
    console.log('menuItems:', this.$permission.menuItems());
    console.log('accessModules:', this.$permission.currentActiveSite());
    console.log('userData:', this.$permission.userData());
    console.log('userPermissionsOld:', this.$permission.userPermissionsOld());
    console.log('pharmacyRemote:', this.pharmacyRemote());

    console.log('userPermissions:', permissions()); // user permissions new
    console.log('access links:', accessLinks()); // access links
    
  }

}
