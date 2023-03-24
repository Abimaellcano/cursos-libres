import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButonComponent } from './buton/buton.component';
import { LimpiezaComponent } from './productos/limpieza/limpieza.component';
import { HigieneComponent } from './productos/higiene/higiene.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ButonComponent,
    LimpiezaComponent,
    HigieneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
