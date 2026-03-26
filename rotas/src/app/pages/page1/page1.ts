import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-page1',
  imports: [RouterLink],
  templateUrl: './page1.html',
  styleUrl: './page1.css',
})
export class Page1 {

  private router = inject(Router)

  protected redirecionar() {
    const pessoa = {
      nome: 'Telli',
      idade: 20,
      endereco: "Rua teste, 100"
    }

    this.router.navigate(['/page2', 100], {state: pessoa})    
  }

}
