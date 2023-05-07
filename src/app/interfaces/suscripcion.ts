

export enum Status {incomplete, incomplete_expired, trialing, active, past_due, canceled, unpaid} ;
export enum Suscripciones {ORO,PLATA,PLATINO};

export interface Suscripcion{
    createdAt: Date,
    current_period_end_Date: Date,
    current_period_start_Date:Date,
    status: Status,
    tipoSuscripcion: Suscripciones
}