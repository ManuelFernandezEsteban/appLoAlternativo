export interface IEventos{
    eventos:IEvento[];
}

export interface IEvento{
    id:number;
    evento:string;
    fecha:string;
    precio:number;
    direccion:string;
    localidad:string;
    provincia:string;
    codigo_postal:string;
    online:boolean;
    organizador:string;
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
    actividadeId:number;
}

