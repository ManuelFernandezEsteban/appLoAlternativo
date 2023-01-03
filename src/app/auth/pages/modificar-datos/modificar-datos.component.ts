import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Especialidad, Especialidades } from 'src/app/interfaces/especialiadad';
import { Especialista, Especialistas } from 'src/app/interfaces/especialistas';
import { DataEspecialidadesService } from 'src/app/services/data-especialidades.service';
import { ServiceModalEventoService } from 'src/app/services/service-modal-evento.service';
import { DataEspecialistasService } from '../../../services/data-especialistas.service';
import { pipe, filter } from 'rxjs';
import { TablaEventosService } from '../../../services/tabla-eventos.service';

@Component({
  selector: 'app-modificar-datos',
  templateUrl: './modificar-datos.component.html',
  styleUrls: ['./modificar-datos.component.scss']
})
export class ModificarDatosComponent implements OnInit {

  especialidades: Especialidad[] = [];

  @ViewChild('selectActividad') select!: ElementRef;
  @ViewChild('option') options!: ElementRef[];

  formModificarEspecialista = this.fb.group({
    nombre: ['', Validators.required],
    apellidos: ['', Validators.required],
    fecha_alta: [''],
    descripcion_terapia: ['', Validators.required],
    actividad: [, Validators.required],
    direccion: '',
    provincia: '',
    localidad: '',
    codigo_postal: '',
    pais: '',
    video: '',
    imagen_terapeuta: ['', Validators.required],
    telefono: ['', Validators.required],
    plan_contratado: [''],
    email: ['', [Validators.required, Validators.email]],
    twitter: '',
    facebook: '',
    instagram: '',
    you_tube: '',
    web: ''
  });

  fechaValue!: Date;
  submitted: boolean = false;
  mensaje: string = 'Cambios guardados';
  especialista: Especialista = {
    id: 0,
    nombre: '',
    apellidos: '',
    fecha_alta: '',
    descripcion_terapia: '',
    actividad: 0,
    direccion: '',
    provincia: '',
    localidad: '',
    codigo_postal: '',
    pais: '',
    video: '',
    imagen_terapeuta: '',
    telefono: '',
    plan_contratado: '',
    token_pago: '',
    email: '',
    password: '',
    twitter: '',
    facebook: '',
    instagram: '',
    you_tube: '',
    web: ''
  };

  constructor(private fb: FormBuilder, private route: Router,
    public dataServiceModal: ServiceModalEventoService,
    private especialidadesService: DataEspecialidadesService,
    private dataEspecialistasService: DataEspecialistasService,
    private renderer: Renderer2,
    private tablaEventos: TablaEventosService) { }

  rellenarSelect() {
    this.especialidades.forEach(e => {
      const option = this.renderer.createElement('option');
      this.renderer.addClass(option, 'texto-regular');
      this.renderer.setAttribute(option, 'value', e.id.toString());
      const valor = this.renderer.createText(e.nombre);
      if (e.id == this.especialista.actividad) {
        this.renderer.setAttribute(option, 'selected', '');
      }
      this.renderer.appendChild(option, valor);
      this.renderer.appendChild(this.select.nativeElement, option);

    })
  }

  setEspecialista() {
    this.formModificarEspecialista.get('nombre')?.setValue(this.especialista.nombre);
    this.formModificarEspecialista.get('apellidos')?.setValue(this.especialista.apellidos);
    this.formModificarEspecialista.get('descripcion_terapia')?.setValue(this.especialista.descripcion_terapia);
    this.formModificarEspecialista.get('direccion')?.setValue(this.especialista.direccion);
    this.formModificarEspecialista.get('provincia')?.setValue(this.especialista.provincia);
    this.formModificarEspecialista.get('localidad')?.setValue(this.especialista.localidad);
    this.formModificarEspecialista.get('codigo_postal')?.setValue(this.especialista.codigo_postal);
    this.formModificarEspecialista.get('pais')?.setValue(this.especialista.pais);
    this.formModificarEspecialista.get('video')?.setValue(this.especialista.video);
    //this.formModificarEspecialista.get('imagen_terapeuta')?.setValue(this.especialista.imagen_terapeuta);
    this.formModificarEspecialista.get('telefono')?.setValue(this.especialista.telefono);
    //this.formModificarEspecialista.get('plan_contratado')?.setValue(this.especialista.plan_contratado);
    this.formModificarEspecialista.get('email')?.setValue(this.especialista.telefono);
    this.formModificarEspecialista.get('twitter')?.setValue(this.especialista.email);
    this.formModificarEspecialista.get('facebook')?.setValue(this.especialista.facebook);
    this.formModificarEspecialista.get('you_tube')?.setValue(this.especialista.you_tube);
    this.formModificarEspecialista.get('web')?.setValue(this.especialista.web);
    //this.formModificarEspecialista.get('actividad')?.setValue(this.especialista.actividad);
    let arrayFecha = this.especialista.fecha_alta.split('-');
    let fecha = arrayFecha[2] + '-' + arrayFecha[1] + '-' + arrayFecha[0];
    console.log(fecha);
    this.fechaValue = new Date(fecha);
    this.rellenarSelect();
  }


  ngOnInit(): void {

    this.tablaEventos.resetEventoSelected();
    this.tablaEventos.setIsSelectedOnFalse();
    this.dataServiceModal.showDialog = false;
    
    this.especialidadesService.getEspecialidades<Especialidades>().subscribe(res => {
      this.especialidades = res.especialidades;
      this.dataEspecialistasService.getEspecialistas<Especialistas>().subscribe(res => {
        res.especialistas.forEach(element => {
          if (element.id === 5) {
            this.especialista = element;
            this.setEspecialista();

          }
        });
      });


    })
  }

  actividadesChange(event: Event) {
    console.log(this.formModificarEspecialista.get('actividad')?.value)

  }

  public get nombre(): boolean {
    return this.formModificarEspecialista.get('nombre')?.invalid || false;
  }
  public get apellidos(): boolean {
    return this.formModificarEspecialista.get('apellidos')?.invalid || false;
  }
  public get descripcion_terapia(): boolean {
    return this.formModificarEspecialista.get('descripcion_terapia')?.invalid || false;
  }
  public get email(): boolean {
    return this.formModificarEspecialista.get('email')?.invalid || false;
  }
  public get telefono(): boolean {
    return this.formModificarEspecialista.get('telefono')?.invalid || false;
  }
  public get actividad(): boolean {
    return this.formModificarEspecialista.get('actividad')?.invalid || false;
  }
  public get imagen_terapeuta(): boolean {
    return this.formModificarEspecialista.get('imagen_terapeuta')?.invalid || false;
  }




  cerrar() { }


  onReset() {

  }

  onModify() {
    console.log(this.formModificarEspecialista.valid, this.formModificarEspecialista.value)

  }

}
