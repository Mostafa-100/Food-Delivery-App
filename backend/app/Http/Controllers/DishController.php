<?php

namespace App\Http\Controllers;

use App\Http\Resources\DishResource;
use App\Models\Dish;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DishController extends Controller
{

  public function index(Request $request)
  {
    return DishResource::collection(Dish::all(), $request->user());
  }
}
