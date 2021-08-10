function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const checkSlide = e => {
  imgSelector.forEach(image => {
    const slideInAt = (window.scrollY + window.innerHeight) - image.height / 2; 
              //posición ventana borde inferior + altura ventana - altura de imag /2. Se muestra imagen cuando se alcanza la mitad de su altura al hacer scroll
    const imageBottom = image.offsetTop + image.height;
              //Posición borde sup. de img + altura img = posición img borde inf.
    const isHalfShown = slideInAt > image.offsetTop;
    const isNotScrolledPast  = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      image.classList.add('active')
    } else {
      image.classList.remove('active')
    }
  })
}


window.addEventListener('scroll', debounce(checkSlide))

const imgSelector = document.querySelectorAll('.slide-in')