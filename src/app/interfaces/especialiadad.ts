export interface Categoria{
    id:number;
    categoria:string;
}

export interface Categorias{
    categorias:Categoria[];
}

export interface Especialidades{
    especialidades:Especialidad[];
}


export interface Especialidad{
    id:number;
    nombre:string;
    imagen:string;
    Categorias_actividades?:Categoria[];
}

export interface Actividades{
    actividades:Actividad[];
}
export interface Actividad{
    id:number;
    nombre:string;
    imagen:string;
}

