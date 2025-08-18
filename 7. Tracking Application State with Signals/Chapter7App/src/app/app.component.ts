import { Component, inject, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CopyrightDirective } from './copyright.directive';
import { APP_SETTINGS, appSettings} from './app.settings';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductListComponent, CopyrightDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [{ provide: APP_SETTINGS, useValue: appSettings }],
})
export class AppComponent {
  title = 'Chapter7App';

  currentDate = signal(new Date());

  settings = inject(APP_SETTINGS);

  private setTitle = () => {
    this.currentDate.set(new Date());
    this.title = `${this.settings.title} (${this.currentDate()})`;
  };


}
