import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BasesComponent} from "./bases/bases.component";
import {ObservablesComponent} from "./observables/observables.component";
import {ServicesComponent} from "./services/services.component";
import {AddBurgerComponent} from "./services/add-burger/add-burger.component";
import {DetailsBurgerComponent} from "./services/detail-burger/details-burger.component";
import {EditBurgerComponent} from "./services/edit-burger/edit-burger.component";

const routes: Routes = [
  { path : 'bases', component : BasesComponent},
  { path : 'services', component : ServicesComponent},
  { path : 'observables', component : ObservablesComponent},
  { path : 'burgers/add', component : AddBurgerComponent},
  { path : 'burgers/:id', component : DetailsBurgerComponent},
  { path : 'burgers/edit/:id', component : EditBurgerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
