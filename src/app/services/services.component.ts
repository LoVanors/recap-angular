import {Component, OnInit} from '@angular/core';
import {Burger} from "./burger";
import {BurgerService} from "./burger.service";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  burgerList: Burger[]=[];
  showSchem=false;

  constructor(private _burgerService: BurgerService) {
  }

  ngOnInit() {
    this.burgerList = this._burgerService.getAll();
  }

  delete(id: number):void {
    this._burgerService.delete(id);
    this.burgerList=this._burgerService.getAll();
  }
}
