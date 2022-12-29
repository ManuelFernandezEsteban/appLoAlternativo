import { Component, OnInit } from '@angular/core';
import { TablaEventosService } from '../../../services/tabla-eventos.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-publicar-evento',
  templateUrl: './publicar-evento.component.html',
  styleUrls: ['./publicar-evento.component.scss']
})
export class PublicarEventoComponent implements OnInit {

  submitted:boolean=false;

  formPublicarEvento=this.fb.group({
    evento:['',Validators.required],
    fecha:['',Validators.required],
    precio:['',Validators.required],
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
              private fb:FormBuilder) { }

  ngOnInit(): void {
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
    console.log(this.formPublicarEvento.value, this.formPublicarEvento.valid);
    this.formPublicarEvento.reset();
    this.submitted = false;
  }
}

