<div class="component">

    <form class="form" wire:submit="">
        <p class="titleContacto">Contactame</p>
        <p class="message">Envíame un mensaje y trabajemos juntos!.</p>
        <div class="flexInput">
            <label>
                <input wire:model="name" required placeholder="" type="text" class="input">
                <span>Nombre</span>
            </label>

            <label>
                <input wire:model="asunto" required placeholder="" type="text" class="input">
                <span>Asunto</span>
            </label>
        </div>

        <label>
            <input wire:model="email" required placeholder="" type="email" class="input">
            <span>Email</span>
        </label>

        <textarea class="textarea" placeholder="Escribe un mensaje..." wire:model="mensaje" cols="50" rows="10"></textarea>

        <button class="submit" wire:click="contacto">Enviar mensaje</button>

        <div class="error">
            @if (session()->has('error'))
                <small class="errorMesage">{{ session('error') }}</small>
            @endif
             @if (session()->has('success'))
                <small class="success">{{ session('success') }}</small>
            @endif
        </div>

        <div class="loader" wire:loading>
            <div class="justify-content-center jimu-primary-loading"></div>
        </div>
    </form>
</div>
