import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './../../public/login/login.component';
import { FichaCadastralComponent } from '../../public/ficha-cadastral/ficha-cadastral.component';
import { SimulacaoComponent } from '../../public/simulacao/simulacao.component';

export const PUBLIC_ROUTES: Routes = [
    { path: 'simulacao', component: SimulacaoComponent },
    { path: 'ficha', component: FichaCadastralComponent },
    { path: 'login', component: LoginComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(PUBLIC_ROUTES);