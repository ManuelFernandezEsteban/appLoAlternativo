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

    constructor(nombre:string,apellidos:string,actividad:number,email:string,password:string,telefono:string ){
        this.nombre=nombre;
        this.actividad=actividad;
        this.apellidos=apellidos;
        this.email=email;
        this.password=password;
        this.telefono=telefono;
    }
    
}