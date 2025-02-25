<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
{
  public function toArray(Request $request): array
  {
    return [
      'id' => $this->id,
      'description' => $this->makeOrderDescription(),
      'montant' => $this->montant,
      'numberOfItems' => $this->numberOfItems,
      'status' => $this->status
    ];
  }

  private function makeOrderDescription()
  {
    return $this->dishes->map(fn($dish) => "{$dish->name} x {$dish->pivot->quantity}")->implode(', ');
  }
}
