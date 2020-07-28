import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TambahProdukComponent } from './tambah-produk/tambah-produk.component';
import { DetailProdukComponent } from './detail-produk/detail-produk.component';
import { DialogKonfirmasiComponent } from './dialog-konfirmasi/dialog-konfirmasi.component';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-aplikasi-produk',
  templateUrl: './aplikasi-produk.component.html',
  styleUrls: ['./aplikasi-produk.component.css']
})
export class AplikasiProdukComponent implements OnInit {

  constructor(
    public dialog:MatDialog,
    public api:ApiService
  )
  {
    this.getData();
  }

  dataProduk:any[];
  getData()
  {
    this.api.baca().subscribe(res => {
      this.dataProduk=res;
    });
  }

  buatProduk()
  {
    const dialogRef = this.dialog.open(TambahProdukComponent, {
      width: '450px',
      data:null
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getData();
    });
  }
  
  detailProduk(item)
	{
    const dialogRef = this.dialog.open(DetailProdukComponent, {
      width: '450px',
      data:item
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');     
    });
  }

  konfirmasiHapus()
	{
    const dialogRef = this.dialog.open(DialogKonfirmasiComponent, {
      width: '450px',      
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result == true)
      {
        console.log('Menghapus data');
        this.api.hapus(id).subscribe(res=>{
          this.getData();
        })
      }   
    });
    }

  editProduk(data)
  {
    const dialogRef = this.dialog.open(TambahProdukComponent, {
      width: '450px',   
      data:data
    }); 
    dialogRef.afterClosed().subscribe(result => {
      this.getData();    
    });
  }
}
