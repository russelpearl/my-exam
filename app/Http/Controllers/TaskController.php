<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use App\Task;

use Illuminate\Http\Request;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $task=Task::orderBy("created_at","desc")->paginate(5);
        return view('welcome')->with("task",$task);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        // return view('create');
        $task=Task::orderBy("created_at","desc")->paginate(5);
        return view('create')->with("task",$task);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
            // this is called whenever user save data
            $validatedData = $request->validate([
                'title' => 'required|max:255',
                'description' => 'required',
                'due' => 'required'
            ]);
    
            // dd($request);
            
            $task=new Task();
            $task->title=$request->input("title");
            $task->description=$request->input("description");
            $task->due=$request->input("due");
            $task->admin_id=Auth::user()->id;
            $task->save();
    
            return redirect("/details/".$task->id);
                // then add dependency at top
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $task=Task::find($id);
        return view('details')->with("task",$task);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $task=Task::find($id);
        return view('edit')->with("task",$task);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'title' => 'max:255'
        ]);

        if (!empty($request->input('title'))) {
            $task->title=$request->input("title");
        }

        if (!empty($request->input('description'))) {
            $task->description=$request->input("description");
        }

        if (!empty($request->input('due'))) {
            $task->due=$request->input("due");
        }

        $task->save();

        // return redirect("/details/".$id);
        return redirect("/details/".$task->id);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $task=Task::find($id);
        $task->delete();
        return redirect("/");
    }
}
