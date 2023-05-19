import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from "@angular/forms";
import { NewsletterService } from 'src/app/services/newsletter.service';
import Swal from 'sweetalert2';
import { ContactoService } from '../../../services/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  submitted:boolean= false;

  formContacto = this.fb.group(
    {
      nombre:['',Validators.required],
      email:['',[Validators.required, Validators.email]],
      privacidad:[false,Validators.requiredTrue],
      info_comercial:[false],
      mensaje:['',[Validators.required,Validators.minLength(10)]],
    }
  );

  constructor(private fb:FormBuilder,
      private contactoService:ContactoService,
      private newsletterService: NewsletterService) { }

  ngOnInit(): void {
  }

  campoValido(campo:string){
    return this.formContacto.get(campo)?.invalid || false;
  }

  onSubmit(){

    this.submitted=true;
    if (!this.formContacto.valid){
      return;
    }   
    //TODO event emiter con formContacto
    //console.log(this.formContacto.value,this.formContacto.valid);
    if (this.formContacto.get('info_comercial').value===true){
      this.newsletterService.postUser(this.formContacto.value).subscribe((res) => {})
    }

    this.contactoService.enviarConsulta(this.formContacto.value).subscribe(res=>{
      Swal.fire('Enviado','Mensaje enviado','success');
    },(err)=>{
      Swal.fire('Error','Mensaje no enviado','error');
    })
    this.formContacto.reset();
    this.submitted=false;
  }
}
