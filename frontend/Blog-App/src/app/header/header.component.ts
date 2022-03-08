import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  constructor(
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }
  logout(){
    this.router.navigateByUrl('/login');
    this.toastr.success('Successfully Logged out');
  }
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
}
