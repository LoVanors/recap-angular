import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BasesComponent} from "./bases/bases.component";
import {ObservablesComponent} from "./observables/observables.component";
import {ServicesComponent} from "./services/services.component";
import {AddBurgerComponent} from "./services/add-burger/add-burger.component";
import {DetailsBurgerComponent} from "./services/detail-burger/details-burger.component";
import {EditBurgerComponent} from "./services/edit-burger/edit-burger.component";
import {
  AddBurgerObservableComponent
} from "./observables/services/add-burger-observable/add-burger-observable.component";
import {ThermometreComponent} from "./observables/components/thermometre/thermometre.component";
import {PanierComponent} from "./observables/components/panier/panier.component";


const routes: Routes = [
  { path : 'bases', component : BasesComponent},
  { path : 'services', component : ServicesComponent},
  { path : 'observables/thermometre', component : ThermometreComponent},
  { path : 'observables', component : ObservablesComponent},
  { path : 'observables/burger/add', component: AddBurgerObservableComponent},
  { path : 'burgers/add', component : AddBurgerComponent},
  { path : 'burgers/:id', component : DetailsBurgerComponent},
  { path : 'burgers/edit/:id', component : EditBurgerComponent},
  { path : 'panier', component : PanierComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
