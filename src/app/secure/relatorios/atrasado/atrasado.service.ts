import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { HttpRestfulService } from '../../../shared/services/http-restful.service';

@Injectable()
export class AtrasadoService {
    
    constructor(private _restfulService: HttpRestfulService) {
    }   
    Imprimir(controller: string): any {
        return this._restfulService.downloadPDF(controller, '1');
    }
}
