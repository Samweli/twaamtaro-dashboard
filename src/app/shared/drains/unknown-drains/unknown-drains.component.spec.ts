import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnknownDrainsComponent } from './unknown-drains.component';

describe('UnknownDrainsComponent', () => {
  let component: UnknownDrainsComponent;
  let fixture: ComponentFixture<UnknownDrainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnknownDrainsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnknownDrainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
