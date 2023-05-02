import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-limpieza',
  templateUrl: './limpieza.component.html',
  styleUrls: ['./limpieza.component.css']
})
export class LimpiezaComponent implements OnInit, OnDestroy{
  nombre!: string | null

  ngOnInit(): void {

    this.nombre = window.localStorage.getItem('producto')

    console.log('ngOnInit -> LimpiezaComponent');
  }

  ngOnDestroy(): void {
      if(this.nombre != undefined){
        window.localStorage.setItem('producto',this.nombre)
      }
      console.log('ngDestroy -> LimpiezaComponent');
  }

}
