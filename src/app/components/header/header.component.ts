import { Component } from '@angular/core';

/** En componentes sin mucho HTML se puede
 * adicionar el codigo HTML directamente en
 * el atributo template.
 * eg: template: `<h1>Header component de Alejo</h1>`
 */
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

}