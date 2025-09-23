<?php

namespace App\Http\Controllers\Api\V1\User\Post;

use App\Models\Post;
use App\Enums\Post\Status;
use App\Http\Controllers\Controller;

class AllPostsController extends Controller
{
    public function index()
    {
        $posts = Post::with(['user:id,name,avatar', 'category:id,name,slug', 'subCategory:id,name,slug'])
            ->where('status', Status::PUBLISHED)
            ->orderBy('created_at', 'desc')
            ->get();

        $transformedPosts = $posts->map(function ($post) {
            return [
                'id' => $post->id,
                'title' => $post->title,
                'slug' => $post->slug,
                'content' => $post->content,
                'excerpt' => $post->excerpt,
                'category' => $post->category,
                'subCategory' => $post->subCategory,
                'author' => $post->user->name,
                'avatar' => $post->user->avatar,
                'date' => $post->created_at->format('d M Y'),
            ];
        });

        return response()->json([
            "meta" => [
                "status" => "OK",
                "code" => 200,
                "message" => "Getting all published posts successful",
            ],
            "data" => [
                "posts" => $transformedPosts,
            ],
        ]);
    }
}
