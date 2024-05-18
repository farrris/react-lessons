<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        return Post::all();
    }

    public function addVote(Request $request, Post $post)
    {   
        $post->update(["votes" => $post->votes+1]);

        return $post;
    }
}
