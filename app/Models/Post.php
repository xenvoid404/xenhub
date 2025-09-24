<?php

namespace App\Models;

use App\Enums\Post\Status;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
  use HasFactory;

  protected $fillable = ["user_id", "category_id", "title", "slug", "image", "excerpt", "content", "status", "is_featured", "view_count"];

  protected $casts = [
    "status" => Status::class,
  ];

  public function user()
  {
    return $this->belongsTo(User::class);
  }

  public function category()
  {
    return $this->belongsTo(Category::class);
  }

  public function comments()
  {
    return $this->hasMany(Comment::class);
  }
}
