import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected titulo: string = "Aula 01";
  protected valor = 0;
  protected nomes = ["Leo", "Natalia"]

  protected getSubtitulo() {
    return "Novo subtitulo";
  }

  protected exibir(){
    return console.log("metodo exibir");
  }

  //obrigado a usar this. dentro de uma função
  protected adicionar() {
    this.valor++;
  }

  protected diminuir() {
    this.valor--;
  }

  protected removerPrimeiro(){
    this.nomes.shift()
  }

  protected removerUltimo(){
    this.nomes.pop()
  }

  protected removerSelecionado(id: number) {
    this.nomes.splice(id,1);
  }
}
