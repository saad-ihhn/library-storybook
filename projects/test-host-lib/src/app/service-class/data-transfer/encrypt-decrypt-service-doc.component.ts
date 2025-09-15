import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { CodeViewerComponent } from '../../shared-ui/documentation/code-viewer/code-viewer.component';
import { DocumentationComponent } from "../../shared-ui/documentation/documentation.component";
import { EncryptDecryptComponent } from './encrypt-decrypt.component';

@Component({
  selector: 'app-encrypt-decrypt-documentation',
  standalone: true,
  imports: [CodeViewerComponent, DocumentationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-documentation 
      [publishedDate]="publishedDate" 
      [title]="title"
      [htmlCode]="htmlCode"
      [component]="EncryptDecryptComponent" 
      [tsCode]="tsCode" 
      [overviewContent]="overviewContent"
      [useCasesContent]="useCasesContent" 
      [noteContent]="noteContent" 
      [otherContent]="otherContent">
    </app-documentation>

    <ng-template #overviewContent>
      <div class="space-y-4">
        <p class="text-on-surface">
          The <code class="bg-gray-100 px-1 py-0.5 rounded text-gray-800">LibEncryptDecryptService</code> provides secure encryption and decryption capabilities for sensitive data in Angular applications.
        </p>
        
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-blue-800">Encryption/Decryption Features</h3>
              <div class="mt-2 text-sm text-blue-700">
                <p>
                  This service includes several security features:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Strong encryption algorithms</li>
                  <li>Secure key management</li>
                  <li>Asynchronous operations</li>
                  <li>Automatic data clearing</li>
                  <li>Comprehensive storage cleanup</li>
                  <li>Simple API for common use cases</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-semibold mt-6">Key Features</h3>
        <ul class="list-disc pl-5 space-y-2 text-on-surface">
          <li>Secure encryption of sensitive data</li>
          <li>Reliable decryption of encrypted data</li>
          <li>Automatic key initialization</li>
          <li>Scheduled data clearing for security</li>
          <li>Complete storage cleanup options</li>
          <li>Promise-based asynchronous API</li>
          <li>Error handling for security operations</li>
        </ul>
      </div>
    </ng-template>

    <ng-template #useCasesContent>
      <div class="space-y-6">    
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Basic Encryption/Decryption</h3>
            <p class="mt-2 text-gray-600">
              Encrypt and decrypt sensitive data with automatic key management.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="basicSetupExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Secure Storage with Auto-Clear</h3>
            <p class="mt-2 text-gray-600">
              Store encrypted data with automatic clearing after a timeout.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="autoClearExample"></app-code-viewer>
          </div>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Complete Data Cleanup</h3>
            <p class="mt-2 text-gray-600">
              Securely clear all client-side storage when needed.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <app-code-viewer [code]="dataCleanupExample"></app-code-viewer>
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
              <h3 class="text-sm font-medium text-yellow-800">Security Notes</h3>
              <div class="mt-2 text-sm text-yellow-700">
                <p>
                  Important security considerations:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Always handle encryption keys securely</li>
                  <li>Consider implementing additional security layers</li>
                  <li>Regularly rotate encryption keys in production</li>
                  <li>Never store plaintext sensitive data</li>
                  <li>Implement proper error handling</li>
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
              <h3 class="text-sm font-medium text-purple-800">Best Practices</h3>
              <div class="mt-2 text-sm text-purple-700">
                <p>
                  For optimal security:
                </p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  <li>Use auto-clear for temporary sensitive data</li>
                  <li>Implement secure logout procedures</li>
                  <li>Combine with server-side encryption when possible</li>
                  <li>Educate users about security practices</li>
                  <li>Regularly audit your security implementation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>

    <ng-template #otherContent>
      <div class="space-y-6">
        <h2 class="text-2xl font-bold">Advanced Usage</h2>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">Service API</h3>
            <p class="mt-2 text-gray-600">
              Complete list of available methods.
            </p>
          </div>
          <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Parameters</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">initializeKey</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">()</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Initializes the encryption key if not already set</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">encrypt</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">(data: string)</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Encrypts the provided data (returns Promise&lt;string&gt;)</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">decrypt</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">(encryptedData: string)</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Decrypts the provided encrypted data (returns Promise&lt;string&gt;)</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">autoClearData</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">(timeout?: number)</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Automatically clears all stored data after timeout (default: 9 hours)</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">clearAllData</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">()</td>
                  <td class="px-6 py-4 text-sm text-gray-500">Immediately clears all client-side storage</td>
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
export class EncryptDecryptServiceDocComponent {
  @ViewChild('overviewContent', { static: true }) overviewContent!: TemplateRef<any>;
  @ViewChild('useCasesContent', { static: true }) useCasesContent!: TemplateRef<any>;
  @ViewChild('noteContent', { static: true }) noteContent!: TemplateRef<any>;
  @ViewChild('otherContent', { static: true }) otherContent!: TemplateRef<any>;
  EncryptDecryptComponent = EncryptDecryptComponent;
  publishedDate = '2025-05-21';
  title = 'Encryption-Decryption Service';

  htmlCode = `
    <div class="p-4 space-y-4">
      <mat-form-field class="w-full">
        <mat-label>Sensitive Data</mat-label>
        <input matInput [(ngModel)]="sensitiveData" placeholder="Enter data to encrypt">
      </mat-form-field>

      <div class="flex gap-2">
        <lib-mat-stroked-button (matClick)="encryptData()">Encrypt</lib-mat-stroked-button>
        <lib-mat-stroked-button (matClick)="decryptData()">Decrypt</lib-mat-stroked-button>
      </div>

      <div class="mt-4 space-y-2">
        <p><strong>Encrypted:</strong> {{ encryptedData || '—' }}</p>
        <p><strong>Decrypted:</strong> {{ decryptedData || '—' }}</p>
      </div>
    </div>
  `;

  tsCode = `
    import { Component } from '@angular/core';
    import { LibEncryptDecryptService } from '@saad-ihhn/ihhn-host-lib/services';
    
    @Component({
      selector: 'app-security-demo',
      standalone: true,
      template: \`
        <div class="p-4 space-y-4">
          <mat-form-field class="w-full">
            <mat-label>Sensitive Data</mat-label>
            <input matInput [(ngModel)]="sensitiveData" placeholder="Enter data to encrypt">
          </mat-form-field>

          <div class="flex gap-2">
            <lib-mat-stroked-button (matClick)="encryptData()">Encrypt</lib-mat-stroked-button>
            <lib-mat-stroked-button (matClick)="decryptData()">Decrypt</lib-mat-stroked-button>
          </div>

          <div class="mt-4 space-y-2">
            <p><strong>Encrypted:</strong> {{ encryptedData || '—' }}</p>
            <p><strong>Decrypted:</strong> {{ decryptedData || '—' }}</p>
          </div>
        </div>
      \`,
    })
    export class SecurityDemoComponent {
      sensitiveData = '';
      encryptedData = '';
      decryptedData = '';

      constructor(private $encryptDecrypt: LibEncryptDecryptService) {}

      async encryptData() {
        try {
          this.encryptedData = await this.$encryptDecrypt.encrypt(this.sensitiveData);
          localStorage.setItem('secureData', this.encryptedData);
        } catch (error) {
          console.error('Encryption failed:', error);
          this.encryptedData = 'Encryption error';
        }
      }

      async decryptData() {
        const storedData = localStorage.getItem('secureData');
        if (!storedData) return;

        try {
          this.decryptedData = await this.$encryptDecrypt.decrypt(storedData);
        } catch (error) {
          console.error('Decryption failed:', error);
          this.decryptedData = 'Decryption error';
        }
      }
    }
  `;

  basicSetupExample = `
    import { Component } from '@angular/core';
    import { LibEncryptDecryptService } from '@saad-ihhn/ihhn-host-lib/services';
    
    @Component({
      selector: 'app-basic-encryption',
      template: \`
        <button (click)="encryptData()">Encrypt</button>
        <button (click)="decryptData()">Decrypt</button>
        <p>Encrypted: {{ encryptedData }}</p>
        <p>Decrypted: {{ decryptedData }}</p>
      \`,
    })
    export class BasicEncryptionComponent {
      sensitiveData = 'My secret information';
      encryptedData = '';
      decryptedData = '';

      constructor(private $encryptDecrypt: LibEncryptDecryptService) {}

      async encryptData() {
        this.encryptedData = await this.$encryptDecrypt.encrypt(this.sensitiveData);
      }

      async decryptData() {
        this.decryptedData = await this.$encryptDecrypt.decrypt(this.encryptedData);
      }
    }
  `;

  autoClearExample = `
    import { Component } from '@angular/core';
    import { LibEncryptDecryptService } from '@saad-ihhn/ihhn-host-lib/services';
    
    @Component({
      selector: 'app-auto-clear',
      template: \`
        <button (click)="storeTemporaryData()">Store Temporary Data</button>
      \`,
    })
    export class AutoClearComponent {
      constructor(private $encryptDecrypt: LibEncryptDecryptService) {}

      async storeTemporaryData() {
        const sensitiveData = 'Temporary session data';
        
        // Encrypt and store
        const encrypted = await this.$encryptDecrypt.encrypt(sensitiveData);
        localStorage.setItem('tempSession', encrypted);
        
        // Auto-clear after 1 hour (3600000 ms)
        this.$encryptDecrypt.autoClearData(3600000);
      }
    }
  `;

  dataCleanupExample = `
    import { Component } from '@angular/core';
    import { LibEncryptDecryptService } from '@saad-ihhn/ihhn-host-lib/services';
    
    @Component({
      selector: 'app-secure-logout',
      template: \`
        <button (click)="secureLogout()">Secure Logout</button>
      \`,
    })
    export class SecureLogoutComponent {
      constructor(private $encryptDecrypt: LibEncryptDecryptService) {}

      secureLogout() {
        // Perform logout operations...
        
        // Clear all client-side storage
        this.$encryptDecrypt.clearAllData();
        
        // Redirect to login page
        window.location.href = '/login';
      }
    }
  `;
}