import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentcounterComponent } from './parentcounter.component';

describe('ParentcounterComponent', () => {
  let component: ParentcounterComponent;
  let fixture: ComponentFixture<ParentcounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentcounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentcounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
