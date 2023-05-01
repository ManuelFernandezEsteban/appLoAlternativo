export interface AccountLink {
    link:Link;
}

export interface Link{
    account:string;
    accountLink:LinkItem;
}

export interface LinkItem{
    created:number;
    expires_at:number;
    object:string;
    url:string;
}