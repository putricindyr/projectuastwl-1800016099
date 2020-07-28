<?php namespace App\Models;

use CodeIgniter\Model;

class aplikasiprodukModel extends Model
{
    protected $table = 'admin';
    protected $primaryKey = 'id';
    protected $allowedFields = ['nama','merek','kode_produk','harga','tgl_kadaluarsa','deskripsi'];

    public function ubahData($data, $id) {
        return $this->db->table($this->table)->update($data);
    }
    public function hapusData($id) {
        return $this->db->table($this->table)->delete($data);
    }
}