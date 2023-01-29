import { Component, OnInit } from '@angular/core';
import { TablaEventosService } from '../../../services/tabla-eventos.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceModalEventoService } from '../../../services/service-modal-evento.service';
import { EspecialistasService } from '../../../services/especialistas.service';
import { EventosService } from '../../../services/eventos.service';

@Component({
  selector: 'app-publicar-evento',
  templateUrl: './publicar-evento.component.html',
  styleUrls: ['./publicar-evento.component.scss']
})
export class PublicarEventoComponent implements OnInit {

  submitted: boolean = false;
  mensaje: string = 'Evento creado';
  imgUrl: string = '';

  formPublicarEvento = this.fb.group({
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
    pdf: [''],
    EspecialistaId: [''],
    ActividadeId: 0,
    twitter: [''],
    facebook: [''],
    instagram: [''],
    you_tube: [''],
    twich: ['']
  })

  constructor(private tablaEventosService: TablaEventosService,
    private fb: FormBuilder, private route: Router,
    public serviceModalEventoService: ServiceModalEventoService,
    private especialistasService: EspecialistasService,
    private eventosService: EventosService) { }

  ngOnInit(): void {
    this.serviceModalEventoService.showDialog = false;

    this.formPublicarEvento = this.fb.group({
      evento: ['', Validators.required],
      fecha: ['', Validators.required],
      precio: [0, Validators.required],
      email: [this.especialistasService.especialista.email, [Validators.required, Validators.email]],
      web: [this.especialistasService.especialista.web],
      online: [false],
      direccion: [this.especialistasService.especialista.direccion],
      poblacion: [this.especialistasService.especialista.localidad],
      provincia: [this.especialistasService.especialista.provincia],
      cp: [this.especialistasService.especialista.codigo_postal],
      telefono: [this.especialistasService.especialista.telefono, Validators.required],
      descripcion: ['', [Validators.required, Validators.minLength(10)]],
      img: [''],
      pdf: [''],
      EspecialistaId: [this.especialistasService.especialista.id],
      ActividadeId: [this.especialistasService.especialista.ActividadeId],
      twitter: [''],
      facebook: [''],
      instagram: [''],
      you_tube: [''],
      twich: ['']
    })
  }
  desactivarSelected() {
    this.tablaEventosService.setIsSelectedOnFalse();
    this.tablaEventosService.resetEventoSelected();
  }

  campoNoValido(campo: string): boolean {
    return this.submitted && this.formPublicarEvento.get(campo).invalid;
  }
  onPublic() {

    this.submitted = true;
    if (!this.formPublicarEvento.valid) {
      return;
    }

    this.eventosService.crearEvento(this.formPublicarEvento.value).subscribe(res => {
      console.log(res);
      this.formPublicarEvento.reset();
      this.submitted = false;
      this.serviceModalEventoService.openDialog();
    }, err => {
      console.log(err)
    });



  }

  cerrar() {
    this.serviceModalEventoService.closeDialog();
    this.route.navigate((['auth/principal/']));
  }

  onReset() {
    this.desactivarSelected();
    this.route.navigate((['auth/principal/']))
  }

  cambiarImg(event: Event) {

    const file = (event.target as HTMLInputElement).files[0];

    /* this.formModificarEspecialista.patchValue({
       imagen_terapeuta:file
     });*/
    this.formPublicarEvento.get('img').updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.imgUrl = reader.result as string;
    }
    reader.readAsDataURL(file);
  }
}

