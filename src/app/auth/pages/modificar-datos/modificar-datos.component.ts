import { Component, OnInit, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataEspecialidadesService } from 'src/app/services/data-especialidades.service';
import { ServiceModalEventoService } from 'src/app/services/service-modal-evento.service';
import { TablaEventosService } from '../../../services/tabla-eventos.service';
import { EspecialistasService } from '../../../services/especialistas.service';
import { RespuestaEspecialista } from 'src/app/interfaces/respuesta-especialista.interface';
import { UploadsService } from '../../../services/uploads.service';
import Swal from 'sweetalert2';
import { Actividad, Actividades, Herramienta } from 'src/app/interfaces/especialidad';

@Component({
  selector: 'app-modificar-datos',
  templateUrl: './modificar-datos.component.html',
  styleUrls: ['./modificar-datos.component.scss']
})
export class ModificarDatosComponent implements OnInit {

  actividades: Actividad[] = [];

  @ViewChild('imgInput') imgInput!: ElementRef;
  @ViewChild('selectActividad') select!: ElementRef;
  @ViewChild('categoria') selectCategoria!: ElementRef;
  @ViewChild('option') options!: ElementRef[];

  formModificarEspecialista = this.fb.group({
    nombre: [this.especialistasService.especialista.nombre, [Validators.required,Validators.maxLength(30)]],
    apellidos: [this.especialistasService.especialista.apellidos, [Validators.required,Validators.maxLength(80)]],
    createdAt: [this.especialistasService.especialista.createdAt],
    descripcion_terapia: [this.especialistasService.especialista.descripcion_terapia,[ Validators.required]],
    ActividadeId: [this.especialistasService.especialista.ActividadeId,[ Validators.required]],
    direccion: [this.especialistasService.especialista.direccion,[Validators.maxLength(50)]],
    provincia: [this.especialistasService.especialista.provincia,[Validators.required,Validators.maxLength(50)]],
    localidad: [this.especialistasService.especialista.localidad,[Validators.maxLength(50)]],
    codigo_postal: [this.especialistasService.especialista.codigo_postal,[Validators.maxLength(6)]],
    pais: [this.especialistasService.especialista.pais,[Validators.required,Validators.maxLength(30)]],
    video: [null],
    imagen_terapeuta: [null],
    telefono: [this.especialistasService.especialista.telefono, [Validators.required,Validators.maxLength(20)]],
    PlaneId: [this.especialistasService.especialista.PlaneId],
    email: [this.especialistasService.especialista.email, [Validators.required, Validators.email]],
    twitter: [this.especialistasService.especialista.twitter,[Validators.maxLength(255)]],
    facebook: [this.especialistasService.especialista.facebook,[Validators.maxLength(255)]],
    instagram: [this.especialistasService.especialista.instagram,[Validators.maxLength(255)]],
    you_tube: [this.especialistasService.especialista.you_tube,[Validators.maxLength(255)]],
    web: [this.especialistasService.especialista.web,[Validators.maxLength(255)]],
    id: this.especialistasService.especialista.id,
    UsaHerramientas: []
  });

  fechaValue!: Date;
  submitted: boolean = false;
  mensaje: string = 'Cambios guardados';
  imgUrl: string = '';
  videoUrl: string = '';
  file: File;
  video: File;
  herramientas: Herramienta[];
  errorMessage:string='';

  constructor(private fb: FormBuilder,
    private route: Router,
    public especialistasService: EspecialistasService,
    public dataServiceModal: ServiceModalEventoService,
    private especialidadesService: DataEspecialidadesService,
    private renderer: Renderer2,
    private tablaEventos: TablaEventosService,
    public serviceModal: ServiceModalEventoService,
    private uploadService: UploadsService) { }


