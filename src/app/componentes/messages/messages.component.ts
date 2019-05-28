import { Component, OnInit } from '@angular/core';
import { MessagesMockService } from 'src/app/servicios/messages-mock.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  //private messages:string[];
  constructor(private messagesMockService : MessagesMockService) { 

  }
  ngOnInit() {
    // this.messages =  this.messagesMockService.getMessages();
  }


  onClear() {
    this.messagesMockService.clear();
    //this.messages =  this.messagesMockService.getMessages();
  }
}
