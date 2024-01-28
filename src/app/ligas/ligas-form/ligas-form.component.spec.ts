import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigasFormComponent } from './ligas-form.component';

describe('LigasFormComponent', () => {
  let component: LigasFormComponent;
  let fixture: ComponentFixture<LigasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LigasFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LigasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
