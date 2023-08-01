import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {BasesComponent} from './bases/bases.component';
import {ServicesComponent} from './services/services.component';
import {ObservablesComponent} from './observables/observables.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EnfantComponent} from './bases/components/enfant/enfant.component';
import {AddBurgerComponent} from './services/add-burger/add-burger.component';
import { DetailsBurgerComponent } from './services/detail-burger/details-burger.component';
import {CommonModule} from "@angular/common";
import { EditBurgerComponent } from './services/edit-burger/edit-burger.component';
import {HttpClientModule} from "@angular/common/http";
import {BurgerApiService} from "./observables/services/burger-api.service";
import { AddBurgerObservableComponent } from './observables/services/add-burger-observable/add-burger-observable.component';
import { ThermometreComponent } from './observables/components/thermometre/thermometre.component';
import {PanierComponent} from "./observables/components/panier/panier.component";
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BasesComponent,
    ServicesComponent,
    ObservablesComponent,
    EnfantComponent,
    AddBurgerComponent,
    DetailsBurgerComponent,
    EditBurgerComponent,
    AddBurgerObservableComponent,
    ThermometreComponent,
    PanierComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BurgerApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
