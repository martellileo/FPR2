import { JsonPipe } from '@angular/common';
import { Component, computed, effect, inject, Injector, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [JsonPipe],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal implements OnInit {
  protected exemploCount = signal(0);
  protected exemploObj = signal({
    nome: 'Ana',
    idade: 20,
  });
  protected showComputed = signal(false);

  protected exemploComputed = computed(() => {
    console.log('Exemplo computed.');
    if (this.showComputed()) {
      return this.exemploCount() * 2;
    }
    return 'Não calculado.';
  });

  private injector = inject(Injector);

  constructor() {
    //Effect no construtor não precisa do Injector.
    // effect(() => {
    //   console.log(`Effect count: ${this.exemploCount()}`);
    // });
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    effect(
      () => {
        console.log(`Effect count: ${this.exemploCount()}`);
      },
      { injector: this.injector },
    );
  }

  protected alterar() {
    this.showComputed.update((atual) => !atual);
  }

  protected executar() {
    console.log('Método executar.');

    //Altera o valor do signal.
    // this.exemploCount.set(10);

    //Altera o valor do signal a partir do valor atual.
    this.exemploCount.update((atual) => ++atual);

    // this.exemploObj.set({
    //   nome: 'Jose',
    //   idade: 40
    // });

    this.exemploObj.update((atual) => {
      return {
        ...atual, //espalhamento
        nome: atual.nome.toUpperCase(),
      };
    });
  }

  protected testeFuncao() {
    // console.log('Teste função');
    return 'Teste função';
  }
}
