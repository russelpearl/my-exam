@extends('layouts.app')

@section('content')
<div class="container justify-content-center d-flex flex-wrap py-4">
    <div class="card w-100 p-5">
        <form action="/store" method="post" enctype="multipart/form-data">
        {{ csrf_field() }}
            <div class="form-group row">
                <label for="title" class="col-sm-3 col-form-label">Title</label>
                <div class="col-sm-9">
                    <input type="text" name="title" class="form-control" placeholder="Title">
                </div>
            </div>
            <div class="form-group row">
                <label for="desc" class="col-sm-3 col-form-label">Description</label>
                <div class="col-sm-9">
                    <input type="text" name="description" class="form-control" placeholder="Description">
                </div>
            </div>
            <div class="form-group row">
                <label for="price" class="col-sm-3 col-form-label">Due</label>
                <div class="col-sm-9">
                    <input type="date" name="due" class="form-control" placeholder="Datetime">
                </div>
            </div>
            {{-- <div class="form-group row">
                <label for="price" class="col-sm-3 col-form-label">Assign to:</label>
                <div class="col-sm-9">
                    <input type="text" name="member_id" class="form-control" placeholder="Member Name">
                </div>
            </div> --}}
            <div class="form-group row">
                <div class="offset-sm-3 col-sm-9">
                    <button type="submit" class="btn btn-primary">Save</button>
                </div>
            </div>
        </form>

        @foreach ($task as $p)
        <span>{{$p->title}}
        <p class="card-text" style="height: 3em; line-height: 1.5em; overflow:hidden;">{{$p->description}}</p>
        <a href="/edit/{{$p->id}}" class="btn btn-primary">Edit</a>
        <a href="/delete/{{$p->id}}" class="btn btn-danger">Delete</a>
    </span>
        <br>
        @endforeach
    </div>
    <div class="w-100 justify-content-center d-flex py-5">{{$task->links()}}</div>
</div>
    
@endsection