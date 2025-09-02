import { Tables } from './tables.model';
import { DeclaracaoModel } from './declaracao.model';

export class TabelasModel {

    public Declaracao: DeclaracaoModel = new DeclaracaoModel();
    public _table01: Tables[] = new Array();
    public _table02: Tables[] = new Array();
    public _table03: Tables[] = new Array();
    public _table04: Tables[] = new Array();
    public _table05A: Tables[] = new Array();
    public _table05BextraJudicial: Tables[] = new Array();
    public _table05Bjudicial: Tables[] = new Array();
    public _table05Bresidencial: Tables[] = new Array();
    public _table05Bcomercial: Tables[] = new Array();
    public _table05Bloteamento: Tables[] = new Array();
    public _table05C: Tables[] = new Array();
    public _table05D: Tables[] = new Array();
    public _table05Dresidencial: Tables[] = new Array();
    public _table05Dcomercial: Tables[] = new Array();
    public _table05E: Tables[] = new Array();
    public _table06: Tables[] = new Array();
}
