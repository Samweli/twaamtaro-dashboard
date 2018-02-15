import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrainsSearchComponent } from './drains-search.component';

describe('DrainsSearchComponent', () => {
  let component: DrainsSearchComponent;
  let fixture: ComponentFixture<DrainsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrainsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrainsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
