<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Carbon\Carbon;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function index()
    {
        $messages = Message::latest()->get();
        return $messages->map(function ($message) {
            return collect($message)->merge([
                'created_at' => Carbon::parse($message['created_at'])->format('M d, Y, h:i:s'),
            ]);
        });
    }

    public function store(Request $request)
    {
        $validatedAttributes =  $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'message' => 'required',
        ]);

        return Message::create($validatedAttributes);
    }
}
