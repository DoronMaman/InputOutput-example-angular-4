import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChlidtwoComponent } from './chlidtwo.component';

describe('ChlidtwoComponent', () => {
  let component: ChlidtwoComponent;
  let fixture: ComponentFixture<ChlidtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChlidtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChlidtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
