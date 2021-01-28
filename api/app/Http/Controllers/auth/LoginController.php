<?php

namespace App\Http\Controllers\auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        
        $credentials = $request->only('email', 'password');

        $user = auth()->user();
        
        if (Auth::attempt(['email' => 'joenart2@gmail.com', 'password' => 'password'])) {
            return new UserResource($user);
        }
   
    }
}
