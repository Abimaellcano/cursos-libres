import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario-nueva-persona',
  templateUrl: './formulario-nueva-persona.component.html',
  styleUrls: ['./formulario-nueva-persona.component.css']
})
export class FormularioNuevaPersonaComponent {

@Output() persona =new EventEmitter <any>()

  enviarDatos(nombre: string, apellido: string, color: string, formulario: HTMLFormElement){
    console.log(nombre, apellido, color);
    const nueva_persona = {nombre, apellido, color}
    this.persona.emit(nueva_persona)
    formulario.reset()

  }

}
