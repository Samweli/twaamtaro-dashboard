import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedhelpSearchComponent } from './needhelp-search.component';

describe('NeedhelpSearchComponent', () => {
  let component: NeedhelpSearchComponent;
  let fixture: ComponentFixture<NeedhelpSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeedhelpSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedhelpSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
