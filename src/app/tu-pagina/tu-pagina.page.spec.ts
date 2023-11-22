import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TuPaginaPage } from './tu-pagina.page';

describe('TuPaginaPage', () => {
  let component: TuPaginaPage;
  let fixture: ComponentFixture<TuPaginaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TuPaginaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
