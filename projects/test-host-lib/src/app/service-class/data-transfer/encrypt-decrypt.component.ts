import { Component, inject, ChangeDetectionStrategy, signal } from '@angular/core';
import { LibTextFieldComponent } from '@saad-ihhn/ihhn-host-lib/lib-forms';
import { LibEncryptDecryptService } from '@saad-ihhn/ihhn-host-lib/services';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LibMatStrokedButtonComponent } from '@saad-ihhn/ihhn-host-lib/lib-buttons';

@Component({
  selector: 'app-encrypt-decrypt',
  standalone: true,
  imports: [
    LibMatStrokedButtonComponent,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    LibTextFieldComponent
  ],
  template: `
    <div class="grid grid-cols-2 gap-4 p-4">
      <!-- Left Column: Usage -->
      <div>
        <div class="p-4 bg-gray-900 text-white rounded-lg">
          <h2 class="text-xl font-bold mb-3">Encryption & Decryption - Usage</h2>
          <pre class="overflow-x-auto p-3 bg-gray-800 rounded text-sm text-green-300">
<code>
import {{ '{' }} LibEncryptDecryptService {{ '}' }} from '&#64;saad-ihhn/ihhn-host-lib/services';
private $encryptDecrypt = inject(LibEncryptDecryptService);

// If you don't have a key, first initialize it:
this.$encryptDecrypt.initializeKey();

// Use this function to encrypt data:
const encrypted = await this.$encryptDecrypt.encrypt(this.inputText());

// Use this function to decrypt data:
const decrypted = await this.$encryptDecrypt.decrypt(encrypted);

// Auto-clear all stored data after 9 hours
this.$encryptDecrypt.autoClearData();

// Clear LocalStorage, SessionStorage, Cookies, and IndexedDB
this.$encryptDecrypt.clearAllData();
</code>
          </pre>
        </div>
      </div>

      <!-- Right Column: Live Demo -->
      <div>
        <h2 class="text-lg font-semibold mb-3">Live Encryption Demo</h2>
        <div class="flex gap-4">
          <div class="w-3/5">
            <lib-text-field
              [placeholder]="'Enter text'"
              [control]="textControl"
              (change)="onInputChange($event)">
            </lib-text-field>
          </div>
          <div class="w-2/5 flex items-start space-x-2">
            <lib-mat-stroked-button (matClick)="encrypt()">Encrypt</lib-mat-stroked-button>
            <lib-mat-stroked-button (matClick)="decrypt()">Decrypt</lib-mat-stroked-button>
          </div>
        </div>

        <div class="mt-4 space-y-2">
          <p><strong>Encrypted:</strong> {{ encryptedText() }}</p>
          <p><strong>Decrypted:</strong> {{ decryptedText() }}</p>
        </div>
      </div>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EncryptDecryptComponent {
  private $encryptDecrypt = inject(LibEncryptDecryptService);

  textControl = new FormControl('');
  inputText = signal('');
  encryptedText = signal('');
  decryptedText = signal('');

  constructor() {
    this.$encryptDecrypt.initializeKey();
  }

  onInputChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.inputText.set(value);
  }

  async encrypt() {
    const input = this.inputText();
    if (!input) return;
    try {
      const encrypted = await this.$encryptDecrypt.encrypt(input);
      this.encryptedText.set(encrypted);
      localStorage.setItem('encryptedUserData', encrypted);
    } catch (error) {
      console.error('Encryption error:', error);
      this.encryptedText.set('Error in encryption');
    }
  }

  async decrypt() {
    const encrypted = localStorage.getItem('encryptedUserData');
    if (!encrypted) {
      this.decryptedText.set('No encrypted data found');
      return;
    }
    try {
      const decrypted = await this.$encryptDecrypt.decrypt(encrypted);
      this.decryptedText.set(decrypted);
    } catch (error) {
      console.error('Decryption error:', error);
      this.decryptedText.set('Error in decryption');
    }
  }
}
