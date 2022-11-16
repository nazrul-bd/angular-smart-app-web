import {Component} from "@angular/core";


@Component({
  //selector:'app-server',
  //selector:'app-server',
  selector: '.app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverId: number = 1001011;
  serverStatus: string = "offline!!";
  currentDateTime: Date = new Date();
  allowButtonClick: boolean = false;
  serverCreationStatus: string = "Server is not Created !!";
  serverName = '';

  getCurrentDate() {
    return this.currentDateTime;
  }
  constructor() {
    setTimeout(()=>{
      this.allowButtonClick = true;
    }, 3000);
  }
  onServerCreation(){
    this.serverCreationStatus = "Server is Created Successfully.";
  }
  onServerUpdateName(event: Event){
    console.log(event)
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
