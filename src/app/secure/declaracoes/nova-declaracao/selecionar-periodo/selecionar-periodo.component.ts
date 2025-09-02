import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { FormDataService } from '@app/secure/declaracoes/workflow/data/formData.service';
import { SelecionarPeriodo } from '@app/secure/declaracoes/nova-declaracao/selecionar-periodo/selecionarperiodo.model';
import { ConvertBase64 } from '@app/shared/utils/convert-base64';
import { OriginalDateValidator } from '@app/shared/utils/original-date.validator';
import { Message } from 'primeng/api';

@Component({
  selector: 'pge-periodo',
  templateUrl: './selecionar-periodo.component.html',
  styleUrls: ['./selecionar-periodo.component.css']
})
export class SelecionarPeriodoComponent implements OnInit {

  msgs: Message[];
  periodo: SelecionarPeriodo;
  br: any;
  formSelecionarPeriodo: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    private formDataService: FormDataService,
    private _convertBase64: ConvertBase64) { }

  ngOnInit() {
    this.periodo = this.formDataService.getPeriodo();

    this.formSelecionarPeriodo = this.fb.group({
      'datainicial': new FormControl(this.periodo.dtInicialPeriodo, Validators.required),
      'datafinal': new FormControl(this.periodo.dtFinalPeriodo, Validators.required),
      'periodoOK': new FormControl('', Validators.required)
    });

    this.br = {
      closeText: 'Fechar',
      prevText: 'Anterior',
      nextText: 'Próximo',
      currentText: 'Começo',
      monthNames: ['Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'],
      monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
      dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
      dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
      weekHeader: 'Semana',
      firstDay: 0,
      isRTL: false,
      showMonthAfterYear: false,
      yearSuffix: '',
      timeOnlyTitle: 'Só Horas',
      timeText: 'Tempo',
      hourText: 'Hora',
      minuteText: 'Minuto',
      secondText: 'Segundo',
      ampm: false,
      month: 'Mês',
      week: 'Semana',
      day: 'Dia',
      allDayText: 'Todo o Dia'
    };
  }

  onValidarDatas() {
    const mesInicial = new Date(this.formSelecionarPeriodo.controls['datainicial'].value).getMonth();
    const mesFinal = new Date(this.formSelecionarPeriodo.controls['datafinal'].value).getMonth();

    //console.log(this.formSelecionarPeriodo.controls['datainicial'].value);
    //console.log(this.formSelecionarPeriodo.controls['datafinal'].value);

    if (this.formSelecionarPeriodo.controls['datainicial'].value !== null
      && this.formSelecionarPeriodo.controls['datafinal'].value !== null) {
      if (mesInicial !== mesFinal) {
        this.exibirMensagem('warn',
          'Atenção',
          'O periodo da declaração não pode compreender meses distintos.');
      }

      if ((new Date(this.formSelecionarPeriodo.controls['datafinal'].value) <
        new Date(this.formSelecionarPeriodo.controls['datainicial'].value))) {
        this.exibirMensagem('warn',
          'Atenção',
          'A data final não pode ser anterior a data inicial');
      }
    }

    this.formSelecionarPeriodo.controls['periodoOK'].setValue(
      ((new Date(this.formSelecionarPeriodo.controls['datafinal'].value) <
        new Date(this.formSelecionarPeriodo.controls['datainicial'].value)) || mesInicial !== mesFinal) ? '' : 'OK');
  }

  exibirMensagem(tipo: string, titulo: string, mensagem: string) {
    this.msgs = [];
    this.msgs.push({ severity: tipo, summary: titulo, detail: mensagem });
  }

  onAvancar(value: string) {
    if (!this.formSelecionarPeriodo.valid) {
      return false;
    }

    this.onValidarDatas();

    if (!this.formSelecionarPeriodo.valid) {
      return false;
    }

    const cartorio = this._convertBase64.decode(window.sessionStorage['cartorio_selecionado']);
    const usuario = this._convertBase64.decode(window.sessionStorage['auth_key']);

    this.periodo.dtInicialPeriodo = this.formSelecionarPeriodo.controls['datainicial'].value;
    this.periodo.dtFinalPeriodo = this.formSelecionarPeriodo.controls['datafinal'].value;

    this.formDataService.setCartorioSelecionado(JSON.parse(cartorio).Id);
    this.formDataService.setUsuario(JSON.parse(usuario).Id);
    this.formDataService.setPeriodo(this.periodo);
    this.router.navigate(['/declaracoes/nova/lancamentos']);
  }
}
