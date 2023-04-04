export interface ClienteForm{

    nombre?:string,
    apellidos?:string,
    telefono?:string,    
    email?:string,    
    privacidad?:boolean,
    direccion?:string,
    poblacion?:string,     
    provincia?:string,
    codigo_postal?:string,
    pais?:string,
    aceptaComercial?:boolean     

}

export interface Cliente{
    id:string,
    nombre:string,
    apellidos:string,
    telefono:string,    
    email:string,    
    privacidad:boolean,
    direccion?:string,
    poblacion?:string,     
    provincia?:string,
    codigo_postal?:string,
    pais?:string,
    aceptaComercial:boolean     

}