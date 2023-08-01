import { Component } from '@angular/core';

@Component({
  selector: 'app-bases',
  templateUrl: './bases.component.html',
  styleUrls: ['./bases.component.scss']
})
export class BasesComponent {

  name: string = "Bob"

  eventMsg: string = "Click on the button"

  imgSource: string = "https://picsum.photos/200/300"

  clickMe(): void {
    this.eventMsg = "You clicked me 👁️‍🗨️"
  }

  //pipes

  today: Date=new Date();

  //directives

  isNight:boolean=false;
  toggleDayNight() {
    this.isNight = !this.isNight;
  }
  connected : boolean=false;
  login():void{
    this.connected=true;
  }
  logout():void{
    this.connected=false;
  }
  topWorstDriver : string[]=['Français','Hollandais','Suisse'];

  //Input/Output
  foodType:string = '';
  setFoodType(type: string ):void{
    this.foodType = type;
    this.todayMeal= '';
  }
  todayMeal : string =''

  changeMeal(meal: string):void {
    this.todayMeal=meal;
  }
}
