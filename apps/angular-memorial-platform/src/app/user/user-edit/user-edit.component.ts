import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gender } from '../../shared/gender.model';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent {
  componentId: string | null | undefined;
  userExists: boolean = false;
  user: User | undefined;
  genders: string[] | undefined;

  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.genders = Object.values(Gender);
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.componentId = params.get('id');

      if (this.componentId == null) return;

      this.user = this.userService.getUserById(this.componentId);

      if (this.user != null) this.userExists = true;
    });
  }

  onEdit() {
    if (this.user == null) return;

    this.userService.updateUser(this.user);
  }

  onDelete() {
    // User must exist before removing
    if (this.user != null && this.componentId != null) {
      this.userService.removeUserById(this.componentId);
    }
  }
}
