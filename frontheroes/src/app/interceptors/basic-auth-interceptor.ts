import { HttpInterceptorFn } from '@angular/common/http';

export const basicAuthInterceptor: HttpInterceptorFn = (req, next) => {

  const username = 'alex';
  const password = '1234';

  const credentials = btoa(`${username}:${password}`);

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Basic ${credentials}`
    }
  });

  return next(authReq);
};
