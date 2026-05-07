import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private baseUrl = environment.api;
  private http = inject(HttpClient);
  private token = "";

  // private getHeaders() {
  //   return new HttpHeaders()
  //   .set('Authorization', `Bearer ${this.token}`)
  //   .set('Content-Type', 'application/json');
  // }

  public obterTodos() {
    return this.http.get<any>(`${this.baseUrl}/users`);
  }

  public async login(email: string, senha: string) {
    const usuario = {
      email,
      senha,
    };

    try {
      const resposta = await firstValueFrom(this.http.post<any>(`${this.baseUrl}/login`, usuario));
      if (resposta) {
        this.token = resposta.token;
      }
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  public setToken(token: string) {
    this.token = token;
  }

  public getToken() {
    return this.token;
  }
}
