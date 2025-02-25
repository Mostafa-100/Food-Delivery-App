<?php

namespace App\Services;

use App\Exceptions\CartNotFoundException;
use App\Models\Order;

class OrderService
{

  private $order;
  private $cart;

  public function __construct($cart)
  {
    $this->cart = $cart;
  }

  public function makeOrder($data)
  {
    if (!$this->cart) {
      throw new CartNotFoundException;
    }

    $this->order = Order::create($data);

    $this->cart->transfertToOrder($this->order);

    return $this;
  }

  public function getOrder()
  {
    if (!$this->order) null;
    return $this->order;
  }
}
