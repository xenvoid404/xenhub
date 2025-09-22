<?php

namespace App\Enums\Post;

enum Status: string
{
  case DRAFT = "draft";
  case PENDING = "pending";
  case SCHEDULED = "scheduled";
  case PUBLISHED = "published";
  case ARCHIVED = "archived";
  case TRASH = "trash";
}
