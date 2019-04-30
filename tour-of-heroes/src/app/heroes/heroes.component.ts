import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
//import { HEROES } from'../mock-heroes'
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService) { } 


  // List of heroes imported from mock-heroes.ts
  // heroes = HEROES

  // List of heroes imported from hero service (connects to mock-heroes.ts)
  heroes: Hero[];
  
  //// Selected hero from list
  // selectedHero: Hero;
  // onSelect(hero: Hero): void{
  //   this.selectedHero = hero;
  // }
 
  //// Single Hero instance
  // hero: Hero = {
  //   id: 1,
  //   name: "Windstorm"
  // }
  
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }

  add(name: string) : void {
    name = name.trim();
    if(!name){return;}
    this.heroService.addHero({ name } as Hero)
    .subscribe(hero => {this.heroes.push(hero)})
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  ngOnInit() {
    this.getHeroes();
  }
}
