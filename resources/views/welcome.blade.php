@extends('layouts.app')

@section('content')
<div class="container justify-content-center d-flex flex-wrap py-4">
            <div class="content">
                @foreach ($task as $p)
                <span>{{$p->title}}
                <a href="/details/{{$p->id}}" class="link-primary">View details</a>
                <p class="card-text" style="height: 3em; line-height: 1.5em; overflow:hidden;">{{$p->description}}</p>
            </span>
                <br>
                @endforeach
                
            </div>
    </div>

         {{-- pagination --}}
         <div class="w-100 justify-content-center d-flex py-5">{{$task->links()}}</div>
        </div>
    @endsection