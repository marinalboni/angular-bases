import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dragonballz.interface';
import { DragonBallZService } from '../services/dragonballz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Marina',
    poder: 100
  };

  constructor() {}

}
