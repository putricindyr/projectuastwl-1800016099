<?php namespace App\Controllers;
 
use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\aplikasiprodukModel;
 
class produk extends ResourceController
{
    use ResponseTrait;
    // get all product
    public function index()
    {
        $model = new aplikasiprodukModel();
        $data = $model->findAll();
        return $this->respond($data);
    }
 
    // get single product
    public function show($id = null)
    {
        $model = new aplikasiprodukModel();
        $data = $model->getWhere(['id' => $id])->getResult();
        if($data){
            return $this->respond($data);
        }else{
            return $this->failNotFound('No Data Found with id '.$id);
        }
    }
 
    // create a product
    public function create()
    {
        $model = new aplikasiprodukModel();
        $data = [
            'nama' => $this->request->getVar('nama'),
            'merek' => $this->request->getVar('merek'),
            'kode_produk' => $this->request->getVar('kode_produk'),
            'harga' => $this->request->getVar('harga'),
            'tgl_kadaluarsa' => $this->request->getVar('tgl_kadaluarsa'),
            'deskripsi' => $this->request->getVar('deskripsi'),
        ];
        $model->insert($data);
        $response = [
            'status'   => 201,
            'error'    => null,
            'messages' => [
                'success' => 'Data Saved'
            ]
        ];
        return $this->respondCreated($response);
    }
 
    // update product
    public function update($id = 'nama', $data = null)
    {
        $model = new aplikasiprodukModel();
        $input = $this->request->getRawInput();
        $data = [
            'nama' => $input['nama'],
            'merek' => $input['merek'],
            'kode_produk' => $input['kode_produk'],
            'harga' => $input['harga'],
            'tgl_kadaluarsa' => $input['tgl_kadaluarsa'],
            'deskripsi' => $input['deskripsi'],
        ];
        $model->update($id, $data);
        $response = [
            'status'   => 200,
            'error'    => null,
            'messages' => [
                'success' => 'Data Updated'
            ]
        ];
        return $this->respond($response);
    }
 
    // delete product
    public function delete($id = 'nama')
    {
        $model = new aplikasiprodukModel();
        $data = $model->find($id);
        if($data){
            $model->delete($id);
            $response = [
                'status'   => 200,
                'error'    => null,
                'messages' => [
                    'success' => 'Data Deleted'
                ]
            ];
            return $this->respondDeleted($response);
        }else{
            return $this->failNotFound('No Data Found with id '.$id);
        }
         
    }
 
}