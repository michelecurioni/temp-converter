import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() firstValue: number = 0;
  secondValue = 0
  secondValueText:string = '0'
  selectedUnitFrom: string = 'celsius';
  selectedUnitTo: string = 'celsius';

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(event: any) {
     return event.target.player.value;
  }

  //converts the value from firstValue text field and populates the secondValueText based on the
  //selected units
  convert(){
    let intermediateValue:number = this.firstValue;
    if (this.selectedUnitFrom === this.selectedUnitTo) {
        this.secondValue = this.firstValue;
        this.secondValueText = ''+this.secondValue;
        return;
    }

    switch(this.selectedUnitFrom) {
       case 'fahrenheit': {
         intermediateValue = this.fromFahrenheitToCelsius(this.firstValue);
         break;
       }
       case 'celsius': {
         intermediateValue = this.firstValue;
         break;
       }
       default: {
          //statements;
          console.log('no from unit');
          break;
       }
    }

    console.log("Interm Value = " + intermediateValue);

    switch(this.selectedUnitTo) {
       case 'fahrenheit': {
         this.secondValue = this.fromCelsiusToFahrenheit(intermediateValue);
         break;
       }
       case 'celsius': {
         this.secondValue = intermediateValue;
         break;
       }
       default: {
          //statements;
          console.log('no to unit');
          break;
       }
    }
    this.secondValueText = ''+this.secondValue;
    console.log("Second Value = " + this.secondValue);
  }



  //event handler for the select element's change event
  unitFromChangeHandler (event: any) {
    //update the ui
    this.selectedUnitFrom = event.target.value;
    this.secondValue = 0
    console.log("Selected From = " + this.selectedUnitFrom);
  }

  //event handler for the select element's change event
  unitToChangeHandler (event: any) {
    //update the ui
    this.selectedUnitTo = event.target.value;
    this.secondValueText = ''
    console.log("Selected To = " + this.selectedUnitTo);
  }

  fromCelsiusToFahrenheit(value : number) : number {
    let formula:string = "(°C × 9/5) + 32 = °F"

    return (value * 9/5) + 32;
  }

  fromFahrenheitToCelsius(value : number) : number {
    return (value - 32)*5/9;
  }
}
