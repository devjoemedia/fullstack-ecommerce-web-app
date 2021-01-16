<?php

namespace App\Http\Controllers\auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use App\Models\User;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        
        $isLoggedin = auth()->attempt($request->only('email','password'));

        // return new UserResource($isLoggedin);
        if ($isLoggedin) {
            return ['done' => 'joseph'];
        }
    }
}
