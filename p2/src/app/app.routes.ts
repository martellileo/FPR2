import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login').then(m => m.Login)
    }
    // {
    //     path: 'dashboard',
    //     // loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard),
    //     canActivate: [AuthGuard]
    // }
];
