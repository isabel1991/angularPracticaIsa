export interface Client {
    id?: string;
    companyName: string;
    contactName: string;
    contactTitle?: string;
    address?: [
        street?:string,
        city?: string,
        region?: string,
        postalCode?: string,
        country?: string,
        phone?: string,
    ];

}
