import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ButonComponent } from './buton/buton.component';
import { LimpiezaComponent } from './productos/limpieza/limpieza.component';
import { HigieneComponent } from './productos/higiene/higiene.component';
import { FormsModule } from '@angular/forms';
import { TargetGanadorComponent } from "./target-ganador/TargetGanadorComponent";
import { FormularioNuevaPersonaComponent } from './formulario-nueva-persona/formulario-nueva-persona.component';
import { BuscarPipe } from './pipes/buscar.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ButonComponent,
    LimpiezaComponent,
    HigieneComponent,
    TargetGanadorComponent,
    FormularioNuevaPersonaComponent,
    BuscarPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
