<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Illuminate\Http\Request;

class ImageController extends Controller
{
    public function index()
    {
        $cairoImages = Image::where('place', 'cairo')->get();
        $luxorImages = Image::where('place', 'luxor')->get();
        $abuSimbelTemplesImages = Image::where('place', 'abu simbel temples')->get();
        $bahariyaOasisImages = Image::where('place', 'bahariya oasis')->get();
        $fayyomImages = Image::where('place', 'fayyom')->get();
        $dinnerCruiseImages = Image::where('place', 'dinner cruise')->get();
        $hotelImages = Image::where('place', 'hotel')->get();
        $otherPlacesImages = Image::where('place', 'other places')->get();

        return [$cairoImages, $luxorImages, $abuSimbelTemplesImages, $bahariyaOasisImages, $fayyomImages, $dinnerCruiseImages, $hotelImages, $otherPlacesImages];
    }
}
