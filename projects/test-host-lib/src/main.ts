import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes'; // ✅ Import the routes from a separate file
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './app/core/interceptor/auth-interceptor.interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideRouter(routes), // ✅ Use the imported routes
    provideHttpClient(
      withInterceptors([authInterceptor]) // Provide the interceptor
    ),
  ],
}).catch(err => console.error(err));