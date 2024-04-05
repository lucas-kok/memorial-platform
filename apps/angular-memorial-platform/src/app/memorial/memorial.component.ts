import { Component } from '@angular/core';
import { Memorial } from './memorial.model';
import { MemorialService } from './memorial.service';
import { MessageService } from '../message/message.service';
import { ActivatedRoute } from '@angular/router';
import { Input } from '@angular/core';
import { MessageDTO } from '../message/message.dto';
import { Message } from '../message/message.model';
import { NotificationService } from '../notification/notification.service';
import { catchError } from 'rxjs';
import { error } from 'console';
import { Funeral } from '../funeral/funeral.model';

@Component({
  selector: 'app-memorial',
  templateUrl: './memorial.component.html',
  styleUrls: ['./memorial.component.css'],
})
export class MemorialComponent {
  componentId: string | undefined;

  @Input()
  isUserProperty: boolean = false;

  @Input()
  funeral: Funeral | undefined;

  userId: string | null = localStorage.getItem('userId');

  memorialExists: boolean = false;
  memorial: Memorial | undefined;

  relatedMemorials: Memorial[] = [];

  newMessage: Message = new Message();

  constructor(
    private memorialService: MemorialService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.componentId = params['id'];
      this.memorialService
        .getMemorialByFuneralId(this.componentId!)
        .pipe(
          catchError((error) => {
            this.notificationService.showError(
              error.error.message?.join('\n\n') || 'Er is een fout opgetreden'
            );
            return error;
          })
        )
        .subscribe((memorial: any) => {
          if (memorial) {
            this.memorialExists = true;
            this.memorial = memorial.result;

            if (this.memorialExists) {
              this.memorialService
                .getRelatedMemorials(
                  this.memorial!._id!,
                  localStorage.getItem('jwtToken')!
                )
                .pipe(
                  catchError((error) => {
                    this.notificationService.showError(
                      error.error.message?.join('\n\n') ||
                        'Er is een fout opgetreden'
                    );
                    return error;
                  })
                )
                .subscribe((results: any) => {
                  const memorials = results.map((res: any) => res.result);
                  this.relatedMemorials = memorials;
                });
            }

            this.memorial?.messages?.sort((a, b) => {
              return (
                new Date(b.dateTime!).getTime() -
                new Date(a.dateTime!).getTime()
              );
            });
          }
        });
    });
  }

  handleFileSelect(evt: any) {
    var file = evt.files[0];

    if (file) {
      var reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt: any) {
    var binaryString = readerEvt.target.result;
    this.newMessage!.imageBase64 = btoa(binaryString);
  }

  onCreate() {
    const jwtToken = localStorage.getItem('jwtToken');

    const newMemorial: Memorial = {
      _id: '1',
      userId: '1',
      funeralId: this.componentId,
      description: 'This is a memorial',
      imageBase64: this.funeral?.person?.imageBase64,
      messages: [],
    };

    this.memorialService
      .createMemorial(newMemorial!, jwtToken!)
      .pipe(
        catchError((error) => {
          this.notificationService.showError(
            error.error.message.join('\n\n') || 'Er is een fout opgetreden'
          );
          return error;
        })
      )
      .subscribe((memorial: any) => {
        this.memorial = memorial.result;
        this.memorialExists = true;

        this.notificationService.showSuccess(
          'Herdenkingsplaats succesvol aangemaakt'
        );
      });
  }

  onAddMessage() {
    const jwtToken = localStorage.getItem('jwtToken');
    this.newMessage.memorialId = this.memorial!._id;

    this.messageService
      .addMessage(this.newMessage, jwtToken!)
      .pipe(
        catchError((error) => {
          this.notificationService.showError(
            error.error.message.join('\n\n') || 'Er is een fout opgetreden'
          );
          return error;
        })
      )
      .subscribe((message: any) => {
        this.memorial!.messages!.push(message.result);
        this.memorial!.messages!.sort((a, b) => {
          return (
            new Date(b.dateTime!).getTime() - new Date(a.dateTime!).getTime()
          );
        });
        this.newMessage = new Message();

        this.notificationService.showSuccess('Herdenking succesvol toegevoegd');
      });
  }

  onDeleteMessage(messageId: string) {
    const jwtToken = localStorage.getItem('jwtToken');

    this.messageService
      .deleteMessage(messageId, this.memorial?._id!, jwtToken!)
      .pipe(
        catchError((error) => {
          this.notificationService.showError(
            error.error.message.join('\n\n') || 'Er is een fout opgetreden'
          );
          return error;
        })
      )
      .subscribe((message: any) => {
        this.memorial!.messages = this.memorial!.messages!.filter(
          (m) => m._id !== messageId
        );

        this.notificationService.showSuccess('Herdenking succesvol verwijderd');
      });
  }
}
