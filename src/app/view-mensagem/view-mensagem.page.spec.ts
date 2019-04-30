import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMensagemPage } from './view-mensagem.page';

describe('ViewMensagemPage', () => {
  let component: ViewMensagemPage;
  let fixture: ComponentFixture<ViewMensagemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMensagemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMensagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
