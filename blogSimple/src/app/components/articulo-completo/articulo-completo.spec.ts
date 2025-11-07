import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloCompleto } from './articulo-completo';

describe('ArticuloCompleto', () => {
  let component: ArticuloCompleto;
  let fixture: ComponentFixture<ArticuloCompleto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticuloCompleto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticuloCompleto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
