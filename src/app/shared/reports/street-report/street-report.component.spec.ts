import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetReportComponent } from './street-report.component';

describe('StreetReportComponent', () => {
  let component: StreetReportComponent;
  let fixture: ComponentFixture<StreetReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreetReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreetReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
