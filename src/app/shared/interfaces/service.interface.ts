// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import { HttpRestfulService } from '../services/http-restful.service';
import { RespostaModel } from '../services/resposta.model';

export interface IService<T> {
    _restfulService: HttpRestfulService;

    ListarTodos(controller: string): Observable<RespostaModel>;
    ConsultarPor(controller: string, campoChave: any): Observable<RespostaModel>;

    Gravar(controller: string, object: T): Observable<RespostaModel>;
    Excluir(controller: string, id: number): Observable<RespostaModel>;
    Alterar(controller: string, object: T): Observable<RespostaModel>;
}
