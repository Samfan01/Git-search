import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RepositoryComponent } from './repository/repository.component';
import { NavbarComponent } from './navbar/navbar.component';
import {FormsModule} from '@angular/forms';
import { PeriodPipe } from './period.pipe';
import { BgColorDirective } from './bg-color.directive'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RepositoryComponent,
    NavbarComponent,
    PeriodPipe,
    BgColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
