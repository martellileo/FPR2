import { Component, inject, signal } from '@angular/core';
import { Post } from '../../models/post.model';
import { Router, RouterLink } from '@angular/router';
import { Api } from '../../services/api';

@Component({
  selector: 'app-posts',
  imports: [RouterLink],
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class Posts {
  private api = inject(Api);
  protected posts = signal<Post[]>([]);
  private router = inject(Router)

  constructor() {
    this.obterPosts();
  }

  protected obterPosts() {
    this.api.obterPosts().subscribe({
      //sucesso
      next: (posts) => {
        console.log('2222')
        this.posts.set(posts);
      },
      //erro
      error: (e) => {
        console.log(e)
      }
    })
    console.log('3333')
  }

  protected comentarioById(id: number) {
    this.router.navigate([`/post/${id}/comentarios`]);
  } 

}
