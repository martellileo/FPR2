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

    // dynamic data
    // this.router.navigate(['/page2/1'], {state: pessoa})    
  
    // query params
    // http://localhost:4200/page2/1?name=Leo&idade=20
    this.router.navigate(['/page2/1'], {
      queryParams: {
        nome: "Leo",
        idade: 20
      }
    })
  }

}
