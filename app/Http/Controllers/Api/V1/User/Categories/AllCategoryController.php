<?php

namespace App\Http\Controllers\Api\V1\User\Categories;

use App\Models\Category;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AllCategoryController extends Controller
{
  public function index()
  {
    $categories = Category::orderBy("name", "desc")->get();
    if (!$categories) {
      return response()->json(
        [
          "status" => "success",
          "message" => "Tidak ada kategori yang tersedia",
        ],
        204,
      );
    }

    $transformCategories = $categories->map(function ($category) {
      return [
        "id" => $category->id,
        "name" => $category->name,
        "slug" => $category->slug,
        "created_at" => $category->created_at,
        "updated_at" => $category->updated_at,
      ];
    });

    return response()->json(
      [
        "status" => "success",
        "message" => "Berhasil mengambil kategori",
        "data" => [
          "categories" => $transformCategories,
        ],
      ],
      200,
    );
  }
}
