import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayTariffComponent } from './play-tariff.component';

describe('PlayTariffComponent', () => {
  let component: PlayTariffComponent;
  let fixture: ComponentFixture<PlayTariffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayTariffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayTariffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
