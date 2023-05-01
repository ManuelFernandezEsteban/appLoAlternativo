
export interface RespuestaCuenta{
    cuenta:Cuenta;
}

export interface Cuenta {
    id:                  string;
    object:              string;
    //business_profile:    BusinessProfile;
    //capabilities:        Capabilities;
    charges_enabled:     boolean;
    country:             string;
    created:             number;
    default_currency:    string;
    details_submitted:   boolean;
    email:               string;
    //external_accounts:   ExternalAccounts;
    //future_requirements: CuentaFutureRequirements;
    //login_links:         ExternalAccounts;
    //metadata:            Metadata;
    payouts_enabled:     boolean;
    //requirements:        CuentaFutureRequirements;
    //settings:            Settings;
    //tos_acceptance:      CuentaTosAcceptance;
    type:                string;
}
/*
export interface BusinessProfile {
    mcc:             string;
    name:            null;
    support_address: null;
    support_email:   null;
    support_phone:   null;
    support_url:     null;
    url:             string;
}

export interface Capabilities {
    card_payments: string;
    transfers:     string;
}

export interface ExternalAccounts {
    object:      string;
    data:        Datum[];
    has_more:    boolean;
    total_count: number;
    url:         string;
}

export interface Datum {
    id:                       string;
    object:                   string;
    account:                  string;
    account_holder_name:      null;
    account_holder_type:      null;
    account_type:             null;
    available_payout_methods: string[];
    bank_name:                string;
    country:                  string;
    currency:                 string;
    default_for_currency:     boolean;
    fingerprint:              string;
    future_requirements:      DatumFutureRequirements;
    last4:                    string;
    metadata:                 Metadata;
    requirements:             DatumFutureRequirements;
    routing_number:           string;
    status:                   string;
}

export interface DatumFutureRequirements {
    currently_due:        any[];
    errors:               any[];
    past_due:             any[];
    pending_verification: any[];
}

export interface Metadata {
}

export interface CuentaFutureRequirements {
    alternatives:         any[];
    current_deadline:     null;
    currently_due:        any[];
    disabled_reason:      null;
    errors:               any[];
    eventually_due:       string[];
    past_due:             any[];
    pending_verification: any[];
}

export interface Settings {
    bacs_debit_payments: Metadata;
    branding:            Branding;
    card_issuing:        CardIssuing;
    card_payments:       CardPayments;
    dashboard:           Dashboard;
    payments:            Payments;
    payouts:             Payouts;
    sepa_debit_payments: Metadata;
}

export interface Branding {
    icon:            null;
    logo:            null;
    primary_color:   null;
    secondary_color: null;
}

export interface CardIssuing {
    tos_acceptance: CardIssuingTosAcceptance;
}

export interface CardIssuingTosAcceptance {
    date: null;
    ip:   null;
}

export interface CardPayments {
    decline_on:                        DeclineOn;
    statement_descriptor_prefix:       null;
    statement_descriptor_prefix_kana:  null;
    statement_descriptor_prefix_kanji: null;
}

export interface DeclineOn {
    avs_failure: boolean;
    cvc_failure: boolean;
}

export interface Dashboard {
    display_name: string;
    timezone:     string;
}

export interface Payments {
    statement_descriptor:       string;
    statement_descriptor_kana:  null;
    statement_descriptor_kanji: null;
}

export interface Payouts {
    debit_negative_balances: boolean;
    schedule:                Schedule;
    statement_descriptor:    null;
}

export interface Schedule {
    delay_days: number;
    interval:   string;
}

export interface CuentaTosAcceptance {
    date: number;
}
*/