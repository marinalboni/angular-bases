import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dragonballz.interface';

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

  agregarNuevoPersonage(e) {
    console.log('cu')
  }

}
