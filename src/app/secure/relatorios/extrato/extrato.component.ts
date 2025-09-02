import { Component, OnInit } from '@angular/core';
import { ExtratoService } from '../extrato/extrato.service';
import { ConvertBase64 } from '@app/shared/utils/convert-base64';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css'],
  providers: [ExtratoService]
})
export class ExtratoComponent implements OnInit {
  nuAno: number;
  lista = [];

  constructor(private service: ExtratoService, private _convertBase64: ConvertBase64) { }

  ngOnInit() {
    this.montaLista();
  }

  montaLista() {
    var ano = 2018
    var d = new Date();
    var i = 0;
    while (ano <= d.getFullYear()) {
      this.lista[i] = ano;
      ano++;
      i++;
    }
  }

  onImprimirTotal(event: Event) {
    this.service.ImprimirTodos('Reports/extratototal', this.nuAno)
      .subscribe(
        (res) => {
          const fileURL = URL.createObjectURL(res);
          window.open(fileURL, '_blank');
        });

    event.preventDefault();
  }
}
