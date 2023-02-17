import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Evento } from '../../models/evento.model';
import { IEvento } from '../../../interfaces/eventos';
import { TablaEventosService } from '../../../services/tabla-eventos.service';
import { Router } from '@angular/router';
import { FormEventoFiles } from '../../../interfaces/formularioEvento.interface';

@Component({
  selector: 'app-form-evento',
  templateUrl: './form-evento.component.html',
  styleUrls: ['./form-evento.component.scss']
})
export class FormEventoComponent implements OnInit {

  @Input() eventoSeleccionado: Evento;
  @Input() eliminando:boolean=false;
  @Input() tipo:string='';

  @Output() formData = new EventEmitter<FormEventoFiles>();
  @Output() reset = new EventEmitter<boolean>();
  formEvento = this.fb.group({
    evento: ['', Validators.required],
    fecha: ['', Validators.required],
    precio: [0, Validators.required],
    email: ['', [Validators.required, Validators.email]],
    web: [''],
    online: [false],
    direccion: [''],
    poblacion: [''],
    provincia: [''],
    codigo_postal: [''],
    telefono: ['', Validators.required],
    descripcion: ['', [Validators.required, Validators.minLength(10)]],
    imagen: [''],
    pdf: [''],
    id: [''],
    EspecialistaId: [''],
    ActividadeId: 0,
    twitter: [''],
    facebook: [''],
    instagram: [''],
    you_tube: [''],
    twich: ['']
  })
  submitted: boolean = false;
  fechaValue!: Date;  
  imgUrl: string = '';
  pdfUrl: string = '';
  hayPDF: boolean = false;
  fileImage:File;
  filePDF:File;

  constructor(private tablaEventosService: TablaEventosService,private route: Router,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formEvento = this.fb.group({
      evento: [this.eventoSeleccionado.evento, Validators.required],
      fecha: ['', Validators.required],
      precio: [this.eventoSeleccionado.precio, Validators.required],
      email: [this.eventoSeleccionado.email, [Validators.required, Validators.email]],
      web: [this.eventoSeleccionado.web],
      online: [this.eventoSeleccionado.online],
      direccion: [this.eventoSeleccionado.direccion],
      poblacion: [this.eventoSeleccionado.localidad],
      provincia: [this.eventoSeleccionado.provincia],
      codigo_postal: [this.eventoSeleccionado.codigo_postal],
      telefono: [this.eventoSeleccionado.telefono, Validators.required],
      descripcion: [this.eventoSeleccionado.descripcion, [Validators.required, Validators.minLength(10)]],
      imagen: [null],
      pdf: [null],
      id: [this.eventoSeleccionado.id],
      EspecialistaId: [this.eventoSeleccionado.EspecialistaId],
      ActividadeId: [this.eventoSeleccionado.ActividadeId],
      twitter: [this.eventoSeleccionado.twitter],
      facebook: [this.eventoSeleccionado.facebook],
      instagram: [this.eventoSeleccionado.instagram],
      you_tube: [this.eventoSeleccionado.you_tube],
      twich: [this.eventoSeleccionado.twich]
    })
    this.imgUrl=this.eventoSeleccionado.imagen;
    this.pdfUrl=this.eventoSeleccionado.pdf;
    let arrayFecha = this.eventoSeleccionado.fecha.split('-');
    let fecha = arrayFecha[0] + '-' + arrayFecha[1] + '-' + arrayFecha[2];
    this.formEvento.get('fecha')?.setValue(fecha);
  }

  campoNoValido(campo: string): boolean {
    return this.submitted && this.formEvento.get(campo).invalid;
  }

  cambiarImg(event: Event) {

    this.fileImage = (event.target as HTMLInputElement).files[0];
    console.log(this.fileImage)

    this.formEvento.get('imagen').updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.imgUrl = reader.result as string;
    }
    reader.readAsDataURL(this.fileImage);
    
  }

  cambiarPDF(event: Event) {

    this.filePDF = (event.target as HTMLInputElement).files[0];
    console.log(this.filePDF)

    this.formEvento.get('pdf').updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.pdfUrl = reader.result as string;
    }
    reader.readAsDataURL(this.filePDF);
    
  }


  onReset() {
    this.reset.emit(true);
 //   this.desactivarSelected();
 //   this.route.navigate((['auth/principal/']))
  }
  desactivarSelected() {
    this.tablaEventosService.setIsSelectedOnFalse();
    this.tablaEventosService.resetEventoSelected();
  }

  onAccept(){

    this.submitted = true;
    if (!this.formEvento.valid) {
      return;
    }
    const formData = new FormData();
    if (this.fileImage){
      formData.append("image",this.fileImage);  
          
    }
    if (this.filePDF){
      formData.append("pdf",this.filePDF);  
          
    }
    
    this.formData.emit({
        evento:this.formEvento.value,
        files:formData
      })

  }
}
