import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BurgerService} from "../burger.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-burger',
  templateUrl: './add-burger.component.html',
  styleUrls: ['./add-burger.component.scss']
})
export class AddBurgerComponent {
  burgerForm:FormGroup;

  constructor(private _fb : FormBuilder,
              private _burgerService: BurgerService,
              private _router: Router) {
    this.burgerForm=this._fb.group(
      {
        //controlName: [value,[synchrone validators],[async validators]],
        name: [null,[Validators.required,Validators.maxLength(150)]],
        price: [null,[Validators.required,Validators.min(0)]],
        picture: [null,[]],
        available: [false,[]],
        ingredients:this._fb.array([

        ])
      }
    )
  }

  get ingredients():FormArray{
    return this.burgerForm.get('ingredients') as FormArray;
  }

  addIngredients():void{
    this.ingredients.push(this._fb.control(null,[Validators.required]))
  }

  removeIngredient(i:number) {
    this.ingredients.removeAt(i)
  }

  addBurger():void {
    if (this.burgerForm.valid){
      this._burgerService.add(this.burgerForm.value);
      this._router.navigateByUrl('/services')
    }else{
      this.burgerForm.markAllAsTouched();
    }
  }
}
