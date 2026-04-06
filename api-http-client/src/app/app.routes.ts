import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'post/:id/comentarios',
        loadComponent: () => import('./post/comentarios/comentarios').then(m => m.Comentarios)
    },
    {
        path: 'posts',
        loadComponent: () => import('./post/posts/posts').then(m => m.Posts)
    }
];
