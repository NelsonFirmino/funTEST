import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { HttpRestfulService } from '../../shared/services/http-restful.service';
import { LoginService } from '../../public/login/login.service';
import { ConvertBase64 } from '../../shared/utils/convert-base64';
import { ComarcaService } from '../../public/ficha-cadastral/comarca.service';
import { CartorioService } from '../../secure/administrativos/cartorio.service';

import { PublicComponent } from './public.component';
import { LoginComponent } from '../../public/login/login.component';
import { SimulacaoComponent } from '../../public/simulacao/simulacao.component';
import { FichaCadastralComponent } from '../../public/ficha-cadastral/ficha-cadastral.component';

import {AccordionModule,
  DataTableModule,
  ButtonModule,
  TabViewModule,
  GrowlModule,
  CodeHighlighterModule,
  PanelModule
} from 'primeng/primeng';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    AccordionModule,
    ButtonModule,
    TabViewModule,
    GrowlModule,
    CodeHighlighterModule,
    DataTableModule,
    PanelModule,
  ],
  providers: [
    HttpRestfulService,
    LoginService,
    ConvertBase64,
    ComarcaService,
    CartorioService
  ],
  declarations: [
    LoginComponent,
    PublicComponent,
    SimulacaoComponent,
    FichaCadastralComponent
  ]
})

export class PublicModule { }
