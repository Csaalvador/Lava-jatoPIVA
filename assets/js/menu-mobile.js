const menu = document.querySelector('.container-menu-lateral');

document.querySelector('.icon-menu').onclick = () => {
  menu.classList.toggle('active');

  window.onclick = (e) => {
    if (e.target == menu) {
      menu.classList.remove('active');
    }
  }
}



