$(function () {
  const bookMenu = '<ul id="bookMenu"><li class="hr"><a href="#">Reading</a></li><li class="hr"><a href="#">Want to Read</a></li><li class="hr"><a href="#">Read</a></li><li style="text-align: center;"><a href="#">Delete</a></li></ul>'

  $('.books-grid > li').mouseenter(function () {
    $(this).find('.book-cover').stop().prepend(bookMenu)
    $('#bookMenu').fadeIn(700)
  }).mouseleave(function () {
    $(this).find('.book-cover > ul').stop().fadeOut(700, () => {
      $(this).find('.book-cover > ul').remove()
    })
  })

})
