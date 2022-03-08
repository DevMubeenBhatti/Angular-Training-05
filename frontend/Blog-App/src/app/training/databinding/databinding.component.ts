import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  myName = "Muhammad Mubeen";
  userName = '';
  resultTwoBinding = "";
  defaultValue = '';
  isDisable = false;
  imgPorperBinding = "../../../assets/images/cars_thumb.png";
  constructor() { }

  // event bind
  // evenBinding(e){
  //   console.log(e.traget.value);
  // }
  ngOnInit(): void {
  }
  onSubmit() {
    if (this.defaultValue === 'submit') {
      this.isDisable = true;
    }
  }
}
