import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationPackagesComponent } from './vacation-packages.component';

describe('VacationPackagesComponent', () => {
  let component: VacationPackagesComponent;
  let fixture: ComponentFixture<VacationPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacationPackagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
