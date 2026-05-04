import { Component, inject } from '@angular/core';
import { VendaService } from '../../services/venda.service';
import { AsyncPipe, DatePipe } from '@angular/common';
import { Table, TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { lastValueFrom, Observable } from 'rxjs';
import { Venda } from '../../modelos/venda.modelo';

@Component({
  selector: 'app-venda-list',
  imports: [AsyncPipe, TableModule, DatePipe, IconFieldModule, InputTextModule, InputIconModule, ButtonModule],
  templateUrl: './venda-list.html',
  styleUrl: './venda-list.scss',
})
export class VendaList {
  private vendasService = inject(VendaService);
  protected vendas$ = new Observable<Venda[]>(); //normalmente
  // protected vendas$ = this.vendasService.getAll(); //teste
  protected selectedVenda: any = null;

  constructor() {
    this.obterVendas();
  }

  protected obterVendas() {
    this.vendas$ = this.vendasService.getAll();
  }

  // arrumar isso aqui e mostrar msg na tela que o id foi apagado
  protected async excluirSelectedVenda() {
    if (this.selectedVenda) {
      console.log('id excluido:', this.selectedVenda.id);
      await lastValueFrom(this.vendasService.delete(this.selectedVenda.id));
    }
    
    this.selectedVenda = null;
    this.obterVendas();
  }
}