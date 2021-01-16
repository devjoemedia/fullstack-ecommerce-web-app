<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use \App\Models\Product;
use \App\Models\User;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        Product::factory(10)->create();
        User::factory(10)->create();
    }
}
