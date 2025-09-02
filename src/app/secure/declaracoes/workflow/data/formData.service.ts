import { Injectable } from '@angular/core';

import { FormData } from './formData.model';
import { WorkflowService } from '../workflow.service';
import { SelecionarPeriodo } from '@app/secure/declaracoes/nova-declaracao/selecionar-periodo/selecionarperiodo.model';
import { ServicoViewModel } from '@app/public/simulacao/servico-view.model';
import { TabelasModel } from '@app/public/simulacao/tabelas.model';
import { STEPS } from '@app/secure/declaracoes/workflow/workflow.model';
import { Cartorio } from '@app/secure/administrativos/cartorio.model';

@Injectable()
export class FormDataService {

    private formData: FormData = new FormData();
    private isSelecionarPeriodoFormValid = false;
    private isLancarServicosFormValid = false;

    constructor(private workflowService: WorkflowService) {
    }

    getPeriodo(): SelecionarPeriodo {
        const periodo: SelecionarPeriodo = {
            dtInicialPeriodo: this.formData.dtInicialPeriodo,
            dtFinalPeriodo: this.formData.dtFinalPeriodo
        };

        return periodo;
    }

    setPeriodo(data: SelecionarPeriodo) {
        this.isSelecionarPeriodoFormValid = true;
        this.formData.dtInicialPeriodo = data.dtInicialPeriodo;
        this.formData.dtFinalPeriodo = data.dtFinalPeriodo;

        this.workflowService.validateStep(STEPS.selecionarPeriodo);
    }

    getServicoViewModel(): ServicoViewModel[] {
        const servicos = this.formData.servicos;
        return servicos;
    }

    setServicoViewModel(data: ServicoViewModel[]) {
        this.isLancarServicosFormValid = true;
        this.formData.servicos = data;
        this.workflowService.validateStep(STEPS.lancarServicos);
    }

    getTabelasModel(): TabelasModel {
        const tabelas = this.formData.tabelasModel;
        return tabelas;
    }

    setTabelasModel(data: TabelasModel) {
        this.formData.tabelasModel = data;
        this.workflowService.validateStep(STEPS.confirmarLancamentosmo);
    }

    setLiberarResultado() {
        this.workflowService.validateStep(STEPS.resultado);
    }

    getCartorioSelecionado(): string {
        const cartorio = this.formData.cartorio;
        return cartorio;
    }

    setCartorioSelecionado(data: string) {
        this.formData.cartorio = data;
    }

    getUsuario(): string {
        const usuario = this.formData.usuario;
        return usuario;
    }

    setUsuario(data: string) {
        this.formData.usuario = data;
    }

    getFormData(): FormData {
        return this.formData;
    }

    resetFormData(): FormData {
        this.formData.clear();
        return this.formData;
    }

    isFormValid() {
        return this.isSelecionarPeriodoFormValid
            && this.isLancarServicosFormValid;
    }
}
