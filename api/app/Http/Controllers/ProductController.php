<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Models\Product;
use App\Http\Resources\ProductResource;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::paginate(9);

        return ProductResource::collection($products);

    }

 
    public function store(Request $request)
    {
        $product = Product::create($request->all());

        return new ProductResource($product);
    }

    
    public function show($id)
    {
        $product = Product::findOrFail($id);
        
        return new ProductResource($product);;
    }

    public function update(Request $request, $id)
    {
        $product = Product::findOrFail($id);
        $product->update($request->all());

        return new ProductResource($product);
    }

   
    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        $product->delete();

        return new ProductResource($product);
    }
}
