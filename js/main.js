// Navbar scroll
$(document).ready(() => {
    const nav = $('.navbar');
    const doc = $(document);
    const win = $(window);
  
    win.scroll(() => {
      if (doc.scrollTop() > 80) {
        nav.addClass('scrolled');
      } else {
        nav.removeClass('scrolled');
      }
    });
  
    win.scroll();
  });
  
  // Btn More-Less
  $("#more").click(function() {
    const $this = $(this);
    $this.toggleClass('more');
    if ($this.hasClass('more')) {
      $this.text('More');
    } else {
      $this.text('Less');
    }
  });
  
  // Slideanim
  $(window).scroll(() => {
    $(".slideanim").each(function() {
      const pos = $(this).offset().top;
      const winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide");
      }
    });
  });
  
  // Smooth Scrolling
  $(document).ready(() => {
    $(".navbar a, #service a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        const hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, () => {
          window.location.hash = hash;
        });
      }
    });
  
    // Scroll to Top
    $(window).scroll(() => {
      if ($(this).scrollTop() >= 300) {
        $('.to-top').fadeIn(200);
      } else {
        $('.to-top').fadeOut(200);
      }
    });
    
    $('.to-top').click(() => {
      $('body, html').animate({
        scrollTop: 0
      }, 500);
    });
  });
  