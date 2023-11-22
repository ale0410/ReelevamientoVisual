import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerImagenModalPagePage } from './ver-imagen-modal-page.page';

describe('VerImagenModalPagePage', () => {
  let component: VerImagenModalPagePage;
  let fixture: ComponentFixture<VerImagenModalPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VerImagenModalPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
