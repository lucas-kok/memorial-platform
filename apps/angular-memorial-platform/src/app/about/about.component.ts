import { Component } from '@angular/core';
import { UserService } from '../user/user.service';
import { NotificationService } from '../notification/notification.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  email: string | null;

  constructor(private notificationService: NotificationService) {
    this.email = localStorage.getItem('email');

    if (this.email == null) {
      this.email = 'guest';
    }

    notificationService.showInfo('Welkom ' + this.email);
  }
}
