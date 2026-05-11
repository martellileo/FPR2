import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Tarefas } from '../modelos/tarefas';

@Injectable({
  providedIn: 'root',
})
export class TarefasService {
  private url = `${environment.api}/tarefas`;
  private http = inject(HttpClient);

  public obterTodas() {
    return this.http.get<Tarefas[]>(`${this.url}`);
  }

  public remover(id: number) {
    return this.http.delete<Tarefas>(`${this.url}/${id}`)
  }
}
