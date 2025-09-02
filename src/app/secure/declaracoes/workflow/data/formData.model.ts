import { ServicoViewModel } from '@app/public/simulacao/servico-view.model';
import { TabelasModel } from '@app/public/simulacao/tabelas.model';
import { LoginModel } from '@app/public/login/login.model';
import { Cartorio } from '@app/secure/administrativos/cartorio.model';

export class FormData {

    dtInicialPeriodo: string;
    dtFinalPeriodo: string;
    servicos: ServicoViewModel[];
    usuario: string;
    cartorio: string;
    tabelasModel: TabelasModel;

    clear() {
      this.dtInicialPeriodo = '';
      this.dtFinalPeriodo = '';
      this.servicos = [];
      this.tabelasModel = null;
      this.usuario = null;
      this.cartorio = '';
    }
}
