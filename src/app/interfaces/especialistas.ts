export interface Especialistas {
    especialistas: IEspecialista[];
}

export interface IEspecialista {
    
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
    createdAt:           string;
    deletedAt:           string;
    updatedAt:           string;  
    fecha_fin_suscripcion:string; 
    fecha_pago_actual   :string; 
    id?:                 string;

}

export interface Registro_Especialista{
    nombre:string,
    apellidos:string,
    actividad:number,
    email:string,
    password:string,
    telefono:string
}