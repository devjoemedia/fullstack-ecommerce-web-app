<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe\Stripe;
use App\Models\Product;
class PaymentController extends Controller
{
    public function payWithCard(Request $request)
    {
        Stripe::setApiKey('sk_test_0PVEGhvryaUeiiRZi7wXkoT800weCuNDAi');

        $YOUR_DOMAIN = 'http://localhost:3000/checkout';
        $val = json_decode(json_encode($request->items[0]));
        $lineItems = array();
        $items = json_decode(json_encode($request->items));

          foreach ($items as $prod) {
            $item = Product::find($prod->id);
             $itp =  [
              'price_data' => [
                'currency' => 'usd',
                'unit_amount' => $item->price * 100,
                // 'unit_amount' => $request->amount,
                'product_data' => [
                  'name' => $item->name,
                  'images' => ["https://i.imgur.com/EHyR2nP.png"],
                ],
              ],
              'quantity' => $prod->pQty,
              
            ];
            json_decode(json_encode($itp));
              array_push($lineItems, $itp);
            }
          $checkout_session = \Stripe\Checkout\Session::create([
          'payment_method_types' => ['card'],
          'line_items' => $lineItems,
          'mode' => 'payment',
          'success_url' => $YOUR_DOMAIN . '/success',
          'cancel_url' => $YOUR_DOMAIN . '/canceled',
        ]);
        
        return $checkout_session;
    }

    public $customer;

    public function getOrders()
    {
      $stripe = new \Stripe\StripeClient(
        'sk_test_0PVEGhvryaUeiiRZi7wXkoT800weCuNDAi'
      );
      $allCustomers = $stripe->customers->all(['limit' => 3]);

      if (auth()->user()) {
        # code...
        foreach ($allCustomers as $cust) {
          if($cust['email'] === auth()->user()->email) {
            $customer = $cust;
            return $customer;
          }else {
            return ['msg' => 'customer not found'];
          }
        }
      }else {
        return ['msg' => 'Please login'];

      }
    }
}
