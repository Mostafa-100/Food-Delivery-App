<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DishResource extends JsonResource
{
  public function toArray(Request $request): array
  {
    return [
      'id' => $this->id,
      'name' => $this->name,
      'snippet' => $this->snippet,
      'price' => $this->price,
      'numberOfStars' => $this->numberOfStars,
      'imagePath' => $this->image_path,
      'category_id' => $this->category_id,
      'inCart' => $this->isCartNotEmpty() && $this->IsCartContainsThisDish(),
      'quantity' => $this->when($this->getDishQuantity(), $this->getDishQuantity()),
    ];
  }

  private function isCartNotEmpty()
  {
    return !(auth()?->user()?->cart?->get()?->isEmpty());
  }

  private function IsCartContainsThisDish()
  {
    return auth()?->user()?->cart?->dishes?->contains('pivot.dish_id', $this->id);
  }

  private function getDishQuantity()
  {
    return auth()?->user()?->cart?->dishes->firstWhere('pivot.dish_id', $this->id)?->pivot?->quantity;
  }
}
