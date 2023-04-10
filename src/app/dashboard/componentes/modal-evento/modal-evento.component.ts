import { Component, Input, OnInit } from '@angular/core';
import { IEvento } from 'src/app/interfaces/eventos';
import { InfoDireccionModal } from 'src/app/interfaces/infoDireccionModal';
import { InfoModal } from 'src/app/interfaces/infoModal';
import { ServiceModalEventoService } from 'src/app/services/service-modal-evento.service';
import { RedSocialIcon } from '../../../interfaces/redSocialIcon';
import { RespuestaEmail } from '../../../interfaces/respuestaEmail';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { CheckoutService } from '../../../services/checkout.service';
import { CheckoutSesion } from '../../../interfaces/checkoutsesion.interface';
import { ClientesService } from 'src/app/services/clientes.service';
import Swal from 'sweetalert2';
import { Cliente } from 'src/app/interfaces/clienteForm.interface';

@Component({
  selector: 'app-modal-evento',
  templateUrl: './modal-evento.component.html',
  styleUrls: ['./modal-evento.component.scss']
})
export class ModalEventoComponent implements OnInit {

  @Input() evento!: IEvento;
  direccion!: InfoDireccionModal;
  infoTelefono!: InfoModal;
  infoMail!: InfoModal;
  infoWeb!: InfoModal;
  twitter: RedSocialIcon = {
    nombre: '',
    enlace: '',
    icono: ''
  };
  instagram: RedSocialIcon = {
    nombre: '',
    enlace: '',
    icono: ''
  };
  facebook: RedSocialIcon = {
    nombre: '',
    enlace: '',
    icono: ''
  };
  youtube: RedSocialIcon = {
    nombre: '',
    enlace: '',
    icono: ''
  };
  twitch: RedSocialIcon = {
    nombre: '',
    enlace: '',
    icono: ''
  };
  mostrarModalEmail:boolean=false;
  revista:boolean=false;
  enlacePDF:string="";
  enCompra:boolean=false;

  formCompra = this.fb.group({
    nombre: ['Manuel', [Validators.required,Validators.maxLength(30)]],
    apellidos: ['Fernandez', [Validators.required,Validators.maxLength(80)]],
    direccion: ['Avda. Arquitecto Luis Bono, 7',[Validators.maxLength(50)]],
    provincia: ['Málaga',[Validators.required,Validators.maxLength(50)]],
    poblacion: ['Málaga',[Validators.maxLength(50)]],
    codigo_postal: ['29190',[Validators.maxLength(6)]],
    pais: ['España',[Validators.required,Validators.maxLength(30)]],    
    telefono: ['677230977', [Validators.required,Validators.maxLength(20)]],    
    email: ['manuel_fe1977@hotmail.com', [Validators.required, Validators.email]],    
    privacidad:[false,Validators.requiredTrue],
    aceptaComercial:[false]   
  });
  submitted:boolean=false;
  compraIniciada:boolean=false;

  constructor(public serviceModalEventoService: ServiceModalEventoService,
              private router:Router,
              private fb:FormBuilder,
              private checkoutService:CheckoutService,
              private clientesService:ClientesService) { }

  ngOnInit(): void {

    this.enlacePDF=this.evento.pdf;
    //this.evento.Especialista.nombre;
    this.direccion = {
      title: 'Ubicacion',
      direccion: this.evento.direccion,
      localidad: this.evento.localidad,
      provincia: this.evento.provincia,
      codigo_postal: this.evento.codigo_postal,
      pais:this.evento.pais,
      icono: '../../assets/images/icons-svg/location-pin-solid.svg'
    }
    this.infoTelefono = {
      title: 'Telefono',
      info: this.evento.telefono,
      icono: '../../assets/images/icons-svg/mobile-solid.svg'
    }
    this.infoMail = {
      title: 'Email',
      info: this.evento.email,
      icono: '../../assets/images/icons-svg/envelope-regular.svg'
    }
    this.infoWeb = {
      title: 'Web',
      info: this.evento.web,
      icono: '../../assets/images/icons-svg/globe-solid.svg'
    }
    this.twitter = {
      nombre: '',
      enlace: this.evento.twitter,
      icono: '../../assets/images/icons-svg/twitter.svg'
    }
    this.instagram = {
      nombre: '',
      enlace: this.evento.instagram,
      icono: '../../assets/images/icons-svg/instagram.svg'
    }
    this.facebook = {
      nombre: '',
      enlace: this.evento.facebook,
      icono: '../../assets/images/icons-svg/facebook.svg'
    }
    this.youtube = {
      nombre: '',
      enlace: this.evento.you_tube,
      icono: '../../assets/images/icons-svg/youtube.svg'
    }
    this.twitch = {
      nombre: '',
      enlace: this.evento.twich,
      icono: '../../assets/images/icons-svg/twitch.svg'
    }

    this.formCompra = this.fb.group({
      nombre: ['Manuel', [Validators.required,Validators.maxLength(30)]],
      apellidos: ['Fernandez', [Validators.required,Validators.maxLength(80)]],
      direccion: ['Avda. Arquitecto Luis Bono, 7',[Validators.maxLength(50)]],
      provincia: ['Málaga',[Validators.required,Validators.maxLength(50)]],
      poblacion: ['Málaga',[Validators.maxLength(50)]],
      codigo_postal: ['29190',[Validators.maxLength(6)]],
      pais: ['España',[Validators.required,Validators.maxLength(30)]],    
      telefono: ['677230977', [Validators.required,Validators.maxLength(20)]],    
      email: ['manuel_fe1977@hotmail.com', [Validators.required, Validators.email]],          
      privacidad:[false,Validators.requiredTrue],
      aceptaComercial:[false]
    });
  }

  cerrarModal() {
    this.serviceModalEventoService.closeDialog();
  }

  descargarContenido(){
    if (this.evento.id===''){
      //console.log(this.evento.evento);
      this.mostrarModalEmail=true;
    }
  }

  cerrarModalEmail(event:RespuestaEmail){
    this.mostrarModalEmail=false;
    if (event.mail!=''){
      this.cerrarModal()
      this.router.navigate(['revistas']);
    }
  }

  campoNoValido(campo: string): boolean {

    const hayError = this.submitted && this.formCompra.get(campo).invalid;  

    return hayError
  }

  comprar(){
    this.enCompra=true;
  }
  onReset(){
    this.compraIniciada=false;
    this.formCompra.reset();
    this.enCompra=false;

  }

  enviarDatosCompra(){
    this.submitted=true;
    if (!this.formCompra.valid){
      return
    }
    else{
      
      this.compraIniciada=true;
      console.log(this.formCompra.value)
      this.clientesService.darAltaCliente(this.formCompra.value).subscribe(
        (res:Cliente)=>{
          console.log(res)
          const clienteId = res.id;
          this.checkoutService.startEventoCheckoutSession(this.evento.id,clienteId)
          .subscribe(
          (sesion:CheckoutSesion)=>{
            console.log("stripe sesion iniciada");
            window.open(sesion.url,'blank');
            this.formCompra.reset();
            //todo crear componente compra realizada.
          },
          err=>{
            console.log("Error en la sesion de stripe");
            this.compraIniciada=false;
          }
        )
        }
        ,err=>{
        console.log(err);
        Swal.fire('Error',err.msg,'error');
      });

/*
      */
    }
  }
}
