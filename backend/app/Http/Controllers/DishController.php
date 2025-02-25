<?php

namespace App\Http\Controllers;

use App\Http\Resources\DishResource;
use App\Models\Dish;
use Illuminate\Http\Request;

class DishController extends Controller
{

  public function index(Request $request)
  {
    $dishes = Dish::all();

    if ($dishes->isEmpty()) {
      return response()->json(['error' => 'dishes not found'], 404);
    }

    return DishResource::collection(Dish::all());
  }
}
