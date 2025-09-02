import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DecimalPipe } from '@angular/common';

import { Message } from 'primeng/components/common/message';
import { SelectItem } from 'primeng/components/common/api';
import { Table01 } from './mocks/table01';
import { Table02 } from './mocks/table02';
import { Table03 } from './mocks/table03';
import { Table04 } from './mocks/table04';
import {
  Table05A, Table05BextraJudicial, Table05Bjudicial, Table05Bresidencial, Table05Bcomercial,
  Table05Bloteamento, Table05C, Table05D, Table05Dresidencial, Table05Dcomercial, Table05E
} from './mocks/table05';
import { Table06 } from './mocks/table06';
import { SimulacaoService } from './simulacao.services';
import { Tables } from './tables.model';
import { TabelasModel } from './tabelas.model';
import { ServicoViewModel } from './servico-view.model';
import { HttpRestfulService } from '../../shared/services/http-restful.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-simulacao',
  templateUrl: './simulacao.component.html',
  styleUrls: ['./simulacao.component.css'],
  providers: [SimulacaoService]
})
export class SimulacaoComponent implements OnInit {
  title = 'Fundo de Aperfeiçoamento Funcional e Aparelhamento Administrativo da Procuradoria-Geral do Estado (FUNAF)';
  msgs: Message[];
  index = -1;

  TotalCalc = 0;
  totalTabela1: number;
  totalTabela2: number;
  totalTabela3: number;
  totalTabela4: number;
  totalTabela5: number;
  totalTabela6: number;

  _allTables: TabelasModel;
  _allServicos: ServicoViewModel;

  constructor(
    private _service: SimulacaoService,
    private _restfulService: HttpRestfulService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    console.log('init');
    // this.fs = new FileSaver();
    this.totalTabela1 = 0;
    this.totalTabela2 = 0;
    this.totalTabela3 = 0;
    this.totalTabela4 = 0;
    this.totalTabela5 = 0;
    this.totalTabela6 = 0;
    this._allTables = new TabelasModel();
    this.GetTable();

    const recargaExecutada = sessionStorage.getItem('recargaExecutadaSimulacao');

    if (!recargaExecutada) {
      window.location.reload();
      sessionStorage.setItem('recargaExecutadaSimulacao', 'true');
    }
  }

