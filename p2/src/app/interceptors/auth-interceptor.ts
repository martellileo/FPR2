import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { UserService } from '../services/user.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const usuarioService = inject(UserService);
  const token = usuarioService.getToken();

  if (token) {
    const novaRequest = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });
    return next(novaRequest);
  }

  return next(req);
}

