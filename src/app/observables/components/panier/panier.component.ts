import {Component, OnInit} from '@angular/core';
import {Burger} from "../../../services/burger";
import {PanierService} from "../../services/panier.service";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent {
  cart!:Burger[];
  cost:number=0;

  constructor(private _panierServ:PanierService) {
    this.cart=_panierServ.cart;
  }


}
