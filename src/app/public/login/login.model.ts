import { Cartorio } from "@app/secure/administrativos/cartorio.model";

export class LoginModel {
    public Id: number;
    public usuario: string;
    public senha: string;
    public nome: string;
    public idSistema: number;
    public txFuncao: string;
    public cartorios: Cartorio[];


    constructor (
        usuario: string,
        senha: string
    ) {
        this.Id = 0,
        this.usuario = usuario,
        this.senha = senha,
        this.idSistema = 19, // Sistema do Jvris = 19
        this.txFuncao = '',
        this.cartorios = [];
    }
}
