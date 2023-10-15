export class Notes {
    id: number;
    note: Uint8Array; 
    subject: string;
    date:String
    teacherId: String;
    constructor(id: number,note: Uint8Array,subject: string) {
      this.id = id;
      this.note = new Uint8Array();
      this.subject = '';
      this.date='';
      this.teacherId='';
  }
}