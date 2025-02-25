<?php

namespace App\Actions;

use Stripe\Checkout\Session;
use Stripe\Stripe;

class CheckoutAction
{
  private $order;

  public function __construct($order)
  {
    $this->order = $order;
  }

  public function handle()
  {
    Stripe::setApiKey(config('stripe.sk'));

    $session = $this->getCheckoutSession();

    return $session;
  }

  private function getCheckoutSession()
  {
    return Session::create([
      'mode' => 'payment',
      'line_items' => $this->getCartItemsForCheckout(),
      'success_url' => $this->getSuccessUrl(),
      'cancel_url' => $this->getCancelUrl(),
    ]);
  }

  private function getSuccessUrl()
  {
    return env('FRONTEND_URL') . '/orders?checkout_session_id={CHECKOUT_SESSION_ID}';
  }

  private function getCancelUrl()
  {
    return env('FRONTEND_URL') . '/';
  }

  private function getCartItemsForCheckout()
  {
    return $this->order->dishes->map(function ($item) {
      return $this->getCartItemForCheckout($item);
    })->toArray();
  }

  private function getCartItemForCheckout($item)
  {
    return [
      'price_data' => [
        'currency' => 'usd',
        'product_data' => [
          'name' => $item->name,
        ],
        'unit_amount' => $item->price * 100,
      ],
      'quantity' => $item->pivot->quantity,
    ];
  }
}
