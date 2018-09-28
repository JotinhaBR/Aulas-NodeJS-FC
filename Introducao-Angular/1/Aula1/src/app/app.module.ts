import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { UserComponent }  from './pages/user/user.component';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HomeComponent } from './pages/home/home.component';
import { UserService } from './pages/home/home.service';
import { HttpClientModule } from '@angular/common/http';
import { UpComponent } from './itens/navbar/up/up.component';
import { LeftComponent } from './itens/navbar/left/left.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    UpComponent,
    LeftComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  exports: [HttpClientModule],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
