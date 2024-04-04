import { Component } from '@angular/core';
import { Memorial } from './memorial.model';
import { MemorialService } from './memorial.service';
import { MessageService } from '../message/message.service';
import { ActivatedRoute } from '@angular/router';
import { Input } from '@angular/core';

@Component({
  selector: 'app-memorial',
  templateUrl: './memorial.component.html',
  styleUrls: ['./memorial.component.css'],
})
export class MemorialComponent {
  componentId: string | undefined;

  @Input()
  isUserProperty: boolean = false;

  memorialExists: boolean = false;
  memorial: Memorial | undefined;

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
}
