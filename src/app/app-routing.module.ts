import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PersonCreateComponent } from './person/person-create/person-create.component';
import { PersonDetailsComponent } from './person/person-details/person-details.component';
import { PersonEditComponent } from './person/person-edit/person-edit.component';
import { PersonComponent } from './person/person.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
