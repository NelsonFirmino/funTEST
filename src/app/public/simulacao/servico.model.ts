export class ServicoModel {

    public Id: number;
    public txDiscriminacao: string;
    public vaServico: number;
    public idGrupoServicos: number;

    constructor() {
        this.Id = 0;
        this.txDiscriminacao = '';
        this.vaServico = 0;
        this.idGrupoServicos = 0;
    }
}
