<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'price', 'details'];

    public function productImages()
    {
        return $this->hasMany(ProductImage::class);
    }

    public function primaryProductImages()
    {
        return $this->hasMany(ProductImage::class)->where('primary', 1);
    }
}
