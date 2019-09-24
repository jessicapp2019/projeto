import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilEventoComponent } from './perfil-evento.component';

describe('PerfilEventoComponent', () => {
  let component: PerfilEventoComponent;
  let fixture: ComponentFixture<PerfilEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
