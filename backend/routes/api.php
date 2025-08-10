<?php

use App\Http\Controllers\admin\DashboardController;
use App\Http\Controllers\admin\ServiceController;
use App\Http\Controllers\admin\TempImageController;
use App\Http\Controllers\AuthenticationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::post('/authenticate', [AuthenticationController::class, 'Authenticate']);


// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::group(['middleware' => ['auth:sanctum']], function () {
    // proteced routes
    Route::get('/dashboard', [DashboardController::class, 'index']);
    Route::get('/logout', [AuthenticationController::class, 'logout']);

    // services
    Route::post('/services', [ServiceController::class, 'store']);
    Route::get('/services', [ServiceController::class, 'index']);
    Route::put('/services/{id}', [ServiceController::class, 'update']);
    Route::get('/services/{id}', [ServiceController::class, 'show']);
    Route::delete('/services/{id}', [ServiceController::class, 'destroy']);

    // temp images
    Route::post('/temp-image', [TempImageController::class, 'store']);
});
