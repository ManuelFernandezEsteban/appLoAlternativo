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

  formLogin = this.fb.group(
    {
      password:['12345678',Validators.required],
      email:['test100f@gmail.com',[Validators.required, Validators.email]]     
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
    this.especialistaService.loginEspecialista(this.formLogin.value)
      .subscribe((res:RespuestaToken)=>{
        //navegar al zona privada

        console.log(res.especialista);
        if (res.especialista.PlaneId===1){
          this.router.navigateByUrl('auth/principal/planes');
        }else{
          this.router.navigateByUrl('auth/principal');
        }

        
        

      },(err)=>{
        //console.log(err);
        Swal.fire('Error',err.error.msg,'error');
      });



    /*
    const user = this.formLogin.get('email')?.value || '';
    const pass = this.formLogin.get('password')?.value || '';
    this.dataEspecialistaService.getEspecialistas<Especialistas>().subscribe(res=>{
      const especialista:Especialista=res.especialistas[1];
      this.dataEspecialistaService.setEspecialista(especialista);
      this.http.navigate(['auth/principal']);
    })
    

    this.formLogin.reset();
    this.submitted=false;
  

    //const id = this.userService.login(user,pass);


   // console.log(id)
*/
    

  }

}
