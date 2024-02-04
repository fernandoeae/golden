//app.config.ts
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';
import { routes } from './app.routes';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ApiService } from './service/api.service';
 
export const appConfig: ApplicationConfig = {
  providers: [provideClientHydration(), ApiService, importProvidersFrom(HttpClientModule), provideHttpClient(withFetch()), provideAnimationsAsync(),
     provideRouter(
      routes,
       withPreloading(PreloadAllModules)
     ),
  ],
};
