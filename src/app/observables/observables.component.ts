import { Component } from '@angular/core';
import {catchError, delay, EMPTY, interval, Observable, of, startWith, switchMap, tap} from "rxjs";
import {BurgerService} from "../services/burger.service";
import {BurgerApiService} from "./services/burger-api.service";
import {Burger} from "../services/burger";
import {PanierService} from "./services/panier.service";

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent {

  obsCold$ = of( 1,2,3,4,5 );

  burgers$?:Observable<Burger[]>
  lastReception?: Date;

  constructor(private _burgerService:BurgerApiService,
              private _panierService:PanierService) {
    this.demoSub();

    this.burgers$ = interval(60000).pipe(
      startWith(0),
      switchMap((data)=> _burgerService.getBurgers()), //à chaque émission, transforme
      delay(1000), //ajoute un délai à chaque émission 'next'
      tap((data)=> this.lastReception = new Date() ), //
      catchError((err)=> {
        console.warn(err);
        return EMPTY
      })
    )

    // this.burgers$=_burgerService.getBurgers().pipe(
    //   delay(1000),
    //   tap((data)=>console.log(data)),
    //   catchError((err)=> {
    //     console.warn(err);
    //     return EMPTY
    //   })
    // );
  }

  demoSub(){
    this.obsCold$.subscribe( {
      next:(data:number)=>console.log(data),
      error:(error)=>console.log(error),
      complete: ()=> console.log("fin")
    } )
  }

  addToCart(selectedBurger:Burger) {
    this._panierService.addToCart(selectedBurger);
  }
}
