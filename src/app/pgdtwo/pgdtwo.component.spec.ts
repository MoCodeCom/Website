import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgdtwoComponent } from './pgdtwo.component';

describe('PgdtwoComponent', () => {
  let component: PgdtwoComponent;
  let fixture: ComponentFixture<PgdtwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgdtwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgdtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
