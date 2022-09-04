export class Patient {
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
    doctorId !: number;

    constructor(){}
}
