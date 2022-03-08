import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboardmain',
  templateUrl: './dashboardmain.component.html',
  styleUrls: ['./dashboardmain.component.css']
})
export class DashboardmainComponent implements OnInit {
  sideBarOpen = true;
  constructor() { }

  ngOnInit(): void {
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
