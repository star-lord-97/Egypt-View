<?php

use App\Http\Controllers\GalleryImageController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// get images for the gallery
Route::get('/gallery_images', [GalleryImageController::class, 'index']);

// get all products for the store
Route::get('/products', [ProductController::class, 'index']);
// get one products for the store
Route::get('/products/{product:id}', [ProductController::class, 'show']);

// store messages as a user
Route::post('/message', [MessageController::class, 'store']);
