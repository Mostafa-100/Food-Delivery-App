<?php

namespace App\Services;

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
