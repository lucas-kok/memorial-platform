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
import { UserLoginComponent } from './user/user-login/user-login.component';
import { FuneralComponent } from './funeral/funeral.component';
import { FuneralDetailsComponent } from './funeral/funeral-details/funeral-details.component';
import { FuneralEditComponent } from './funeral/funeral-edit/funeral-edit.component';
import { FuneralCreateComponent } from './funeral/funeral-create/funeral-create.component';
import { MemorialComponent } from './memorial/memorial.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    UserLoginComponent,
    FuneralComponent,
    FuneralDetailsComponent,
    FuneralEditComponent,
    FuneralCreateComponent,
    MemorialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
  ],
  providers: [MatSnackBar],
  bootstrap: [AppComponent],
})
export class AppModule {}
