<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->sentence(2),
            'price' => $this->faker->numberBetween($min = 100, $max = 2000),
            'description' => $this->faker->sentence(50),
            'ratingsAvg' => $this->faker->randomFloat($nbMaxDecimals = NULL, $min = 1, $max = 5) ,
            'image' => $this->faker->imageUrl($width = 200, $height = 200)
        ];
    }
}
