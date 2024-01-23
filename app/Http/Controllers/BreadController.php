<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Bread;

class BreadController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Bread::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        request()->validate([
            'title' => 'required|min:3|max:255',
            'description' => 'required|min:3|max:255',
            'price' => 'required|numeric|max:5',
            'stocks' => 'required|numeric'
        ]);

        Bread::create($request->all());

        return response()->json(['info' => 'stored successfully']);
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
