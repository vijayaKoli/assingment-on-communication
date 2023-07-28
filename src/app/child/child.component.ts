import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Output() messageFromChild = new EventEmitter<string>();

  sendMessageToParent(): void {
    this.messageFromChild.emit("Hello from child");
  }
}


