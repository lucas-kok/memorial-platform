import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonDetailsComponent } from './person/person-details/person-details.component';
import { PersonEditComponent } from './person/person-edit/person-edit.component';
import { PersonComponent } from './person/person.component';

const routes: Routes = [
  { path: 'persons', pathMatch: 'full', component: PersonComponent },
  { path: 'persons/:id', pathMatch: 'full', component: PersonDetailsComponent },
  {
    path: 'persons/:id/edit',
    pathMatch: 'full',
    component: PersonEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
