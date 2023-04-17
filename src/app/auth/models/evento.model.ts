import { IEvento } from '../../interfaces/eventos';


export class Evento{
    id:string;
    evento:string;
    fecha:string;
    precio:number;
    direccion:string;
    localidad:string;
    provincia:string;
    codigo_postal:string;
    pais:string;
    online:boolean;
    EspecialistaId:string;
    descripcion:string;
    imagen:string;
    telefono:string;
    email:string;
    web:string;
    pdf:string;
    twitter:string;
    facebook:string;
    instagram:string;
    you_tube:string;
    twich:string;
    ActividadeId:number;
    monedaId:number;
    esVendible:boolean;
    
    constructor(evento:IEvento){
        this.id=evento.id;
        this.evento=evento.evento;
        this.fecha=evento.fecha;
        this.precio=evento.precio;
        this.direccion=evento.direccion;
        this.localidad=evento.localidad;
        this.provincia=evento.provincia;
        this.codigo_postal=evento.codigo_postal;
        this.pais=evento.pais;
        this.online=evento.online;
        this.EspecialistaId=evento.EspecialistaId;
        this.descripcion=evento.descripcion;
        this.imagen=evento.imagen;
        this.telefono=evento.telefono;
        this.email=evento.email;
        this.web=evento.web;
        this.pdf=evento.pdf;
        this.twitter=evento.twitter;
        this.facebook=evento.facebook;
        this.instagram=evento.instagram;
        this.you_tube=evento.you_tube;
        this.twich=evento.twich;
        this.ActividadeId=evento.ActividadeId;
        this.monedaId=evento.monedaId;
        this.esVendible=evento.esVendible;
    }

}