import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { HttpRestfulService } from '../../shared/services/http-restful.service';
import { Observable } from 'rxjs/Observable';
import { RespostaModel } from '../../shared/services/resposta.model';

@Injectable()
export class CartorioService {

  constructor ( private _restfulService: HttpRestfulService) { }

  ListarTodos(controller: string): Observable<RespostaModel> {
    return this._restfulService.SendGet<RespostaModel>(controller);
  }

  ListarPorComarca(controller: string, idcomarca: string): Observable<RespostaModel> {
    return this._restfulService.SendGet<RespostaModel>(controller, idcomarca, 'comarca');
  }

  BaixarFichaCadastral(controller: string, idcartorio: string): any {
    return this._restfulService.downloadPDF(controller, idcartorio);
  }
}
