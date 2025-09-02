import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { ConvertBase64 } from '@app/shared/utils/convert-base64';
import { Message } from 'primeng/api';
import { RecolhimentoService } from './Recolhimento.service';
import { Periodo } from './periodo.modal';

@Component({
  selector: 'app-Recolhimento',
  templateUrl: './Recolhimento.component.html',
  styleUrls: ['./Recolhimento.component.css'],
  providers:[RecolhimentoService]
})
export class RecolhimentoComponent implements OnInit {

  msgs: Message[];
  br: any;
  dtInicialPeriodo: string;
  dtFinalPeriodo: string;
  formSelecionarPeriodo: FormGroup;
  periodo: Periodo;
  constructor(private fb: FormBuilder,
    private router: Router,
    private service: RecolhimentoService,
    private _convertBase64: ConvertBase64) { }

  ngOnInit() {
  
    this.formSelecionarPeriodo = this.fb.group({
      'datainicial': new FormControl(this.dtInicialPeriodo, Validators.required),
      'datafinal': new FormControl(this.dtFinalPeriodo, Validators.required),
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

    // console.log(this.formSelecionarPeriodo.controls['datainicial'].value);
    // console.log(this.formSelecionarPeriodo.controls['datafinal'].value);

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

  onAvancar(value: string) { }

  onImprimir(event: Event) {
    if (!this.formSelecionarPeriodo.valid) {
      return false;
    }
    this.periodo = new Periodo();

    this.periodo.dtInicio =  this.formSelecionarPeriodo.controls['datainicial'].value;
    //this.dataInicio.substring(3,5) +'/' + this.dataInicio.substring(0,2)  + '/'+ this.dataInicio.substring(6) ;
    this.periodo.dtFim  =  this.formSelecionarPeriodo.controls['datafinal'].value;
    // this.dataFim.substring(3,5) + '/' +  this.dataFim.substring(0,2)  + '/' +  this.dataFim.substring(6) 
    this.service.Imprimir('Report/RelRecolhimento', this.periodo)
      .subscribe(
          (res) => {
              const fileURL = URL.createObjectURL(res);
              window.open(fileURL, '_blank');
          });

    event.preventDefault();
  }
}
