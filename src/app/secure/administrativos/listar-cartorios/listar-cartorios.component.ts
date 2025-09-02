import { Component, OnInit } from '@angular/core';

import { SelectItem } from 'primeng/components/common/selectitem';

import { Cartorio } from '../cartorio.model';
import { CartorioService } from '../cartorio.service';

@Component({
  selector: 'app-listar-cartorios',
  templateUrl: './listar-cartorios.component.html',
  styleUrls: ['./listar-cartorios.component.css']
})
export class ListarCartoriosComponent implements OnInit {

    cartorios: Cartorio[];

    cartorioSelecionado: Cartorio;

    displayDialog: boolean;

    sortOptions: SelectItem[];

    sortKey: string;

    sortField: string;

    sortOrder: number;    

    constructor(private cartorioService: CartorioService) { } 

    ngOnInit() {
        this.cartorioService.ListarTodos('cartorios')
            .subscribe(
            (res) => {
                const tbl: any = res;
                this.cartorios = new Array();
                tbl.forEach(el => {
                    this.cartorios.push({
                    Id: el.Id,
                    txCartorio: el.txCartorio,
                    txComarca: el.txComarca,
                    txResponsavel: el.txResponsavel,
                    txCEP: el.txCEP,
                    txEmail: el.txEmail,
                    txEndereco: el.txEndereco,
                    txTelefone: el.txTelefone,
                    txServicos: el.txServicos
                    });
                });
            });

        this.sortOptions = [
            {label: 'Responsável', value: 'txResponsavel'},
            {label: 'Cartorio', value: 'txCartorio'},
            {label: 'Comarca', value: 'txComarca'},
        ];
    }

    selecionarCartorio(event: Event, cartorio: Cartorio) {
        this.cartorioSelecionado = cartorio;
        this.displayDialog = true;
        event.preventDefault();
    }

    onSortChange(event) {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        } else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }

    onDialogHide() {
        this.cartorioSelecionado = null;
    }
}
