import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { NavbarComponent } from './app/components/navbar/navbar';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