  ngOnInit(): void {

    this.tablaEventos.resetEventoSelected();
    this.tablaEventos.setIsSelectedOnFalse();
    this.dataServiceModal.showDialog = false;
    this.formModificarEspecialista = this.fb.group({
      nombre: [this.especialistasService.especialista.nombre, [Validators.required,Validators.maxLength(15)]],
      apellidos: [this.especialistasService.especialista.apellidos, [Validators.required,Validators.maxLength(25)]],
      createdAt: [this.especialistasService.especialista.createdAt],
      descripcion_terapia: [this.especialistasService.especialista.descripcion_terapia,[ Validators.required]],
      ActividadeId: [this.especialistasService.especialista.ActividadeId,[ Validators.required]],
      direccion: [this.especialistasService.especialista.direccion,[Validators.maxLength(50)]],
      provincia: [this.especialistasService.especialista.provincia,[Validators.required,Validators.maxLength(15)]],
      localidad: [this.especialistasService.especialista.localidad,[Validators.maxLength(30)]],
      codigo_postal: [this.especialistasService.especialista.codigo_postal,[Validators.maxLength(6)]],
      pais: [this.especialistasService.especialista.pais,[Validators.required,Validators.maxLength(20)]],
      video: [null],
      imagen_terapeuta: [null],
      telefono: [this.especialistasService.especialista.telefono, [Validators.required,Validators.maxLength(20)]],
      PlaneId: [this.especialistasService.especialista.PlaneId],
      email: [this.especialistasService.especialista.email, [Validators.required, Validators.email]],
      twitter: [this.especialistasService.especialista.twitter,[Validators.maxLength(255)]],
      facebook: [this.especialistasService.especialista.facebook,[Validators.maxLength(255)]],
      instagram: [this.especialistasService.especialista.instagram,[Validators.maxLength(255)]],
      you_tube: [this.especialistasService.especialista.you_tube,[Validators.maxLength(255)]],
      web: [this.especialistasService.especialista.web,[Validators.maxLength(255)]],
      id: this.especialistasService.especialista.id,
      UsaHerramientas: []
    })
    this.especialidadesService.getEspecialidades<Actividades>()
      .subscribe(res => {
        
        this.actividades = res.actividades;
        this.herramientas = this.actividades[this.especialistasService.especialista.ActividadeId - 1].Herramientas;
        const values = []
        if (this.especialistasService.especialista.UsaHerramientas) {
          
          if (this.especialistasService.especialista.UsaHerramientas.length > 0) {
           
            this.especialistasService.especialista.UsaHerramientas.forEach(e => {
             
              values.push(e.HerramientaId.toString());
            });
            this.formModificarEspecialista.get('UsaHerramientas').setValue(values);
          }
        }
      })
    this.fechaValue = new Date(this.especialistasService.especialista.createdAt);
    this.imgUrl = this.especialistasService.especialista.imagen;

  }

  campoNoValido(campo: string): boolean {

    const hayError = this.submitted && this.formModificarEspecialista.get(campo).invalid;  

    return hayError
  }

  cerrar() {
    this.serviceModal.closeDialog();
    this.route.navigate(['auth/principal/']);
  }

  get f() { return this.formModificarEspecialista.controls; }

  onReset() {
    this.submitted = false;
    this.ngOnInit();
  }

  onModify() {

    this.submitted = true;

    if (!this.formModificarEspecialista.valid) {

      return
    }

    if (this.especialistasService.especialista.ActividadeId === 10) {
      this.formModificarEspecialista.get('ActividadeId').setValue(10);
    }

    //console.log(this.formModificarEspecialista.value)

    this.especialistasService.actualizarEspecialista(this.formModificarEspecialista.value)
      .subscribe((res: RespuestaEspecialista) => {

        if (this.file) {
          const formData = new FormData();
          formData.append("file", this.file);
          this.uploadService.upload(formData, 'avatarEspecialista').subscribe(res => {

          }, err => {
            Swal.fire('Error', err.error, 'error');
          }
          );
        }
        if (this.video) {
          const formData = new FormData();
          formData.append("file", this.video);
          this.uploadService.upload(formData, 'videoEspecialista').subscribe(res => {

          }, err => {
            Swal.fire('Error', err.error, 'error');
          });
        }
        this.serviceModal.openDialog();
      }, error => {
        console.log(error);

        Swal.fire('Error', error.error, 'error');
      });

  }

  actividadChange(actividad) {
    this.herramientas = this.actividades[actividad - 1].Herramientas;
    this.formModificarEspecialista.get('UsaHerramientas').reset();
  }

  cambiarImg(event: Event) {

    this.file = (event.target as HTMLInputElement).files[0];
    //console.log(this.file);

    this.formModificarEspecialista.get('imagen_terapeuta').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imgUrl = reader.result as string;
    }
    reader.readAsDataURL(this.file);
  }
  cambiarVideo(event: Event) {
    this.video = (event.target as HTMLInputElement).files[0];
    //console.log(this.file);

    this.formModificarEspecialista.get('video').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.videoUrl = reader.result as string;
    }
    reader.readAsDataURL(this.video);
  }


}


