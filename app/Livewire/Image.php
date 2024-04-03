<?php

namespace App\Livewire;

use Livewire\Component;

class Image extends Component
{
    public $active = "image";
    public $close = "open_in_new";

    public function image()
    {

        if ($this->active == "image") {
            $this->active = 'active';
        } else {
            $this->active = 'image';
        }

        $this->close = 'close';
    }



    public function render()
    {
        return view('livewire.image');
    }
}
