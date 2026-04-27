import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true, 
  imports: [FormsModule], 
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private userService = inject(UserService);
  private router = inject(Router);

  async login(loginForm: NgForm) {
    if (loginForm.valid) {
      
      const user = {
        email: loginForm.value.email,
        password: loginForm.value.password 
      };

      try {
        await this.userService.login(user);
        
        console.log('Login efetuado com sucesso!');
        this.router.navigate(['/vendas']); 
        
      } catch(error) {
        console.error('Erro ao fazer login:', error);
        alert('E-mail ou senha inválidos!');
      }
    }
  }
}