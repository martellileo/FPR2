import { JsonPipe } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-vendas-table',
  imports: [],
  templateUrl: './vendas-table.html',
  styleUrl: './vendas-table.css',
})
export class VendasTable {
  public dados = input<any[]>([]);
}
