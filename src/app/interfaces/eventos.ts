export interface Eventos{
    eventos:Evento[];
}

export interface Evento{
    id:number;
    evento:string;
    fecha:string;
    precio:number;
    localizacion:string;
    online:boolean;
    organizador:string;
    descripcion:string;
    imagen:string;
}

