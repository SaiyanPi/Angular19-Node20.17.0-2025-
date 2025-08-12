import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CopyrightDirective } from './copyright.directive';
import { APP_SETTINGS, appSettings} from './app.settings';
import { Observable } from 'rxjs';
import { KeyLoggerComponent } from './key-logger/key-logger.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductListComponent, CopyrightDirective, KeyLoggerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [{ provide: APP_SETTINGS, useValue: appSettings }],
})
export class AppComponent {
  title = 'Chapter6App';

  // title$ = new Observable(observer => {
  //   setInterval(() => {
  //     observer.next();
  //   }, 10000);
  // });

  settings = inject(APP_SETTINGS);

    private setTitle = () => {
    const timestamp = new Date();
    this.title = `${this.settings.title} (${timestamp})`;
  };

  // constructor() {
  //   // this.onComplete().then(this.setTitle);
  //   this.title$.subscribe(this.setTitle);
  // }


  // private changeTitle(callback: Function) {
  //   setTimeout(() => {
  //     callback();
  //   }, 2000);
  // }

  // private onComplete() {
  //   return new Promise<void>((resolve) => {
  //     setTimeout(() => {
  //       resolve();
  //     }, 2000);
  //   });
  // }
}
