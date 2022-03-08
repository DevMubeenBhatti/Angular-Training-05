import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/backendApi/user';
import { UserService } from 'src/app/backendApi/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  user: User = new User();
  constructor(
    private userSerivce: UserService,
    private router: Router) { }


  ngOnInit(): void {
  }
  saveUser(){
    this.userSerivce.createUser(this.user).subscribe( data =>{
      console.log(data);
      this.getUsersList();
    },
    error => console.log(error));
  }

  getUsersList(){
    this.router.navigateByUrl('/user/list-user')
  }
  
  onSubmit(){
    console.log(this.user);
    this.saveUser();
  }
  cancelUser(){
    this.router.navigateByUrl('/user/list-user');
  }

}
