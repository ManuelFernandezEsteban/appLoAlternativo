import { Component, Input, OnInit, EventEmitter, Output, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Evento } from '../../models/evento.model';
import { IEvento } from '../../../interfaces/eventos';
import { TablaEventosService } from '../../../services/tabla-eventos.service';
import { Router } from '@angular/router';
import { FormEventoFiles } from '../../../interfaces/formularioEvento.interface';
import { Moneda, Monedas } from 'src/app/interfaces/monedas.interface';
import { MonedasService } from '../../../services/monedas.service';

@Component({
  selector: 'app-form-evento',
  templateUrl: './form-evento.component.html',
  styleUrls: ['./form-evento.component.scss']
})
export class FormEventoComponent implements OnInit {

  @ViewChild('selectMoneda') select!: ElementRef;
  @ViewChild('option') options!: ElementRef[];

  @Input() eventoSeleccionado: Evento;
  @Input() eliminando: boolean = false;
  @Input() tipo: string = '';

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
    pais: [''],
    telefono: ['', Validators.required],
    descripcion: ['', [Validators.required, Validators.minLength(10)]],
    imagen: [''],
    pdf: [''],
    id: [''],
    EspecialistaId: [''],
    ActividadeId: 0,
    MonedaId: 1,
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
  fileImage: File;
  filePDF: File;
  monedas: Moneda[] = [];

  constructor(private tablaEventosService: TablaEventosService,
    private route: Router,
    private fb: FormBuilder,
    private renderer: Renderer2,
    private monedasService: MonedasService) { }

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
      pais: [this.eventoSeleccionado.pais],
      telefono: [this.eventoSeleccionado.telefono, Validators.required],
      descripcion: [this.eventoSeleccionado.descripcion, [Validators.required, Validators.minLength(10)]],
      imagen: [],
      pdf: [null],
      id: [this.eventoSeleccionado.id],
      EspecialistaId: [this.eventoSeleccionado.EspecialistaId],
      ActividadeId: [this.eventoSeleccionado.ActividadeId],
      MonedaId: [this.eventoSeleccionado.MonedaId],
      twitter: [this.eventoSeleccionado.twitter],
      facebook: [this.eventoSeleccionado.facebook],
      instagram: [this.eventoSeleccionado.instagram],
      you_tube: [this.eventoSeleccionado.you_tube],
      twich: [this.eventoSeleccionado.twich]
    })
    this.imgUrl = this.eventoSeleccionado.imagen;
    this.pdfUrl = this.eventoSeleccionado.pdf;
    if (this.imgUrl) {
      this.formEvento.get('imagen').setValue(this.imgUrl);
    }
    if (this.pdfUrl) {
      this.formEvento.get('pdf').setValue(this.pdfUrl);
    }
    let arrayFecha = this.eventoSeleccionado.fecha.split('-');
    let fecha = arrayFecha[0] + '-' + arrayFecha[1] + '-' + arrayFecha[2];
    this.formEvento.get('fecha')?.setValue(fecha);
    this.monedasService.getMonedas<Monedas>()
      .subscribe(res => {
        this.monedas = res.monedas;
        this.rellenarSelect();
      })
  }

  rellenarSelect() {
    this.monedas.forEach(e => {
      const option = this.renderer.createElement('option');
      this.renderer.addClass(option, 'option-menu');
      this.renderer.setAttribute(option, 'value', e.id.toString());
      const valor = this.renderer.createText(e.moneda);
      if (e.id == this.eventoSeleccionado.MonedaId) {
        this.renderer.setAttribute(option, 'selected', '');
      }
      this.renderer.appendChild(option, valor);
      this.renderer.appendChild(this.select.nativeElement, option);
    })
  }

  campoNoValido(campo: string): boolean {
    return this.submitted && this.formEvento.get(campo).invalid;
  }

  cambiarImg(event: Event) {

    this.fileImage = (event.target as HTMLInputElement).files[0];

    this.formEvento.get('imagen').updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.imgUrl = reader.result as string;
    }
    reader.readAsDataURL(this.fileImage);

  }

  cambiarPDF(event: Event) {

    this.filePDF = (event.target as HTMLInputElement).files[0];

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

  onAccept() {

    this.submitted = true;
    if (!this.formEvento.valid) {
      return;
    }
    const formData = new FormData();
    if (this.fileImage) {
      formData.append("image", this.fileImage);

    }
    if (this.filePDF) {
      formData.append("pdf", this.filePDF);

    }    

    this.formData.emit({
      evento: this.formEvento.value,
      files: formData
    })

  }
}
