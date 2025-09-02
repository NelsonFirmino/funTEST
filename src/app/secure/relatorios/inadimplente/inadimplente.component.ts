import { Component, OnInit } from '@angular/core';
import { InadimplenteService } from './inadimplente.service';

@Component({
  selector: 'app-inadimplente',
  templateUrl: './inadimplente.component.html',
  styleUrls: ['./inadimplente.component.css'],
  providers: [InadimplenteService]
})
export class InadimplenteComponent implements OnInit {
  nuAno: number;
  lista = [];

  constructor(private service: InadimplenteService) { }

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

  onImprimir(event: Event) {
    this.service.Imprimir('Reports/inadimplente', this.nuAno)
      .subscribe(
        (res) => {
          const fileURL = URL.createObjectURL(res);
          window.open(fileURL, '_blank');
        });

    event.preventDefault();
  }
}
