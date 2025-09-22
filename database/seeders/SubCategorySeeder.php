<?php

namespace Database\Seeders;

use App\Models\SubCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubCategorySeeder extends Seeder
{
  public function run(): void
  {
    SubCategory::create([
      "category_id" => 1,
      "name" => "Artificial Intelligence",
      "slug" => "artificial-intelligence",
    ]);
    SubCategory::create([
      "category_id" => 1,
      "name" => "Programming",
      "slug" => "programming",
    ]);
  }
}
