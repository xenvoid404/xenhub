<?php

use App\Http\Controllers\Api\V1\User\Post\AllPostsController;
use App\Http\Controllers\Api\V1\User\Post\FeaturedPostController;
use Illuminate\Support\Facades\Route;

Route::get("/v1/featured-post", [FeaturedPostController::class, "index"]);
Route::get("/v1/posts/all", [AllPostsController::class, "index"]);
