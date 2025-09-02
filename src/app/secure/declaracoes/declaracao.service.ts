import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { HttpRestfulService } from '../../shared/services/http-restful.service';
import { Observable } from 'rxjs/Observable';
import { RespostaModel } from '../../shared/services/resposta.model';

@Injectable()
export class DeclaracaoService {
    
    constructor(private _restfulService: HttpRestfulService) {
    }

    ListagemSimplificada(controller: string): Observable<RespostaModel> {
        return this._restfulService.SendGet<RespostaModel>(controller);
    }

    ImprimirDeclaracao(controller: string, idDeclaracao: string): any {
        return this._restfulService.downloadPDF(controller, idDeclaracao);
    }

    EmitirGuia(controller: string, idDeclaracao: string): any {
        return this._restfulService.downloadPDF(controller, idDeclaracao);
    }
}
