import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionalFiltersComponent } from './regional-filters.component';

describe('RegionalFiltersComponent', () => {
  let component: RegionalFiltersComponent;
  let fixture: ComponentFixture<RegionalFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionalFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionalFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
