import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {PostComponent} from "./post/post.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  parentMessage: string = "Message from parent [APP] component! to Child [POST] component @Input";
  @ViewChild(PostComponent) postComponent;
  messageFromChildPostCom: string;
  childMessage: string;
  imgUrl: string = 'data:image/jpeg;base64,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';
  imgUrl2: string = 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg';
  change_col: boolean = true;
  count: number = 0;
  twoWayData: string;

  ngAfterViewInit(): void {
    this.messageFromChildPostCom = this.postComponent.messageFromChildPost;
    console.log(this.postComponent);
  }

  buttonClicked() {
    console.log("Button Clicked.")
  }

  onkeyUpEventTest() {
    console.log("On Key Up Event:" + this.count++)
  }

  onkeyUpEvent($event) {
    console.log($event);
    console.log($event.keyCode);
    if ($event.keyCode == 13) {
      console.log("Enter Pressed");
    }

  }

  onkeyUpEventEnter() {
    console.log("keyup.Enter Pressed");

  }

  receiveMessage($event) {
    this.childMessage = $event;
  }

  receiveUserName($event) {
    console.log($event.target.value);
  }

  receiveUserName2(username) {
    console.log("Username 2: " + username);
  }

  twoWayDataPass() {
    console.log("NgModel TwoWay Data Pass: " + this.twoWayData);
  }


}
