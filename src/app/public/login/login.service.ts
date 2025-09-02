import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { HttpRestfulService } from '../../shared/services/http-restful.service';
import { RespostaModel } from '../../shared/services/resposta.model';

@Injectable()
export class LoginService {

    private _loggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);
    public loggedIn: Observable<boolean> = this._loggedIn.asObservable();
    public usuarioLogado: string;

    constructor ( private _restfulService: HttpRestfulService, private _router: Router ) { }

    Autenticar(controller: string, object: any): Observable<RespostaModel> {
        return this._restfulService.SendPostPublic<RespostaModel>(controller, object);
    }

    ValidarAutenticacao(usuario: any, bearerToken?: string) {
        if (usuario) {
            this._loggedIn.next(true);
            window.sessionStorage.setItem('auth_key', usuario);
            bearerToken != null ? window.sessionStorage.setItem("tokenBearer", bearerToken) : null;
            this._router.navigate(['/d']);
        } else {
            this._loggedIn.next(false);
            this.LimparUsuarioLogado();
            this._router.navigate(['login']);
        }
    }

    isLoggedIn() {
        this._loggedIn.next(false);
        return this._loggedIn.getValue();
    }

    private LimparUsuarioLogado() {
        this.usuarioLogado = '';
    }
}
