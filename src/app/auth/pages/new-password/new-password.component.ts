import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params  } from '@angular/router';
import Swal from 'sweetalert2';
import { EspecialistasService } from '../../../services/especialistas.service';




@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit {

  submitted:boolean= false;
  token:string='';

  formNewPassword = this.fb.group(
    {
      password:['',[Validators.required,Validators.minLength(8)]],
      passwordC:['',[Validators.required, Validators.minLength(8)]]     
    }
  );

  constructor(private fb:FormBuilder,
              private especialistasService:EspecialistasService,
              private router:Router,private routeParam:ActivatedRoute) { }

  ngOnInit(): void {
    this.token = this.routeParam.snapshot.paramMap.get('token');
    console.log(this.token)
  }

  campoNoValido(campo:string):boolean{
    return this.submitted&&this.formNewPassword.get(campo).invalid;
  }

  cambiar(){
    this.submitted=true;

    if (!this.formNewPassword.valid){
      return
    }   
    if (!this.camposIguales()){     
      return;
    }
    this.especialistasService.newPassword(this.formNewPassword.value,this.token)
      .subscribe(res=>{
        //navegar a la zona privada (selección de plan)
        Swal.fire('Cambiada','Su password ha sido cambiado con exito','success').then(()=>{
          this.router.navigate(['/auth/login']);
        });

      },(err)=>{
        Swal.fire('Error','Ha ocurrido un error inesperado','error');        
      });
  }

  camposIguales():boolean{
    
    const pass1 = this.formNewPassword.get('password')?.value || '';
    const pass2 = this.formNewPassword.get('passwordC')?.value || '';
    if (pass1!==pass2){
     this.formNewPassword.get('passwordC')?.setErrors({noIguales:true});
      return false;
    }
    
    return true;
  
  }
}
