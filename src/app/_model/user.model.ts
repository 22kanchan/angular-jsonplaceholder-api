export class User {
    id!: number;
    username!: string;
    password!: string;
    name!: string;
    phone!: number;
    address!:{
        street:string;
        city:string;
        suite:string;
        zipcode:string;
    };
    email!:string;
    token!: string;
}
