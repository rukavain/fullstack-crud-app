<?php

use App\Http\Controllers\BreadController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



Route::get('/breads', [BreadController::class, 'index']);
Route::post('/breads', [BreadController::class, 'store']);
Route::get('/breads/{bread}', [BreadController::class, 'show']);
Route::delete('/breads/{bread}', [BreadController::class, 'destroy']);
Route::put('/breads/{bread}', [BreadController::class, 'update']);

