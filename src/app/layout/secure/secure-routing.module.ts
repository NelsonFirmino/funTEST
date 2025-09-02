import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrativosModule } from '../../secure/administrativos/administrativos.module';
import { DashboardModule } from '../../secure/dashboard/dashboard.module';
import { DeclaracoesModule } from '../../secure/declaracoes/declaracoes.module';
import { RelatoriosModule } from '../../secure/relatorios/relatorios.module';

export const SECURE_ROUTES: Routes = [
    { path: 'd', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', loadChildren: () => DashboardModule },
    { path: 'declaracoes', loadChildren: () => DeclaracoesModule },
    { path: 'administrativos', loadChildren: () => AdministrativosModule },
    { path: 'relatorios', loadChildren: () => RelatoriosModule }
];

const routing: ModuleWithProviders = RouterModule.forChild(SECURE_ROUTES);
