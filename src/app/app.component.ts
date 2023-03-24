import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curso Angular';
  //pais!: String;
  pais: String = 'Guatemala';

  logueado = true;

  // personas = [

  //   'Manuel',
  //   'Juan',
  //   'Felipe',
  //   'Carlos',
  //   'Mario'

  // ]

  personas = [
    {nombre: 'Manuel', apellido: 'Concoba'},
    {nombre: 'Juan', apellido: 'Hernandez'},
    {nombre: 'Felipe', apellido: 'Gonzalez'},
    {nombre: 'Carlos', apellido: 'Rivera'},
    {nombre: 'Mario', apellido: 'Lopez'},



  ]

 boton_desactivado = false;

  cambioClase(){
    this.boton_desactivado = !this.boton_desactivado
  }

//https://www.youtube.com/watch?v=OABHRu0E3kI








//INTERPOLACIONES
//On way data biding = {{}} comunicación en una vía
//Two way data biding = [()] enlace bidireccional

//DIRECTIVAS
/*
ngIf = consulta If dentro del html expresión booeleana (verdadera o falsa)
ngFor = Integrar los elementos de un arreglo o lista de varios elementos del mismo tipo
ngClass
ngStyle
ngSwitch
*/


}
