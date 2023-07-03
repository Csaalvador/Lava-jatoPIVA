  var containers = document.querySelectorAll('.container-header');

  containers.forEach(function(container) {
    var submenu = container.querySelector('.submenu');

    container.addEventListener('mouseover', function() {
      submenu.style.display = 'block';
    });

    container.addEventListener('mouseout', function() {
      submenu.style.display = 'none';
    });
  });
