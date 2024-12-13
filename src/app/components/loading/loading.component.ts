import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  imports: [],
  template: `
    <div class="z-9999 w-full flex items-center justify-center h-screen">
      <div class="flex flex-col items-center">
        <div
          class="animate-spin rounded-full h-16 w-16 border-t-4 border-primary border-opacity-75"></div>
        <p class="mt-4 text-lg">Loading...</p>
      </div>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingComponent {}
