// let items = document.querySelectorAll(
//     '#featureContainer .carousel .carousel-item'
// );
// items.forEach((el) => {
//     const minPerSlide = 7;
//     let next = el.nextElementSibling;
//     for (var i = 1; i < minPerSlide; i++) {
//         if (!next) {
//             // wrap carousel by using first child
//             next = items[0];
//         }
//         let cloneChild = next.cloneNode(true);
//         el.appendChild(cloneChild.children[0]);
//         next = next.nextElementSibling;
//     }
// });
// $(document).ready(function () {
//     $('#featureCarousel').carousel({ interval: false });
//     $('#featureCarousel').carousel('pause');
// });



// Stars
document.addEventListener("DOMContentLoaded", function() {
  var amount = 30;
  var body = document.querySelector('body');
  var i = 0;
  
  while (i < amount) {
  var node = document.createElement("i");
  var posX = Math.floor(Math.random() * window.innerWidth);
  var posY = Math.floor(Math.random() * window.innerHeight);
  var rotation = Math.random() * 180;
  var delay = Math.random() * 20;
  var scale = Math.random() * 0.2;
  node.style.left = posX+'px';
  node.style.top = posY+'px';
  node.style.transform = 'rotate('+rotation+'deg) scale('+scale+')';
  node.style.animationDelay = delay+'s';
  body.appendChild(node);
  i++;
  }
  
});

// Carousel
let items = document.querySelectorAll('#featureContainer .carousel .carousel-item');
items.forEach((el) => {
  const minPerSlide = 6
  let next = el.nextElementSibling
  for (var i=1; i<minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = items[0]
    }
    let cloneChild = next.cloneNode(true)
    el.appendChild(cloneChild.children[0])
    next = next.nextElementSibling
  }
})
$(document).ready(function(){
  $('#featureCarousel').carousel({interval: 2000});
  $('#featureCarousel').carousel('pause');
});


//  stars


