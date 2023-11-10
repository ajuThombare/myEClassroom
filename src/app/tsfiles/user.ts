import { Standard } from "./standard";
import { Subject } from "./subject";

export class User
{ 
    id:number;
    firstName:string;
    lastName:string;
    eMail:string;
    enabled:boolean;
    role:string;
    mobileNo:string;
    username:string;
    password:string;
    subjectid:string;
    standardid:string;
    city:string;
    state:string;
    country:string;
    subjects: Subject []=[];
    standards : Standard[]=[];

  constructor(
    id:number,
    firstName:string,
    lastName:string,
    eMail:string,
    enabled:boolean,
    role:string,
    mobileNo:string,
    username:string,
    password:string,
    city:string,
    state:string,
    country:string
  ){
    this.id=id;
    this.firstName=firstName;
    this.lastName=lastName;
    this.eMail=eMail;
    this.enabled=enabled;
    this.role=role;
    this.mobileNo=mobileNo;
    this.username=username;
    this.password=password;
    this.city=city;
    this.state=state;
    this.country=country;
    this.subjectid='';
    this.standardid='';
  }
}