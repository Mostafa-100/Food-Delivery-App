<?php

use App\Http\Controllers\Auth\AuthenticationController;
use App\Http\Controllers\Auth\RegisteredUserController;
use Illuminate\Support\Facades\Route;
// use App\Http\Controllers\Auth\EmailVerificationNotificationController;
// use App\Http\Controllers\Auth\NewPasswordController;
// use App\Http\Controllers\Auth\PasswordResetLinkController;
// use App\Http\Controllers\Auth\VerifyEmailController;
// use App\Http\Middleware\CorsMiddleware;

Route::post('/register', [RegisteredUserController::class, 'store'])
  ->middleware('guest')
  ->name('register');

Route::post('/login', [AuthenticationController::class, 'store'])
  ->middleware('guest')
  ->name('login');

Route::post('/logout', [AuthenticationController::class, 'destroy'])
  ->middleware('auth:sanctum')
  ->name('logout');

// Route::post('/forgot-password', [PasswordResetLinkController::class, 'store'])
//   ->middleware('guest')
//   ->name('password.email');

// Route::post('/reset-password', [NewPasswordController::class, 'store'])
//   ->middleware('guest')
//   ->name('password.store');

// Route::get('/verify-email/{id}/{hash}', VerifyEmailController::class)
//   ->middleware(['auth', 'signed', 'throttle:6,1'])
//   ->name('verification.verify');

// Route::post('/email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
//   ->middleware(['auth', 'throttle:6,1'])
//   ->name('verification.send');
