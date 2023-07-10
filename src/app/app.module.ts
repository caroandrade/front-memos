import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';

import { BusquedaComponent } from './component/busqueda/busqueda.component';
import { BarraComponent } from './component/barra/barra.component';
import { MemosComponent } from './component/memos/memos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListadoComponent } from './component/listado/listado.component';





@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    BarraComponent,
    MemosComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule
 
 
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