  GetTable(): void {
    try {
      this._service.ConsultarTodos('getAllTables')
        .subscribe(
          (res) => {
            const tbl: any = res;
            this._allTables._table01 = new Array();
            tbl.forEach(el => {
              // tslint:disable-next-line:triple-equals
              if (el.GrupoServicos.Id == 1) {
                this._allTables._table01.push({
                  Id: el.Id,
                  Discriminacao: el.txDiscriminacao,
                  Valor: el.vaServico,
                  GrupoServicos: el.GrupoServicos,
                  Quantidade: null
                });
              }
            });

            this._allTables._table02 = new Array();
            tbl.forEach(el => {
              // tslint:disable-next-line:triple-equals
              if (el.GrupoServicos.Id == 2) {
                this._allTables._table02.push({
                  Id: el.Id,
                  Discriminacao: el.txDiscriminacao,
                  Valor: el.vaServico,
                  GrupoServicos: el.GrupoServicos,
                  Quantidade: null
                });
              }
            });

            this._allTables._table03 = new Array();
            tbl.forEach(el => {
              // tslint:disable-next-line:triple-equals
              if (el.GrupoServicos.Id == 3) {
                this._allTables._table03.push({
                  Id: el.Id,
                  Discriminacao: el.txDiscriminacao,
                  Valor: el.vaServico,
                  GrupoServicos: el.GrupoServicos,
                  Quantidade: null
                });
              }
            });

            this._allTables._table04 = new Array();
            tbl.forEach(el => {
              // tslint:disable-next-line:triple-equals
              if (el.GrupoServicos.Id == 4) {
                this._allTables._table04.push({
                  Id: el.Id,
                  Discriminacao: el.txDiscriminacao,
                  Valor: el.vaServico,
                  GrupoServicos: el.GrupoServicos,
                  Quantidade: null
                });
              }
            });

            this._allTables._table05A = new Array();
            tbl.forEach(el => {
              // tslint:disable-next-line:triple-equals
              if (el.GrupoServicos.Id == 5) {
                this._allTables._table05A.push({
                  Id: el.Id,
                  Discriminacao: el.txDiscriminacao,
                  Valor: el.vaServico,
                  GrupoServicos: el.GrupoServicos,
                  Quantidade: null
                });
              }
            });

            this._allTables._table05BextraJudicial = new Array();
            tbl.forEach(el => {
              // tslint:disable-next-line:triple-equals
              if (el.GrupoServicos.Id == 6) {
                this._allTables._table05BextraJudicial.push({
                  Id: el.Id,
                  Discriminacao: el.txDiscriminacao,
                  Valor: el.vaServico,
                  GrupoServicos: el.GrupoServicos,
                  Quantidade: null
                });
              }
            });

            this._allTables._table05Bjudicial = new Array();
            tbl.forEach(el => {
              // tslint:disable-next-line:triple-equals
              if (el.GrupoServicos.Id == 7) {
                this._allTables._table05Bjudicial.push({
                  Id: el.Id,
                  Discriminacao: el.txDiscriminacao,
                  Valor: el.vaServico,
                  GrupoServicos: el.GrupoServicos,
                  Quantidade: null
                });
              }
            });

            this._allTables._table05Bresidencial = new Array();
            tbl.forEach(el => {
              // tslint:disable-next-line:triple-equals
              if (el.GrupoServicos.Id == 8) {
                this._allTables._table05Bresidencial.push({
                  Id: el.Id,
                  Discriminacao: el.txDiscriminacao,
                  Valor: el.vaServico,
                  GrupoServicos: el.GrupoServicos,
                  Quantidade: null
                });
              }
            });

            this._allTables._table05Bcomercial = new Array();
            tbl.forEach(el => {
              // tslint:disable-next-line:triple-equals
              if (el.GrupoServicos.Id == 9) {
                this._allTables._table05Bcomercial.push({
                  Id: el.Id,
                  Discriminacao: el.txDiscriminacao,
                  Valor: el.vaServico,
                  GrupoServicos: el.GrupoServicos,
                  Quantidade: null
                });
              }
            });

            this._allTables._table05Bloteamento = new Array();
            tbl.forEach(el => {
              // tslint:disable-next-line:triple-equals
              if (el.GrupoServicos.Id == 10) {
                this._allTables._table05Bloteamento.push({
                  Id: el.Id,
                  Discriminacao: el.txDiscriminacao,
                  Valor: el.vaServico,
                  GrupoServicos: el.GrupoServicos,
                  Quantidade: null
                });
              }
            });

            this._allTables._table05C = new Array();
            tbl.forEach(el => {
              // tslint:disable-next-line:triple-equals
              if (el.GrupoServicos.Id == 11) {
                this._allTables._table05C.push({
                  Id: el.Id,
                  Discriminacao: el.txDiscriminacao,
                  Valor: el.vaServico,
                  GrupoServicos: el.GrupoServicos,
                  Quantidade: null
                });
              }
            });

            this._allTables._table05D = new Array();
            tbl.forEach(el => {
              // tslint:disable-next-line:triple-equals
              if (el.GrupoServicos.Id == 12) {
                this._allTables._table05D.push({
                  Id: el.Id,
                  Discriminacao: el.txDiscriminacao,
                  Valor: el.vaServico,
                  GrupoServicos: el.GrupoServicos,
                  Quantidade: null
                });
              }
            });

            this._allTables._table05Dresidencial = new Array();
            tbl.forEach(el => {
              // tslint:disable-next-line:triple-equals
              if (el.GrupoServicos.Id == 13) {
                this._allTables._table05Dresidencial.push({
                  Id: el.Id,
                  Discriminacao: el.txDiscriminacao,
                  Valor: el.vaServico,
                  GrupoServicos: el.GrupoServicos,
                  Quantidade: null
                });
              }
            });

            this._allTables._table05Dcomercial = new Array();
            tbl.forEach(el => {
              // tslint:disable-next-line:triple-equals
              if (el.GrupoServicos.Id == 14) {
                this._allTables._table05Dcomercial.push({
                  Id: el.Id,
                  Discriminacao: el.txDiscriminacao,
                  Valor: el.vaServico,
                  GrupoServicos: el.GrupoServicos,
                  Quantidade: null
                });
              }
            });

            this._allTables._table05E = new Array();
            tbl.forEach(el => {
              // tslint:disable-next-line:triple-equals
              if (el.GrupoServicos.Id == 15) {
                this._allTables._table05E.push({
                  Id: el.Id,
                  Discriminacao: el.txDiscriminacao,
                  Valor: el.vaServico,
                  GrupoServicos: el.GrupoServicos,
                  Quantidade: null
                });
              }
            });

            this._allTables._table06 = new Array();
            tbl.forEach(el => {
              // tslint:disable-next-line:triple-equals
              if (el.GrupoServicos.Id == 16) {
                this._allTables._table06.push({
                  Id: el.Id,
                  Discriminacao: el.txDiscriminacao,
                  Valor: el.vaServico,
                  GrupoServicos: el.GrupoServicos,
                  Quantidade: null
                });
              }
            });


          },
          (error) => { console.log(error); },
          () => { });
    } catch (errors) {
      console.log('erro ao listar estados: ' + errors);
    }
  }

