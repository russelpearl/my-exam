<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/','TaskController@index');


Route::get('/details/{id}','TaskController@show')->middleware('verified');

Route::get('/create','TaskController@create')->middleware('verified');

Route::post('/store','TaskController@store')->middleware('verified');

Route::post('/update/{id}','TaskController@update')->middleware('verified');

Route::get('/edit/{id}','TaskController@edit')->middleware('verified');

Route::get('/delete/{id}','TaskController@destroy')->middleware('verified');

// Auth::routes();
Auth::routes(['verify' => true]);

Route::get('/home', 'HomeController@index')->name('home')->middleware('verified');