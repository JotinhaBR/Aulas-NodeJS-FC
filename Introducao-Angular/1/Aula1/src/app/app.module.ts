import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HomeComponent } from './pages/home/home.component';
import { UserService } from './pages/user/user.service';
import { HttpClientModule } from '@angular/common/http';
import { UpComponent } from './itens/navbar/up/up.component';
import { LeftComponent } from './itens/navbar/left/left.component';
import { CreateComponent } from './pages/user/create/create.component';
import { BuscarComponent } from './pages/user/buscar/buscar.component';
import { DeletarComponent } from './pages/user/deletar/deletar.component';
import { PerfilComponent } from './pages/user/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UpComponent,
    LeftComponent,
    CreateComponent,
    BuscarComponent,
    DeletarComponent,
    PerfilComponent
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
