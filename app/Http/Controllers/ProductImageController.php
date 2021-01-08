<?php

namespace App\Http\Controllers;

use App\Models\ProductImage;
use Illuminate\Http\Request;

class ProductImageController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'image' => 'file|required',
        ]);

        ProductImage::create([
            'path' => $request->image->store('productsImages'),
            'product_id' => $request->productId,
            'primary' => false
        ]);
    }

    public function update(Request $request)
    {
        $request->validate([
            'imageId' => 'required',
        ]);

        ProductImage::where('product_id', $request->productId)->where('primary', true)->update(['primary' => false]);
        ProductImage::find($request->imageId)->update(['primary' => true]);
    }
}
