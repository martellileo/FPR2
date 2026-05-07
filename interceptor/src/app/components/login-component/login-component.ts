import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login-component',
  imports: [FormsModule], 
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {
  private usuarioService = inject(UsuarioService);

  email = '';
  senha = '';

  constructor() {

  }

  protected async login() {
    if (!this.email || !this.senha) {
      console.log("Preencha e-mail e senha");
      return;
    }

    const resposta = await this.usuarioService.login(this.email, this.senha);
    
    if (resposta) {
      console.log("Login realizado com sucesso");
      // redirect para outra pagina provavelmente a home

      //testando rota privada
      // listar os usuarios
      this.usuarioService.obterTodos().subscribe({
        next: (usuarios) => {
          console.log(usuarios);
        }
      })

    } else {
      console.log("Login e/ou senha inválidos");
    } 
  }
}