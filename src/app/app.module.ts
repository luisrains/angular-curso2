import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpModule} from "@angular/http";
//rutas
import {app_routing} from "./app.route";

//servicios
import {InformacionService } from "./services/informacion.service";
import {ProductosService} from "./services/productos.service";

//componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { ProductoItemComponent } from './components/producto-item/producto-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ProductoItemComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpModule
  ],
  providers: [InformacionService,ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
