import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BurgerService} from "../../../services/burger.service";
import {Router} from "@angular/router";
import {BurgerApiService} from "../burger-api.service";
import {delay, tap} from "rxjs";

@Component({
  selector: 'app-add-burger-observable',
  templateUrl: './add-burger-observable.component.html',
  styleUrls: ['./add-burger-observable.component.scss']
})
export class AddBurgerObservableComponent {
  burgerForm:FormGroup;
  isError:boolean=false;

  constructor(private _fb : FormBuilder,
              private _burgerService: BurgerApiService,
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
      this._burgerService.add(this.burgerForm.value).subscribe({
        next:()=>{
          tap(()=>this.isError=false)
        },
        error:()=>this.isError=true,
        complete:()=>this._router.navigateByUrl('/observables')
      });
    }else{
      this.burgerForm.markAllAsTouched();
    }
  }
}
