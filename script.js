const inpResizer = document.querySelector('.slider__input');
const image = document.querySelector('.slider__image');
image.setAttribute('width', inpResizer.value);

function resize (event) {
    image.setAttribute('width', event.target.value)
}

inpResizer.addEventListener('input', _.debounce(resize,
300,
{
    leading: true,
    trailing: false,
}));
