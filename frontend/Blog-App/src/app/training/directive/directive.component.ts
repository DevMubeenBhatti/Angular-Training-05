import { Component, OnInit } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  isApproved = false;
  selectedValue: string | undefined;
  luckyNumber = 0;
  // highLightColor = "white";
  newhighLightColor: String | undefined;
  isStyleApplied = false;

  highLightColor(color: String) {
    // this.highLightColor = color;
    this.newhighLightColor = color;
  }

  numbers = [
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten"
  ];
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
  people: any[] = [
    {
      name: "Douglas  Pace",
      age: 35,
      country: "UK"
    },
    {
      name: "Mcleod  Mueller",
      age: 32,
      country: "USA"
    },
    {
      name: "Day  Meyers",
      age: 21,
      country: "HK"
    },
    {
      name: "Aguirre  Ellis",
      age: 34,
      country: "UK"
    },
    {
      name: "Cook  Tyson",
      age: 32,
      country: "USA"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
  approve(status: boolean) {
    this.isApproved = status;
  }
  toggleStyle() {
    this.isStyleApplied = !this.isStyleApplied;
  }
}
