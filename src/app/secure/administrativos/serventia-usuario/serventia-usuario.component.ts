import { Component, OnInit } from '@angular/core';
import { ServentiaUsuarioService } from './serventia-usuario.service';
import { Usuario } from '../usuario/usuario.model';
import { ServentiaUsuario } from './serventia-usuario.model';
import { SelectItem } from 'primeng/api';
import { Serventia } from '../serventia/serventia.model';
import { Message } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-serventia-usuario',
  templateUrl: './serventia-usuario.component.html',
  styleUrls: ['./serventia-usuario.component.css'],
  providers: [ServentiaUsuarioService]
})
export class ServentiaUsuarioComponent implements OnInit {
  msgs: Message[];
  serventiaUsuario: ServentiaUsuario;
  usuarios: any = [];
  serventias: any = [];
  ListaUsuarios: SelectItem[];
  ListaServentias: SelectItem[];
  listaTodos: any = [];
  constructor(private _service: ServentiaUsuarioService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.serventiaUsuario = new ServentiaUsuario();
    this.serventiaUsuario.Usuario = new Usuario();
    this.serventiaUsuario.Serventia = new Serventia();
    this.goListaUsuarios();
    this.goListaServentias();

    let idUsuario = 0;
    let idServentia = 0;
    this.route.queryParams.subscribe(params => {
      idUsuario = params['idUsuario'];
      idServentia = params['idServentia'];
    });

    this.serventiaUsuario.Usuario.Id = idUsuario > 0? idUsuario : 0;
    this.serventiaUsuario.Serventia.Id = idServentia > 0? idServentia : 0;
    if (idUsuario > 0 || idServentia > 0 ) {  this.onPesquisar(); }
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

  onEditar(item) {
    this.serventiaUsuario = item;
  }

  goListaUsuarios() {
    try {
      this._service.ListarTodos('Usuario')
        .subscribe(
          (res) => {
            this.usuarios = res;
            this.ListaUsuarios = [{ label: ' -', value: 0 }];
            this.usuarios.forEach(el => {
              let it: SelectItem = { label: '', value: '' };
              it.label = el.txNome + ' - ' + el.txCPF;
              it.value = el.Id;
              this.ListaUsuarios.push(it);
            });
          },
          (error) => {this.exibirMensagem('warn', 'Atenção','Dados não carregados');  },
          () => { });
    } catch (errors) {
      console.log('erro ao listar usuário: ' + errors);
    }
  }

  goListaServentias() {
    try {
      this._service.ListarTodos('Cartorios')
        .subscribe(
          (res) => {
            this.serventias = res;
            this.ListaServentias = [{ label: ' -', value: 0 }];
            this.serventias.forEach(el => {
              let it: SelectItem = { label: '', value: '' };
              it.label = el.txComarca + ' - ' + el.txCartorio;
              it.value = el.Id;
              this.ListaServentias.push(it);
            });
          },
          (error) => { },
          () => { });
    } catch (errors) {
      console.log('erro ao listar serventia: ' + errors);
    }
  }

  onPesquisar() {
    this._service.Pesquisar('serventiausuario', this.serventiaUsuario.Serventia.Id, this.serventiaUsuario.Usuario.Id)
      .subscribe(
        (res) => { this.listaTodos = res; },
        (error) => {this.exibirMensagem('warn', 'Atenção','Dados não encontrado'); },
        () => { });
  } catch(errors) {
    console.log('erro ao listar usuário: ' + errors);
  }

  onIncluir() {
    try {
      this._service.Incluir('serventiausuario', this.serventiaUsuario)
        .subscribe(
          (res) => {
          //  this.onEditar(res);
            this.exibirMensagem('sucess', 'Sucesso','Registro incluído');
            this.onLimpar();
          },
          (error) => { this.exibirMensagem('warn', 'Atenção','Dados inválidos');},
          () => { });
    } catch (errors) {
      console.log('erro ao inserir: ' + errors);
    }
  }

  onAlterar() {
    try {
      this._service.Alterar('serventiausuario', this.serventiaUsuario)
        .subscribe(
          (res) => {
           // this.onEditar(res);
            this.exibirMensagem('sucess', 'Sucesso','Registro alterado');
            this.onLimpar();

          },
          (error) => { this.exibirMensagem('warn', 'Atenção','Dados inválidos');},
          () => { });
    } catch (errors) {
      console.log('erro ao alterar: ' + errors);
    }
  }

  onExcluir(serventiaUsuario) {
    // tslint:disable-next-line:prefer-const
    let isConfirmed = confirm('Deseja realmente excluir ?');
    if (isConfirmed) {
      try {
        this._service.Excluir('serventiausuario', serventiaUsuario.Id)
          .subscribe(
            (res) => {
              this.exibirMensagem('sucess', 'Sucesso','Registro excluído');
              this.onLimpar();

            },
            (error) => {this.exibirMensagem('warn', 'Atenção','Dados inválidos'); },
            () => {
            });
      } catch (errors) {
        console.log('erro ao excluir: ' + errors);
      }
    }
  }

  onLimpar() {
    this.serventiaUsuario = new ServentiaUsuario();
    this.listaTodos = [];
  }

  isPossuiId(_id): boolean {
    return (_id > 0) ? true : false;
  }
  
  exibirMensagem(tipo: string, titulo: string, mensagem: string) {
    this.msgs = [];
    this.msgs.push({ severity: tipo, summary: titulo, detail: mensagem });
  }
}
