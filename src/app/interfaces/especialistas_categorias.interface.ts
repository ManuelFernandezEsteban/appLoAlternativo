import { Categoria } from './especialiadad';



export interface Especialistas_Categoria{
    CategoriasActividadeId:number;
    EspecialistaId:Categoria;
    Categorias_actividade:Categoria;
}

export interface Especialistas_Categorias{
    
    categorias:Especialistas_Categoria[]
}

