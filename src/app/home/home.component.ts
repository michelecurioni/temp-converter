import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() firstValue: number = 0;
  secondValue = 0
  selectedUnitFrom: string = 'celsius';
  selectedUnitTo: string = 'fahrenheit';

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(event: any) {
     return event.target.player.value;
  }

  convert(){
    let tempValue:number = 0;
    switch(this.selectedUnitTo) {
       case 'fahrenheit': {
         switch(this.selectedUnitFrom) {
            case 'celsius': {
               this.secondValue = this.fromCelsiusToFahrenheit(this.firstValue);
               break;
            }
          }
          break;
       }
       default: {
          //statements;
          break;
       }
    }
    console.log("First Value = " + this.firstValue);
  }



  //event handler for the select element's change event
  unitFromChangeHandler (event: any) {
    //update the ui
    this.selectedUnitFrom = event.target.value;
    console.log("Selected From = " + this.selectedUnitFrom);
  }

  //event handler for the select element's change event
  unitToChangeHandler (event: any) {
    //update the ui
    this.selectedUnitTo = event.target.value;
    console.log("Selected To = " + this.selectedUnitFrom);
  }

  fromCelsiusToFahrenheit(value : number) : number {
    let formula:string = "(°C × 9/5) + 32 = °F"

    return (value * 9/5) + 32;
  }


}
