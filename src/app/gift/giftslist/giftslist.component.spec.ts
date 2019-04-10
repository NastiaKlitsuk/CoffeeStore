import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftslistComponent } from './giftslist.component';

describe('GiftslistComponent', () => {
  let component: GiftslistComponent;
  let fixture: ComponentFixture<GiftslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
