import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dragonballz.interface';
import { DragonBallZService } from '../services/dragonballz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  get listaPersonajes() {
    return this.dbzService.listaPersonajes;
  }

  constructor( private dbzService: DragonBallZService) {}

}
