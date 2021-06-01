<?php

use App\Http\Controllers\Api\ApisController;
use App\Http\Controllers\HomeController;
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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('users', [ApisController::class, 'users'])->name('users');
Route::post('video/upload', [ApisController::class, 'upload_video']);
Route::get('get_videos', [ApisController::class, 'get_videos']);
Route::post('add_title/{id}', [ApisController::class, 'add_title']);
