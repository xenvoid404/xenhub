<?php

use App\Enums\Post\Status;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
  public function up(): void
  {
    Schema::create("posts", function (Blueprint $table) {
      $table->id();
      $table
        ->foreignId("user_id")
        ->constrained("users")
        ->onDelete("cascade");
      $table
        ->foreignId("category_id")
        ->constrained("categories")
        ->onDelete("cascade");
      $table
        ->foreignId("sub_category_id")
        ->constrained("sub_categories")
        ->onDelete("cascade");
      $table->string("title");
      $table->string("slug");
      $table->text("excerpt")->nullable();
      $table->longText("content");
      $table->boolean("is_featured");
      $table->string("status")->default(Status::DRAFT->value);
      $table->timestamps();
    });
  }

  public function down(): void
  {
    Schema::dropIfExists("posts");
  }
};
