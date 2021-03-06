import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const heroes = [
      {id: 1, name: "Mr. Nice"},
      {id: 2, name: "Narco"},
      {id: 3, name: "Bambasto"},
      {id: 4, name: "Celeritas"},
      {id: 5, name: "Magneta"},
      {id: 6, name: "Rubberman"},
      {id: 7, name: "Dynama"},
      {id: 8, name: "Dr. IQ"},
      {id: 9, name: "Magma"},
      {id: 10, name: "Tornado"}    
      ];
      return {heroes};
   }
   genId(heroes: Hero[]): number {
     return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id))+ 1 : 1; 
   }
}
