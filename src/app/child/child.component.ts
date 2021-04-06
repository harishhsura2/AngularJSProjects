import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {
  @Input()
  n!:string;

  @Output()
  emitter= new EventEmitter<boolean>();

 flag:boolean=true;

 hidepara(){
   this.flag=false;
 }
 hideParent(){
  this.emitter.emit(false);
 }

}
