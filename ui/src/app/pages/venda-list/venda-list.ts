import { Component, inject } from '@angular/core';
import { VendaService } from '../../services/venda.service';
import { AsyncPipe, DatePipe } from '@angular/common';
import { Table, TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { Observable } from 'rxjs';
import { Venda } from '../../modelos/venda.modelo';

@Component({
  selector: 'app-venda-list',
  imports: [AsyncPipe, TableModule, DatePipe, IconFieldModule, InputTextModule, InputIconModule],
  templateUrl: './venda-list.html',
  styleUrl: './venda-list.scss',
})
export class VendaList {
  private vendasService = inject(VendaService);
  protected vendas$ = new Observable<Venda[]>(); //normalmente
  // protected vendas$ = this.vendasService.getAll(); //teste
  protected selectedVenda$: any = {};

  constructor() {
    this.obterVendas();
  }

  protected obterVendas() {
    this.vendas$ = this.vendasService.getAll();
  }
}