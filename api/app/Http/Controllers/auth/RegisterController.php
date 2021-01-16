<?php

namespace App\Http\Controllers\auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Resources\UserResource;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        $user = User::create($request->all());

        $isLoggedin = auth()->attempt(['email' => $user->email, 'password' => $user->password]);
        return new UserResource($user);
    }
}
