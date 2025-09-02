export class RespostaModel {
    ok: boolean;
    status: number;
    statusText: string;
    url: string;
    mensagemBackend: string;
    exceptionBackend: string;

    constructor() {
      this.ok = false;
      this.status = 0;
      this.statusText = '';
      this.url = '';
      this.mensagemBackend = '';
      this.exceptionBackend = '';
    }
}
