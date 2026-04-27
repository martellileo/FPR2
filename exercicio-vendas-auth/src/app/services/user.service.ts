import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private logged = false;


  private token: null | string = null;
  private url = `${environment.api}`;
  private http = inject(HttpClient);

  public async login(user: {email: string, password: string}) { 
    this.token = null;
    
    const response = await firstValueFrom(this.http.post<any>(`${this.url}/login`, user));
    
    if (response && typeof response.accessToken === 'string') {
      this.token = response.accessToken;
      localStorage.setItem('token', response.accessToken);
      this.logged = true;
    }
  }

  getToken() {
    return this.token || localStorage.getItem('token');
  }

  isLogged() {
    return this.logged;
  }
}