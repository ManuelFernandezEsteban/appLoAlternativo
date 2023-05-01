import { Actividade, EspecialistaClass, Plane, UsaHerramienta } from '../../interfaces/especialistas';




export class Especialista{

    id?:                   string;
    nombre:                string;
    apellidos:             string;
    telefono:              string;
    email:                 string;
    descripcion_terapia:   string;
    direccion:             string;
    provincia:             string;
    localidad:             string;
    codigo_postal:         string;
    pais:                  string;
    video:                 string;
    imagen:                string;
    token_pago:            string;
    twitter:               string;
    facebook:              string;
    instagram:             string;
    you_tube:              string;
    web:                   string;
    fecha_pago_actual:     Date;
    fecha_fin_suscripcion: Date;
    createdAt:             Date;
    updatedAt:             Date;
    deletedAt:             Date;
    resetToken:            string;
    ActividadeId:          number;
    PlaneId:               number;
    cuentaConectada:       string;
    Actividade:            Actividade;
    Plane:                 Plane;
    UsaHerramientas?:       UsaHerramienta[];  
    
    
    constructor(especialista:EspecialistaClass){
        this.nombre=              especialista.nombre;
        this.apellidos=           especialista.apellidos;        
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
        this.UsaHerramientas = especialista.UsaHerramientas;       
        this.id=                  especialista.id;
        this.createdAt = especialista.createdAt;
        this.cuentaConectada=especialista.cuentaConectada;
        

    }
}