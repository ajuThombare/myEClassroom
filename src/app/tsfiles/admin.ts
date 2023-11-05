export class Admin{
    adminId:number;
    userName:String;
    password:String;

    constructor(
        adminId:number,
        userName:String,
        password:String,
    ) {
    this.adminId = adminId;
		this.userName = userName;
		this.password = password;
    }

}