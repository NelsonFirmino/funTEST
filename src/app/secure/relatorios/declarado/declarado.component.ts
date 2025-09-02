import { Component, OnInit } from '@angular/core';
import { DeclaradoService } from './declarado.service';
import { ConvertBase64 } from '@app/shared/utils/convert-base64';
import { Message } from 'primeng/api';
import { MESSAGES } from '@app/secure/declaracoes/nova-declaracao/confirmar-lancamentos/confirmarlancamento.model';

@Component({
  selector: 'app-declarado',
  templateUrl: './declarado.component.html',
  styleUrls: ['./declarado.component.css'],
  providers: [DeclaradoService]
})
export class DeclaradoComponent implements OnInit {
  nuAno: number;
  lista = [];
  msgs: Message[];

  constructor(private service: DeclaradoService, private _convertBase64: ConvertBase64) { }
  
  ngOnInit() {
    this.montaLista();
  }

  montaLista() {
    var ano = 2018
    var d = new Date();
    var i = 0;
    while (ano <= d.getFullYear()) {
      this.lista[i] = ano;
      ano++;
      i++;
    }
  }

  onImprimir(event: Event) {
    if(window.sessionStorage['cartorio_selecionado'] == ""){
      this.exibirMensagem(MESSAGES.atencao,
        'Atenção',
      'Escolha a serventia.');
      return false;
      }

    let cartorio = this._convertBase64.decode(window.sessionStorage['cartorio_selecionado']);
    this.service.Imprimir('Reports/declaracaorecolhimento', this.nuAno, JSON.parse(cartorio).Id)
      .subscribe(
        (res) => {
          const fileURL = URL.createObjectURL(res);
          window.open(fileURL, '_blank');
        });
    event.preventDefault();
  }

  onImprimirTotal(event: Event) {
    this.service.ImprimirTodos('Reports/declaracaototal', this.nuAno)
      .subscribe(
        (res) => {
          const fileURL = URL.createObjectURL(res);
          window.open(fileURL, '_blank');
        });

    event.preventDefault();
  }

  exibirMensagem(tipo: string, titulo: string, mensagem: string) {
    this.msgs = [];
    this.msgs.push({ severity: tipo, summary: titulo, detail: mensagem });
  }
}
