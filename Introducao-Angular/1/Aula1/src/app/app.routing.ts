import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', component: UserComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);