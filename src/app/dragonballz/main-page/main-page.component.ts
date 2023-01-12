import { Component } from '@angular/core';

interface Personaje {
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  listaPersonajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 10000
    },
    {
      nombre: 'Trunks',
      poder: 8000
    }
  ]

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  agregar(): void {
    if (this.nuevo.nombre.trim().length === 0 || this.nuevo.poder <= 0) {
      return;
    }
    this.listaPersonajes.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

  cambiarNombre(e: any): void {
    this.nuevo.nombre = e.target.value;
  }

}
