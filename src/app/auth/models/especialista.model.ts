import { IEspecialista } from '../../interfaces/especialistas';



export class Especialista{

    nombre:              string;
    apellidos:           string;
    fecha_alta:          string;
    descripcion_terapia: string;
    ActividadeId:        number;
    direccion:           string;
    provincia:           string;
    localidad:           string;
    codigo_postal:       string;
    pais:                string;
    video:               string;
    imagen_terapeuta:    string;
    telefono:            string;
    PlaneId:             number;
    token_pago:          string;
    email:               string;
    password:            string;   
    twitter:             string;
    facebook:            string;
    instagram:           string;
    you_tube:            string;
    web:                 string;
    id?:                 string;   
    
    constructor(especialista:IEspecialista){
        this.nombre=              especialista.nombre;
        this.apellidos=           especialista.apellidos;
        this.fecha_alta=          especialista.createdAt;
        this.descripcion_terapia= especialista.descripcion_terapia;
        this.ActividadeId=        especialista.ActividadeId;
        this.direccion=           especialista.direccion;
        this.provincia=           especialista.provincia;
        this.localidad=           especialista.localidad;
        this.codigo_postal=       especialista.codigo_postal;
        this.pais=                especialista.pais;
        this.video=                 especialista.video;
        this.imagen_terapeuta=    especialista.imagen_terapeuta;
        this.telefono=            especialista.telefono;
        this.PlaneId=          especialista.PlaneId;
        this.token_pago=          especialista.token_pago;
        this.email=             especialista.email;        
        this.twitter=            especialista.twitter;
        this.facebook=            especialista.facebook;
        this.instagram=          especialista.instagram;
        this.you_tube=           especialista.you_tube;
        this.web=                 especialista.web;
        this.id=                  especialista.id;

    }
}