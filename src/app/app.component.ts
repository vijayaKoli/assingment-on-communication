import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'childparent';
  messageFromParent: string | undefined;

  receiveMessageFromChild(message: string): void {
    this.messageFromParent = message;
  }
}
