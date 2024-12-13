import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  template: `
    <div class="flex min-h-screen w-[100vw] flex-col">
      <app-header />

      <router-outlet />

      <app-footer />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
