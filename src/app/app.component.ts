import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // styles:[`
  //  h3{color: red}
  // `]
})
export class AppComponent {

  customerAddress: string = "Dhaka, Bangladesh";
  customers = [{name: "Customer1", age: 99}, {name: "Customer2", age: 88}];
}
