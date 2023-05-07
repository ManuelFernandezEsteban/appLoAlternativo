import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
import { EspecialistasService } from '../../../services/especialistas.service';
import Swal from 'sweetalert2';
import { RespuestaToken } from '../../../interfaces/respuesta-token.interface';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted:boolean= false;
  loading:boolean=false;

  formLogin = this.fb.group(
    {
      password:['',[Validators.required,Validators.minLength(8)]],
      email:['',[Validators.required, Validators.email]]     
    }
  );

  constructor(private fb:FormBuilder,
              private especialistaService:EspecialistasService,
              private router:Router) { }

  ngOnInit(): void {
  }
  campoNoValido(campo:string):boolean{
    return this.submitted&&this.formLogin.get(campo).invalid;
  }
  onLogin(){

    this.submitted=true;
    if (!this.formLogin.valid){
      return;
    }
    this.loading=true;
    this.especialistaService.loginEspecialista(this.formLogin.value)
      .subscribe((res:RespuestaToken)=>{
        //navegar al zona privada
        //console.log(res.especialista);
        this.loading=false;
        if (res.especialista.PlaneId===1){
          this.router.navigateByUrl('auth/principal/planes');
        }else{
          this.router.navigateByUrl('auth/principal');
        }

      },(error)=>{
       // console.log(error);
        this.loading=false;
        Swal.fire('Error',error.error.error,'error');
      });   

  }

  forgotPassword(){
    if (this.formLogin.get('email').value.trim()===''){      
      return;
    }
    this.especialistaService.forgotEspecialista(this.formLogin.value)
    .subscribe(res=>{      
      Swal.fire('Enviado','Revisa tu correo, hemos enviado un enlace a tu correo de registro','success');
    },(err)=>{      
      Swal.fire('Error','Algo no ha ido bien','error');
    });


  }

}
