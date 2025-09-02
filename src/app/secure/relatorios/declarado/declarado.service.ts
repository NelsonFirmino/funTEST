import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { HttpRestfulService } from '../../../shared/services/http-restful.service';

@Injectable()
export class DeclaradoService {

    constructor(private _restfulService: HttpRestfulService) { }

    Imprimir(controller: string, nuAno: number, idServentia: number): any {
        return this._restfulService.downloadPDF(controller, nuAno + '/' + idServentia);
    }

    ImprimirTodos(controller: string, nuAno: number): any {
        return this._restfulService.downloadPDF(controller,  nuAno.toString() );
    }
}