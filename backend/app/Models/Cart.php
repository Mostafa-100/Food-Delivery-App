<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{

  protected $fillable = [
    'user_id',
    'cart_id',
  ];

  public function dishes()
  {
    return $this->belongsToMany(Dish::class)->withPivot(['quantity', 'total']);
  }

  public function user()
  {
    return $this->hasOne(User::class);
  }

  public function transfertToOrder($order)
  {
    $this->dishes->each(function ($dish) use ($order) {
      $order->dishes()->attach($dish->id, [
        'quantity' => $dish->pivot->quantity,
        'total' => $dish->pivot->total
      ]);
    });

    $this->delete();
  }

  public function getTotalMontantAttribute()
  {
    $SHIPPING_COST = 39;
    return $this->dishes
      ->sum(fn($dish) => $dish->pivot->total) + $SHIPPING_COST;
  }

  public function getNumberOfItemsAttribute()
  {
    return $this->dishes->count();
  }
}
