<?php

namespace App\Http\Controllers;

use App\Models\Transaction;

use Illuminate\Http\Request;

class TransactionController extends Controller
{
    public function index(Request $request)
    {
        return $request->user()->transactions()->get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'description' => 'required',
            'amount' => 'required|numeric',
        ]);

        $transaction = $request->user()->transactions()->create($validated);

        return response()->json($transaction, 201);
    }
}
