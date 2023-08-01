import {Component, OnInit} from '@angular/core';
import {BurgerService} from "../burger.service";
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Burger} from "../burger";

@Component({
  selector: 'app-details-burger',
  templateUrl: './detail-burger.component.html',
  styleUrls: ['./detail-burger.component.scss']
})
export class DetailsBurgerComponent implements OnInit{

  burger:Burger|undefined;
  burgerId:number
  constructor(private _fb : FormBuilder,
              private _activeRoute : ActivatedRoute,
              private _burgerService: BurgerService,
              private _router: Router) {
    this.burgerId=parseInt(this._activeRoute.snapshot.params['id']);
  }

  ngOnInit():void {
    this.burger = this._burgerService.getById(this.burgerId);
  }
}
