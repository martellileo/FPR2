import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private http = inject(HttpClient);
  private router = inject(Router);
  private userService = inject(UserService)

  public login(){
    console.log("evento botao login")
    this.userService.login()
    this.router.navigate(['/tarefas-list'])
  }
}
