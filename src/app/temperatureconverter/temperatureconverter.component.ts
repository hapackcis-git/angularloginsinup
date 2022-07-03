import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-temperatureconverter',
  templateUrl: './temperatureconverter.component.html',
  styleUrls: ['./temperatureconverter.component.css']
})
export class TemperatureconverterComponent implements OnInit {

tempform!:FormGroup;
result:any;
  constructor() { }

  ngOnInit(): void {
    this.tempform=new FormGroup({
      cel:new FormControl(''),
      fah:new FormControl('')
    })
  }


  celtofah(data:any){
    this.result=data.cel*9/5 + 32;
    this.tempform.controls['fah'].setValue(this.result);
  }
  fahtocel(data:any){
    this.result=(data.fah-32)*5/9;
    this.tempform.controls['cel'].setValue(this.result)
  }
}
