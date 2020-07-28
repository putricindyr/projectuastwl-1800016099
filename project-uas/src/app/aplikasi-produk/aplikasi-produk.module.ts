import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AplikasiProdukComponent } from './aplikasi-produk.component';
import { MaterialDesign } from '../material/material';
import { TambahProdukComponent } from './tambah-produk/tambah-produk.component';
import { DetailProdukComponent } from './detail-produk/detail-produk.component';
import { DialogKonfirmasiComponent} from './dialog-konfirmasi/dialog-konfirmasi.component';
import { Routes, RouterModule } from '@angular/router';


const routes:Routes=[
  {
    path:'app',
    component:AplikasiProdukComponent,
    children:[
      {
        path:'tambah-produk',
        component:TambahProdukComponent
      },
      {
        path:'detail-produk',
        component:DetailProdukComponent
      }     
    ]
  },
  {
    path:'',
    redirectTo:'app',
    pathMatch:'full'
  }
]

@NgModule({
  declarations: [
    AplikasiProdukComponent,
    TambahProdukComponent,
    DetailProdukComponent,
    DialogKonfirmasiComponent
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign,
  
  ]
})
export class AplikasiProdukModule { }