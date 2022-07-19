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