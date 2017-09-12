import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizensComponent } from './citizens.component';

describe('CitizensComponent', () => {
  let component: CitizensComponent;
  let fixture: ComponentFixture<CitizensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitizensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
