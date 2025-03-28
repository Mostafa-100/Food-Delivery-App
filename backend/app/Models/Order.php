<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{

  protected $fillable = [
    'user_id',
    'firstName',
    'lastName',
    'email',
    'street',
    'city',
    'state',
    'zipCode',
    'country',
    'phone',
    'montant',
    'numberOfItems',
    'checkout_session_id',
    'status',
  ];

  public function user()
  {
    return $this->belongsTo(User::class);
  }

  public function dishes()
  {
    return $this->belongsToMany(Dish::class)->withPivot(['quantity']);
  }

  public static function getOrderByCheckoutId($checkoutId)
  {
    return static::where('checkout_session_id', $checkoutId)->firstWhere('status', 'unfinished');
  }

  public function accept()
  {
    $this->status = "food processing";
    $this->save();
  }
}
