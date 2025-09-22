<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
  use HasFactory;

  protected $fillable = [
    "user_id",
    "type",
    "provider",
    "provider_account_id",
    "refresh_token",
    "access_token",
    "expires_at",
    "token_type",
    "scope",
    "id_token",
    "session_state",
    "refresh_token_expires_in",
  ];

  protected $hidden = ["access_token", "refresh_token", "id_token"];

  public function user()
  {
    return $this->belongsTo(User::class);
  }
}
