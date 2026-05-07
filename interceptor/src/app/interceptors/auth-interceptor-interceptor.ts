import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

export const authInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const usuarioService = inject(UsuarioService);
  const token = usuarioService.getToken();

  if (token) {
    const novaRequisicao = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });
    return next(novaRequisicao);
  }

  return next(req);
};
