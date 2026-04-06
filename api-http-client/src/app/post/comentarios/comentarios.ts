import { Component, inject, signal } from '@angular/core';
import { Post } from '../../models/post.model';
import { Api } from '../../services/api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comentarios',
  imports: [],
  templateUrl: './comentarios.html',
  styleUrl: './comentarios.css',
})
export class Comentarios {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private api = inject(Api);

  protected comentarios = signal<Post[]>([]);

  constructor() {
    const id = this.route.snapshot.paramMap.get('id');
      this.obterComentarios(Number(id));
  }

  protected obterComentarios(id: number ) {
    this.api.getCommentsById(Number(id)).subscribe({
      next: (comments) => {
        this.comentarios.set([comments]);
      },
      error: (e) => console.log(e)
    }); 
  }

  protected voltarLista() {
    this.router.navigate(['/posts']);
  }
}
