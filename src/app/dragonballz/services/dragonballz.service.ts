import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dragonballz.interface";


@Injectable()
export class DragonBallZService {

    private _listaPersonajes: Personaje[] = [
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
    ];

    get listaPersonajes(): Personaje[] {
        return [...this._listaPersonajes];
    }

    constructor() {}

    agregarPersonaje( personaje: Personaje): void {
        this._listaPersonajes.push( personaje )
    }

}