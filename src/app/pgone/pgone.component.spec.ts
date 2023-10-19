import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgoneComponent } from './pgone.component';

describe('PgoneComponent', () => {
  let component: PgoneComponent;
  let fixture: ComponentFixture<PgoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
