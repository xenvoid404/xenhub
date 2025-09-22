<?php

namespace Database\Factories;

use App\Enums\Post\Status;
use App\Models\Category;
use App\Models\SubCategory;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class PostFactory extends Factory
{
  public function definition(): array
  {
    $title = $this->faker->sentence();

    return [
      "user_id" => 1,
      "category_id" => 1,
      "sub_category_id" => $this->faker->randomElement([1, 2]),
      "title" => $title,
      "slug" => Str::slug($title),
      "content" => $this->faker->paragraph(),
      "is_featured" => $this->faker->boolean(),
      "status" => $this->faker->randomElement(Status::cases()),
    ];
  }
}
