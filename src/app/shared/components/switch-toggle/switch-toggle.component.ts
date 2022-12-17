import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-switch-toggle',
  templateUrl: './switch-toggle.component.html',
  styleUrls: ['./switch-toggle.component.scss']
})
export class SwitchToggleComponent implements OnInit {

  @Output() onChange=new EventEmitter<boolean>();

  isChecked:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  onCheck(){
    this.isChecked=!this.isChecked;
    this.onChange.emit(this.isChecked);
  }

}
