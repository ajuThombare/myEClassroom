import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Standard } from 'src/app/tsfiles/standard';
import { User } from 'src/app/tsfiles/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-standard',
  templateUrl: './standard.component.html',
  styleUrls: ['./standard.component.css']
})
export class StandardComponent implements OnInit{
  standard: Standard = new Standard(0,"");
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    // Initialization code here, if needed.
  }

  public selectStandard() {
    // Create a Standard object from the user's selected standard
    if(this.standard.name.length ==0){
      alert("Name is Mandetory.");
      return;
    }
    if(this.standard.name.length <3){
      alert("Name should be minimum 3 characters.");
      return;
    }
    this.userService.createStandard(this.standard).subscribe(
      (data: any) => {  
        // console.log(data);        
        if(data==null){
          alert('Standard Already present.');
          this.standard.name = '';
        }else{
          alert('Standard is saved.');
           this.router.navigate(['/subject']);
        }
      },
      (error: any) => {
        console.error('Error saving standard', error);
      }
    );
  }
}
