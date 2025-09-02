import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CodeHighlighterModule } from 'primeng/codehighlighter';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import {TableModule} from 'primeng/table';

import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { DataViewModule } from 'primeng/dataview';
import {
  CalendarModule,
  GrowlModule,
  InputTextareaModule,
  DataTableModule,
  InputMaskModule,
  AccordionModule,
  ConfirmDialogModule,
} from 'primeng/primeng';

import { ListarCartoriosComponent } from './listar-cartorios/listar-cartorios.component';
import { CadastroCartorioComponent } from './cadastro-cartorio/cadastro-cartorio.component';
import { CartorioService } from './cartorio.service';
import { UsuarioComponent } from './usuario/usuario.component';
import { ServentiaComponent } from './serventia/serventia.component';
import { ServentiaUsuarioComponent } from './serventia-usuario/serventia-usuario.component';
import { UsuarioSenhaComponent } from './usuario/usuario-senha/usuario-senha.component';


const ROUTES: Routes = [
  { path: '', redirectTo: 'listagem', pathMatch: 'full' },
  { path: 'listagem', component: ListarCartoriosComponent },
  { path: 'cadastro', component: CadastroCartorioComponent },
  { path: 'serventia', component: ServentiaComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'usuario/usuario-senha', component: UsuarioSenhaComponent },
  { path: 'serventia-usuario', component: ServentiaUsuarioComponent }
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
    ButtonModule,TableModule,
    CodeHighlighterModule,
    CalendarModule,
    GrowlModule,
    InputTextareaModule,
    DataTableModule,
    InputMaskModule,
    AccordionModule,
    ConfirmDialogModule
  ],
  declarations: [ ListarCartoriosComponent, CadastroCartorioComponent, UsuarioComponent,
                ServentiaComponent, ServentiaUsuarioComponent, UsuarioSenhaComponent ],
  providers: [CartorioService]
})
export class AdministrativosModule { }
