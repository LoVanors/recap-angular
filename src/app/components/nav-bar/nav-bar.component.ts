import { Component } from '@angular/core';
import {ThermometreService} from "../../observables/services/thermometre.service";
import {PanierService} from "../../observables/services/panier.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  totalCost!:number;
  private temperature!:number;
  bgClass:string='bg-gray'

  constructor(private _thermoServ:ThermometreService,
              private _panierServ:PanierService) {
    _thermoServ.temperatureSub.subscribe((temp:number):void =>{
      if (temp>this.temperature){
        this.bgClass='bg-red'
      }else if(temp<this.temperature){
        this.bgClass='bg-blue'
      }else{
        this.bgClass='bg-gray'
      }
      this.temperature=temp;
    })

    this._panierServ.cost$.subscribe(total=>this.totalCost=total);
  }



}
