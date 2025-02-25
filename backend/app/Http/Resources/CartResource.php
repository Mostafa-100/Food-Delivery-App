<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CartResource extends JsonResource
{
  /**
   * Transform the resource into an array.
   *
   * @return array<string, mixed>
   */
  public function toArray(Request $request): array
  {
    return [
      'id' => $this->id,
      'name' => $this->name,
      'snippet' => $this->snippet,
      'price' => $this->price,
      'numberOfStars' => $this->numberOfStars,
      'imagePath' => $this->image_path,
      'quantity' => $this->pivot->quantity,
      'total' => $this->pivot->total,
    ];
  }
}
