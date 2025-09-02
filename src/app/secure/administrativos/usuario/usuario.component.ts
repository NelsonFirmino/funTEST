import { Component, OnInit } from '@angular/core';

import { Usuario } from './usuario.model';
import { UsuarioService } from './usuario.service';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [UsuarioService]
})
export class UsuarioComponent implements OnInit {
  msgs: Message[];
  usuario: Usuario;
  
  usuarios: any = [];
  listaTodos: any = [];

  constructor(
    private _service: UsuarioService
  ) { }

  ngOnInit() {
    this.usuario = new Usuario();
    this.usuario.txFuncao = 'Cartorio';
  //  this.goListarTodos();
  }
  goListarTodos() {
    try {
      this._service.ListarTodos('Usuario')
        .subscribe(
          (res) => { this.listaTodos = res; },
          (error) => { },
          () => { });
    } catch (errors) {
      console.log('erro ao listar usuário: ' + errors);
    }
  }
  onPesquisar() {
    let nome;
    let cpf;

    (this.usuario.txCPF == null || this.usuario.txCPF.length == 0) ? cpf = 'null' : cpf = this.usuario.txCPF;
    (this.usuario.txNome == null || this.usuario.txNome.length == 0) ? nome = 'null' : nome = this.usuario.txNome.trim();

    this._service.Pesquisar('Usuario', nome, cpf)
    .subscribe(
      (res) => { this.listaTodos = res; },
      (error) => {this.exibirMensagem('warn', 'Atenção','Dados não encontrado');  },
      () => { });
} catch (errors) {
  console.log('erro ao listar usuário: ' + errors);
}
  onEditar(item) {
    this.usuario = item;
    document.getElementById('txNome').focus();
  }
  onIncluir() {
    try {
      console.log(this.usuario);
      this._service.Incluir('Usuario', this.usuario)
        .subscribe(
          (res) => {
            this.onEditar(res);
            this.goListarTodos();
            this.goLimpar();
            this.exibirMensagem('sucess', 'Sucesso','Registro incluído');
          },
          (error) => { this.exibirMensagem('warn', 'Atenção','Dados inválidos para inclusão');},
          () => { });
    } catch (errors) {
      console.log('erro ao inserir: ' + errors);
    }
  }
  onAlterar() {
    try {
      this._service.Alterar('Usuario', this.usuario)
        .subscribe(
          (res) => {
            this.onEditar(res);
            this.exibirMensagem('sucess', 'Sucesso','Registro alterado');
            this.goLimpar();
          },
          (error) => { this.exibirMensagem('warn', 'Atenção','Dados inválido');},
          () => { });
    } catch (errors) {
      console.log('erro ao alterar: ' + errors);
    }
  }
  onLimpar(){
    this.usuario = new Usuario();
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
