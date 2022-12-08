import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PersonComponent } from './person/person.component';
import { PersonDetailsComponent } from './person/person-details/person-details.component';
import { PersonEditComponent } from './person/person-edit/person-edit.component';
import { PersonCreateComponent } from './person/person-create/person-create.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PersonDetailsComponent,
    PersonEditComponent,
    PersonComponent,
    PersonCreateComponent,
    AboutComponent,
    UserComponent,
    UserCreateComponent,
    UserDetailsComponent,
    UserEditComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
