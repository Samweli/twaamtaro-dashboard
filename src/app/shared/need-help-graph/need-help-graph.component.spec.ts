import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedHelpGraphComponent } from './need-help-graph.component';

describe('NeedHelpGraphComponent', () => {
  let component: NeedHelpGraphComponent;
  let fixture: ComponentFixture<NeedHelpGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeedHelpGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedHelpGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
