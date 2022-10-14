import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor() { }
  code=""
  name=""
  designation=""
  gender=""
  comName=""
  salary=""
  comAddress=""
  mobile=""
  email=""
  experience=""
  bloodGroup=""
  dob=""
  

readValues=()=>{
  let data={ 
    "code":this.code,
  "name":this.name,
  "designation":this.designation,
  "gender":this.gender,
  "comName":this.comName,
  "salary":this.salary,
  "comAddress":this.comAddress,
  "mobile":this.mobile,
  "email":this.email,
  "experience":this.experience,
  "bloodGroup":this.bloodGroup,
  "dob":this.dob
  }
  console.log(data)
}

  ngOnInit(): void {
  }

}
