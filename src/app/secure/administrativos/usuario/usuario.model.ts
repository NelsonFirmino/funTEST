export class Usuario {
    public Id: number ;
    public txNome: string;
    public txCPF: string;
    public txFuncao: string;
    public txEmail: string;
    public txSenha: string;
    public txTelefone: string;
    public isAtivo: boolean;
    public isEmailEnviado: boolean;
    public txConfirma : string;

    constructor() {
        this.Id = 0;
        this.txNome = '';
        this.txCPF = '';
        this.txFuncao = 'Cartorio';
        this.txEmail = '';
        this.txTelefone ='';
        this.isAtivo = true;
        this.isEmailEnviado = false;
        this.txSenha = '';
        this.txConfirma = '';
    }
}