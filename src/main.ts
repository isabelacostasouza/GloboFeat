import * as $ from 'jquery';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

var screen_proportion = screen.height/screen.width;

if (screen_proportion < 1.7) {
  $("#not-mobile").css("display","block");
} else {
  $("main-div").css("display","block");
}