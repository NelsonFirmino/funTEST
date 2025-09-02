import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DashboardComponent } from './dashboard.component';

const ROUTES: Routes = [
  { path: '', redirectTo: 'v1', pathMatch: 'full' },
  { path: 'v1', component: DashboardComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(ROUTES),
    HttpClientModule,
    FormsModule,
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
