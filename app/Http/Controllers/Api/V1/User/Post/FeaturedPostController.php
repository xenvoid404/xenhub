<?php

namespace App\Http\Controllers\Api\V1\User\Post;

use App\Models\Post;
use App\Enums\Post\Status;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class FeaturedPostController extends Controller
{
  public function index()
  {
    $posts = Post::with(["user:id,name,avatar,role"])
      ->where("is_featured", true)
      ->where("status", Status::PUBLISHED)
      ->orderBy("created_at", "desc")
      ->limit(6)
      ->get();

    return response()->json([
      "meta" => [
        "status" => "OK",
        "code" => 200,
        "message" => "Getting featured post successful",
      ],
      "data" => [
        "posts" => $posts,
      ],
    ]);
  }
}
