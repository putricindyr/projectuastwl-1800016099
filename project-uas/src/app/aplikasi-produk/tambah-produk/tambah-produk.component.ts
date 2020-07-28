import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tambah-produk',
  templateUrl: './tambah-produk.component.html',
  styleUrls: ['./tambah-produk.component.css']
})
export class TambahProdukComponent implements OnInit {

  data:any={};
  constructor(
    public api:ApiService, 
    public dialogRef:MatDialogRef<TambahProdukComponent>,
    @Inject(MAT_DIALOG_DATA) public itemData:any
    )
    {
      if(itemData != null)
      {
        this.data=itemData;
      }
    }  
  ngOnInit() {}  
  simpan(data)
  {
    if(data.id == undefined)
    {
      this.api.simpan(data).subscribe(res=>{
        this.dialogRef.close(true);
      });
    }else{
      this.api.ubah(data).subscribe(res=>{
        this.dialogRef.close(true);
      })
    }
  }
}