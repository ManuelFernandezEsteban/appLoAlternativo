import { Component, Input, OnInit } from '@angular/core';
import { Especialista } from 'src/app/interfaces/especialistas';
import { ServiceModalEventoService } from '../../../services/service-modal-evento.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  @Input()terapeuta:Especialista={
    id: 0,
    nombre: 'Olaya',
    apellidos: 'Nieto Mascarenas',
    fecha_alta: '26-12-2022',
    descripcion_terapia: '',
    actividad: 'esoterismo',
    direccion: '',
    provincia: '',
    localidad: '',
    codigo_postal: '',
    pais: '',
    video: '',
    imagen_terapeuta: '',
    telefono: '612345678',
    plan_contratado: 'oro',
    token_pago: '',
    email: 'olayanietomarcarenas@fontdrift.com',
    twitter: '',
    facebook: '',
    instagram: '',
    you_tube: '',
    web: ''
  };

  constructor(public serviceModalEventoService:ServiceModalEventoService) { }

  ngOnInit(): void {
    this.serviceModalEventoService.openDialog()
  }

}
