import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDeClientePage } from './cadastro-de-cliente.page';

describe('CadastroDeClientePage', () => {
  let component: CadastroDeClientePage;
  let fixture: ComponentFixture<CadastroDeClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroDeClientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroDeClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
