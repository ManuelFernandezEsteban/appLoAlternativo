import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NewsletterService } from 'src/app/services/newsletter.service';
import { VerificarCompraClienteService } from 'src/app/services/verificar-compra-cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-verificar-compras-especialista',
  templateUrl: './verificar-compras-especialista.component.html',
  styleUrls: ['./verificar-compras-especialista.component.scss']
})
export class VerificarComprasEspecialistaComponent implements OnInit {

  submitted: boolean = false;
  token: string = '';
  formVerificacionEspecialista = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      privacidad: [false, Validators.requiredTrue],
      info_comercial: [false], 
      password:['',[Validators.required, Validators.minLength(8)]]     
    }
  );

  constructor(private routeParam: ActivatedRoute,
              private fb: FormBuilder,             
              private verificarCompraClienteService: VerificarCompraClienteService) { }

  ngOnInit(): void {
    this.token = this.routeParam.snapshot.paramMap.get('token');
  }
  campoValido(campo: string) {
    return this.formVerificacionEspecialista.get(campo)?.invalid || false;
  }

  onSubmit() {

    this.submitted = true;
    if (!this.formVerificacionEspecialista.valid) {
      return;
    }       
    this.verificarCompraClienteService.
      enviarVerificacion(this.formVerificacionEspecialista.value, this.token,'especialista').
        subscribe(res=>{
          Swal.fire("Evento validado", "Has validado el evento correctamente", "success");
          //console.log(res)
          this.formVerificacionEspecialista.reset();

    },(err)=>{
      Swal.fire("Evento no validado", err.error.msg, "error");
    });
  }
}
