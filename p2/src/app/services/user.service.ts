import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);
  private baseUrl = environment.api;
  private token: string | null = localStorage.getItem('access_token');
  private logged: boolean = false;

  public obterTodos() {
    return this.http.get<any>(`${this.baseUrl}/users`);
  }

  public async login(email: string, password: string) {
    const usuario = {
      email,
      password,
    };

    try {
      const resposta = await firstValueFrom(this.http.post<any>(`${this.baseUrl}/login`, usuario));
      
      if (resposta && resposta.accessToken) { 
        this.setToken(resposta.accessToken);
        return true;
      }
      return false;
    } catch (e) {
      console.error('Erro no login:', e);
      return false;
    }
  }

  public setToken(token: string) {
    this.token = token;
    localStorage.setItem('access_token', token);
  }

  public getToken() {
    return this.token;
  }

  public logout() {
    this.token = null;
    this.logged = false
    localStorage.removeItem('access_token');
  }

  public isLogged(): boolean {
    return !!this.token;
  }
}
