import { Component, OnInit } from '@angular/core';

import { SelectItem } from 'primeng/api';

import { Declaracao } from '../declaracao.model';
import { DeclaracaoService } from '../declaracao.service';
import { ConvertBase64 } from '@app/shared/utils/convert-base64';

@Component({
    selector: 'app-listar-declaracoes',
    templateUrl: './listar-declaracoes.component.html',
    styleUrls: ['./listar-declaracoes.component.css']
})
export class ListarDeclaracoesComponent implements OnInit {

    declaracoes: Declaracao[];

    declaracaoSelecionada: Declaracao;

    displayDialog: boolean;

    sortOptions: SelectItem[];

    sortKey: string;

    sortField: string;

    sortOrder: number;

    exibirMensagemGuia = false;

    constructor(private service: DeclaracaoService, private _convertBase64: ConvertBase64) { }

    ngOnInit() {

        const cartorio = this._convertBase64.decode(window.sessionStorage['cartorio_selecionado']);

        this.service.ListagemSimplificada('declaracoes/cartorio/' + JSON.parse(cartorio).Id)
            .subscribe(
                (res) => {
                    const tbl: any = res;
                    this.declaracoes = new Array();
                    tbl.forEach(el => {
                        this.declaracoes.push({
                            Id: el.Id,
                            dtInicio: el.dtInicio,
                            dtFinal: el.dtFinal,
                            valor: el.valor,
                            isQuite: el.isQuite
                        });
                    });
                });
    }

    onImprimirDeclaracao(event: Event, declaracao: Declaracao) {
        this.declaracaoSelecionada = declaracao;

        this.service.ImprimirDeclaracao('Report/Resumo/', declaracao.Id)
            .subscribe(
                (res) => {
                    const fileURL = URL.createObjectURL(res);
                    window.open(fileURL, '_blank');
                });

        event.preventDefault();
    }

    onEmitirGuiaDeclaracao(event: Event, declaracao: Declaracao) {
        this.declaracaoSelecionada = declaracao;
        // this.exibirMensagemGuia = true;

        this.service.EmitirGuia('Report/EmitirGuia', declaracao.Id)
            .subscribe(
                (res) => {
                    const fileURL = URL.createObjectURL(res);
                    window.open(fileURL, '_blank');
                });

        event.preventDefault();
    }

    onDialogHide() {
        this.declaracaoSelecionada = null;
    }
}
