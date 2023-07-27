import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaLindasPage } from './lista-lindas.page';

describe('ListaLindasPage', () => {
  let component: ListaLindasPage;
  let fixture: ComponentFixture<ListaLindasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListaLindasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
