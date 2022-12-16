export interface Especialistas {
    especialistas: Especialista[];
}

export interface Especialista {
    id:                  number;
    nombre:              string;
    apellidos:           string;
    fecha_alta:          string;
    descripcion_terapia: string;
    actividad:           string;
    direccion:           string;
    provincia:           string;
    localidad:           string;
    codigo_postal:       string;
    pais:                string;
    video:               string;
    imagen_terapeuta:    string;
    telefono:            string;
    plan_contratado:     string;
    token_pago:          string;
    email:               string;
    twitter:             string;
    facebook:            string;
    instagram:           string;
    you_tube:            string;
    web:                 string;
}
