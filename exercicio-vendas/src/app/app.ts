import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VendasList } from "./pages/vendas-list/vendas-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, VendasList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('exercicio-vendas');
}
