import { HomeComponent } from './client/pages/home/home.component';
import { HomeComponentPainel } from './painel/pages/home/home.component';
import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

const app_routes:Routes=[
    {path: '', component: HomeComponent},
    {path: 'painel', component: HomeComponentPainel},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(app_routes);
