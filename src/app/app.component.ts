import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Netflix';

    items: MenuItem[] = [];

    ngOnInit() {
        this.items = [
            {label: 'Inicio',},
            {label: 'Séries',},
            {label: 'Filmes',},
            {label: 'Bombando',},
            {label: 'Minha Lista',}
        ];
    }
}
