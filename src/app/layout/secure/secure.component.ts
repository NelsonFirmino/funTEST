import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginModel } from '@app/public/login/login.model';
import { ConvertBase64 } from '@app/shared/utils/convert-base64';
import { Cartorio } from '@app/secure/administrativos/cartorio.model';
import { CartorioService } from '@app/secure/administrativos/cartorio.service';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {

  title = 'Módulo do FUNAF';
  formData: any;

  public usuario: LoginModel;
  cartorios: Cartorio[];
  cartorioSelecionado: Cartorio;
  exibirMinhasServentias = false;
  public multiplosCartorios = false;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _convertBase64: ConvertBase64,
    private cartorioService: CartorioService) {
  }

  ngOnInit() {
    this.usuario = new LoginModel('', '');
    const user = this._convertBase64.decode(window.sessionStorage['auth_key']);
    this.usuario.nome = JSON.parse(user).nome;
    this.usuario.cartorios = JSON.parse(user).cartorios;
    this.usuario.txFuncao = JSON.parse(user).txFuncao;
    this.cartorios = new Array();
    
    window.sessionStorage.setItem('cartorio_selecionado', '');
    if (this.usuario.cartorios.length === 1) {
      this.cartorioSelecionado = this.usuario.cartorios[0];
      this.onSelecionarCartorio();
    } else if (this.usuario.cartorios.length > 1) {
      this.multiplosCartorios = true;
      this.usuario.cartorios.forEach(el => {
        this.cartorios.push({
          Id: el.Id,
          txCartorio: el.txComarca + ' - '+ el.txCartorio,
          txComarca: el.txComarca,
          txResponsavel: el.txResponsavel,
          txCEP: el.txCEP,
          txEmail: el.txEmail,
          txEndereco: el.txEndereco,
          txTelefone: el.txTelefone,
          txServicos: el.txServicos
        });
      });
    }

    if (!this.cartorioSelecionado) {
      this.exibirMinhasServentias = true;
    }
  }

  onLogout() {
    sessionStorage.removeItem('auth_key');
    
    sessionStorage.clear();
    this._router.navigate(['login']);
  }

  onTrocarServentia() {
    this.exibirMinhasServentias = true;
  }

  onSelecionarCartorio() {
    if (this.cartorioSelecionado == null) {
      window.sessionStorage.setItem('cartorio_selecionado', '');
    } else{
      const cartorio = this._convertBase64.encode(JSON.stringify(this.cartorioSelecionado));
      window.sessionStorage.setItem('cartorio_selecionado', cartorio);
    }
  }

  onNovaSenha() { }

  isPerfil(txFuncao): boolean  {
  return (this.usuario.txFuncao == txFuncao) ?  true : false;
  }

}
