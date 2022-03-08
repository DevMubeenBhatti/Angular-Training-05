import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/backendApi/user';
import { UserService } from 'src/app/backendApi/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  userID!: number;
  user: User = new User();
  constructor(
    private userSerivce: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.userID = this.route.snapshot.params['userID'];
    this.userSerivce.getUserById(this.userID).subscribe(data => {
      debugger;
      this.user = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.userSerivce.updateUser(this.userID, this.user).subscribe( data =>{
      this.getUsersList();
    }
    , error => console.log(error));
  }

  getUsersList(){
    this.router.navigateByUrl('/user/list-user');
  }
  cancelUser(){
    this.router.navigateByUrl('/user/list-user');
  }

}
