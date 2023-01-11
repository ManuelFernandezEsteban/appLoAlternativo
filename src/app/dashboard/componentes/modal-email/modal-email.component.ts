import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceModalEventoService } from 'src/app/services/service-modal-evento.service';
import { RespuestaEmail } from '../../../interfaces/respuestaEmail';

@Component({
  selector: 'app-modal-email',
  templateUrl: './modal-email.component.html',
  styleUrls: ['./modal-email.component.scss']
})
export class ModalEmailComponent implements OnInit {


  @Output()close=new EventEmitter<RespuestaEmail>();

  submitted:boolean=false;

  formEmail = this.fb.group(
    {

      email:['',[Validators.required, Validators.email]],

    }
  );

  constructor(private serviceModalEventoService: ServiceModalEventoService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
 

  public get email() : boolean {
    return this.formEmail.get('email')?.invalid || false;
  }
  onSubmit(){
    //TODO descargar revista guardar mail si no está en la base de datos
    this.submitted=true;
    if(!this.formEmail.valid){
      return;
    }

    const mail = this.formEmail.get('email')?.value?.trim() || '';

    this.close.emit({ok:true,mail:mail})
  }

  cancelar(){
    this.submitted=false;
    this.close.emit({ok:true,mail:''})
  }
}
