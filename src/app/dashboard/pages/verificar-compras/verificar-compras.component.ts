import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NewsletterService } from 'src/app/services/newsletter.service';
import { VerificarCompraClienteService } from '../../../services/verificar-compra-cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-verificar-compras',
  templateUrl: './verificar-compras.component.html',
  styleUrls: ['./verificar-compras.component.scss']
})
export class VerificarComprasComponent implements OnInit {

  submitted: boolean = false;
  token: string = '';
  formVerificacionCliente = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      nombre:['',Validators.required],
      privacidad: [false, Validators.requiredTrue],
      info_comercial: [false],      
    }
  );
  constructor(private routeParam: ActivatedRoute,
    private fb: FormBuilder,
    private newsletterService: NewsletterService,
    private verificarCompraClienteService: VerificarCompraClienteService) { }

  ngOnInit(): void {
    this.token = this.routeParam.snapshot.paramMap.get('token');
    //console.log(this.token)
  }
  campoValido(campo: string) {
    return this.formVerificacionCliente.get(campo)?.invalid || false;
  }
  onSubmit() {

    this.submitted = true;
    if (!this.formVerificacionCliente.valid) {
      return;
    }
    //TODO event emiter con formContacto
    //console.log(this.formContacto.value,this.formContacto.valid);
    if (this.formVerificacionCliente.get('info_comercial').value === true) {
      this.newsletterService.postUser(this.formVerificacionCliente.value).subscribe(
        (res) => {
          Swal.fire("Suscrito", "Te has suscrito correctamente", "success")         
          
        },
        (err) => {          
          Swal.fire("Error", err.error.errors.errors[0].msg || 'Error', "error");
        }
      )
    }
   
    this.verificarCompraClienteService.
      enviarVerificacion(this.formVerificacionCliente.value, this.token,'cliente').
        subscribe(res=>{
          Swal.fire("Evento validado", "has validado el evento correctamente", "success");   
          //console.log(res)
          this.formVerificacionCliente.reset();
    },(err)=>{
      Swal.fire("Evento no validado", err.error.msg, "error");
    });
  }
}
