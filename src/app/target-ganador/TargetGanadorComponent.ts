import { Component, Input, OnInit, SimpleChange } from '@angular/core';



@Component({
  selector: 'app-target-ganador',
  templateUrl: './target-ganador.component.html',
  styleUrls: ['./target-ganador.component.css']
})

export class TargetGanadorComponent implements OnInit {

  @Input() ganador!: any;

  ngOnInit(){

  }

  ngOnChanges(changes: SimpleChange){
    console.log('cambios ', changes);
  }


}
