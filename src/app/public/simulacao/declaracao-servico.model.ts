import { DeclaracaoModel } from './declaracao.model';
import { ServicoModel } from './servico.model';

export class DeclaracaoServicoModel {

    public Id: number;
    public Declaracao: DeclaracaoModel;
    public Servico: ServicoModel;
    public nuQuantidade: number;
    public vaServico: number;
    public vaTotal: number;

    constructor() {
        this.Id = 0;
        this.Declaracao = new DeclaracaoModel();
        this.Servico = new ServicoModel();
        this.nuQuantidade = 0;
        this.vaServico = 0;
        this.vaTotal = 0;
    }
}
