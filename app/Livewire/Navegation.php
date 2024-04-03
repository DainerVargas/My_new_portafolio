<?php

namespace App\Livewire;

use Livewire\Component;

class Navegation extends Component
{
   /*  public $value = 1;

    public function section($value){
        $this->value = $value;
    } */

    public function render()
    {
        $dia_semana = date("N");
        switch ($dia_semana) {
            case 1:
                $nombre_dia = "lunes";
                break;
            case 2:
                $nombre_dia = "martes";
                break;
            case 3:
                $nombre_dia = "miércoles";
                break;
            case 4:
                $nombre_dia = "jueves";
                break;
            case 5:
                $nombre_dia = "viernes";
                break;
            case 6:
                $nombre_dia = "sábado";
                break;
            case 7:
                $nombre_dia = "domingo";
                break;
            default:
                $nombre_dia = "dia";
                break;
        }
        return view('livewire.navegation', compact('nombre_dia'));
    }


}
