import { Component, OnInit } from '@angular/core';

/**El archivo css mencionado en styleUrls
 * solo se aplicara al componente mencionado
 * en templateUrl
 */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  /** La manera recomendable es declarar
   * los atributos con su tipo y en el
   * constructor inicializarlos.
   */
  anio: number;

  constructor() {
    this.anio = new Date().getFullYear();
  }
}
