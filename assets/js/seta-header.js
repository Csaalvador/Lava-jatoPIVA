const rotateElements = document.querySelectorAll('.container-nav');

rotateElements.forEach(element => {
  element.addEventListener('mousemove', () => {
    element.classList.add('active');
  }
    )
    element.addEventListener('mouseleave', () => {
        element.classList.remove('active');
    }
    )
});