import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicModule  } from './public/public.module';
import { SecureModule  } from './secure/secure.module';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    PublicModule,
    SecureModule
  ],
  exports: [ PublicModule, SecureModule ]
})
export class CoreModule { }

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
