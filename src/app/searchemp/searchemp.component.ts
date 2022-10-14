import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchemp',
  templateUrl: './searchemp.component.html',
  styleUrls: ['./searchemp.component.css']
})
export class SearchempComponent implements OnInit {

  constructor() { }
  empCode=""

  readValue=()=>{
    let data={
      "empCode":this.empCode
    }
    console .log(data)
  }

  ngOnInit(): void {
  }

}
