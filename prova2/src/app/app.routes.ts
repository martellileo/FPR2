import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard'

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import("./pages/login/login").then(m => m.Login)
  },
  {
    path: 'tarefas-list',
    loadComponent: () => import("./pages/tarefas-list/tarefas-list").then(m => m.TarefasList),
    canActivate: [AuthGuard]
  }
];
