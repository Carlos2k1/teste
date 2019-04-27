import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteViewPage } from './cliente-view.page';

describe('ClienteViewPage', () => {
  let component: ClienteViewPage;
  let fixture: ComponentFixture<ClienteViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
