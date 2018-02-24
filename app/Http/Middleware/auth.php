<?php

namespace App\Http\Middleware;

use Closure;
use Parse\ParseUser;
use Illuminate\Support\Facades\Redirect;
class auth
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {

        $currentUser= ParseUser::getCurrentUser();

        if (!$currentUser){
            return Redirect::to('login');

        }
        return $next($request);
    }
}
