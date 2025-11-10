import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralSection } from './central-section';

describe('CentralSection', () => {
  let component: CentralSection;
  let fixture: ComponentFixture<CentralSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentralSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentralSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
