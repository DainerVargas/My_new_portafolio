
const abrir = document.querySelectorAll('.abrir');
const image = document.querySelectorAll('.image');
const conte_image = document.querySelectorAll('.container__image');
const conte = document.querySelectorAll('.container');

abrir.forEach((eleme, index) => {
    eleme.addEventListener('click', () => {
        image.forEach((img, inde) => {
            if (index == inde) {
                img.style.height = "40vw";

            }
        });
    });
});
