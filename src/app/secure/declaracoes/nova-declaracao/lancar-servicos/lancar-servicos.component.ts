import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormDataService } from '@app/secure/declaracoes/workflow/data/formData.service';
import { TabelasModel } from '@app/public/simulacao/tabelas.model';
import { ServicoViewModel } from '@app/public/simulacao/servico-view.model';
import { SimulacaoService } from '@app/public/simulacao/simulacao.services';
import { HttpRestfulService } from '@app/shared/services/http-restful.service';
import { Message } from 'primeng/primeng';

@Component({
  selector: 'pge-lancamentos',
  templateUrl: './lancar-servicos.component.html',
  styleUrls: ['./lancar-servicos.component.css']
})
export class LancarServicosComponent implements OnInit {

  formLancarServicos: FormGroup;

  public datainicial: string;
  public datafinal: string;

  msgs: Message[];
  index = -1;

  _servicosInformado: ServicoViewModel[] = [];

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
    private fb: FormBuilder,
    private router: Router,
    private formDataService: FormDataService,
    private simulacaoService: SimulacaoService) { }

  ngOnInit() {
    this._servicosInformado = this.formDataService.getServicoViewModel();

    this.datainicial = this.formDataService.getPeriodo().dtInicialPeriodo;
    this.datafinal = this.formDataService.getPeriodo().dtFinalPeriodo;

    this.formLancarServicos = this.fb.group({
      'validar': new FormControl('', Validators.required)
    });

    this.totalTabela1 = 0;
    this.totalTabela2 = 0;
    this.totalTabela3 = 0;
    this.totalTabela4 = 0;
    this.totalTabela5 = 0;
    this.totalTabela6 = 0;
    this._allTables = new TabelasModel();
    this.LoadServices();
  }

  LoadServices(): void {
    if (this.formDataService.getTabelasModel()) {
      const t = this.formDataService.getTabelasModel();
      this._allTables = t;
      this.onCalculos();
      return;
    }

    try {

      this.simulacaoService.ConsultarTodos('servicos')
        .subscribe(
          (res) => {
            const tbl: any = res;
            this.preencherTabelas(tbl);
          },
          (error) => { console.log(error); },
          () => { });
    } catch (errors) {
      console.log('erro ao listar estados: ' + errors);
    }
  }


  preencherTabelas(tbl: any) {
    this._allTables._table01 = new Array();
    tbl.forEach(el => {
      if (el.GrupoServicos.Id === 1) {
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
      if (el.GrupoServicos.Id === 2) {
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
      if (el.GrupoServicos.Id === 3) {
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
      if (el.GrupoServicos.Id === 4) {
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
      if (el.GrupoServicos.Id === 5) {
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
      if (el.GrupoServicos.Id === 6) {
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
      if (el.GrupoServicos.Id === 7) {
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
      if (el.GrupoServicos.Id === 8) {
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
      if (el.GrupoServicos.Id === 9) {
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
      if (el.GrupoServicos.Id === 10) {
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
      if (el.GrupoServicos.Id === 11) {
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
      if (el.GrupoServicos.Id === 12) {
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
      if (el.GrupoServicos.Id === 13) {
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
      if (el.GrupoServicos.Id === 14) {
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
      if (el.GrupoServicos.Id === 15) {
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
      if (el.GrupoServicos.Id === 16) {
        this._allTables._table06.push({
          Id: el.Id,
          Discriminacao: el.txDiscriminacao,
          Valor: el.vaServico,
          GrupoServicos: el.GrupoServicos,
          Quantidade: null
        });
      }
    });
  }

  onVoltar() {
    this.router.navigate(['/declaracoes/nova/periodo']);
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

    if (total > 0) {
      this.formLancarServicos.controls['validar'].setValue(total);
    } else {
      this.formLancarServicos.controls['validar'].setValue('');
    }

    return total;
  }

  openNext() {
    this.index = (this.index === 3) ? 0 : this.index + 1;
  }

  openPrev() {
    this.index = (this.index <= 0) ? 3 : this.index - 1;
  }

  onAvancar() {
    if (!this.formLancarServicos.valid) {
      return false;
    }

    this.onGerarRelatorio();

    this.formDataService.setTabelasModel(this._allTables);
    this.formDataService.setServicoViewModel(this._servicosInformado);
    this.router.navigate(['/declaracoes/nova/confirmar']);
  }

  onGerarRelatorio() {
    this._servicosInformado = [];

    for (const tab of this._allTables._table01) {
      if (tab.Quantidade > 0) {
        this._servicosInformado.push({
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
        this._servicosInformado.push({
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
        this._servicosInformado.push({
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
        this._servicosInformado.push({
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
        this._servicosInformado.push({
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
        this._servicosInformado.push({
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
        this._servicosInformado.push({
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
        this._servicosInformado.push({
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
        this._servicosInformado.push({
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
        this._servicosInformado.push({
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
        this._servicosInformado.push({
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
        this._servicosInformado.push({
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
        this._servicosInformado.push({
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
        this._servicosInformado.push({
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
        this._servicosInformado.push({
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
        this._servicosInformado.push({
          Id: tab.Id,
          Quantidade: tab.Quantidade,
          Grupo: tab.GrupoServicos.txDiscriminacao,
          Discriminacao: tab.Discriminacao,
          Valor: tab.Valor
        });
      }
    }
  }
}
