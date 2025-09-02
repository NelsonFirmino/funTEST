
import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { ServentiaUsuario } from './serventia-usuario.model';
import { HttpRestfulService } from '../../../shared/services/http-restful.service';
import { Observable } from 'rxjs/Observable';
import { RespostaModel } from '../../../shared/services/resposta.model';

@Injectable()
export class ServentiaUsuarioService {

  constructor ( private _restfulService: HttpRestfulService) {
  }

  ListarTodos(controller: string): Observable<RespostaModel> {
    return this._restfulService.SendGet<RespostaModel>(controller);
  }

  Pesquisar(controller: string, serventia: number, usuario: number): Observable<RespostaModel> {
    return this._restfulService.SendGet<RespostaModel>(controller, serventia.toString(),  usuario.toString());
  }

  Incluir(controller: string, object: ServentiaUsuario): Observable<RespostaModel> {
    return this._restfulService.SendPost<RespostaModel>(controller, object);
  }

  Alterar(controller: string, object: ServentiaUsuario): Observable<RespostaModel> {
    return this._restfulService.SendPut<RespostaModel>(controller, object);
  }
  
  Excluir(controller: string, id: number): Observable<RespostaModel> {
    return this._restfulService.SendDelete<RespostaModel>(controller, id.toString());
  }
}
