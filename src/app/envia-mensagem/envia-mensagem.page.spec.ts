import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviaMensagemPage } from './envia-mensagem.page';

describe('EnviaMensagemPage', () => {
  let component: EnviaMensagemPage;
  let fixture: ComponentFixture<EnviaMensagemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviaMensagemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviaMensagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
