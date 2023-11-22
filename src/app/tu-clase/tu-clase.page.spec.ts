import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TuClasePage } from './tu-clase.page';

describe('TuClasePage', () => {
  let component: TuClasePage;
  let fixture: ComponentFixture<TuClasePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TuClasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
