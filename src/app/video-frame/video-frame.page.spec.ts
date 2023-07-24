import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoFramePage } from './video-frame.page';

describe('VideoFramePage', () => {
  let component: VideoFramePage;
  let fixture: ComponentFixture<VideoFramePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoFramePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoFramePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
