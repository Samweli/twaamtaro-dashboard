import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyLeaderComponent } from './verify-leader.component';

describe('VerifyLeaderComponent', () => {
  let component: VerifyLeaderComponent;
  let fixture: ComponentFixture<VerifyLeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyLeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyLeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
