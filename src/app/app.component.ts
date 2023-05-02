import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Curso Angular';
  //pais!: String;
  pais: String = 'Guatemala';
  logueado = true;


  calificacion = 59;

  nombre_seleccionado!: String
  apellido_curso!: String
  persona_seleccionada!: any;






  // personas = [

  //   'Manuel',
  //   'Juan',
  //   'Felipe',
  //   'Carlos',
  //   'Mario'

  // ]

  personas = [
    {nombre: 'Manuel', apellido: 'Concoba', color: 'red'},
    {nombre: 'Juan', apellido: 'Hernandez', color: 'blue'},
    {nombre: 'Felipe', apellido: 'Gonzalez', color: 'green'},
    {nombre: 'Carlos', apellido: 'Rivera', color: 'purple'},
    {nombre: 'Mario', apellido: 'Lopez', color: 'brown'},



  ]

    mensaje!: String
    mostrar_limpieza = true

  //CICLO DE VIDA DE UN COMPONENTE
  ngOnInit(): void {
    this.mensaje = 'Bienvenidos a el curso de Angular'
    console.log('ngOnInit -> AppComponent')
}

  cambioComponente(){
    this.mostrar_limpieza = !this.mostrar_limpieza;
  }

 boton_desactivado = false;


  cambioClase(){
    this.boton_desactivado = !this.boton_desactivado
  }

    seleccionarNombre(nombre:String){
      this.nombre_seleccionado = nombre
    }

    cursoApellido(evento: Event, apellido: String){
      console.log(evento.type);

      if(evento.type == 'mouseleave'){
        this.apellido_curso = ''
      } else {
      this.apellido_curso = apellido
      }
    }

    eventoTeclado(evento: Event){
      console.log(evento);

    }

      cambiosInput(evento: Event){
        console.log(evento);
      }



//https://www.youtube.com/watch?v=OABHRu0E3kI








//INTERPOLACIONES
//On way data biding = {{}} comunicación en una vía
//Two way data biding = [()] enlace bidireccional

//DIRECTIVAS
/*
ngIf = consulta If dentro del html expresión booeleana (verdadera o falsa)
ngFor = Integrar los elementos de un arreglo o lista de varios elementos del mismo tipo
ngClass = [ngClass] asigna una prueba lógica
ngStyle = Funciona igual que el ngclass a diferencia que se le agrega el estilo de una vez
ngSwitch = Se utiliza para cambiar el contenido de un elemento dentro del HTML


*/

// EVENT BINDING (enlace de eventos)

iniciarSesion(eveto: Event){
  console.log('eveto.type');

}


// @Input & @Output

personaAleatorea() {
  const posicionAleatorea = Math.floor(Math.random() * this.personas.length -1)
  const personaAleatorea = this.personas[posicionAleatorea]

  if(personaAleatorea === this.persona_seleccionada){
      this.personaAleatorea()
  }else{
    this.persona_seleccionada = personaAleatorea
  }

}


}


