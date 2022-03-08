import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav-responsive',
  templateUrl: './sidenav-responsive.component.html',
  styleUrls: ['./sidenav-responsive.component.css']
})
export class SidenavResponsiveComponent implements OnInit {
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
}
