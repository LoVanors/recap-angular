import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Burger} from "../../services/burger";
import {map, Observable, switchMap, tap} from "rxjs";
import {PanierService} from "./panier.service";

@Injectable()
export class BurgerApiService {

  private readonly BASE_URL= 'http://localhost:3000/burgers';

  constructor(private _client:HttpClient,
              private _panierServ:PanierService) { }

  getBurgers():Observable<Burger[]>{
    return this._client.get<Burger[]>(this.BASE_URL);
  }

  getBurgerById(id:number):Observable<Burger|undefined>{
    return this.getBurgers().pipe(
      map(burger =>burger.find(b=>b.id===id))
    );
  }
  add( burger:Burger):Observable<Burger> {
    return this._client.post<Burger>(this.BASE_URL,burger);
  }
}
