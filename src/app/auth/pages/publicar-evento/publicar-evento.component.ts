import { Component, OnInit } from '@angular/core';
import { TablaEventosService } from '../../../services/tabla-eventos.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceModalEventoService } from '../../../services/service-modal-evento.service';
import { DataEspecialistasService } from '../../../services/data-especialistas.service';
import { Evento } from '../../models/user.models';

@Component({
  selector: 'app-publicar-evento',
  templateUrl: './publicar-evento.component.html',
  styleUrls: ['./publicar-evento.component.scss']
})
export class PublicarEventoComponent implements OnInit {

  submitted:boolean=false;
  mensaje:string='Evento creado';

  formPublicarEvento=this.fb.group({
    evento:['',Validators.required],
    fecha:['',Validators.required],
    precio:[0,Validators.required],
    email:['',[Validators.required,Validators.email]],
    web:[''],
    online:[false],
    direccion:[''],
    poblacion:[''],
    provincia:[''],
    cp:[''],
    telefono:['',Validators.required],
    descripcion:['',[Validators.required,Validators.minLength(10)]],
    img:[''],
    pdf:['']
  })

  constructor(private tablaEventosService:TablaEventosService,
              private fb:FormBuilder,private route:Router,
              public serviceModalEventoService:ServiceModalEventoService,
              private dataEspecialistasService:DataEspecialistasService) { }

  ngOnInit(): void {
    this.serviceModalEventoService.showDialog=false;
  }
  desactivarSelected() {
    this.tablaEventosService.setIsSelectedOnFalse();
    this.tablaEventosService.resetEventoSelected();
  }

  public get evento(): boolean {
    return this.formPublicarEvento.get('evento')?.invalid || false;
  }
  public get fecha(): boolean {
    return this.formPublicarEvento.get('fecha')?.invalid || false;
  }
  public get precio(): boolean {
    return this.formPublicarEvento.get('precio')?.invalid || false;
  }
  public get email(): boolean {
    return this.formPublicarEvento.get('email')?.invalid || false;
  }
  public get telefono(): boolean {
    return this.formPublicarEvento.get('telefono')?.invalid || false;
  }
  public get descripcion(): boolean {
    return this.formPublicarEvento.get('descripcion')?.invalid || false;
  }

  onPublic(){

    this.submitted = true;
    if (!this.formPublicarEvento.valid) {
      return;
    }
    //TODO event emiter con formContacto
  /*  console.log(this.formPublicarEvento.value, this.formPublicarEvento.valid);
    const evento:Evento = new Evento(
        this.formPublicarEvento.get('evento').value,
        this.formPublicarEvento.get('fecha').value,
        this.formPublicarEvento.get('precio').value,
        this.dataEspecialistasService.especialista.id,
        this.formPublicarEvento.get('descripcion').value);
    */ 
    this.dataEspecialistasService.setEvento(this.formPublicarEvento.value);      

    this.formPublicarEvento.reset();
    this.submitted = false;
    this.serviceModalEventoService.openDialog();
    //
  }

  cerrar(){
    this.serviceModalEventoService.closeDialog();
    this.route.navigate((['auth/principal/']));
  }

  onReset(){
    this.desactivarSelected();
    this.route.navigate((['auth/principal/']))
  }
}

