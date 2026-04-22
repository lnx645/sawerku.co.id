<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');
Route::inertia('/admin', 'admin/dashboard')->name('admin.dashboard');


Route::prefix("/c/manage")->group(function () {
    Route::inertia('', 'creator/manage/dashboard')->name('creator.manage.dashboard');
    Route::inertia('overlay', 'creator/manage/overlay')->name('creator.manage.kelolaOverlay');
});
