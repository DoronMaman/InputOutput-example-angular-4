import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chlidtwo',
  templateUrl: './chlidtwo.component.html',
  styleUrls: ['./chlidtwo.component.css']
})
export class ChlidtwoComponent implements OnInit {
  @Input() childTwo;

  constructor() { }

  ngOnInit() {
  }

  childtwo(){
    console.log("child two %o",this.childTwo);
  }

}
