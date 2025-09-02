class GrupoServicos {
    Id: number;
    txDiscriminacao: string;
  }

export class Tables {

    public Id: number;
    public Discriminacao: string;
    public Valor: number;
    public GrupoServicos: GrupoServicos;
    public Quantidade: number;

    constructor() {
        this.Id = 0;
        this.Discriminacao = '';
        this.Valor = 0;
        this.GrupoServicos = new GrupoServicos();
        this.Quantidade = null;
    }
}
