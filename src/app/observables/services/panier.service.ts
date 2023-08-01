import { Injectable } from '@angular/core';
import {Burger} from "../../services/burger";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private _cart:Burger[]=[];
  private _totalSub:BehaviorSubject<number>=new BehaviorSubject<number>(0);
  constructor() { }

  get cart(): Burger[]{
    return this._cart;
  }

  get cost$(){
    return this._totalSub.asObservable();
  }

  addToCart(selectedBurger:Burger){
    this._cart.push(selectedBurger);
    let total=0;
    for (const b of this._cart){
      total+=+b.price;
    }
    this._totalSub.next(total);
  }

  removeFromCart(selectedBurgerId:number){
    this._cart=this._cart.filter(b=>b.id!==selectedBurgerId);
  }
}
