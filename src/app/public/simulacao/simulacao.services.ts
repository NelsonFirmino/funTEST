import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, CanActivate } from '@angular/router';
import { environment } from '../../../environments/environment';

// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { HttpRestfulService } from '../../shared/services/http-restful.service';
import { RespostaModel } from '../../shared/services/resposta.model';
import { TabelasModel } from './tabelas.model';
import { ServicoModel } from './servico.model';
import { ServicoViewModel } from './servico-view.model';

@Injectable()
export class SimulacaoService {

    constructor ( private _restfulService: HttpRestfulService,
                  private _route: ActivatedRoute,
                  private _router: Router ) {
    }

    ConsultarTodos(controller: string): Observable<RespostaModel> {
        return this._restfulService.SendGet<RespostaModel>(controller);
    }

    ConsultarPor(controller: string, campoChave: any): Observable<RespostaModel> {
        return this._restfulService.SendGet<RespostaModel>(controller, '/' + campoChave.toString());
    }

    SendPost(controller: string, object: ServicoViewModel[]): Observable<RespostaModel> {
        return this._restfulService.SendPost<RespostaModel>(controller, object);
    }

}
