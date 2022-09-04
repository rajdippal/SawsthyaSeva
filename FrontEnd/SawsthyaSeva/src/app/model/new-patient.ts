export class NewPatient{
    id !: number;
    name !: string;
    adhar !: string;
    age !: number;
    gender !: string;
    address !: string;
    phone !: string;
    email !: string;
    bloodGroup !: string;
    registrationDate !: Date;
    isServed !: boolean;
    doctor_id !: number;

    constructor(){}
}