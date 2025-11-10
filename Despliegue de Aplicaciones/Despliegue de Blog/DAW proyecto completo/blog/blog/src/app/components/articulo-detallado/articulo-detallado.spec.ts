import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloDetallado } from './articulo-detallado';

describe('ArticuloDetallado', () => {
  let component: ArticuloDetallado;
  let fixture: ComponentFixture<ArticuloDetallado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticuloDetallado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticuloDetallado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