  onCalculos(): number {
    let total = 0;
    this.totalTabela1 = 0;
    this.totalTabela2 = 0;
    this.totalTabela3 = 0;
    this.totalTabela4 = 0;
    this.totalTabela5 = 0;
    this.totalTabela6 = 0;

    this._allTables._table01.forEach(el => { this.totalTabela1 += (el.Valor * el.Quantidade); });
    this._allTables._table01.forEach(el => { total += (el.Valor * el.Quantidade); });

    this._allTables._table02.forEach(el => { this.totalTabela2 += (el.Valor * el.Quantidade); });
    this._allTables._table02.forEach(el => { total += (el.Valor * el.Quantidade); });

    this._allTables._table03.forEach(el => { this.totalTabela3 += (el.Valor * el.Quantidade); });
    this._allTables._table03.forEach(el => { total += (el.Valor * el.Quantidade); });

    this._allTables._table04.forEach(el => { this.totalTabela4 += (el.Valor * el.Quantidade); });
    this._allTables._table04.forEach(el => { total += (el.Valor * el.Quantidade); });

    this._allTables._table05A.forEach(el => { this.totalTabela5 += (el.Valor * el.Quantidade); });
    this._allTables._table05A.forEach(el => { total += (el.Valor * el.Quantidade); });

    this._allTables._table05BextraJudicial.forEach(el => { this.totalTabela5 += (el.Valor * el.Quantidade); });
    this._allTables._table05BextraJudicial.forEach(el => { total += (el.Valor * el.Quantidade); });

    this._allTables._table05Bjudicial.forEach(el => { this.totalTabela5 += (el.Valor * el.Quantidade); });
    this._allTables._table05Bjudicial.forEach(el => { total += (el.Valor * el.Quantidade); });

    this._allTables._table05Bresidencial.forEach(el => { this.totalTabela5 += (el.Valor * el.Quantidade); });
    this._allTables._table05Bresidencial.forEach(el => { total += (el.Valor * el.Quantidade); });

    this._allTables._table05Bcomercial.forEach(el => { this.totalTabela5 += (el.Valor * el.Quantidade); });
    this._allTables._table05Bcomercial.forEach(el => { total += (el.Valor * el.Quantidade); });

    this._allTables._table05Bloteamento.forEach(el => { this.totalTabela5 += (el.Valor * el.Quantidade); });
    this._allTables._table05Bloteamento.forEach(el => { total += (el.Valor * el.Quantidade); });

    this._allTables._table05C.forEach(el => { this.totalTabela5 += (el.Valor * el.Quantidade); });
    this._allTables._table05C.forEach(el => { total += (el.Valor * el.Quantidade); });

    this._allTables._table05D.forEach(el => { this.totalTabela5 += (el.Valor * el.Quantidade); });
    this._allTables._table05D.forEach(el => { total += (el.Valor * el.Quantidade); });

    this._allTables._table05Dresidencial.forEach(el => { this.totalTabela5 += (el.Valor * el.Quantidade); });
    this._allTables._table05Dresidencial.forEach(el => { total += (el.Valor * el.Quantidade); });

    this._allTables._table05Dcomercial.forEach(el => { this.totalTabela5 += (el.Valor * el.Quantidade); });
    this._allTables._table05Dcomercial.forEach(el => { total += (el.Valor * el.Quantidade); });

    this._allTables._table05E.forEach(el => { this.totalTabela5 += (el.Valor * el.Quantidade); });
    this._allTables._table05E.forEach(el => { total += (el.Valor * el.Quantidade); });

    this._allTables._table06.forEach(el => { this.totalTabela6 += (el.Valor * el.Quantidade); });
    this._allTables._table06.forEach(el => { total += (el.Valor * el.Quantidade); });

    this.TotalCalc = total;
    return total;
  }

