import { Component, OnInit } from '@angular/core';
import { ComarcaService } from './comarca.service';
import { Comarca } from './comarca.model';
import { Cartorio } from '../../secure/administrativos/cartorio.model';
import { CartorioService } from '../../secure/administrativos/cartorio.service';

@Component({
  selector: 'app-relcartorios',
  templateUrl: './ficha-cadastral.component.html'
})
export class FichaCadastralComponent implements OnInit {

  comarcas: Comarca[];
  comarcaSelecionada: Comarca;

  cartorios: Cartorio[];
  cartorioSelecionado: Cartorio;

  constructor(private _service: ComarcaService, private cartorioService: CartorioService) { }

  ngOnInit() {
    this._service.ListarTodos('comarcas')
      .subscribe(
        (res) => {
            const tbl: any = res;
            this.comarcas = new Array();
            tbl.forEach(el => {
                this.comarcas.push({
                Id: el.Id,
                txComarca: el.txComarca
                });
            });
        });
  }

  onChangeComarca(idComarca) {
      this.cartorioService.ListarPorComarca('cartorios', idComarca)
        .subscribe(
            (res) => {
                const tbl: any = res;
                this.cartorios = new Array();
                this.cartorios.push({
                    Id: 0,
                    txCartorio: 'Escolha a cidade'
                    });
                tbl.forEach(el => {
                    this.cartorios.push({
                    Id: el.Id,
                    txCartorio: el.txCartorio
                    });
                });
            });
        event.preventDefault();
  }

  onBaixarFicha(idCartorio) {
    this.cartorioService.BaixarFichaCadastral('Report/FichaCadastral', idCartorio).subscribe(
        (res) => {
            const fileURL = URL.createObjectURL(res);
            window.open(fileURL, '_self');
        });
  }

  selecionarCartorio(event: Event, cartorio: Cartorio) {
      this.cartorioSelecionado = cartorio;
      event.preventDefault();
  }
}
