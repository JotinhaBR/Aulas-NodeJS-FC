import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CreateComponent } from './pages/user/create/create.component';
import { PerfilComponent } from './pages/user/perfil/perfil.component';
import { BuscarComponent } from './pages/user/buscar/buscar.component';
import { RemoveComponent } from './pages/user/remove/remove.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user/buscar', component: BuscarComponent },
  { path: 'user/create', component: CreateComponent },
  { path: 'user/remove/:getID', component: RemoveComponent },
  { path: 'user/perfil', component: PerfilComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);