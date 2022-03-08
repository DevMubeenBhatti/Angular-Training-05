import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/backendApi/user';
import { UserService } from 'src/app/backendApi/user.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {

  userID!: number;
  user!: User;

  
  constructor(
    private route: ActivatedRoute, 
    private userSerivce: UserService,  
    private router: Router,) { }

  ngOnInit(): void {
    this.userID = this.route.snapshot.params['userID'];
    this.user = new User();
    this.userSerivce.getUserById(this.userID).subscribe( data => {
      this.user = data;
    });
  }
  userList(){
    this.router.navigateByUrl('/user/list-user');
  }
}
