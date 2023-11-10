import { Standard } from "./standard";

export class Subject {
    sid:number;
    sname: string;
    standard: string; 
    
    constructor(sid:number,sname: string) 
    {
        this.sid=sid;
        this.sname = sname;
        this.standard='';
    }
}