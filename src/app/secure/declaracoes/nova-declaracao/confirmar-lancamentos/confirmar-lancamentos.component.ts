import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { Message, ConfirmationService } from 'primeng/primeng';

import { ServicoViewModel } from '@app/public/simulacao/servico-view.model';
import { FormDataService } from '@app/secure/declaracoes/workflow/data/formData.service';
import { SimulacaoService } from '@app/public/simulacao/simulacao.services';
import { HttpRestfulService } from '@app/shared/services/http-restful.service';
import {
  ConfirmarLancamentosModel,
  MESSAGES
} from '@app/secure/declaracoes/nova-declaracao/confirmar-lancamentos/confirmarlancamento.model';

@Component({
  selector: 'pge-confirmar',
  templateUrl: './confirmar-lancamentos.component.html'
})
export class ConfirmarLancamentosComponent implements OnInit {

  formConfirmarServicos: FormGroup;
  public datainicial: string;
  public datafinal: string;

  msgs: Message[];
  index = -1;

  _servicosInformado: ServicoViewModel[] = [];
  _servicosView: ConfirmarLancamentosModel[] = [];
  _totalView: number;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private formDataService: FormDataService,
    private _service: SimulacaoService,
    private _restfulService: HttpRestfulService,
    private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this._servicosInformado = this.formDataService.getServicoViewModel();

    this.datainicial = this.formDataService.getPeriodo().dtInicialPeriodo;
    this.datafinal = this.formDataService.getPeriodo().dtFinalPeriodo;

    this.formConfirmarServicos = this.fb.group({
      'validar': new FormControl('', Validators.required)
    });

    this.LoadServices();
  }

  LoadServices() {
    this._servicosView = [];
    let contador = 1;
    this._totalView = 0;
    if (this._servicosInformado) {
      this._servicosInformado.forEach(item => {
        const novo = new ConfirmarLancamentosModel();
        novo.Contador = contador++;
        novo.Discriminacao = item.Discriminacao;
        novo.Grupo = item.Grupo;
        novo.Quantidade = item.Quantidade;
        novo.Valor = (item.Valor * item.Quantidade);
        this._totalView += (item.Valor * item.Quantidade);
        this._servicosView.push(novo);
      });
    } else {
      this.router.navigate(['/declaracoes/nova/lancamentos']);
    }
  }

  onConfirmar() {
    this.confirmationService.confirm({
      message: 'Está operação é irreversível. Você deseja realmente finalizar declaração e emitir guia ?',
      header: 'Confirmação',
      icon: 'fa fa-question-circle',
      accept: () => {
        this.onSalvar();
      },
      reject: () => {
        return;
      }
    });
  }

  exibirMensagem(tipo: string, titulo: string, mensagem: string) {
    this.msgs = [];
    this.msgs.push({ severity: tipo, summary: titulo, detail: mensagem });
  }

  onSalvar() {
    const formData = this.formDataService.getFormData();

    try {
      this._restfulService.SendPost('NovaDeclaracao', formData)
        .subscribe(
          (res) => {
            this.formDataService.resetFormData();
            this.router.navigate(['/declaracoes']);
          },
          (error) => {
            this.exibirMensagem(MESSAGES.atencao,
              'Atenção',
              'Já existe uma declaração registradas entre o periodo informado, selecione outro periodo antes de enviar esta declaração.');
          },
          () => { });
    } catch (errors) {
      console.log('erro ao incluir: ' + errors);
    }
  }

  onVoltar() {
    this.router.navigate(['/declaracoes/nova/lancamentos']);
  }
}
