import { Component, inject } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TarefasService } from '../../services/tarefas.service';
import { Tarefas } from '../../modelos/tarefas';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-tarefas-list',
  imports: [AsyncPipe, TableModule, Button],
  templateUrl: './tarefas-list.html',
  styleUrl: './tarefas-list.scss',
})
export class TarefasList {
  private tarefasService = inject(TarefasService);
  protected tarefas$: Observable<Tarefas[]> = new Observable<Tarefas[]>();
  protected selecionado!: Tarefas;

  constructor() {
    this.tarefas$ = this.tarefasService.obterTodas();
  }

  protected excluir() {
    this.tarefasService.remover(this.selecionado.id).subscribe({
      next: () => {
        this.tarefas$ = this.tarefasService.obterTodas();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
