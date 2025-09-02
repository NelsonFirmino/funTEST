import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { HttpRestfulService } from '../../../shared/services/http-restful.service';
import { Periodo } from './periodo.modal';

@Injectable()
export class HistoricoService {

    constructor(private _restfulService: HttpRestfulService) { }
    
    Imprimir(controller: string, dados: Periodo): any {
        return this._restfulService.SendPostPDF(controller, dados);
    }
}