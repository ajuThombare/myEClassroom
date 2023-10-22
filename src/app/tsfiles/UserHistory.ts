export class UserHistory {
    recordId: number;
    userid: number;
    firstName: string;
    lastName: string;
    eMail: string;
    role: string;
    mobileNo: string;
    username: string;
    city: string;
    state: string;
    country: string;
    isActive: string;
  
    constructor(
      recordId: number,
      userid: number,
      firstName: string,
      lastName: string,
      eMail: string,
      role: string,
      mobileNo: string,
      username: string,
      city: string,
      state: string,
      country: string,
      isActive: string
    ) {
      this.recordId = recordId;
      this.userid = userid;
      this.firstName = firstName;
      this.lastName = lastName;
      this.eMail = eMail;
      this.role = role;
      this.mobileNo = mobileNo;
      this.username = username;
      this.city = city;
      this.state = state;
      this.country = country;
      this.isActive = isActive;
    }
  }