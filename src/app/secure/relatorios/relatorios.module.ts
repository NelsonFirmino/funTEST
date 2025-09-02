import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { CodeHighlighterModule } from 'primeng/codehighlighter';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { DataViewModule } from 'primeng/dataview';

import { AtrasadoComponent } from './atrasado/atrasado.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { RecolhimentoComponent } from './recolhimento/recolhimento.component';
import { CalendarModule,
  GrowlModule,
  InputTextareaModule,
  DataTableModule,
  InputMaskModule,
  AccordionModule,
  ConfirmDialogModule 
} from 'primeng/primeng';
import { InadimplenteComponent } from './inadimplente/inadimplente.component';
import { DeclaradoComponent } from './declarado/declarado.component';
import { HistoricoComponent } from './historico/historico.component';
const ROUTES: Routes = [
  { path: '', redirectTo: 'relatorios', pathMatch: 'full' },
  { path: 'atrasado', component: AtrasadoComponent },
  { path: 'extrato', component: ExtratoComponent },
  { path: 'declarado', component: DeclaradoComponent },
  { path: 'inadimplente', component: InadimplenteComponent },
  { path: 'recolhimento', component: RecolhimentoComponent },
  { path: 'historico', component: HistoricoComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(ROUTES),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DataViewModule,
    PanelModule,
    DialogModule,
    DropdownModule,
    TabViewModule,
    InputTextModule,
    ButtonModule,
    CodeHighlighterModule,
    CalendarModule,
    GrowlModule,
    InputTextareaModule,
    DataTableModule,
    InputMaskModule,
    AccordionModule,
    ConfirmDialogModule
  
  ],
  declarations: [ AtrasadoComponent, ExtratoComponent, RecolhimentoComponent, InadimplenteComponent ,DeclaradoComponent, HistoricoComponent]
 
})
export class RelatoriosModule { }
