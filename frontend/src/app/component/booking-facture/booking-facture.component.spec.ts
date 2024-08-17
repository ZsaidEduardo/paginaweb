import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingFactureComponent } from './booking-facture.component';

describe('BookingFactureComponent', () => {
  let component: BookingFactureComponent;
  let fixture: ComponentFixture<BookingFactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingFactureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
