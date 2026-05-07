import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./components/login-component/login-component').then(m => m.LoginComponent)
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];
