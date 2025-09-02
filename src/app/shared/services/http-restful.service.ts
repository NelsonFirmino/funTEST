import { Http, Headers, RequestOptions, ResponseContentType } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

import { environment } from '../../../environments/environment';
import { ConvertBase64 } from '../utils/convert-base64';
import { RespostaModel } from './resposta.model';

@Injectable()
export class HttpRestfulService {

    public _apiUrl: string = environment.urlHost + 'api/';
    public _defaultRequestOptions: RequestOptions;

    constructor(
        private _http: Http,
        private _convertBase64: ConvertBase64
    ) {
        this._defaultRequestOptions = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*',
            })
        });
        // } ), withCredentials: true });
    }

    getApiUrl() {
        return this._apiUrl;
    }

    SendGetBase64<T>(controller: string, uriParams?: string): Observable<T> {
        // No TypeScript não podemos ter duas funções com o mesmo nome no mesmo escopo.
        uriParams = this._convertBase64.encode(uriParams);
        return this.SendGet(controller, uriParams);
    }

    SendGet<T>(controller: string, uriParams?: string, action?: string): Observable<T> {
        this.verificarResponseType(this._defaultRequestOptions);
        this._defaultRequestOptions.headers.set('Authorization', window.sessionStorage.getItem('tokenBearer'));
        if (uriParams) {
            if (action) {
                return this._http.get(`${this._apiUrl}${controller}/${uriParams}/${action}`, this._defaultRequestOptions)
                    .catch(this.throwError)
                    .map(res => <T>res.json());
            } else {
                return this._http.get(`${this._apiUrl}${controller}/${uriParams}`, this._defaultRequestOptions)
                    .catch(this.throwError)
                    .map(res => <T>res.json());
            }
        } else {
            return this._http.get(`${this._apiUrl}${controller}`, this._defaultRequestOptions)
                .catch(this.throwError)
                .map(res => <T>res.json());
        }
    }

    SendPost<T>(controller: string, body: any): Observable<T> {
        const bodyStr = '' + JSON.stringify(body);
        this.verificarResponseType(this._defaultRequestOptions);
        this._defaultRequestOptions.headers.set('Authorization', window.sessionStorage.getItem('tokenBearer'));
        return this._http.post(`${this._apiUrl}${controller}`, bodyStr, this._defaultRequestOptions)
            .catch(this.throwError)
            .map(res => <T> res.json());
    }

    SendPostPublic<T>(controller: string, body: any): Observable<T> {
        const bodyStr = '' + JSON.stringify(body);
        return this._http.post(`${this._apiUrl}${controller}`, bodyStr, this._defaultRequestOptions)
            .catch(this.throwError)
            .map(res => <T> res.json());
    }

    SendPostPDF(controller: string, body: any): any {
        const bodyStr = '' + JSON.stringify(body);
        this._defaultRequestOptions.responseType = ResponseContentType.Blob;
        this._defaultRequestOptions.headers.set('Authorization', window.sessionStorage.getItem('tokenBearer'));
        return this._http.post(`${this._apiUrl}${controller}`, bodyStr, this._defaultRequestOptions)
            .catch(this.throwError)
            .map(
                (res) => {
                    return new Blob([res.blob()], { type: 'application/pdf' });
                }
            );
    }

    downloadPDF(controller: string, uriParams?: string): any {
        this._defaultRequestOptions.responseType = ResponseContentType.Blob;
        this._defaultRequestOptions.headers.set('Authorization', window.sessionStorage.getItem('tokenBearer'));
        return this._http.get(`${this._apiUrl}${controller}/${uriParams}`, this._defaultRequestOptions)
            .catch(this.throwError)
            .map(
                (res) => {
                    return new Blob([res.blob()], { type: 'application/pdf' });
                });
    }

    SendPut<T>(controller: string, body: any): Observable<T> {
        const bodyStr = '' + JSON.stringify(body);
        this.verificarResponseType(this._defaultRequestOptions);
        this._defaultRequestOptions.headers.set('Authorization', window.sessionStorage.getItem('tokenBearer'));
        return this._http.put(`${this._apiUrl}${controller}`, bodyStr, this._defaultRequestOptions)
            .catch(this.throwError)
            .map(res => <T>res.json());
    }

    SendPatch<T>(controller: string, body: any): Observable<T> {
        const bodyStr = '' + JSON.stringify(body);
        this.verificarResponseType(this._defaultRequestOptions);
        this._defaultRequestOptions.headers.set('Authorization', window.sessionStorage.getItem('tokenBearer'));
        return this._http.patch(`${this._apiUrl}${controller}`, bodyStr, this._defaultRequestOptions)
            .catch(this.throwError)
            .map(res => <T>res.json());
    }

    SendDelete<T>(controller: string, id: any): Observable<T> {
        this.verificarResponseType(this._defaultRequestOptions);
        this._defaultRequestOptions.headers.set('Authorization', window.sessionStorage.getItem('tokenBearer'));
        // tslint:disable-next-line:triple-equals
        if (typeof ([1, 2]) == typeof (id)) {
            let ids = '';
            id.forEach((val: any, i: any, a: any) => {
                // ids += ((i)?'&':'') + 'ids=' + val;
                ids += ((i) ? '&' : '') + val;
            });
            return this._http.delete(`${this._apiUrl}${controller}/${ids}`, this._defaultRequestOptions)
                .catch(this.throwError)
                .map(res => <T>res.json());
        } else if (typeof ('') === typeof (id) || (typeof (1) === typeof (id))) {
            // let valor = "ids=" + id;
            const valor = id;
            return this._http.delete(`${this._apiUrl}${controller}/${valor}`, this._defaultRequestOptions)
                .catch(this.throwError)
                .map(res => <T>res.json());
        }
    }

    SendFilter<T>(controller: string, body: string): Observable<T> {
        this.verificarResponseType(this._defaultRequestOptions);
        this._defaultRequestOptions.headers.set('Authorization', window.sessionStorage.getItem('tokenBearer'));
        return this._http.post(`${this._apiUrl}${controller}/filtrar`, body, this._defaultRequestOptions)
            .catch(this.throwError)
            .map(res => <T>res.json());
    }

    private throwError(response: any) {
        const _resModel = new RespostaModel();
      
        _resModel.ok = response.ok;
        _resModel.statusText = response.statusText;
        _resModel.status = (_resModel.ok) ? response.status : 500;

        // _resModel.mensagemBackend = (_resModel.statusText) ?
        //     JSON.parse(response._body).Message.toString() : 'Servidor Indisponivel';

        // if (JSON.parse(response._body).ExceptionMessage) {
        //     _resModel.exceptionBackend = (_resModel.statusText) ?
        //         JSON.parse(response._body).ExceptionMessage.toString() : 'Servidor Indisponivel';
        // }

        return Observable.throw(_resModel);
    }

    private verificarResponseType(requestOptions: RequestOptions){
        if(requestOptions.responseType == 3){
            requestOptions.responseType = null;
        }
    }
}
