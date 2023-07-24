import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGymPage } from './add-gym.page';

describe('AddGymPage', () => {
  let component: AddGymPage;
  let fixture: ComponentFixture<AddGymPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGymPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGymPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
