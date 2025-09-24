<?php

namespace Database\Seeders;

use App\Models\User;
use App\Enums\User\Role;
use App\Enums\User\Status;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
  public function run(): void
  {
    User::create([
      "name" => "Xenvoid",
      "username" => "xenvoid",
      "avatar" => null,
      "email" => "xenvoid@xenhub.com",
      "email_verified_at" => now(),
      "password" => bcrypt("123@Xenvoid"),
      "role" => Role::ADMINISTRATOR,
      "status" => Status::ACTIVE,
    ]);
  }
}
