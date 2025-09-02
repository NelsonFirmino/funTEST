import { Component, OnInit } from '@angular/core';

import { Serventia } from './serventia.model';
import { ServentiaService } from './serventia.service';
import { Comarca } from "./comarca.model";
import { Message } from 'primeng/api';

@Component({
  selector: 'app-serventia',
  templateUrl: './serventia.component.html',
  styleUrls: ['./serventia.component.css'],
  providers: [ServentiaService]
})
export class ServentiaComponent implements OnInit {
  msgs: Message[];
  serventia: Serventia;
  serventias: any = [];
  listaTodos: any = [];
  camarcas: any = [];
  constructor(private _service: ServentiaService) { }

  ngOnInit() {
    this.serventia = new Serventia();
    this.serventia.Comarca = new Comarca;
    this.goListarComarcas()
   // this.goListarTodos();
  }

  goListarTodos() {
    try {
      this._service.ListarTodos('Serventia')
        .subscribe(
          (res) => { this.listaTodos = res; },
          (error) => { },
          () => { });
    } catch (errors) {
      console.log('erro ao listar usuário: ' + errors);
    }
  }

  goListarComarcas() {
    try {
      this._service.ListarTodos('Comarcas')
        .subscribe(
          (res) => { this.camarcas = res; },
          (error) => { },
          () => { });
    } catch (errors) {
      console.log('erro ao listar camarcas: ' + errors);
    }
  }

  onPesquisar() {

    let responsavel;
    let cartorio;

    (this.serventia.txCartorio == null || this.serventia.txCartorio.length == 0) ? cartorio = 'null' : cartorio = this.serventia.txCartorio;
    (this.serventia.txResponsavel == null || this.serventia.txResponsavel.length == 0) ? responsavel = 'null' : responsavel = this.serventia.txResponsavel;

    this._service.Pesquisar('Serventia', cartorio, responsavel)
      .subscribe(
        (res) => {
        this.listaTodos = res;
        },
        (error) => { this.exibirMensagem('warn', 'Atenção','Dados não encontrado'); },
        () => { });
  } catch(errors) {
    console.log('erro ao listar usuário: ' + errors);
  }

  onEditar(item) {
    this.serventia = item;
    document.getElementById('txCartorio').focus();
  }

  onIncluir() {
    try {
      this._service.Incluir('Serventia', this.serventia)
        .subscribe(
          (res) => {
            this.onEditar(res);
            this.goListarTodos();
            this.goLimpar();
            this.exibirMensagem('sucess', 'Sucesso','Registro incluído');
          },
          (error) => {this.exibirMensagem('warn', 'Atenção','Dados não incluído'); },
          () => { });
    } catch (errors) {
      console.log('erro ao inserir: ' + errors);
    }
  }

  onAlterar() {
    try {
      this._service.Alterar('Serventia', this.serventia)
        .subscribe(
          (res) => {
            this.onEditar(res);
            this.goListarTodos();
            this.goLimpar();
            this.exibirMensagem('sucess', 'Sucesso','Registro alterado');
          },
          (error) => { this.exibirMensagem('warn', 'Atenção','Dados não alterados');},
          () => { });
    } catch (errors) {
      console.log('erro ao alterar: ' + errors);
    }
  }

  onLimpar() {
    this.serventia = new Serventia();
    this.goListarTodos();
  }
  
  isPossuiId(_id): boolean {
    return (_id > 0) ? true : false;
  }

  goLimpar(): void {
    document.getElementById('btnLimpar').click();
  }
  
  exibirMensagem(tipo: string, titulo: string, mensagem: string) {
    this.msgs = [];
    this.msgs.push({ severity: tipo, summary: titulo, detail: mensagem });
  }
}
