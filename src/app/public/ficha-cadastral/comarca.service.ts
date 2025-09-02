import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { HttpRestfulService } from '../../shared/services/http-restful.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { RespostaModel } from '../../shared/services/resposta.model';

@Injectable()
export class ComarcaService {

  constructor ( private _restfulService: HttpRestfulService,
      private _route: ActivatedRoute,
      private _router: Router ) {
  }

  ListarTodos(controller: string): Observable<RespostaModel> {
    return this._restfulService.SendGet<RespostaModel>(controller);
  }
}
