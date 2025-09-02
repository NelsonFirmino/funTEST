import { Serventia } from "../serventia/serventia.model";
import { Usuario } from "../usuario/usuario.model";

export class ServentiaUsuario {
    public Id: number ;
    public Serventia: Serventia;
    public Usuario: Usuario;

    constructor() {
        this.Id = 0;
        this.Serventia = new Serventia;
        this.Usuario = new Usuario;
    }
}
