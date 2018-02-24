<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/dashbord', function () {
    return view('backend/index');
})->middleware('auth');

Route::get('/login', function () {
    return view('backend/login');
});
Route::post('/login','LoginController@loginPost');
Route::get('/logout','LoginController@logoutPost');

Route::get('/agence', 'AgenceController@getagence');

Route::post('/agence','AgenceController@addagence');