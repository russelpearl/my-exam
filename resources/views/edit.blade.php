@extends('layouts.app')

@section('content')
<div class="container justify-content-center d-flex flex-wrap py-4">
    <div class="card w-100 p-5">
    <form action="/update/{{$task->id}}" method="post" enctype="multipart/form-data">
        {{ csrf_field() }}
            <div class="form-group row">
                <label for="title" class="col-sm-3 col-form-label">Task Title</label>
                <div class="col-sm-9">
                <input type="text" name="title" class="form-control" value="{{$task->title}}">
                </div>
            </div>
            <div class="form-group row">
                <label for="desc" class="col-sm-3 col-form-label">Task details</label>
                <div class="col-sm-9">
                    <input type="text" name="description" class="form-control" value="{{$task->description}}">
                </div>
            </div>
            <div class="form-group row">
                <label for="price" class="col-sm-3 col-form-label">Task price</label>
                <div class="col-sm-9">
                    <input type="date" name="due" class="form-control" value="{{$task->due}}">
                </div>
            </div>
            <div class="form-group row">
                <div class="offset-sm-3 col-sm-9">
                    <button type="submit" class="btn btn-primary">Save Task</button>
                </div>
            </div>
        </form>
    </div>
    
@endsection