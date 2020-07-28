import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detail-produk',
  templateUrl: './detail-produk.component.html',
  styleUrls: ['./detail-produk.component.css']
})
export class DetailProdukComponent implements OnInit {

  constructor(
    public dialogRef:MatDialogRef<DetailProdukComponent>,
    @Inject(MAT_DIALOG_DATA) public data :any
  ) {}
  ngOnInit() {
  }
}
