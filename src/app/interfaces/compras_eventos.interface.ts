import { Evento } from "../auth/models/evento.model";
import { IEvento } from "./eventos";

export interface ComprasEventosNoFinalizadas {
    compras_eventos_no_finalizadas: ComprasEventosNoFinalizada[];
}

export interface ComprasEventosNoFinalizada {
    id:              number;
    ClienteId:       string;
    EventoId:        string;
    EspecialistaId:  string;
    payment_intent:  string;
    ok_cliente:      boolean;
    ok_especialista: boolean;
    pagada:          boolean;
    createdAt:       Date;
    updatedAt:       Date;
    deletedAt:       Date;
    Evento:          IEvento;
    Cliente:         Cliente;
}

export interface Cliente {
    id:              string;
    nombre:          string;
    apellidos:       string;
    email:           string;
    telefono:        string;
    direccion:       string;
    provincia:       string;
    poblacion:       string;
    codigo_postal:   string;
    pais:            string;
    privacidad:      boolean;
    aceptaComercial: boolean;
    idStripe:        null;
    createdAt:       Date;
    updatedAt:       Date;
    deletedAt:       Date;
}