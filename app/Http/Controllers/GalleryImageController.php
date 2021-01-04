<?php

namespace App\Http\Controllers;

use App\Models\GalleryImage;
use Illuminate\Http\Request;

class GalleryImageController extends Controller
{
    public function index()
    {
        $cairoImages = GalleryImage::where('place', 'cairo')->get();
        $luxorImages = GalleryImage::where('place', 'luxor')->get();
        $abuSimbelTemplesImages = GalleryImage::where('place', 'abu simbel temples')->get();
        $bahariyaOasisImages = GalleryImage::where('place', 'bahariya oasis')->get();
        $fayyomImages = GalleryImage::where('place', 'fayyom')->get();
        $dinnerCruiseImages = GalleryImage::where('place', 'dinner cruise')->get();
        $hotelImages = GalleryImage::where('place', 'hotel')->get();
        $otherPlacesImages = GalleryImage::where('place', 'other places')->get();

        return [$cairoImages, $luxorImages, $abuSimbelTemplesImages, $bahariyaOasisImages, $fayyomImages, $dinnerCruiseImages, $hotelImages, $otherPlacesImages];
    }
}
