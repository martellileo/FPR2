import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Pessoa } from '../../modelos/pessoa.model';
import { PessoaService } from '../../services/pessoa.service';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule, JsonPipe],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css',
})
export class TemplateForm {
  // ? é do tipo pessoa ou indefinido
  // ! não permite indefinido, mas significa que em algum momento vai ser utilizada
  // protected pessoa!: Pessoa;
  
  // Inferface
  // protected pessoa: Pessoa = {
  //   nome: '',
  //   email: '',
  // }
  
  // Classe
  protected pessoa: Pessoa = new Pessoa();
  private pessoaService = inject(PessoaService);

  protected salvar(form: NgForm) {
    console.log("salvar form");
    console.log(form);

    if (form.invalid) return;

    console.log(this.pessoa);

    // append com services
    this.pessoaService.adicionar(this.pessoa)
    console.log(this.pessoaService.obterTodos)

    // instanciando nova pessoa
    this.pessoa = new Pessoa();

    // reset no form
    form.reset();
  }
}
