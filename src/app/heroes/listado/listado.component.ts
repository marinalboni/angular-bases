import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Scarlet Witch'];
  borrado: string = '' ;

  borrarHeroe(): void {
    this.borrado = this.heroes.pop() || '';
  }
}