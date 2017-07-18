$(function () {
  /* $('#logo').on('hover', function () {
    $(this).fadeTo(50, 700)
  }) */

  $('.books-grid > li').mouseenter(function () {
    $(this).stop().fadeTo(400, 0.2)
  }).mouseleave(function () {
    $(this).stop().fadeTo(400, 1)
  })
})
