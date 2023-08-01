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
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
