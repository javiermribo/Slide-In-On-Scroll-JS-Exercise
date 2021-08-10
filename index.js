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

const checkSlide = () => {
  allImgs.forEach(allImg => {
    const slideInAtHalf = (window.scrollY + window.innerHeight) - allImg.height / 2;
    const imgBottom = allImg.offsetTop + allImg.height;
    const isHalfShown = slideInAtHalf > allImg.offsetTop;
    const isNotScrolledPast = window.scrollY < imgBottom;
    if(isHalfShown && isNotScrolledPast) {
      allImg.classList.add('active')
    } else {
      allImg.classList.remove('active')
    }
  })
}


window.addEventListener('scroll', debounce(checkSlide))

const allImgs = document.querySelectorAll('.slide-in');