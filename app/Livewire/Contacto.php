<?php

namespace App\Livewire;

use App\Mail\contactoMail;
use Illuminate\Support\Facades\Mail;
use Livewire\Component;

class Contacto extends Component
{
    public $name, $email, $asunto, $mensaje;

    public function contacto()
    {

        if ($this->mensaje == '' || $this->name == '' || $this->email == '' || $this->asunto == '') {
            return session()->flash('error', 'Todos los campos son requeridos.');
        }

        try {
            Mail::to('dainer2607@gmail.com')->send(new contactoMail($this->name, $this->email, $this->asunto, $this->mensaje));

            $this->name = "";
            $this->email = "";
            $this->asunto = "";
            $this->mensaje = "";

            return session()->flash('success', 'Mensaje enviado exitosamente!.');

        } catch (\Throwable $th) {
            dd('Error: '.$th->getMessage());
        }
    }
    public function render()
    {
        return view('livewire.contacto');
    }
}
