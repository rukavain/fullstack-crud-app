<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Bread;
use Illuminate\Validation\Rule;

class BreadController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $breads = Bread::orderBy('created_at', 'DESC')->paginate(6);

        return response()->json($breads);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|integer|min:0',
            'stocks' => 'required|integer|min:0',
            'image' => 'image|mimes:jpeg,png,jpg,gif|max:2048|nullable',
        ]);

        $data = $request->all();

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('images'), $imageName);
            $data['image'] = 'images/' . $imageName;
        }

        $bread = Bread::create($data);

        return response()->json(['message' => 'Bread created successfully', 'bread' => $bread], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Bread $bread)
    {
        return $bread;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Bread $bread)
    {
        request()->validate([
            'price' => 'required|numeric|min:1|max:5',
            'title' => 'required|min:3|max:255',
            'description' => 'required|min:12|max:455',
            'stocks' => 'required|numeric'
        ]);

        $bread->update($request->all());

        return response()->json(['info' => 'updated successfully.']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Bread $bread)
    {
        $bread->delete();

        return response()->json(['info' => 'deleted successfully.']);
    }
}
