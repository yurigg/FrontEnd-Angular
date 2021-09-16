import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePaginacionComponent } from './table-paginacion.component';

describe('TablePaginacionComponent', () => {
  let component: TablePaginacionComponent;
  let fixture: ComponentFixture<TablePaginacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePaginacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePaginacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
