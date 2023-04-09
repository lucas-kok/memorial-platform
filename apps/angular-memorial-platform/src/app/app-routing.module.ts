import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FuneralCreateComponent } from './funeral/funeral-create/funeral-create.component';
import { FuneralDetailsComponent } from './funeral/funeral-details/funeral-details.component';
import { FuneralComponent } from './funeral/funeral.component';
import { PersonCreateComponent } from './person/person-create/person-create.component';
import { PersonDetailsComponent } from './person/person-details/person-details.component';
import { PersonEditComponent } from './person/person-edit/person-edit.component';
import { PersonComponent } from './person/person.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'about', pathMatch: 'full', component: AboutComponent },
  { path: 'persons', pathMatch: 'full', component: PersonComponent },
  {
    path: 'persons/create',
    pathMatch: 'full',
    component: PersonCreateComponent,
  },
  { path: 'persons/:id', pathMatch: 'full', component: PersonDetailsComponent },
  {
    path: 'persons/:id/edit',
    pathMatch: 'full',
    component: PersonEditComponent,
  },
  { path: 'users', pathMatch: 'full', component: UserComponent },
  { path: 'users/create', pathMatch: 'full', component: UserCreateComponent },
  { path: 'users/login', pathMatch: 'full', component: UserLoginComponent },
  { path: 'users/:id', pathMatch: 'full', component: UserDetailsComponent },
  { path: 'users/:id/edit', pathMatch: 'full', component: UserEditComponent },
  { path: 'funerals', pathMatch: 'full', component: FuneralComponent },
  {
    path: 'persons/:id/funerals/create',
    pathMatch: 'full',
    component: FuneralCreateComponent,
  },
  {
    path: 'funerals/:id',
    pathMatch: 'full',
    component: FuneralDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
