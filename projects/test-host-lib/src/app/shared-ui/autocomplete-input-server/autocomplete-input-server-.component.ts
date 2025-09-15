import { Component, viewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { LibAutocompleteServerComponent, LibSelectFieldComponent } from "@saad-ihhn/ihhn-host-lib/lib-forms";

@Component({
  selector: 'app-autocomplete-server-input',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatDividerModule,
    LibAutocompleteServerComponent,
    LibSelectFieldComponent
  ],
  template: `
    <div class="summary-container">
      <lib-select-field 
      [control]="userControl2" 
      [options]="['mahad', 'kahaf']"
      (selectionChange)="onChange()"
      ></lib-select-field>
    <lib-autocomplete-server
      label="Search Users"
      [control]="userControl"
      apiEndpoint="http://172.16.5.20:5131/pharmacy-service/api/search/patients"
      [apiParams]="{name: userControl2.value}"
      responseDataPath="value"
      responseHasMorePath="pagination.totalRecords"
      [displayFn]="displayFn"
      (optionSelected)="onSearchResults($event)"
    ></lib-autocomplete-server>
    </div>
  `,
  styles: [`
    .summary-container {
      margin: 0;
      max-width: 100%;
    }
    .header {
      display: flex;
      justify-content: center;
    }
    .summary-card {
      width: 100%;
    }
    .list {
      list-style: none;
      padding-left: 0;
    }
    .list li {
      margin: 10px 0;
      font-size: 1rem;
    }
    .list li strong {
      font-weight: bold;
    }
    mat-divider {
      margin: 15px 0;
    }
  `],
})
export class AutocompleteServerInputComponent {
  autoCompleteSearch =  viewChild.required(LibAutocompleteServerComponent);

  userControl = new FormControl('');
  userControl2 = new FormControl('');
  
  onSearchResults(response: MatAutocompleteSelectedEvent): void {
    console.log('Search results received:', response.option.value);
  }
  
  onApiError(error: any): void {
    console.error('API error occurred:', error);
  }

  displayFn(option: any): string {
    return option.fullName;
  }

  onChange = () => {
    this.autoCompleteSearch().triggerSearch();
  }
}