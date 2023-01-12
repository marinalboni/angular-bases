import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent //todo lo que quiero que se vea fuera de ese modulo (por encima, en el padre, abuelo)
    ],
    imports: [
        CommonModule //terminan en module -> utilizado par ngIf y ngFor
    ]
})
export class HeroesModule { }