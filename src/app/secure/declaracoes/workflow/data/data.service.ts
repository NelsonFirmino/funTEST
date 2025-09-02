import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpRestfulService } from '../../../../shared/services/http-restful.service';
import 'rxjs/add/operator/map';

import { IService } from '../../../../shared/interfaces/service.interface';
import { RespostaModel } from '../../../../shared/services/resposta.model';
import { FormData } from './formData.model';

@Injectable()
export class DataService implements IService<FormData> {

  private headers: Headers = new Headers({ 'Content-Type': 'application/json' });
  private _url: string;

  constructor(
    public http: Http,
    public _restfulService: HttpRestfulService
  ) { }

  ListarTodos(controller: string): Observable<RespostaModel> {
    return this._restfulService.SendGet<RespostaModel>(controller);
  }

  ConsultarPor(controller: string, campoChave: any): Observable<RespostaModel> {
    return this._restfulService.SendGet<RespostaModel>(controller, campoChave);
  }

  Gravar(controller: string, object: FormData): Observable<RespostaModel> {
    return this._restfulService.SendPost<RespostaModel>(controller, object);
  }

  Excluir(controller: string, id: number): Observable<RespostaModel> {
    return this._restfulService.SendDelete<RespostaModel>(controller, id);
  }

  Alterar(controller: string, object: FormData): Observable<RespostaModel> {
    return this._restfulService.SendPut<RespostaModel>(controller, object);
  }

  ConsultarPorCep(controller: string, cep: string): Observable<RespostaModel> {
    return this._restfulService.SendGet<RespostaModel>(controller, cep);
  }

  ConsultarPorCpf(controller: string, cpf: string): Observable<RespostaModel> {
    return this._restfulService.SendGet<RespostaModel>(controller, '?cpf=' + cpf);
  }

}
