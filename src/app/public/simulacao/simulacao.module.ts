import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AccordionModule } from 'primeng/accordion';
import { DataTableModule } from 'primeng/datatable';
import { PanelModule } from 'primeng/panel';
import { InputMaskModule } from 'primeng/inputmask';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    CommonModule,
    DataTableModule,
    PanelModule,
    InputMaskModule
  ],
  declarations: [],
  exports: [],
  bootstrap: []
})
export class SimulacaoModule { }
