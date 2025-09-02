export class Periodo{
    public dtInicio: string; // [Transient no Backend]
    // private _dtInicioAux: string; // Backend
    // get dtInicioAux(): string {
    //     return this._dtInicioAux;
    // }
    // set dtInicioAux(data: string) {
    //     this._dtInicioAux = data;
    //     this.dtInicio = data;
    // }
    public dtFim: string; // [Transient no Backend]
    // private _dtFimAux: string; // Backend
    // get dtFimAux(): string {
    //     return this._dtFimAux;
    // }
    // set dtFimAux(data: string) {
    //     this._dtFimAux = data;
    //     this.dtFim = data;
    // }
    constructor() {
      //  this._dtInicioAux = '';
        this.dtInicio = '';
     //  this._dtFimAux = '';
        this.dtFim = '';
    }
}