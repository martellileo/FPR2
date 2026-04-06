import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Api } from './services/api';
import { Post } from './models/post.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('api-http-client');
  private router = inject(Router);
  private api = inject(Api);

  protected listarPosts() {
    this.router.navigate(['/posts']);
  }
}
