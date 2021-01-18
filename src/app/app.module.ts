import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component'
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component'

/**Se registran los componentes que vamos creando para
 * poder hacer uso de ellos en el array de
 * declarations.
 * 
 * Crear un componente por el comando de angular CLI
 * tambien registra el componente de forma automatica
 */
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
