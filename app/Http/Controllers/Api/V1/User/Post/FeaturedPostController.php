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
    $posts = Post::with(["user:name,avatar,role"])
      ->with(["category:id,name"])
      ->where("is_featured", true)
      ->where("status", Status::PUBLISHED)
      ->orderBy("created_at", "desc")
      ->limit(6)
      ->get();

    if (!$posts) {
      return response()->json(
        [
          "status" => "success",
          "message" => "Postingan unggulan tidak tersedia",
        ],
        204,
      );
    }

    $transformedPosts = $posts->map(function ($post) {
      return [
        "id" => $post->id,
        "category" => $post->category->name,
        "title" => $post->title,
        "slug" => $post->slug,
        "image" => $post->image,
        "excerpt" => $post->excerpt,
        "content" => $post->content,
        "status" => $post->status->value,
        "is_featured" => $post->is_featured,
        "view_count" => $post->view_count,
        "created_at" => $post->created_at->format("d M Y, H:i"),
        "updated_at" => $post->updated_at->format("d M Y, H:i"),
        "user" => [
          "name" => $post->user->name,
          "avatar" => $post->user->avatar,
          "role" => $post->user->role->value,
        ],
      ];
    });

    return response()->json(
      [
        "status" => "OK",
        "message" => "Getting featured post successful",
        "data" => [
          "posts" => $transformedPosts,
        ],
      ],
      200,
    );
  }
}
