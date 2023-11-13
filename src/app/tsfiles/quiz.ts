import { Question } from "./question";
import { Standard } from "./standard";
import { Subject } from "./subject";


export class Quiz {
    qId:number;
     title: string;
     description: string;
     maxMarks: string;
     numberOfQuestions: string;
    active: boolean = false;
    subjects:Subject[]=[];
    subject:string;
    questions: Question[] = [];
    teacherId : string;
    standard: string;
    standards:Standard[]=[];
    standardId:number=0;
    constructor(qId:number,title: string, description: string, maxMarks: string,
        numberOfQuestions: string, active: boolean = false,subjects:Subject[]=[],subject:string,standard: string) {
        this.qId=qId;
        this.title = title;
        this.description = description;
        this.maxMarks = maxMarks;
        this.numberOfQuestions = numberOfQuestions;
        this.active = active;
        this.subjects = subjects;
        this.teacherId='';
        this.subject=subject;
        this.standard=standard;
        this.standards=[];
    }
}