export class Especialista{
    
    nombre:              string;
    apellidos:           string;    
    actividad:           number;    
    email:               string;
    telefono:            string;
    password?:            string;     
    id?:                  number;
    twitter?:             string;
    facebook?:            string;
    instagram?:           string;
    you_tube?:            string;
    web?:                 string;
    descripcion_terapia?: string;
    direccion?:           string;
    provincia?:           string;
    localidad?:           string;
    codigo_postal?:       string;
    pais?:                string;
    video?:               string;
    imagen_terapeuta?:    string;    
    plan_contratado?:     string;
    token_pago?:          string;
    fecha_alta?:          string;   
    eventos?:             Evento[];

    constructor(nombre:string,apellidos:string,actividad:number,email:string,password:string,telefono:string ){
        this.nombre=nombre;
        this.actividad=actividad;
        this.apellidos=apellidos;
        this.email=email;
        this.password=password;
        this.telefono=telefono;     
        this.id=1;   
    }
    
}


export class Evento{

    evento:string;
    fecha:string;
    precio:number;
    online:boolean;
    organizador:number;
    descripcion:string;
    id?:number;
    direccion?:string;
    localidad?:string;
    provincia?:string;
    codigo_postal?:string;   
    imagen?:string;
    telefono?:string;
    email?:string;
    web?:string;
    pdf?:string;    
    
    constructor(evento:string,fecha:string,precio:number,organizador:number,descripcion:string){
        this.evento=evento;
        this.fecha=fecha;
        this.precio=precio;
        this.organizador=organizador;
        this.descripcion=descripcion;  
        
             
    }
}