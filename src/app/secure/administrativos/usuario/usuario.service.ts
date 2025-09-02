import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { Usuario } from './usuario.model';
import { HttpRestfulService } from '../../../shared/services/http-restful.service';
import { Observable } from 'rxjs/Observable';
import { RespostaModel } from '../../../shared/services/resposta.model';

@Injectable()
export class UsuarioService {

  constructor ( private _restfulService: HttpRestfulService) { }

  ListarTodos(controller: string): Observable<RespostaModel> {
    return this._restfulService.SendGet<RespostaModel>(controller);
  }
  LerRegistro(controller: string, id: number): Observable<RespostaModel> {
    return this._restfulService.SendGet<RespostaModel>(controller , id.toString());
  }
  Pesquisar(controller: string, nome: string, cpf: string): Observable<RespostaModel> {
    return this._restfulService.SendGet<RespostaModel>(controller,  nome , cpf);
  }
  Incluir(controller: string, object: Usuario): Observable<RespostaModel> {
    return this._restfulService.SendPost<RespostaModel>(controller, object);
  }

  Alterar(controller: string, object: Usuario): Observable<RespostaModel> {
    return this._restfulService.SendPut<RespostaModel>(controller, object);
  }

  AlterarSenha(controller: string, object: Usuario): Observable<RespostaModel> {
    return this._restfulService.SendPatch<RespostaModel>(controller, object);
  }

   ResetarSenhaPorCpf(controller: string, cpf: string, novaSenha: string, confirmarSenha: string): Observable<RespostaModel> {
    const body = { cpf, novaSenha, confirmarSenha };
    return this._restfulService.SendPost<RespostaModel>(controller, body);
  }

  Excluir(controller: string, id: number): Observable<RespostaModel> {
    return this._restfulService.SendDelete<RespostaModel>(controller, id);
  }
}
