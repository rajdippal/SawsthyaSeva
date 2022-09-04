export class Prescription {
    id !: number;
    date !: Date;
    medicines !: string;
    tests !: string;
    doctorId !: number;
    patientId !: number;

    constructor(){}
}