  onTabClose(event) {
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Tab Closed', detail: 'Index: ' + event.index });
  }

  onTabOpen(event) {
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Tab Expanded', detail: 'Index: ' + event.index });
  }

  openNext() {
    this.index = (this.index === 3) ? 0 : this.index + 1;
  }

  openPrev() {
    this.index = (this.index <= 0) ? 3 : this.index - 1;
  }

  onSubmit() {
    this.router.navigate(['processo']);
  }

  onGerarRelatorio() {
    const _aServ: ServicoViewModel[] = [];

    for (const tab of this._allTables._table01) {
      if (tab.Quantidade > 0) {
        _aServ.push({
          Id: tab.Id,
          Quantidade: tab.Quantidade,
          Grupo: tab.GrupoServicos.txDiscriminacao,
          Discriminacao: tab.Discriminacao,
          Valor: tab.Valor
        });
      }
    }
    for (const tab of this._allTables._table02) {
      if (tab.Quantidade > 0) {
        _aServ.push({
          Id: tab.Id,
          Quantidade: tab.Quantidade,
          Grupo: tab.GrupoServicos.txDiscriminacao,
          Discriminacao: tab.Discriminacao,
          Valor: tab.Valor
        });
      }
    }
    for (const tab of this._allTables._table03) {
      if (tab.Quantidade > 0) {
        _aServ.push({
          Id: tab.Id,
          Quantidade: tab.Quantidade,
          Grupo: tab.GrupoServicos.txDiscriminacao,
          Discriminacao: tab.Discriminacao,
          Valor: tab.Valor
        });
      }
    }
    for (const tab of this._allTables._table04) {
      if (tab.Quantidade > 0) {
        _aServ.push({
          Id: tab.Id,
          Quantidade: tab.Quantidade,
          Grupo: tab.GrupoServicos.txDiscriminacao,
          Discriminacao: tab.Discriminacao,
          Valor: tab.Valor
        });
      }
    }
    for (const tab of this._allTables._table05A) {
      if (tab.Quantidade > 0) {
        _aServ.push({
          Id: tab.Id,
          Quantidade: tab.Quantidade,
          Grupo: tab.GrupoServicos.txDiscriminacao,
          Discriminacao: tab.Discriminacao,
          Valor: tab.Valor
        });
      }
    }

    for (const tab of this._allTables._table05BextraJudicial) {
      if (tab.Quantidade > 0) {
        _aServ.push({
          Id: tab.Id,
          Quantidade: tab.Quantidade,
          Grupo: tab.GrupoServicos.txDiscriminacao,
          Discriminacao: tab.Discriminacao,
          Valor: tab.Valor
        });
      }
    }

    for (const tab of this._allTables._table05Bjudicial) {
      if (tab.Quantidade > 0) {
        _aServ.push({
          Id: tab.Id,
          Quantidade: tab.Quantidade,
          Grupo: tab.GrupoServicos.txDiscriminacao,
          Discriminacao: tab.Discriminacao,
          Valor: tab.Valor
        });
      }
    }

    for (const tab of this._allTables._table05Bresidencial) {
      if (tab.Quantidade > 0) {
        _aServ.push({
          Id: tab.Id,
          Quantidade: tab.Quantidade,
          Grupo: tab.GrupoServicos.txDiscriminacao,
          Discriminacao: tab.Discriminacao,
          Valor: tab.Valor
        });
      }
    }

    for (const tab of this._allTables._table05Bcomercial) {
      if (tab.Quantidade > 0) {
        _aServ.push({
          Id: tab.Id,
          Quantidade: tab.Quantidade,
          Grupo: tab.GrupoServicos.txDiscriminacao,
          Discriminacao: tab.Discriminacao,
          Valor: tab.Valor
        });
      }
    }

    for (const tab of this._allTables._table05Bloteamento) {
      if (tab.Quantidade > 0) {
        _aServ.push({
          Id: tab.Id,
          Quantidade: tab.Quantidade,
          Grupo: tab.GrupoServicos.txDiscriminacao,
          Discriminacao: tab.Discriminacao,
          Valor: tab.Valor
        });
      }
    }

    for (const tab of this._allTables._table05C) {
      if (tab.Quantidade > 0) {
        _aServ.push({
          Id: tab.Id,
          Quantidade: tab.Quantidade,
          Grupo: tab.GrupoServicos.txDiscriminacao,
          Discriminacao: tab.Discriminacao,
          Valor: tab.Valor
        });
      }
    }

    for (const tab of this._allTables._table05D) {
      if (tab.Quantidade > 0) {
        _aServ.push({
          Id: tab.Id,
          Quantidade: tab.Quantidade,
          Grupo: tab.GrupoServicos.txDiscriminacao,
          Discriminacao: tab.Discriminacao,
          Valor: tab.Valor
        });
      }
    }

    for (const tab of this._allTables._table05Dresidencial) {
      if (tab.Quantidade > 0) {
        _aServ.push({
          Id: tab.Id,
          Quantidade: tab.Quantidade,
          Grupo: tab.GrupoServicos.txDiscriminacao,
          Discriminacao: tab.Discriminacao,
          Valor: tab.Valor
        });
      }
    }

    for (const tab of this._allTables._table05Dcomercial) {
      if (tab.Quantidade > 0) {
        _aServ.push({
          Id: tab.Id,
          Quantidade: tab.Quantidade,
          Grupo: tab.GrupoServicos.txDiscriminacao,
          Discriminacao: tab.Discriminacao,
          Valor: tab.Valor
        });
      }
    }

    for (const tab of this._allTables._table05E) {
      if (tab.Quantidade > 0) {
        _aServ.push({
          Id: tab.Id,
          Quantidade: tab.Quantidade,
          Grupo: tab.GrupoServicos.txDiscriminacao,
          Discriminacao: tab.Discriminacao,
          Valor: tab.Valor
        });
      }
    }

    for (const tab of this._allTables._table06) {
      if (tab.Quantidade > 0) {
        _aServ.push({
          Id: tab.Id,
          Quantidade: tab.Quantidade,
          Grupo: tab.GrupoServicos.txDiscriminacao,
          Discriminacao: tab.Discriminacao,
          Valor: tab.Valor
        });
      }
    }

    try {
      this._restfulService.SendPostPDF('Report/PrintCalculoFunaf', _aServ)
        .subscribe(
          (res) => {
            const fileURL = URL.createObjectURL(res);
            window.open(fileURL, '_blank');
          },
          (error) => {
            console.log('não foi possivel gerar o arquivo PDF: ' + error);
          },
          () => { });
    } catch (errors) {
      console.log('erro ao incluir: ' + errors);
    }
  }
}

