import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Miniatura } from './miniatura';

describe('Miniatura', () => {
  let component: Miniatura;
  let fixture: ComponentFixture<Miniatura>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Miniatura]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Miniatura);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
