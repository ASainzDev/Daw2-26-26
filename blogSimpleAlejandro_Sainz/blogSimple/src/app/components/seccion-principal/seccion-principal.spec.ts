import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionPrincipal } from './seccion-principal';

describe('SeccionPrincipal', () => {
  let component: SeccionPrincipal;
  let fixture: ComponentFixture<SeccionPrincipal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionPrincipal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionPrincipal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
