import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetGanadorComponent } from "./TargetGanadorComponent";

describe('TargetGanadorComponent', () => {
  let component: TargetGanadorComponent;
  let fixture: ComponentFixture<TargetGanadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetGanadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TargetGanadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
