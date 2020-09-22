<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    public function seller()
    {
        return $this->belongsTo('App\User',"admin_id");
    }
}
