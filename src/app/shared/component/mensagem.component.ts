import { Component, Input } from '@angular/core';
import { MensagemModel } from './mensagem.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'mensagem',
  template: `<p *ngIf="objMensagem.mensagem.length" class="alert alert-{{objMensagem.estilo}}">{{objMensagem.mensagem}}</p>`
})

export class MensagemComponent {

  @Input() objMensagem: MensagemModel;

  constructor() {
    this.objMensagem = new MensagemModel();
  }
}
