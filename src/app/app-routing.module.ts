import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonDetailsComponent } from './persons/person-details/person-details.component';
import { PersonEditComponent } from './persons/person-edit/person-edit.component';
import { PersonsComponent } from './persons/persons.component';

const routes: Routes = [
  { path: 'persons', pathMatch: 'full', component: PersonsComponent },
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
