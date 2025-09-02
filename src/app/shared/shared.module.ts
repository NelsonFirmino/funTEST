import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MensagemComponent } from './component/mensagem.component';

@NgModule({
    imports: [CommonModule],
    exports: [ CommonModule, FormsModule, HttpModule, RouterModule ],
    declarations: [MensagemComponent],
    providers: [MensagemComponent],
})

export class SharedModuleModule {
}
