import { Component, OnInit } from '@angular/core';
import { CanActivate, Router, ActivatedRoute } from '@angular/router';
import { RespostaModel } from '../../shared/services/resposta.model';
import { LoginService } from './login.service';
import { ConvertBase64 } from '../../shared/utils/convert-base64';
import { LoginModel } from './login.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'login-app',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, CanActivate {

  public _resHttp: RespostaModel;
  public usuario: string;
  public senha: string;
  _usuarioJson: any;
  objUsuario: any;

  reload: boolean = false;

  constructor(
    private route: ActivatedRoute, private router: Router,
    private user: LoginService,
    private _convertBase64: ConvertBase64
  ) { }

  ngOnInit() {
    this._resHttp = new RespostaModel();
    this.usuario = '';
    this.senha = '';

    const recargaExecutada = sessionStorage.getItem('recargaExecutada');

    if (!recargaExecutada) {
      window.location.reload();
      sessionStorage.setItem('recargaExecutada', 'true');
    }
  }

  loginFalhou(): boolean {
    if (this._resHttp) {     
      if ( (this._resHttp.status === 500) || (this._resHttp.status === 401) || (this._resHttp.status === 403) ) {
        return true; // acesso negado
      } else {
        return false;
      }
    } else {
      this._resHttp = new RespostaModel();
      this._resHttp.mensagemBackend = 'O serviço de Autenticação não está rodando';
      return true;
    }
  }


 /**
 * Função mensagemErro
 * 
 * Esta função define a mensagem de erro exibida no login.
 * 
 * @returns E00 = ERRO DE SERVIDOR
 * @returns E01 = ERRO INTERNO
 */
  mensagemErro(): string {
    // solução temporária mediante a urgência de outras atividades
    if (this._resHttp) {     
      if ( (this._resHttp.status === 500) || (this._resHttp.status === 401) || (this._resHttp.status === 403) ) {
        if(this._resHttp.statusText == "Forbidden"){
          return "Acesso Negado"
        }
        else{
          return "(E01): Contate o administrador do sistema"
        }
      }
    } else {
      return "(E00): Contate o administrador do sistema";
    }
  }

  setStatus(value: any) {
    this._resHttp.status = value;
  }

  canActivate() {
    const isLoggedIn = this.user.isLoggedIn();
    if (!isLoggedIn) {
      this.router.navigate(['']);
    }
    return isLoggedIn;
  }

  onSubmit(event: any) {
      const _usuario: LoginModel = new LoginModel(this.usuario, this.senha);

      this._usuarioJson = JSON.stringify(_usuario);
      if (this._usuarioJson) {
        this._usuarioJson = this._convertBase64.encode(this._usuarioJson);

        this.user.Autenticar('Usuario/autenticar', this._usuarioJson)
        .subscribe (
          (res) => {
                    this.usuario = ''; this.senha = '';
                    this._resHttp.status = 200;
                    this.objUsuario = JSON.stringify(res);
                    var tmp = JSON.parse(this.objUsuario);
                    this._usuarioJson = this._convertBase64.encode(this.objUsuario);
                    this.user.ValidarAutenticacao(this._usuarioJson, tmp.tokenUser);
                    },
          (error) => {  this._resHttp = error;
                        this.user.ValidarAutenticacao(null);
                        if (!this._resHttp.status) {
                          this._resHttp = new RespostaModel();
                          this._resHttp.mensagemBackend = 'O serviço de Autenticação não está rodando';
                          this._resHttp.status = 500;
                        }
                      },
          () => {  } );
      } else  {
        // 401 Unauthorized - Não autorizado. Usado quando a autenticação é necessária e falhou ou
        // ainda não foi fornecida
        this._resHttp.status = 401;
        this._resHttp.mensagemBackend = 'Autenticação é necessária e ainda não foi fornecida.';
        this.router.navigate(['login']);
      }
    }
} // fim do componente
