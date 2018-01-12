import { RouterModule, Routes } from '@angular/router';

import {
  AboutComponent,
  PortafolioComponent,
  ProductoItemComponent
} from "./components/index.paginas";


const app_routes: Routes = [
  { path: 'home', component: PortafolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'producto/:id', component: ProductoItemComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes,{useHash:true});
