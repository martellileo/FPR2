import { Injectable } from '@angular/core';
import { Pessoa } from '../modelos/pessoa.model';

@Injectable({
  providedIn: 'root',
})
export class PessoaService {
  private pessoas: Pessoa[] = [];

  public adicionar(pessoa: Pessoa){
    this.pessoas.push(pessoa);
  }

  public obterTodos(){
    return this.pessoas;
  }

}
