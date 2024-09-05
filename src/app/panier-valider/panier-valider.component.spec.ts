import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierValiderComponent } from './panier-valider.component';

describe('PanierValiderComponent', () => {
  let component: PanierValiderComponent;
  let fixture: ComponentFixture<PanierValiderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanierValiderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanierValiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
