import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheSushiRadioCalcultorComponent } from './the-sushi-radio-calcultor.component';

describe('TheSushiRadioCalcultorComponent', () => {
  let component: TheSushiRadioCalcultorComponent;
  let fixture: ComponentFixture<TheSushiRadioCalcultorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheSushiRadioCalcultorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheSushiRadioCalcultorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
