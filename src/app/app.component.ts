import { Component, OnInit, Input } from '@angular/core';

@Component ({
    // tslint:disable-next-line:component-selector
    selector:     'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

    title = '';

    constructor() {
    }

    ngOnInit() {
    }
}
