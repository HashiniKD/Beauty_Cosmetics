import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManupageComponent } from './manupage.component';

describe('ManupageComponent', () => {
  let component: ManupageComponent;
  let fixture: ComponentFixture<ManupageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManupageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManupageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
