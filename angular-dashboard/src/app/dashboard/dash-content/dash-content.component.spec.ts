import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashContentComponent } from './dash-content.component';

describe('DashContentComponent', () => {
  let component: DashContentComponent;
  let fixture: ComponentFixture<DashContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
