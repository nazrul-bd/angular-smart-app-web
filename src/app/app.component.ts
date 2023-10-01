import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {PostComponent} from "./post/post.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  parentMessage: string = "Message from parent [APP] component! to Child [POST] component @Input";
  @ViewChild(PostComponent) postComponent;
  messageFromChildPostCom: string;

  ngAfterViewInit(): void {
    this.messageFromChildPostCom = this.postComponent.messageFromChildPost;
    console.log(this.postComponent);
  }


}
