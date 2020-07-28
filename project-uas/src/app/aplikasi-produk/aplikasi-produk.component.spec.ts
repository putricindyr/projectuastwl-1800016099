import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AplikasiProdukComponent } from './aplikasi-produk.component';

describe('AplikasiProdukComponent', () => {
  let component: AplikasiProdukComponent;
  let fixture: ComponentFixture<AplikasiProdukComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AplikasiProdukComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AplikasiProdukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
