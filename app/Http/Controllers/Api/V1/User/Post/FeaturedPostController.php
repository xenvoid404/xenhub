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
    $posts = Post::with(["user:id,name,avatar,role", "category:id,name,slug", "subCategory:id,name,slug"])
      ->where("is_featured", true)
      ->where("status", Status::PUBLISHED)
      ->orderBy("created_at", "desc")
      ->limit(6)
      ->get();

    $transformedPosts = $posts->map(function ($post) {
      return [
        'id' => $post->id,
        'title' => $post->title,
        'slug' => $post->slug,
        'description' => $post->excerpt,
        'category' => $post->category,
        'subCategory' => $post->subCategory,
        'author' => $post->user->name,
        'date' => $post->created_at->format('d M Y'),
        'user' => $post->user,
      ];
    });

    return response()->json([
      "meta" => [
        "status" => "OK",
        "code" => 200,
        "message" => "Getting featured post successful",
      ],
      "data" => [
        "posts" => $transformedPosts,
      ],
    ]);
  }
}
