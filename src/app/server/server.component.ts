import {Component} from "@angular/core";


@Component({
  //selector:'app-server',
  //selector:'app-server',
  selector: '.app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverId: number = 1001011;
  serverStatus: string = "offline";
  currentDateTime: Date = new Date();
  allowButtonClick: boolean = false;
  serverCreationStatus: string = "Server is not Created !!";
  serverName = '';
  serverCreated = false;
  randomVal = 0;
  bgColor = 'green';


  getCurrentDate() {
    return this.currentDateTime;
  }
  constructor() {
    this.randomVal = Math.random().valueOf();
    if (this.randomVal > 0.5){
      this.bgColor = 'orange';
      this.serverStatus = 'online';
    }
    setTimeout(()=>{
      this.allowButtonClick = true;
    }, 3000);
  }
  onServerCreation(){
    this.serverCreated = true;
    this.serverCreationStatus = "Server is Created Successfully.";
  }
  onServerUpdateName(event: Event){
    console.log(event)
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  getBackgroundColor(){
    return this.bgColor;
  }

}
