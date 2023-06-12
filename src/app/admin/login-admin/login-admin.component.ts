import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EspecialistasService } from 'src/app/services/especialistas.service';
import { RespuestaToken } from '../../interfaces/respuesta-token.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent {

  submitted: boolean = false;
  loading: boolean = false;

  formAdminLogin = this.fb.group({
    password: ['', [Validators.required, Validators.minLength(8)]],
    email: ['', [Validators.required, Validators.email]]
  })

  constructor(private fb: FormBuilder,
              private router: Router,
              private especialistaService:EspecialistasService) { }

  campoNoValido(campo: string): boolean {
    return this.submitted && this.formAdminLogin.get(campo).invalid;
  }

  onLogin(){
    this.submitted=true;
    if (!this.formAdminLogin.valid){
      return;
    }
    this.loading=true;
    this.especialistaService.loginEspecialista(this.formAdminLogin.value)
      .subscribe((res:RespuestaToken)=>{
        this.router.navigateByUrl('admin/admin');
      },(error)=>{
        this.loading=false;
        Swal.fire('Error',error.error.error,'error');
      });

  }

  forgotPassword(){}

}
