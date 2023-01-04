import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceModalEventoService {

  showDialog:boolean=false;
  showDialogRevista:boolean=false;
  constructor() { }

  closeDialog(){
    this.showDialog=false;
  }
  openDialog(){
    this.showDialog=true;
  }
}
