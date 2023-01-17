import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dragonballz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() listaPersonajes: Personaje[] = [];

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  agregar(): void {
    if (this.nuevo.nombre.trim().length === 0 || this.nuevo.poder <= 0) {
      return;
    }
    this.listaPersonajes.push(this.nuevo);
    console.log(this.nuevo)
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
  
}
