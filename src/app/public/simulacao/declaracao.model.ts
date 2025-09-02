export class DeclaracaoModel {

    public Id: number;
    public idServentia: number;
    public idUsuarioAbertura: number;
    public idUsuarioFechamento: number;
    public nuMesReferencia: number;
    public nuAnoReferencia: number;
    public dtPeriodoInicial: Date;
    public dtPeriodoFinal: Date;
    public dtFechamento: Date;

    constructor() {
        this.Id = 0;
        this.idServentia = 0;
        this.idUsuarioAbertura = 0;
        this.idUsuarioFechamento = 0;
        this.nuMesReferencia = 0;
        this.nuAnoReferencia = 0;
        this.dtPeriodoInicial = new Date();
        this.dtPeriodoFinal = new Date();
        this.dtFechamento = new Date();
    }
}
