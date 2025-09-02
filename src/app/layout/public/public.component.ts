import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

  title = 'Autenticação - Módulo FUNAF';

  constructor() { }

  ngOnInit() {
  }

}
