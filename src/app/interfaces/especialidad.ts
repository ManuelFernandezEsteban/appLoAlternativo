export interface Herramienta{
    id:number;
    categoria:string;   
    ActividadeId:number; 
}

export interface Herramientas{
    herramientas:Herramienta[];
}
export interface HerramientasResp {
    usaHerramientas: UsaHerramienta[];
}

export interface UsaHerramienta {
    createdAt:      Date;
    updatedAt:      Date;
    EspecialistaId: string;
    HerramientaId:  number;
    ActividadeId:   number;
    Herramienta:    Herramienta;
}

export interface Actividades{
    actividades:Actividad[];
}
export interface Actividad{
    id:number;
    nombre:string;
    imagen:string;
    Herramientas?:Herramienta[];
}

