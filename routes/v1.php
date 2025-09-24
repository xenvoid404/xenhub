<?php

use App\Http\Controllers\Api\V1\User\Categories\AllCategoryController;
use App\Http\Controllers\Api\V1\User\Post\AllPostsController;
use App\Http\Controllers\Api\V1\User\Post\FeaturedPostController;
use Illuminate\Support\Facades\Route;

Route::prefix("v1")->group(function () {
  Route::get("/all-category", [AllCategoryController::class, "index"]);
  Route::get("/featured-post", [FeaturedPostController::class, "index"]);
  Route::get("/posts/all", [AllPostsController::class, "index"]);
});
