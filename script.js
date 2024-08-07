// script.js

// Add smooth scrolling to all links
$('a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();
    const hash = event.currentTarget.hash;
    const targetElement = $(hash);
    if (targetElement.length) {
      $('html, body').animate({
        scrollTop: targetElement.offset().top
      }, 800);
    }
  }
});

// Add hover effects to buttons
$('button').hover(function() {
  $(this).addClass('hover');
}, function() {
  $(this).removeClass('hover');
});

// Add loading animation to form
$('form').submit(function() {
  $(this).find('button').prop('disabled', true);
  $(this).find('button').html('<i class="fas fa-spinner fa-spin"></i> Sending...');
});
