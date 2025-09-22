<?php

namespace App\Models;

use App\Enums\User\Role;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
  use HasFactory, Notifiable;

  protected $fillable = ["name", "username", "avatar", "email", "password", "role"];

  protected $hidden = ["password", "remember_token"];

  protected $casts = [
    "email_verified_at" => "datetime",
    "password" => "hashed",
    "role" => Role::class,
  ];

  public function posts()
  {
    return $this->hasMany(Post::class);
  }

  public function comments()
  {
    return $this->hasMany(Comment::class);
  }
}
