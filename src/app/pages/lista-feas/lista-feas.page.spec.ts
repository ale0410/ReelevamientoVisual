import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaFeasPage } from './lista-feas.page';

describe('ListaFeasPage', () => {
  let component: ListaFeasPage;
  let fixture: ComponentFixture<ListaFeasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListaFeasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
