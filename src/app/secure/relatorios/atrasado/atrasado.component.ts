import { Component, OnInit } from '@angular/core';
import { AtrasadoService } from '../atrasado/atrasado.service';
import { ConvertBase64 } from '@app/shared/utils/convert-base64';

@Component({
  selector: 'app-atrasado',
  templateUrl: './atrasado.component.html',
  styleUrls: ['./atrasado.component.css'],
  providers:[AtrasadoService]
})
export class AtrasadoComponent implements OnInit {

  constructor(private service: AtrasadoService, private _convertBase64: ConvertBase64) { }

  ngOnInit() {}
 
  onImprimir(event: Event) {
      this.service.Imprimir('Reports/boletoematraso')
        .subscribe(
            (res) => {
                const fileURL = URL.createObjectURL(res);
                window.open(fileURL, '_blank');
            });
    event.preventDefault();
  }
}
