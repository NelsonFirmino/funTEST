export class MensagemModel {

    public estilo: string;
    public mensagem: string;

    constructor() {
        this.estilo = 'danger';
        this.mensagem = '';
    }

    public Sucesso(msg?: any): any {
        this.SucessoSemTimeOut(msg);
        setTimeout(() => {this.mensagem = ''; }, 5000);
    }
    public SucessoSemTimeOut(msg?: any): any {
        this.estilo = 'success';
        if (msg) {
            this.mensagem = msg;
        } else {
            this.mensagem = 'Operação realizada com sucesso';
        }
    }

    public Erro(msg?: string): any {
        this.ErroSemTimeOut(msg);
        setTimeout(() => {this.mensagem = ''; }, 5000);
    }
    public ErroSemTimeOut(msg?: string): any {
        this.estilo = 'danger';
        if (msg) {
            this.mensagem = msg;
        } else {
            this.mensagem = 'Erro: Operação não foi concluida.';
        }
    }

    public Alerta(msg: string): any {
        this.AlertaSemTimeOut(msg);
        setTimeout(() => {this.mensagem = ''; }, 4000);
    }
    public AlertaSemTimeOut(msg: string): any {
        this.estilo = 'warning';
        this.mensagem = msg;
    }

    public onError(error: any) {
        (error.status === 404) ? this.Alerta(error.mensagemBackend) : this.Erro(error.mensagemBackend);
    }
    public onErrorSemTimeOut(error: any) {
        (error.status === 404) ? this.AlertaSemTimeOut(error.mensagemBackend) : this.ErroSemTimeOut(error.mensagemBackend);
    }
}
