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

$vue = function () {
    return view('vue');
};

Route::get('/', $vue);
Route::get('/foo', $vue);
Route::get('/foo/bar', $vue);
