<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class OptionalAuthentication
{
  public function handle(Request $request, Closure $next): Response
  {
    if ($request->bearerToken()) {
      $user = auth('sanctum')->user();
      if (!$user) return response()->json(['error' => 'Invalid user'], 403);
      auth()->setUser($user);
    }
    return $next($request);
  }
}
