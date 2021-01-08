<?php

use App\Http\Controllers\GalleryImageController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductImageController;
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

// login
Route::post('/login', [LoginController::class, 'login']);
// get the current user
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');
// logout
Route::post('/logout', [LoginController::class, 'logout'])->middleware('auth:api');

// get images for the gallery
Route::get('/gallery_images', [GalleryImageController::class, 'index']);

// get all products for the store
Route::get('/products', [ProductController::class, 'index']);
// get one product for the store
Route::get('/products/{product:id}', [ProductController::class, 'show']);
// add a new product as admin
Route::post('/products', [ProductController::class, 'store'])->middleware('auth:api');
// update one of the products as an admin
Route::patch('/products/{product:id}', [ProductController::class, 'update'])->middleware('auth:api');
// delete one of the products as an admin
Route::delete('/products/{product:id}', [ProductController::class, 'destroy'])->middleware('auth:api');

// add an image to an existing product
Route::post('/product_images', [ProductImageController::class, 'store'])->middleware('auth:api');
// add an image to an existing product
Route::patch('/product_images', [ProductImageController::class, 'update'])->middleware('auth:api');

// get all messages as an admin
Route::get('/messages', [MessageController::class, 'index'])->middleware('auth:api');
// store message as a user
Route::post('/messages', [MessageController::class, 'store']);
