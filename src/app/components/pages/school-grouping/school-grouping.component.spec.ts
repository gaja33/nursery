import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolGroupingComponent } from './school-grouping.component';

describe('SchoolGroupingComponent', () => {
  let component: SchoolGroupingComponent;
  let fixture: ComponentFixture<SchoolGroupingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolGroupingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolGroupingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
