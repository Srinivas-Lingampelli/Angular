import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensStore } from './mens-store';

describe('MensStore', () => {
  let component: MensStore;
  let fixture: ComponentFixture<MensStore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensStore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
