import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeClientesPage } from './lista-de-clientes.page';

describe('ListaDeClientesPage', () => {
  let component: ListaDeClientesPage;
  let fixture: ComponentFixture<ListaDeClientesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDeClientesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeClientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
