@extends('layouts.app')

@section('content')

<div class="container justify-content-center d-flex flex-wrap py-4">
    <div class="card p-0 w-100 shadow-sm m-2">
        <div class="row">
            <div class="col-sm">
                <div class="card-body h-100">
                    <h4 class="card-title mt-5"><b>Task</b></h4><hr>
                    <div class="mb-4">
                        <b>{{$task->title}}</b>
                        <b>{{$task->description}}</b>
                        <b>{{$task->due}}</b>
                    </div>
                    {{-- @if(Auth::user()->id == $task->seller_id)
                    <a href="/edit/{{$task->id}}" class="btn btn-primary">Edit</a>
                    <a href="/delete/{{$task->id}}" class="btn btn-danger">Delete</a>
                    @endif --}}
                </div>
            </div>
        </div>
    </div>
    
    
    <div class="card m-2 w-100 bg-white shadow-sm">
        <div class="card-body">
            <h5 class="card-title"><b>{{$task->title}}</b></h5>
            {{$task->description}}
        </div>
    </div>
    
    @endsection