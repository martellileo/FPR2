import { Component, inject } from '@angular/core';
import { VendasService } from '../../services/vendas.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-vendas-list',
  imports: [],
  templateUrl: './vendas-list.html',
  styleUrl: './vendas-list.css',
})
export class VendasList {
  private vendasService = inject(VendasService);

  constructor() {
    this.vendasService.obterTodas().pipe(take(1)).subscribe({
      next: (vendas) => {
        console.log(vendas);  
      }
    })
  }
}
