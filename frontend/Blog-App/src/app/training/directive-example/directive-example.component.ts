import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrls: ['./directive-example.component.css']
})
export class DirectiveExampleComponent implements OnInit {
  isClearDisabled = true;
  chosenNum = 1;
  nums = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
  ]
  constructor() { }

  ngOnInit(): void {

  }
  calculate(divisibleBy: number) {
    this.chosenNum = divisibleBy;
    if (divisibleBy === 1) {
      this.isClearDisabled = true;
    } else {
      this.isClearDisabled = false;
    }
  }
}
