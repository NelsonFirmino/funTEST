import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { DataViewModule } from 'primeng/dataview';
import {
  CodeHighlighterModule,
  ButtonModule,
  InputTextModule,
  TabViewModule,
  DropdownModule,
  PanelModule,
  DialogModule,
  CalendarModule,
  GrowlModule,
  InputTextareaModule,
  DataTableModule,
  InputMaskModule,
  AccordionModule,
  ConfirmDialogModule,
  ConfirmationService
} from 'primeng/primeng';

import { DeclaracaoService } from './declaracao.service';
import { NavbarWizardComponent } from './navbar-wizard/navbar-wizard.component';

import { ListarDeclaracoesComponent } from './listar-declaracoes/listar-declaracoes.component';
import { NovaDeclaracaoComponent } from './nova-declaracao/nova-declaracao.component';
import { SelecionarPeriodoComponent } from './nova-declaracao/selecionar-periodo/selecionar-periodo.component';
import { ConfirmarLancamentosComponent } from './nova-declaracao/confirmar-lancamentos/confirmar-lancamentos.component';
import { LancarServicosComponent } from './nova-declaracao/lancar-servicos/lancar-servicos.component';
import { ResultadoComponent } from './nova-declaracao/resultado/resultado.component';

import { WorkflowService } from './workflow/workflow.service';
import { FormDataService } from './workflow/data/formData.service';
import { SimulacaoService } from '@app/public/simulacao/simulacao.services';
import { WorkflowGuard } from '@app/secure/declaracoes/workflow/workflow-guard.service';
import { DeclaracaoIsentoComponent } from './declaracao-isento/declaracao-isento.component';
import { ConfirmarComponent } from './declaracao-isento/confirmar/confirmar.component';

const ROUTES: Routes = [
  { path: '', redirectTo: 'listar', pathMatch: 'full' },
  { path: 'listar', component: ListarDeclaracoesComponent },
  { path: 'nova', component: NovaDeclaracaoComponent,  children: [
      { path: '', redirectTo: 'periodo', pathMatch: 'full' },
      { path: 'periodo', component: SelecionarPeriodoComponent },
      { path: 'lancamentos', component: LancarServicosComponent, canActivate: [WorkflowGuard] },
      { path: 'confirmar', component: ConfirmarLancamentosComponent, canActivate: [WorkflowGuard]},
      { path: 'resultado', component: ResultadoComponent, canActivate: [WorkflowGuard] }
    ]
  },
  { path: 'isento', component: DeclaracaoIsentoComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(ROUTES),
    HttpClientModule,
    FormsModule,
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
    ReactiveFormsModule,
    DataTableModule,
    InputMaskModule,
    AccordionModule,
    ConfirmDialogModule
  ],
  declarations: [
    ListarDeclaracoesComponent,
    NovaDeclaracaoComponent,
    NavbarWizardComponent,
    SelecionarPeriodoComponent,
    LancarServicosComponent,
    ConfirmarLancamentosComponent,
    ResultadoComponent,
    DeclaracaoIsentoComponent,
    ConfirmarComponent ],
  providers: [DeclaracaoService, WorkflowService, FormDataService, SimulacaoService, WorkflowGuard, ConfirmationService]
})
export class DeclaracoesModule { }
