import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioNuevaPersonaComponent } from './formulario-nueva-persona.component';

describe('FormularioNuevaPersonaComponent', () => {
  let component: FormularioNuevaPersonaComponent;
  let fixture: ComponentFixture<FormularioNuevaPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioNuevaPersonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioNuevaPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
