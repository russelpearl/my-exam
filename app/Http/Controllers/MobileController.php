<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Task;
use App\User;

class MobileController extends Controller
{
    public function index()
    {
        $task_data = Task::all();

        return response()->json($task_data);
    }
    public function user()
    {
        $user_data = User::all();

        return response()->json($user_data);
    }
}

