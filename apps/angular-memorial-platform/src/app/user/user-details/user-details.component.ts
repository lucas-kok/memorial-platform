import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent {
  componentId: string | null | undefined;
  userExists: boolean = false;
  user: User | undefined;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.componentId = params.get('id');

      if (this.componentId == null) return;

      this.user = this.userService.getUserById(this.componentId);

      if (this.user != null) this.userExists = true;
    });
  }

  dateToString(date: Date): string {
    return new Date(date).toLocaleDateString();
  }
}
