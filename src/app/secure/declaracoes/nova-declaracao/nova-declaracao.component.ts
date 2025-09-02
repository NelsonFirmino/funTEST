import { Component, OnInit, Input } from '@angular/core';
import { FormDataService } from '../workflow/data/formData.service';

@Component({
  selector: 'pge-novadeclaracao',
  templateUrl: './nova-declaracao.component.html',
  styleUrls: ['./nova-declaracao.component.css']
})
export class NovaDeclaracaoComponent implements OnInit {

  @Input() formData: any;

  constructor(private formDataService: FormDataService) {
}

  ngOnInit() {
    this.formData = this.formDataService.getFormData();
  }

}
