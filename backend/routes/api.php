<?php

use App\Http\Controllers\Auth\AuthenticationController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\DishController;
use App\Http\Controllers\OrderController;
use App\Http\Middleware\OptionalAuthentication;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
  return $request->user();
});

Route::apiResource('dishes', DishController::class)->except(['index', 'store', 'delete'])->middleware((['auth:sanctum']));
Route::apiResource('dishes', DishController::class)->only(['index'])->middleware(OptionalAuthentication::class);

Route::middleware(['auth:sanctum'])->group(function () {
  Route::controller(CartController::class)->group(function () {
    Route::post('/edit-quantity', 'editQuantity');
    Route::post('/add-to-cart', 'addToCart');
    Route::get('/cart-items', 'getCartItems');
    Route::delete('/remove-cart-item/{id}', 'removeCartItem')->whereNumber('id');
    Route::get('/number-of-cart-items', 'getNumberOfItems');
  });

  Route::controller(OrderController::class)->group(function () {
    Route::middleware(['auth:sanctum'])->get('/checkout', 'checkout');
    Route::middleware(['auth:sanctum'])->get('/orders', 'index');
    Route::middleware(['auth:sanctum'])->post('/orders', 'store');
  });
});

require __DIR__ . '/auth.php';
