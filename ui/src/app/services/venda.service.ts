import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core'; 
import { Venda } from '../modelos/venda.modelo';

@Injectable({
  providedIn: 'root',
})
export class VendaService {
  private baseUrl = environment.api;
  private http = inject(HttpClient);
  
  public getAll(){
    return this.http.get<Venda[]>(`${this.baseUrl}/vendas`);
  }

  public delete(id: number) {
    return this.http.delete(`${this.baseUrl}/vendas/${id}`);
  }
}
