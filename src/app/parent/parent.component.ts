import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent  {

  name:string="harish";

  status:boolean=true;

  @ViewChild("myvar")
  ch!:ChildComponent;

  hpara(){
    this.ch.hidepara();
  }

  hide(val:boolean){
    this.status=val;
  }

}
