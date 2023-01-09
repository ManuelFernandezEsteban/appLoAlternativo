import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TablaEventosService } from 'src/app/services/tabla-eventos.service';
//import { Evento } from '../../../interfaces/eventos';
import { Router } from '@angular/router';
import { ServiceModalEventoService } from 'src/app/services/service-modal-evento.service';
import { Evento } from '../../models/user.models';
import { DataEventosService } from '../../../services/data-eventos.service';

@Component({
  selector: 'app-modificar-evento',
  templateUrl: './modificar-evento.component.html',
  styleUrls: ['./modificar-evento.component.scss']
})
export class ModificarEventoComponent implements OnInit {

  submitted: boolean = false;
  fechaValue!: Date;
  mensaje: string = 'Evento modificado';
  imgUrl:string='';

  eventoSeleccionado: Evento = {
    id: 0,
    evento: '',
    fecha: '',
    precio: 0,
    direccion: '',
    localidad: '',
    provincia: '',
    codigo_postal: '',
    online: false,
    organizador: 0,
    descripcion: '',
    imagen: '',
    telefono: '',
    email: '',
    web: '',
    pdf: ''

  };

  formModificarEvento = this.fb.group({
    evento: ['', Validators.required],
    fecha: ['', Validators.required],
    precio: [0, Validators.required],
    email: ['', [Validators.required, Validators.email]],
    web: [''],
    online: [false],
    direccion: [''],
    poblacion: [''],
    provincia: [''],
    cp: [''],
    telefono: ['', Validators.required],
    descripcion: ['', [Validators.required, Validators.minLength(10)]],
    img: [''],
    pdf: ['']
  })

  constructor(private tablaEventosService: TablaEventosService,
    private fb: FormBuilder,
    private route: Router,
    public dataServiceModal: ServiceModalEventoService,
    private dataEventosService: DataEventosService) {
    this.eventoSeleccionado = this.tablaEventosService.getEventoSelected();
  }

  ngOnInit(): void {
    this.dataServiceModal.showDialog = false;
    this.eventoSeleccionado = this.tablaEventosService.getEventoSelected();
    this.setEvento();

  }


  public setEvento() {
    this.formModificarEvento.get('evento')?.setValue(this.eventoSeleccionado.evento);
    
    this.formModificarEvento.get('online')?.setValue(this.eventoSeleccionado.online);
    
    this.formModificarEvento.get('precio')?.setValue((this.eventoSeleccionado.precio));
    this.formModificarEvento.get('email')?.setValue(this.eventoSeleccionado.email);
    this.formModificarEvento.get('web')?.setValue(this.eventoSeleccionado.web);
    this.formModificarEvento.get('direccion')?.setValue(this.eventoSeleccionado.direccion);
    this.formModificarEvento.get('poblacion')?.setValue(this.eventoSeleccionado.localidad);
    this.formModificarEvento.get('provincia')?.setValue(this.eventoSeleccionado.provincia);
    this.formModificarEvento.get('cp')?.setValue(this.eventoSeleccionado.codigo_postal);
    this.formModificarEvento.get('telefono')?.setValue(this.eventoSeleccionado.telefono);
    this.formModificarEvento.get('descripcion')?.setValue(this.eventoSeleccionado.descripcion);
    let arrayFecha = this.eventoSeleccionado.fecha.split('-');
    let fecha = arrayFecha[0] + '-' + arrayFecha[1] + '-' + arrayFecha[2];
    
    this.fechaValue = new Date(parseInt(arrayFecha[0]),parseInt(arrayFecha[1]),parseInt(arrayFecha[2]));
    console.log(fecha,arrayFecha,this.fechaValue);
    this.formModificarEvento.get('fecha')?.setValue(fecha);
    /*  this.formModificarEvento.get('img')?.setValue( this.eventoSeleccionado.imagen) ;
      this.formModificarEvento.get('pdf')?.setValue( this.eventoSeleccionado.pdf) ;*/
  }


  public get evento(): boolean {
    return this.formModificarEvento.get('evento')?.invalid || false;
  }
  public get fecha(): boolean {
    return this.formModificarEvento.get('fecha')?.invalid || false;
  }
  public get precio(): boolean {
    return this.formModificarEvento.get('precio')?.invalid || false;
  }
  public get email(): boolean {
    return this.formModificarEvento.get('email')?.invalid || false;
  }
  public get telefono(): boolean {
    return this.formModificarEvento.get('telefono')?.invalid || false;
  }
  public get descripcion(): boolean {
    return this.formModificarEvento.get('descripcion')?.invalid || false;
  }


  desactivarSelected() {
    this.tablaEventosService.setIsSelectedOnFalse();
    this.tablaEventosService.resetEventoSelected();
  }

  onModify() {

    this.submitted = true;
    if (!this.formModificarEvento.valid) {
      return;
    }
    //TODO event emiter con formContacto
    console.log(this.formModificarEvento.value, this.formModificarEvento.valid);
    this.dataEventosService.eliminarEvento(this.eventoSeleccionado);
    this.dataEventosService.setEvento(this.formModificarEvento.value, this.eventoSeleccionado.organizador);

    this.formModificarEvento.reset();
    this.submitted = false;
    this.desactivarSelected();
    this.dataServiceModal.openDialog();

  }

  cerrar() {
    this.dataServiceModal.closeDialog();
    this.route.navigate((['auth/principal/']))
  }

  onReset() {
    this.desactivarSelected();
    this.route.navigate((['auth/principal/']))
  }

  cambiarImg(event: Event) {

    const file = (event.target as HTMLInputElement).files[0];
    console.log(file)
    /* this.formModificarEspecialista.patchValue({
       imagen_terapeuta:file
     });*/
    this.formModificarEvento.get('img').updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.imgUrl = reader.result as string;
    }
    reader.readAsDataURL(file);
  }


}
