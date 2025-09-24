<?php

use Illuminate\Support\Facades\Route;

Route::get("/test", function () {
  return response()->json(
    [
      "status" => "success",
      "message" => "OK",
    ],
    200,
  );
});

require __DIR__ . "/v1.php";
