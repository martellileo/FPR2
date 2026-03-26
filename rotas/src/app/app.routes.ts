import { Routes } from '@angular/router';
import { Page1 } from './pages/page1/page1';
import { Page2 } from './pages/page2/page2';

export const routes: Routes = [
    {
        path: 'page1', // url
        // so quando for request
        loadComponent: () => import('./pages/page1/page1').then(p => p.Page1)
        // no init
        // component: Page1 // Classe
    },
    {
        path: 'page2/:id', // recebe parametro
        loadComponent: () => import('./pages/page2/page2').then(p => p.Page2)
        // component: Page2
    }
];
