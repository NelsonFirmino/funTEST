import { Comarca } from "./comarca.model";

export class Serventia {
    public Id: number ;
    public txCartorio : string;
    public txResponsavel : string;
    public txCPF: string;
    public txEndereco : string;
    public txBairro : string;
    public txCEP : string;
    public txTelefone : string;
    public txEmail : string;
    public txComarca : string;
    public Comarca : Comarca;
    public txServicos : string;

    constructor() {
        this.Id = 0;
        this.txCartorio = '';
        this.txResponsavel = '';
        this.txCPF = '';
        this.txEndereco = '';
        this.txBairro = '';
        this.txCEP = '';
        this.txTelefone ='';
        this.txEmail = '';
        this.txComarca = '';
        this.txServicos = 'xxx'
        this.Comarca = new Comarca;
        
    }
}