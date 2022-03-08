import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/backendApi/user';
import { UserService } from 'src/app/backendApi/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users: User[] | undefined;
  constructor(
    private userSerivce: UserService,
    private router: Router) { }

    ngOnInit(): void {
      this.getUsers();
    }
  
    private getUsers(){
      this.userSerivce.getUsersList().subscribe(data => {
        debugger;
        this.users = data;
      });
    }
  
    createUser(){
      this.router.navigateByUrl('user/create-user');
    }
    detailDetails(userID: number){
      this.router.navigate(['user/detail-user', userID]);
    }
  
    updateUser(userID: number){
      // this.router.navigate(['employeeupdate', userID]);
      this.router.navigate(['user/update-user', userID]);
    }
  
    deleteUser(userID: number){
      this.userSerivce.deleteUser(userID).subscribe( data => {
        if(confirm("Are you sure you want to deactive" + data)){
          this.userSerivce.deleteUser(userID);
        }
        this.getUsers();
      })
    }

}
