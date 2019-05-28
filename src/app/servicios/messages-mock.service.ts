import { MessageIntService } from './messages-int.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesMockService implements MessageIntService {
  private messages:string[] = new Array();
  constructor() { }

  add(message:string):void {
    this.messages.push(message);
  }

  clear() {
    //this.messages.length = 0;
    //this.messages = [];
    this.messages= new Array();
  }
  getMessages():string[]{
    return this.messages;
  };

}
