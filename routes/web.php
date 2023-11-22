<?php
Route::get('/', function () {
    return view('app');
})->where('any', '.*');
