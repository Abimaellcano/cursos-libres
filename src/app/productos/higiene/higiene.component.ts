import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-higiene',
  templateUrl: './higiene.component.html',
  styleUrls: ['./higiene.component.css']
})
export class HigieneComponent  implements OnInit, OnDestroy{


ngOnInit(): void {
    console.log('ngOnInit -> HigieneComponent ');

}

ngOnDestroy(): void {
    console.log('ngDestroy -> HigieneComponent');
}

}


