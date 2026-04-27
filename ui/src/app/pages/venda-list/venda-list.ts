import { Component, inject } from '@angular/core';
import { VendaService } from '../../services/venda.service';
import { AsyncPipe } from '@angular/common';
import { Table, TableModule } from 'primeng/table';

@Component({
  selector: 'app-venda-list',
  imports: [AsyncPipe, TableModule],
  templateUrl: './venda-list.html',
  styleUrl: './venda-list.scss',
})
export class VendaList {
  private vendasService = inject(VendaService);
  // protected vendas$ = new Observable<Venda[]>(); //normalmente
  protected vendas$ = this.vendasService.getAll(); //teste

  constructor() {

  }
}
