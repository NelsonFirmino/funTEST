import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { GrowlModule } from 'primeng/primeng';
import { SecureComponent } from './secure.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    DropdownModule,
    ButtonModule,
    DialogModule,
    GrowlModule
  ],
  declarations: [ SecureComponent ],
  exports: [ SecureComponent ],
  providers: []
})
export class SecureModule { }
