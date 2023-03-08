import { IEspecialista } from '../../interfaces/especialistas';
import { Categoria } from '../../interfaces/especialiadad';



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
    imagen:              string;
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
    fecha_fin_suscripcion:string; 
    fecha_pago_actual:   string;
    id?:                 string;  
    Categorias?:         number[];
    
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
        this.imagen=                especialista.imagen;
        this.telefono=            especialista.telefono;
        this.PlaneId=          especialista.PlaneId;
        this.token_pago=          especialista.token_pago;
        this.email=             especialista.email;        
        this.twitter=            especialista.twitter;
        this.facebook=            especialista.facebook;
        this.instagram=          especialista.instagram;
        this.you_tube=           especialista.you_tube;
        this.web=                 especialista.web;
        this.fecha_fin_suscripcion=especialista.fecha_fin_suscripcion;
        this.fecha_pago_actual=especialista.fecha_pago_actual;
        this.id=                  especialista.id;
        this.Categorias=            especialista.Categorias;

    }
}