import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messages;

  newMessage = {body: '', author: ''};

  constructor(db: AngularFireDatabase) {
    this.messages = db.list('/messages');
  }
  send(message) {
    event.preventDefault();
    this.messages.push(message);
    this.newMessage.body = '';
  }
}
