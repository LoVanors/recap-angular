import { Injectable } from '@angular/core';
import {Burger} from "./burger";

@Injectable({
  providedIn: 'root'
})
export class BurgerService {

  private _burgers:Burger[]=[
    { id:1,
      name:'Classique',
      ingredients:['Salade','Tomates','Oignons','Haché','Sauce Andalouse'],
      price:5,
      picture:'https://hips.hearstapps.com/hmg-prod/images/turkey-burger-index-64873e8770b34.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*',
      available:true},
    { id:2,
      name:'Montagnard',
      ingredients:['Salade','Oignons caramélisés','Fromage raclette','Haché','Lard fumé','Sauce Poivre'],
      price:19,
      picture:'https://www.adeline-cuisine.fr/wp-content/uploads/2016/11/burger-savoyard-raclette-jambon-fume-maison-recette.jpg',
      available:true}
  ];

  constructor() { }

  getAll(): Burger[]{
    return this._burgers;
  }

  getById(id:number):Burger|undefined{
    return this._burgers.find(b=>b.id===id);
  }

  add(burger:Burger):void{
    burger.id=Math.max(...this._burgers.map(b=>b.id))+1;
    this._burgers.push(burger);
  }

  update(id:number,burger:Burger):void{
    let burgerToUpdate = this._burgers.find(b=>b.id===id);

    if (burgerToUpdate){
      burgerToUpdate.name=burger.name;
      burgerToUpdate.price=burger.price;
      burgerToUpdate.ingredients=burger.ingredients;
      burgerToUpdate.picture=burger.picture;
      burgerToUpdate.available=burger.available;

    }
  }
  updateAvailability(id:number):void{
    let burgerToUdpate=this._burgers.find(b=>b.id===id);

    if (burgerToUdpate){
      burgerToUdpate.available= !burgerToUdpate.available;
    }
  }

  delete(id:number):void{
    this._burgers=this._burgers.filter(b=>b.id !== id);
  }
}
