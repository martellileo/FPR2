import { Component, inject, OnInit, signal } from '@angular/core';
import { VendasService } from '../../services/vendas.service';
import { take } from 'rxjs';
import { VendasTable } from "../../components/vendas-table/vendas-table";

@Component({
  selector: 'app-vendas-list',
  imports: [VendasTable],
  templateUrl: './vendas-list.html',
  styleUrl: './vendas-list.css',
})
export class VendasList implements OnInit{
  private vendasService = inject(VendasService);

  protected vendas = signal<any[]>([]);

  constructor() {}

  ngOnInit() {
    this.vendasService.obterTodas().subscribe((dados) => {
      this.vendas.set(dados);
    });
  }
}
