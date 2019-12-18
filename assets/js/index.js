var wrap = $("#wrap");

wrap.on("scroll", function(e) {

  if (this.scrollTop > 1000) {
    wrap.addClass("top-nav");
  } else {
    wrap.removeClass("top-nav");
  }

});
