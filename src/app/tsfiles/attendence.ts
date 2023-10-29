export class Attendace
{
    rollNo:number;
	present:boolean;
	date:Date;
    // isTodayPresent:boolean;
    constructor(rollNo:number,present:boolean,date:Date)
        {
            this.rollNo=rollNo;
            this.present=present;
            this.date=date;
            // this.isTodayPresent = false;
        }
}