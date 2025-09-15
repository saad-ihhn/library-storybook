import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
@Component({
  selector: 'app-typography-color',
  standalone: true,
  imports: [MatDividerModule],
  template: `
    <h1 class="font-bold">Colors</h1>
    <div class="grid grid-cols-3 gap-3 m-2 ml-0 mb-6 mt-0">
      <div>
        <h2>Primary</h2>
        <div style="background-color: var(--mat-sys-primary); color: var(--mat-sys-on-primary);" class="p-2 text-sm ">
          background-color: var(--mat-sys-primary); <br>
          color: var(--mat-sys-on-primary)
        </div>
      </div>
      
      <div>
        <h2>Surface</h2>
        <div style="background-color: var(--mat-sys-surface); color: var(--mat-sys-on-surface);" class="p-2 text-sm ">
          background-color: var(--mat-sys-surface); <br>
          color: var(--mat-sys-on-surface)
        </div>
      </div>

      <div>
        <h2>Error</h2>
        <div style="background-color: var(--mat-sys-error); color: var(--mat-sys-on-error);" class="p-2 text-sm ">
          background-color: var(--mat-sys-error); <br>
          color: var(--mat-sys-on-error)
        </div>
      </div>

      <div>
        <h2>Outline</h2>
        <div style="background-color: var(--mat-sys-outline); color: var(--mat-sys-surface);" class="p-2 text-sm ">
          background-color: var(--mat-sys-outline); <br>
          color: var(--mat-sys-surface)
        </div>
      </div>
    </div>
    <mat-divider></mat-divider>
    <h1 class="font-bold">Alternative Theme Colors</h1>
    <div class="grid grid-cols-3 gap-3 m-2 mt-0 ml-0">
      <div>
        <!-- <h2>Primary</h2>
        <div style="background-color: var(--mat-sys-primary); color: var(--mat-sys-on-primary);" class="p-2">
          
          <span class="text-sm flex">background-color: var(--mat-sys-primary); <br>
          color: var(--mat-sys-on-primary)</span>
        </div> -->

        <h2>Primary Container</h2>
        <div style="background-color: var(--mat-sys-primary-container); color: var(--mat-sys-on-primary-container);" class="p-2">
          
          <span class="text-sm flex">background-color: var(--mat-sys-primary-container); <br>
          color: var(--mat-sys-on-primary-container)</span>
        </div>
      </div>

      <div>
        <h2>Secondary</h2>
        <div style="background-color: var(--mat-sys-secondary); color: var(--mat-sys-on-secondary);" class="p-2">
          
          <span class="text-sm flex">background-color: var(--mat-sys-secondary); <br>
          color: var(--mat-sys-on-secondary)</span>
        </div>

        <h2 class="mt-2">Secondary Container</h2>
        <div style="background-color: var(--mat-sys-secondary-container); color: var(--mat-sys-on-secondary-container);" class="p-2">
          
          <span class="text-sm flex">background-color: var(--mat-sys-secondary-container); <br>
          color: var(--mat-sys-on-secondary-container)</span>
        </div>
      </div>

      <div>
        <h2>Tertiary</h2>
        <div style="background-color: var(--mat-sys-tertiary); color: var(--mat-sys-on-tertiary);" class="p-2">
          
          <span class="text-sm flex">background-color: var(--mat-sys-tertiary); <br>
          color: var(--mat-sys-on-tertiary)</span>
        </div>

        <h2 class="mt-2">Tertiary Container</h2>
        <div style="background-color: var(--mat-sys-tertiary-container); color: var(--mat-sys-on-tertiary-container);" class="p-2">
          
          <span class="text-sm flex">background-color: var(--mat-sys-tertiary-container); <br>
          color: var(--mat-sys-on-tertiary-container)</span>
        </div>

        <h2 class="mt-2">Error Container</h2>
        <div style="background-color: var(--mat-sys-error-container); color: var(--mat-sys-on-error-container);" class="p-2">
          
          <span class="text-sm flex">background-color: var(--mat-sys-error-container); <br>
          color: var(--mat-sys-on-error-container)</span>
        </div>
      </div>

    </div>
    <mat-divider></mat-divider>

    <h1 class="font-bold">Surface Colors</h1>
    <div class="grid grid-cols-3 gap-3 m-2 mt-0 ml-0">
      <div>
        <div style="background-color: var(--mat-sys-surface-dim); color: var(--mat-sys-on-surface);" class="p-2">
          Surface Dim
          <span class="text-sm flex">background-color: var(--mat-sys-surface-dim); <br>
          color: var(--mat-sys-on-surface)</span>
        </div>

        <div style="background-color: var(--mat-sys-surface-bright); color: var(--mat-sys-on-surface);" class="p-2">
          Surface Bright
          <span class="text-sm flex">background-color: var(--mat-sys-surface-bright); <br>
          color: var(--mat-sys-on-surface);</span>
        </div>

        <div style="background-color: var(--mat-sys-surface-container-lowest); color: var(--mat-sys-on-surface);" class="p-2">
          Surface Container Lowest
          <span class="text-sm flex">style="background-color: var(--mat-sys-surface-container-lowest); <br>
          color: var(--mat-sys-on-surface);"</span>
        </div>
      </div>

      
      <div>
        <div style="background-color: var(--mat-sys-surface-container-low); color: var(--mat-sys-on-surface);" class="p-2">
          Surface Container Low
          <span class="text-sm flex">background-color: var(--mat-sys-surface-container-low); <br>
          color: var(--mat-sys-on-surface)</span>
        </div>

        <div style="background-color: var(--mat-sys-surface-container); color: var(--mat-sys-on-surface);" class="p-2">
          Surface Container
          <span class="text-sm flex">background-color: var(--mat-sys-surface-container); <br>
          color: var(--mat-sys-on-surfac)</span>
        </div>
      </div>

      <div>

        <div style="background-color: var(--mat-sys-surface-container-high); color: var(--mat-sys-on-surface);" class="p-2">
          Surface Container High
          <span class="text-sm flex">background-color: var(--mat-sys-surface-container-high); <br>
          color: var(--mat-sys-on-surface)</span>
        </div>

        <div style="background-color: var(--mat-sys-surface-container-highest); color: var(--mat-sys-on-surface);" class="p-2">
        Surface Container Highest
          <span class="text-sm flex">background-color: var(--mat-sys-surface-container-highest); <br>
          color: var(--mat-sys-on-surface)</span>
        </div>
      </div>

    </div>
    <mat-divider></mat-divider>
    <h1 class="font-bold">Fixed Colors</h1>
    <div class="grid grid-cols-3 gap-3 m-2 mt-0 ml-0">
      <div>
        <div style="background-color: var(--mat-sys-primary-fixed); color: var(--mat-sys-on-primary-fixed);" class="p-2">
          Primary Fixed
          <span class="text-sm flex">background-color: var(--mat-sys-primary-fixed); <br>
          color: var(--mat-sys-on-primary-fixed)</span>
        </div>

        <div style="background-color: var(--mat-sys-primary-fixed-dim); color: var(--mat-sys-on-primary-fixed);" class="p-2">
          Primary Fixed Dim
          <span class="text-sm flex">background-color: var(--mat-sys-primary-fixed-dim); <br>
          color: var(--mat-sys-on-primary-fixed);</span>
        </div>
      </div>

      
      <div>
        <div style="background-color: var(--mat-sys-secondary-fixed); color: var(--mat-sys-on-secondary-fixed);" class="p-2">
          Secondary Fixed
          <span class="text-sm flex">style="background-color: var(--mat-sys-secondary-fixed); <br>
          color: var(--mat-sys-on-secondary-fixed);"</span>
        </div>

        <div style="background-color: var(--mat-sys-secondary-fixed-dim); color: var(--mat-sys-on-secondary-fixed);" class="p-2">
          Secondary Fixed Dim
          <span class="text-sm flex">background-color: var(--mat-sys-surface-container); <br>
          color: var(--mat-sys-on-secondary-fixed)</span>
        </div>
      </div>

      <div>

        <div style="background-color: var(--mat-sys-tertiary-fixed); color: var(--mat-sys-on-tertiary-fixed);" class="p-2">
          Tertiary Fixed
          <span class="text-sm flex">background-color: var(--mat-sys-tertiary-fixed); <br>
          color: var(--mat-sys-on-tertiary-fixed)</span>
        </div>

        <div style="background-color: var(--mat-sys-tertiary-fixed-dim); color: var(--mat-sys-on-tertiary-fixed);" class="p-2">
          Tertiary Fixed Dim
          <span class="text-sm flex">background-color: var(--mat-sys-tertiary-fixed-dim); <br>
          color: var(--mat-sys-on-tertiary-fixed)</span>
        </div>
      </div>

    </div>
    
    <mat-divider></mat-divider>
    <h1 class="font-bold">Typography</h1>
    <div class="grid grid-cols-3 gap-3 m-2 mt-0 ml-0">
      <div>
        <h2>Body</h2>
        <div style="font: var(--mat-sys-body-small);" class="py-2 flex justify-between">
          <span style="background-color: var(--mat-sys-tertiary-container); color: var(--mat-sys-on-tertiary-container)" class="p-1 rounded">Lorem ipsum dolor</span>
          <span class="text-sm">--mat-sys-body-small</span>
        </div>

        <div style="font: var(--mat-sys-body-medium);" class="py-2 flex justify-between">
          <span style="background-color: var(--mat-sys-tertiary-container); color: var(--mat-sys-on-tertiary-container)" class="p-1 rounded">Lorem ipsum dolor</span>
          <span class="text-sm flex">--mat-sys-body-medium</span>
        </div>
        <div style="font: var(--mat-sys-body-large);" class="py-2 flex justify-between">
          <span style="background-color: var(--mat-sys-tertiary-container); color: var(--mat-sys-on-tertiary-container)" class="p-1 rounded">Lorem ipsum dolor</span>
          <span class="text-sm flex">--mat-sys-body-large</span>
        </div>
      </div>

      <div>
        <h2>label</h2>
        <div style="font: var(--mat-sys-label-small);" class="py-2 flex justify-between">
          <span style="background-color: var(--mat-sys-tertiary-container); color: var(--mat-sys-on-tertiary-container)" class="p-1 rounded">Lorem ipsum dolor</span>
          <span class="text-sm">--mat-sys-label-small</span>
        </div>

        <div style="font: var(--mat-sys-label-medium);" class="py-2 flex justify-between">
          <span style="background-color: var(--mat-sys-tertiary-container); color: var(--mat-sys-on-tertiary-container)" class="p-1 rounded">Lorem ipsum dolor</span>
          <span class="text-sm flex">--mat-sys-label-medium</span>
        </div>
        <div style="font: var(--mat-sys-label-large);" class="py-2 flex justify-between">
          <span style="background-color: var(--mat-sys-tertiary-container); color: var(--mat-sys-on-tertiary-container)" class="p-1 rounded">Lorem ipsum dolor</span>
          <span class="text-sm flex">--mat-sys-label-large</span>
        </div>
      </div>

      <div>
        <h2>Title</h2>
        <div style="font: var(--mat-sys-title-small);" class="py-2 flex justify-between">
          <span style="background-color: var(--mat-sys-tertiary-container); color: var(--mat-sys-on-tertiary-container)" class="p-1 rounded">Lorem ipsum dolor</span>
          <span class="text-sm">--mat-sys-title-small</span>
        </div>

        <div style="font: var(--mat-sys-title-medium);" class="py-2 flex justify-between">
          <span style="background-color: var(--mat-sys-tertiary-container); color: var(--mat-sys-on-tertiary-container)" class="p-1 rounded">Lorem ipsum dolor</span>
          <span class="text-sm flex">--mat-sys-title-medium</span>
        </div>
        <div style="font: var(--mat-sys-title-large);" class="py-2 flex justify-between">
          <span style="background-color: var(--mat-sys-tertiary-container); color: var(--mat-sys-on-tertiary-container)" class="p-1 rounded">Lorem ipsum dolor</span>
          <span class="text-sm flex">--mat-sys-title-large</span>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-3 m-2 mt-0 ml-0">
    <div>
        <h2>Display</h2>
        <div style="font: var(--mat-sys-display-small);" class="py-2 flex justify-between">
          <span style="background-color: var(--mat-sys-tertiary-container); color: var(--mat-sys-on-tertiary-container)" class="p-1 rounded">Lorem ipsum dolor</span>
          <span class="text-sm">--mat-sys-display-small</span>
        </div>

        <div style="font: var(--mat-sys-display-medium);" class="py-2 flex justify-between">
          <span style="background-color: var(--mat-sys-tertiary-container); color: var(--mat-sys-on-tertiary-container)" class="p-1 rounded">Lorem ipsum dolor</span>
          <span class="text-sm flex">--mat-sys-display-medium</span>
        </div>
        <div style="font: var(--mat-sys-display-large);" class="py-2 flex justify-between">
          <span style="background-color: var(--mat-sys-tertiary-container); color: var(--mat-sys-on-tertiary-container)" class="p-1 rounded">Lorem ipsum dolor</span>
          <span class="text-sm flex">--mat-sys-display-large</span>
        </div>
      </div>

      <div>
        <h2>headline</h2>
        <div style="font: var(--mat-sys-headline-small);" class="py-2 flex justify-between">
          <span style="background-color: var(--mat-sys-tertiary-container); color: var(--mat-sys-on-tertiary-container)" class="p-1 rounded">Lorem ipsum dolor</span>
          <span class="text-sm">--mat-sys-headline-small</span>
        </div>

        <div style="font: var(--mat-sys-headline-medium);" class="py-2 flex justify-between">
          <span style="background-color: var(--mat-sys-tertiary-container); color: var(--mat-sys-on-tertiary-container)" class="p-1 rounded">Lorem ipsum dolor</span>
          <span class="text-sm flex">--mat-sys-headline-medium</span>
        </div>
        <div style="font: var(--mat-sys-headline-large);" class="py-2 flex justify-between">
          <span style="background-color: var(--mat-sys-tertiary-container); color: var(--mat-sys-on-tertiary-container)" class="p-1 rounded">Lorem ipsum dolor</span>
          <span class="text-sm flex">--mat-sys-headline-large</span>
        </div>
      </div>
    </div>
    <mat-divider></mat-divider>
    <h2 class="font-bold"> CSS box-shadow</h2>
    <div class="grid grid-cols-3 gap-3 m-2 mt-0 ml-0">
      <div style="box-shadow: var(--mat-sys-level0);"> box-shadow: var(--mat-sys-level0) </div>
      <div style="box-shadow: var(--mat-sys-level1);"> box-shadow: var(--mat-sys-level1) </div>
      <div style="box-shadow: var(--mat-sys-level2);"> box-shadow: var(--mat-sys-level2) </div>
      <div style="box-shadow: var(--mat-sys-level3);"> box-shadow: var(--mat-sys-level3) </div>
      <div style="box-shadow: var(--mat-sys-level4);"> box-shadow: var(--mat-sys-level4) </div>
      <div style="box-shadow: var(--mat-sys-level5);"> box-shadow: var(--mat-sys-level5) </div>
    </div>

  `,
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypographyColorComponent {

}
