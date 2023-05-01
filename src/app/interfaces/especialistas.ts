export interface Especialista {
    especialista: EspecialistaClass;
}

export interface EspecialistaClass {
    id?:                    string;
    nombre:                string;
    apellidos:             string;
    telefono:              string;
    email:                 string;
    descripcion_terapia:   string;
    direccion:             string;
    provincia:             string;
    localidad:             string;
    codigo_postal:         string;
    pais:                  string;
    video:                 string;
    imagen:                string;
    token_pago:            string;
    twitter:               string;
    facebook:              string;
    instagram:             string;
    you_tube:              string;
    web:                   string;
    fecha_pago_actual:     Date;
    fecha_fin_suscripcion: Date;
    createdAt:             Date;
    updatedAt:             Date;
    deletedAt:             Date;
    resetToken:            string;
    ActividadeId:          number;
    PlaneId:               number;
    cuentaConectada:       string;
    Actividade:            Actividade;
    Plane:                 Plane;
    UsaHerramientas?:       UsaHerramienta[];
}

export interface Actividade {
    id:        number;
    nombre:    string;
    imagen:    string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Plane {
    id:        number;
    nombre:    string;
    precio:    number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

export interface UsaHerramienta {
    createdAt:      Date;
    updatedAt:      Date;
    EspecialistaId: string;
    HerramientaId: number;
}
