import { IEspecialista } from './especialistas';
export interface IEventos{
    eventos:IEvento[];
}

export interface IEvento{
    id?:string;
    evento?:string;
    fecha?:string;
    precio?:number;
    direccion?:string;
    localidad?:string;
    provincia?:string;
    codigo_postal?:string;
    online?:boolean;
    EspecialistaId?:string;
    descripcion?:string;
    imagen?:string;
    telefono?:string;
    email?:string;
    web?:string;
    pdf?:string;
    twitter?:string;
    facebook?:string;
    instagram?:string;
    you_tube?:string;
    twich?:string;
    ActividadeId?:number;
    Especialista?:IEspecialista;
}

