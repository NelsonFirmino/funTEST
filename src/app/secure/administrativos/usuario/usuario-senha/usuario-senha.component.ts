import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario.model';
import { ConvertBase64 } from '@app/shared/utils/convert-base64';
import { SelectItem } from 'primeng/api';
import { Message } from 'primeng/api';
import { LoginModel } from '@app/public/login/login.model';

@Component({
  selector: 'app-usuario-senha',
  templateUrl: './usuario-senha.component.html',
  styleUrls: ['./usuario-senha.component.css'],
  providers: [UsuarioService]
})
export class UsuarioSenhaComponent implements OnInit {
  msgs: Message[];
  usuario: Usuario;
  usuarioLogado : LoginModel;
  usuarios: any = [];
  ListaUsuarios: SelectItem[];
  constructor(private _service: UsuarioService,private _convertBase64: ConvertBase64) { }

  ngOnInit() {
    this.usuario = new Usuario();

    this.usuarioLogado = new LoginModel('', '');
    const user = this._convertBase64.decode(window.sessionStorage['auth_key']);
    this.usuarioLogado.Id = JSON.parse(user).Id;
    this.usuarioLogado.nome = JSON.parse(user).nome;
    this.usuarioLogado.txFuncao = JSON.parse(user).txFuncao;
    
    if (this.usuarioLogado.txFuncao == "Administrador")
    {
      this.goListaUsuarios();
      this.usuarioLogado.txFuncao;
    }
    else
    {
      this.usuario.Id = this.usuarioLogado.Id ;
      this.onLer;
    }
   
  }
  onLer() {

    if (this.usuario.Id > 0) {
     
      try {
        this._service.LerRegistro('Usuario', this.usuario.Id)
          .subscribe(
            (res) => {
              this.usuarios = res;
  
              this.usuario = this.usuarios;
            },
            (error) => { this.exibirMensagem('warn', 'Atenção','Dados não carregado'); },
            () => { });
      } catch (errors) {
        console.log('erro ao listar usuário: ' + errors);
      }
    }
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
          (error) => { this.exibirMensagem('warn', 'Atenção','Dados não foram carregados');},
          () => { });
    } catch (errors) {
      console.log('erro ao listar usuário: ' + errors);
    }
  }
  onAlterar() {
    if (this.usuario.txConfirma == this.usuario.txSenha) {
      try {
        this._service.AlterarSenha('usuario/senha', this.usuario)
          .subscribe(
            (res) => {
              this.onLimpar();
              this.exibirMensagem('sucess', 'Sucesso','Senha alterada');
            },
            (error) => { this.exibirMensagem('warn', 'Atenção','Dados inválidos');},
            () => { });
      } catch (errors) {
        console.log('erro ao alterar: ' + errors);
      }
    }
    else
    {
      this.exibirMensagem('warn',  'Atenção',  'Senha não confere!');
    }
  }
  onLimpar() {
    this.usuario = new Usuario();
  }

  isPossuiId(_id): boolean {
    return (_id > 0) ? true : false;
  }
  isAdministrador(): boolean {
    return (this.usuarioLogado.txFuncao == "Administrador") ? true : false;
  }
  exibirMensagem(tipo: string, titulo: string, mensagem: string) {
    this.msgs = [];
    this.msgs.push({ severity: tipo, summary: titulo, detail: mensagem });
  }
}
