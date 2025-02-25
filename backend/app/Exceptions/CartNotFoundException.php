<?php

namespace App\Exceptions;

use Exception;

class CartNotFoundException extends Exception
{
  public function __construct()
  {
    $this->message = "Cart not found";
    $this->code = 404;
  }
}
