import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroeModel } from '../models/heroe.model';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url = 'http://localhost:3000/api/heroes';

  constructor( private http: HttpClient ) { }

  crearHeroe( heroe ){
    return this.http.post( this.url, heroe )
  }

  actualizarHeroe( heroe: HeroeModel ){
    const heroeTemp = {
      ...heroe
    };

    //delete heroeTemp._id;

    return this.http.put(`${this.url}/${heroe._id}`, heroeTemp );
  }

  borrarHeroe( id: string ){
    return this.http.delete(`${this.url}/${id}`);
  }

  getHeroe( id: string ){
    return this.http.get(`${this.url}/${id}`);
  }

  getHeroes(){
    return this.http.get(this.url)
      .pipe(
        map( this.crearArreglo )
      )
  }

  private crearArreglo( heroesObj: object ){
    const HEROES: HeroeModel[] = [];

    if(heroesObj === null) { return []; }

      Object.keys( heroesObj ).forEach( key => {

        const HEROE: HeroeModel = heroesObj[key]

        HEROES.push( HEROE );

      } )

    return HEROES;
  }

}
