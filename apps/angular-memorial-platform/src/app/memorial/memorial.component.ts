import { Component } from '@angular/core';
import { Memorial } from './memorial.model';
import { MemorialService } from './memorial.service';
import { MessageService } from '../message/message.service';
import { ActivatedRoute } from '@angular/router';
import { Input } from '@angular/core';
import { MessageDTO } from '../message/message.dto';
import { Message } from '../message/message.model';

@Component({
  selector: 'app-memorial',
  templateUrl: './memorial.component.html',
  styleUrls: ['./memorial.component.css'],
})
export class MemorialComponent {
  componentId: string | undefined;

  @Input()
  isUserProperty: boolean = false;

  userId: string | null = localStorage.getItem('userId');

  memorialExists: boolean = false;
  memorial: Memorial | undefined;

  newMessage: Message = new Message();

  constructor(
    private memorialService: MemorialService,
    private messageService: MessageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.componentId = params['id'];
      this.memorialService
        .getMemorialByFuneralId(this.componentId!)
        .subscribe((memorial: any) => {
          console.log(memorial.result);
          if (memorial) {
            this.memorialExists = true;
            this.memorial = memorial.result;
          }
        });
    });
  }

  onCreate() {
    const jwtToken = localStorage.getItem('jwtToken');

    const newMemorial: Memorial = {
      _id: '1',
      userId: '1',
      funeralId: this.componentId,
      description: 'This is a memorial',
      imageBase64: btoa('base64'),
      messages: [],
    };

    this.memorialService
      .createMemorial(newMemorial!, jwtToken!)
      .subscribe((memorial: any) => {
        this.memorial = memorial.result;
        this.memorialExists = true;
      });
  }

  onAddMessage() {
    const jwtToken = localStorage.getItem('jwtToken');
    this.newMessage.memorialId = this.memorial!._id;

    this.messageService
      .addMessage(this.newMessage, this.componentId!, jwtToken!)
      .subscribe((message: any) => {
        this.memorial!.messages!.push(message.result);
        this.newMessage = new Message();
      });
  }

  onDeleteMessage(messageId: string) {
    const jwtToken = localStorage.getItem('jwtToken');

    this.messageService
      .deleteMessage(messageId, this.memorial?._id!, jwtToken!)
      .subscribe((message: any) => {
        this.memorial!.messages = this.memorial!.messages!.filter(
          (m) => m._id !== messageId
        );
      });
  }
}
