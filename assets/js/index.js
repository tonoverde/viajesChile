const myCarouselElement = document.querySelector('#carrusel')
g
$("#carrusel").carousel();

$(".carousel-item").click(function(){
  $("#carrusel").carousel(1);
});
$(".carousel-control-next").click(function(){
  $("#carrusel").carousel("carousel-control-next-icon");
});