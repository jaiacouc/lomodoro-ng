import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app/routes';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [provideAnimations(), provideRouter(routes)],
}).catch((err) => console.error(err));
