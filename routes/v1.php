<?php

use App\Http\Controllers\Api\V1\User\Post\FeaturedPostController;
use Illuminate\Support\Facades\Route;

Route::get("/v1/featured-post", [FeaturedPostController::class, "index"]);
