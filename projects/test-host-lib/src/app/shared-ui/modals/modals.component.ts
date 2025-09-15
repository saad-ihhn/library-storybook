import { controlDisabled } from '@saad-ihhn/ihhn-host-lib/utilis';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibMatButtonComponent } from '@saad-ihhn/ihhn-host-lib/lib-buttons';
import { LibDialogService } from '@saad-ihhn/ihhn-host-lib/services';
import { ExampleDialogComponent } from './example-dialog/example-dialog.component';

interface ModalParam {
  name: string;
  description: string;
  default: string;
  required: string;
}

@Component({
  selector: 'app-modals',
  standalone: true,
  imports: [CommonModule, LibMatButtonComponent],
  template: `
    <div
      class="w-full mx-auto bg-white rounded-xl shadow-md p-6 space-y-6"
    >
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      <lib-mat-button
        [color]="'primary'"
        (matClick)="openBasicModal()"
        [className]="buttonClasses"
      >
        Basic Modal
      </lib-mat-button>

      <lib-mat-button
        [color]="'warn'"
        (matClick)="openWarningModal()"
        [className]="buttonClasses"
      >
        Warning Modal
      </lib-mat-button>

      <lib-mat-button
        [color]="'accent'"
        (matClick)="openConfirmationModal()"
        [className]="buttonClasses"
      >
        Confirmation Modal
      </lib-mat-button>

      <lib-mat-button
        [color]="'warn'"
        (matClick)="openDeleteModal('record')"
        [className]="buttonClasses"
      >
        Delete Modal
      </lib-mat-button>

      <lib-mat-button
        [color]="'primary'"
        (matClick)="openSuccessModal('Your changes have been saved successfully.')"
        [className]="buttonClasses"
      >
        Success Modal
      </lib-mat-button>

      <lib-mat-button
        [color]="'accent'"
        (matClick)="openInfoModal('This is some helpful information for the user.')"
        [className]="buttonClasses"
      >
        Info Modal
      </lib-mat-button>
      </div>

      @if (lastResult() !== undefined) {
      <div class="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200" >
        <h3 class="text-lg font-medium text-gray-800 mb-2">
          Last Modal Result
        </h3>
        <p
          class="bg-white p-3 rounded text-sm overflow-x-auto border border-gray-200"
        >
          {{ lastResult() | json }}
        </p>
      </div>
      }

      <div
        class="mt-10 p-6 bg-white rounded-lg shadow-md border border-gray-300"
      >
        <h2 class="text-xl font-semibold text-gray-900 mb-4">
          How to Use Modal Service
        </h2>
        <p class="text-on-surface">
          The <code>LibModalsService</code> allows you to open modals
          dynamically with various configuration options.
        </p>
        <table
          class="w-full mt-4 border-collapse border border-gray-200 text-left text-sm"
        >
          <thead>
            <tr class="bg-gray-100">
              <th class="border border-gray-300 px-4 py-2">Parameter</th>
              <th class="border border-gray-300 px-4 py-2">Description</th>
              <th class="border border-gray-300 px-4 py-2">Default</th>
              <th class="border border-gray-300 px-4 py-2">Required</th>
            </tr>
          </thead>
          <tbody>
            @for (param of modalParams; track param.name) {
            <tr>
              <td class="border border-gray-300 px-4 py-2">
                <code>{{ param.name }}</code>
              </td>
              <td class="border border-gray-300 px-4 py-2">
                {{ param.description }}
              </td>
              <td class="border border-gray-300 px-4 py-2">
                <code>{{ param.default }}</code>
              </td>
              <td class="border border-gray-300 px-4 py-2">
                <code>{{ param.required }}</code>
              </td>
            </tr>
            }
          </tbody>
        </table>

        <div class="mt-4 text-sm text-gray-600">
          * Conditional: Either <code>component</code>, <code>message</code>,
          or <code>icon</code> must be provided for the modal to have content.
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalsComponent {
  private dialogService = inject(LibDialogService);
  lastResult = signal<unknown>('');
  buttonClasses = 'w-full py-2 md:py-3 flex items-center justify-center gap-2';

  modalParams: ModalParam[] = [
    // Content Parameters
    {
      name: 'component',
      description:
        'Angular component to display inside the modal (either this or message/icon must be provided)',
      default: 'undefined',
      required: 'Conditional*',
    },
    {
      name: 'componentData',
      description: 'Data to pass to the modal component',
      default: 'undefined',
      required: 'Optional',
    },
    {
      name: 'message',
      description:
        'Modal message content (either this, icon, or component must be provided)',
      default: 'undefined',
      required: 'Conditional*',
    },
    {
      name: 'icon',
      description:
        'Material icon name (either this, message, or component must be provided)',
      default: 'undefined',
      required: 'Conditional*',
    },

    // Size & Position Parameters
    {
      name: 'width',
      description: 'Width of the modal (e.g., "500px" or "80vw")',
      default: '"400px"',
      required: 'Optional',
    },
    {
      name: 'height',
      description: 'Height of the modal',
      default: '"auto"',
      required: 'Optional',
    },
    {
      name: 'maxWidth',
      description: 'Maximum width of the modal',
      default: 'width or "400px"',
      required: 'Optional',
    },
    {
      name: 'minWidth',
      description: 'Minimum width of the modal',
      default: 'undefined',
      required: 'Optional',
    },
    {
      name: 'position',
      description:
        'Modal position (object with top/bottom/left/right properties)',
      default: '{}',
      required: 'Optional',
    },

    // Styling Parameters
    {
      name: 'panelClass',
      description: 'Custom CSS classes for modal styling',
      default: 'undefined',
      required: 'Optional',
    },
    {
      name: 'titleClass',
      description: 'CSS classes for title styling',
      default: 'undefined',
      required: 'Optional',
    },
    {
      name: 'messageClass',
      description: 'CSS classes for message styling',
      default: 'undefined',
      required: 'Optional',
    },
    {
      name: 'iconClass',
      description: 'CSS classes for icon styling',
      default: 'undefined',
      required: 'Optional',
    },
    {
      name: 'closeIconClass',
      description: 'CSS classes for close icon',
      default: 'undefined',
      required: 'Optional',
    },
    {
      name: 'cancelButtonClass',
      description: 'CSS classes for cancel button',
      default: 'undefined',
      required: 'Optional',
    },
    {
      name: 'confirmButtonClass',
      description: 'CSS classes for confirm button',
      default: 'undefined',
      required: 'Optional',
    },
    {
      name: 'buttonsContainerClass',
      description: 'CSS classes for buttons container',
      default: 'undefined',
      required: 'Optional',
    },
    {
      name: 'backdropClass',
      description: 'CSS classes for backdrop',
      default: '""',
      required: 'Optional',
    },

    // Behavior Parameters
    {
      name: 'disableClose',
      description: 'Prevent closing by click outside or ESC',
      default: 'false',
      required: 'Optional',
    },
    {
      name: 'autoFocus',
      description: 'Auto-focus first focusable element',
      default: 'false',
      required: 'Optional',
    },
    {
      name: 'showCloseIcon',
      description: 'Show close icon in top-right corner',
      default: 'false',
      required: 'Optional',
    },
    {
      name: 'showActionButtons',
      description:
        'Show both action buttons (overrides individual button settings)',
      default: 'false',
      required: 'Optional',
    },
    {
      name: 'showCancelButton',
      description: 'Show cancel button',
      default: 'true',
      required: 'Optional',
    },
    {
      name: 'showConfirmButton',
      description: 'Show confirm button',
      default: 'true',
      required: 'Optional',
    },
    {
      name: 'closeOnNavigation',
      description: 'Close modal when navigation occurs',
      default: 'true',
      required: 'Optional',
    },
    {
      name: 'disableBackdropClick',
      description: 'Disable closing by clicking on backdrop',
      default: 'false',
      required: 'Optional',
    },
    {
      name: 'hasBackdrop',
      description: 'Whether dialog has a backdrop',
      default: '!disableBackdropClick',
      required: 'Optional',
    },

    // Text Content
    {
      name: 'title',
      description: 'Modal title text',
      default: 'undefined',
      required: 'Optional',
    },
    {
      name: 'cancelText',
      description: 'Text for cancel button',
      default: 'undefined',
      required: 'Optional',
    },
    {
      name: 'confirmText',
      description: 'Text for confirm button',
      default: 'undefined',
      required: 'Optional',
    },
  ];

  openBasicModal(): void {
    const instance = this.dialogService.getCurrentComponentInstance<ExampleDialogComponent>();
    this.dialogService.openDialog<{ name: string; age: number }>({
      component: ExampleDialogComponent,
      title: 'Basic Information',
      showCloseIcon: true,
      componentData: { name: 'Kahaf', age: 21 },
      width: '500px',
      actionsButtons: computed(() => [
        {
          buttonTitle: 'Cancel',
          color: 'warn',
          onClick: () => this.dialogService.close(false),
        },
        {
          buttonTitle: 'Update',
          onClick: () => instance()?.onUpdate(),
          disabled: computed(() => {
            return instance()?.isUpdateDisabled() ?? true
          }),
          tooltip: computed(() => {
            return instance()?.colorWarn() ?? '';
          })
        }
      ])
    }).subscribe(result => this.lastResult.set(result));
  }

  openWarningModal() {
    this.dialogService.openWarningModal().subscribe(result => {
      this.lastResult.set(result);
    });
  }

  openConfirmationModal() {
    this.dialogService.openConfirmationModal().subscribe(result => {
      this.lastResult.set(result);
    });
  }

  openDeleteModal(item: string) {
    this.dialogService.openDeleteModal(item).subscribe(result => {
      this.lastResult.set(result);
    });
  }

  openSuccessModal(msg: string) {
    this.dialogService.openSuccessModal(msg).subscribe(result => {
      this.lastResult.set(result);
    });
  }

  openInfoModal(msg: string) {
    this.dialogService.openInfoModal(msg).subscribe(result => {
      this.lastResult.set(result);
    });
  }
}
