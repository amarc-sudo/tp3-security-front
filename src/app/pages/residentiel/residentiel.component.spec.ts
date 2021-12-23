import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentielComponent } from './residentiel.component';

describe('ResidentielComponent', () => {
  let component: ResidentielComponent;
  let fixture: ComponentFixture<ResidentielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
