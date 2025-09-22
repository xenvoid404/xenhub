<?php

namespace App\Enums\User;

enum Role: string
{
  case SUBSCRIBER = "subscriber";
  case CONTRIBUTOR = "contributor";
  case AUTHOR = "author";
  case EDITOR = "editor";
  case ADMINISTRATOR = "administrator";
}
