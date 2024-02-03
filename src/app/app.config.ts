//app.config.ts
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';
import { routes } from './app.routes';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
 
export const appConfig: ApplicationConfig = {
  providers: [provideClientHydration(), provideHttpClient(withFetch()), provideAnimationsAsync(),
    //necessary for load the routes 
    provideRouter(
      routes,
      withPreloading(PreloadAllModules)
    ),
  ]
};
