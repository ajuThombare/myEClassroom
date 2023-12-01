export class Leave {
    id: number;
    teacherid: number;
    startDate!: Date;
    endDate!: Date;
    reason: string;
    status :boolean;
    currentleavestatus:string;
    teachername:string;
    constructor(id: number, teacherid: number,  reason: string) {
      this.id = id;
      this.teacherid = teacherid;
      this.reason = reason;
      this.status =false;
      this.currentleavestatus = "";
      this.teachername ="";
    }
  }