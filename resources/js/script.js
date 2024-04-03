document.addEventListener('DOMContentLoaded', function() {
    var canvas = document.getElementById('fireworks');
    var ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Arreglo para almacenar los fuegos artificiales
    var fireworks = [];

    // Función para crear un fuego artificial
    function createFirework() {
      var firework = {
        x: Math.random() * canvas.width,
        y: canvas.height,
        color: randomColor(),
        radius: 10 + Math.random() * 10,
        speed: 8 + Math.random() * 3,
        angle: Math.random() * Math.PI * 0.5 + Math.PI * 0.25, // Ángulo aleatorio entre 45 y 135 grados
        velocity: { x: 0, y: 0 },
        gravity: 0.1
      };

      fireworks.push(firework);
    }

    // Función para generar un color aleatorio en formato RGB
    function randomColor() {
      return '#' + Math.random().toString(16).slice(2, 8);
    }

    // Función para animar los fuegos artificiales
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (var i = 0; i < fireworks.length; i++) {
        var firework = fireworks[i];
        ctx.beginPath();
        var gradient = ctx.createRadialGradient(firework.x, firework.y, 0, firework.x, firework.y, firework.radius);
        gradient.addColorStop(0, firework.color);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.arc(firework.x, firework.y, firework.radius, 0, Math.PI * 2);
        ctx.fill();
        firework.velocity.x = Math.cos(firework.angle) * firework.speed;
        firework.velocity.y = Math.sin(firework.angle) * firework.speed;
        firework.speed -= firework.gravity;
        firework.x += firework.velocity.x;
        firework.y -= firework.velocity.y;
        firework.radius -= 0.2;

        // Remover fuegos artificiales terminados
        if (firework.radius <= 0) {
          fireworks.splice(i, 1);
        }
      }
    }

    // Función para iniciar la animación
    function startAnimation() {
      setInterval(function() {
        createFirework();
      }, 200);

      setInterval(animate, 1000 / 60); // Actualiza aproximadamente 60 veces por segundo
    }

    // Iniciar la animación
    startAnimation();
  });