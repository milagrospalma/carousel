$(document).ready(function() {
  // Declaración e inicialización de variables
  var target = 0;
  var buttons = $('.control');
  var previous = $('.previous');
  var next = $('.next');

  // Cuando se selecciona un botón
  buttons.click(function() {
    // target almacena la posición de la imagen seleccionada
    target = $(this).data('target');
    // console.log(typeof(target));
    showImage(target);
  });

  // Cuando se selecciona en dirección a la izquierda
  previous.click(function(e) {
    e.preventDefault();
    target = target - 1;
    // console.log(target);
    target = (target < 0) ? 4 : target;
    // console.log(target);
    showImage(target);
  });

  // Cuando se selecciona en dirección a la derecha
  next.click(function(e) {
    e.preventDefault();
    target = target + 1;
    // console.log(target);
    target = (target > 4) ? 0 : target;
    // console.log(target);
    showImage(target);
  });

  function showImage(target) {
    var lastSlide = $('.visible');
    console.log(lastSlide);
    var slide = $('div[data-slide="' + target + '"]');
    console.log(slide);
    // Elimina la clase de la anterior imagen
    lastSlide.removeClass('visible');
    // Agrega la clase a la nueva imagen
    slide.addClass('visible');
  }
});
