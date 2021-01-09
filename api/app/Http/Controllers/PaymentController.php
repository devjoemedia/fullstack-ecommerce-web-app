<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe\Stripe;
class PaymentController extends Controller
{
    public function payWithCard(Request $request)
    {
        Stripe::setApiKey('sk_test_0PVEGhvryaUeiiRZi7wXkoT800weCuNDAi');
        // return $request->amount;

        $YOUR_DOMAIN = 'http://localhost:3000/checkout';

          $checkout_session = \Stripe\Checkout\Session::create([
          'payment_method_types' => ['card'],
          'line_items' => [[
            'price_data' => [
              'currency' => 'usd',
              'unit_amount' => $request->amount,
              'product_data' => [
                'name' => 'Stubborn Attachments',
                'images' => ["https://i.imgur.com/EHyR2nP.png"],
              ],
            ],
            'quantity' => 1,
          ]],
          'mode' => 'payment',
          'success_url' => $YOUR_DOMAIN . '/success',
          'cancel_url' => $YOUR_DOMAIN . '/canceled',
        ]);
        return $checkout_session;
    }
}
