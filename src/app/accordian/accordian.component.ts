import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss']
})
export class AccordianComponent implements OnInit {
@Input() title!:string;
isExpanded:boolean = true
  constructor() { }

  ngOnInit(): void {
  }
  onclick(){
    this.isExpanded = !this.isExpanded

  }
}
