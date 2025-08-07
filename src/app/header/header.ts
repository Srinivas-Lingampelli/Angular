import { Component, Input, Output,EventEmitter } from '@angular/core';
// import { EventEmitter } from 'node:stream';



@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  @Input() childData:string ="";

  @Input() num:string="";
@Output() customEmiter = new EventEmitter<string>(); // or number, or a custom interface



@Input() pdata:string="";
  message:string="data from Child->P";

  passtoParent()
{
  this.message=this.pdata;
  this.customEmiter.emit(this.message);
}


templateRefData="Hello this is Template REference Data";


// -------------------------------ViewChild ---------------------


data="Demo of viewChild comp commu";

passToParent()
{
  return this.data;
}





}
