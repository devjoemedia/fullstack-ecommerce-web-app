<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Resources\UserResource;

class UserController extends Controller
{
    public function index()
    {
        $users = User::paginate(10);

        return UserResource::collection($users);
    }

    public function show(User $user)
    {
        return new UserResource($user);
    }

    public function update(Request $request, User $user)
    {
       $user->update($request->all());

        return new UserResource($user);
    }

    public function destroy(User $user)
    {
        $user->delete();

        return new UserResource($user);
    }
}
