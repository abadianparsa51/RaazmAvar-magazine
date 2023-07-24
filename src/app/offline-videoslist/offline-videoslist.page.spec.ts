import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineVideoslistPage } from './offline-videoslist.page';

describe('OfflineVideoslistPage', () => {
  let component: OfflineVideoslistPage;
  let fixture: ComponentFixture<OfflineVideoslistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfflineVideoslistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflineVideoslistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
