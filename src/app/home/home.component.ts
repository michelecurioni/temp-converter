import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() firstValue: number = 0;
  secondValue = 0

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(event: any) {
     return event.target.player.value;
  }

  convert(){
    console.log("First Value = " + this.firstValue);
  }

}
