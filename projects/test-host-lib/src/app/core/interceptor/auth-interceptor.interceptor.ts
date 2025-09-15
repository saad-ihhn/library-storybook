import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { inject } from '@angular/core';
import { LibLoadingService, LibToastService } from '@saad-ihhn/ihhn-host-lib/services'; // Use the improved loading service with Signals
import { IApiResponse } from '@saad-ihhn/ihhn-host-lib/interface';

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  const $loadingService = inject(LibLoadingService); 
  const $toastService = inject(LibToastService);

  // Clone the request and set credentials (cookies)
  const authReq = req.clone({
    // withCredentials: true, // Ensures cookies are sent with the request
  });

  // Show loading indicator
  $loadingService.show();
  return next(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
       let message = 'An unexpected error occurred.';

      if (error instanceof HttpErrorResponse) {
        // Handle API-wrapped error
        const apiMessage =
          error.error?.error ??
          error.error ??
          error;

          if (apiMessage.message) {
            message = apiMessage.message || 'Network error. Please check your connection.';
          }else {
            message = normalizeHttpError(error).message;
          }

      }
      $toastService.error(message, '', 3000);
      const customError = error.error as IApiResponse<null> || { error: 'Unknown error' };
      return throwError(() => customError.error);
    }),
    finalize(() => {
      $loadingService.hide();
    })
  );
};


function normalizeHttpError(error: HttpErrorResponse): Error {
  switch (error.status) {
    case 0:
      return new Error('Network error. Please check your connection.');
    case 401:
      return new Error( 'Unauthorized request.');
    case 404:
      return new Error('Resource not found.');
    case 500:
      return new Error('Internal server error.');
    default:
      return new Error(error.message ?? 'Unexpected error occurred.');
  }
}
