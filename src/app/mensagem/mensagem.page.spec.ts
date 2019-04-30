import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagemPage } from './mensagem.page';

describe('MensagemPage', () => {
  let component: MensagemPage;
  let fixture: ComponentFixture<MensagemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensagemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
