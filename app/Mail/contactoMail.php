<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class contactoMail extends Mailable
{
    use Queueable, SerializesModels;

    public $name, $email, $asunto, $mensaje;

    public function __construct($name, $email, $asunto, $mensaje)
    {
        $this->name = $name;
        $this->email = $email;
        $this->asunto = $asunto;
        $this->mensaje = $mensaje;
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: $this->asunto,
        );
    }

    public function build()
    {
        return $this->subject($this->asunto)->view('emails.contactoMail')
            ->with(
                [
                    'name' => $this->name,
                    'email' => $this->email,
                    'mensaje' => $this->mensaje,
                ]
            );
    }
}
