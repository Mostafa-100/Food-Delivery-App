<?php

namespace App\Http\Controllers;

use App\Actions\CheckoutAction;
use App\Http\Requests\StoreOrderRequest;
use App\Http\Resources\OrderResource;
use App\Models\Order;
use App\Services\OrderService;
use Illuminate\Http\Request;

class OrderController extends Controller
{

  private $cart;

  public function index(Request $request)
  {
    $checkoutSessionId = $request->query('checkout_session_id');
    $order = null;

    if ($checkoutSessionId) {
      $order = Order::getOrderByCheckoutId($checkoutSessionId);
    }

    if ($order) {
      $order->accept();
    }

    $orders = auth()->user()->orders->where('status', '!=', 'unfinished');

    return OrderResource::collection($orders);
  }

  public function store(StoreOrderRequest $request)
  {
    $this->cart = auth()->user()?->cart;

    if (!$this->cart) {
      return response()->json(['error' => 'Cart not found'], 404);
    }

    $orderData = [...$request->validated(), ...$this->getOrderExtraData()];

    $order = (new OrderService($this->cart))->makeOrder($orderData)->getOrder();

    $session = (new CheckoutAction($order))->handle();

    $order->update(['checkout_session_id' => $session->id]);

    return response()->json([
      'status' => 'Order created successfully',
      'url' => $session->url
    ], 200);
  }

  private function getOrderExtraData()
  {
    return [
      'user_id' => auth()->user()->id,
      'montant' => $this->cart->total_montant,
      'numberOfItems' => $this->cart->number_of_items,
      'status' => 'unfinished',
    ];
  }
}
