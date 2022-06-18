function disableScroll() {
  document.body.classList.add("stop-scrolling");
}

$('.clickButtons').click(function(e) {
  e.preventDefault();
  const id = this.id;
  if (id === 'topButton') {
    $('#history').hide();
    $('#game').show();
    $('footer').hide();
    disableScroll();
} else {    
    $('#history').show();
    $('#game').hide();
    $('footer').show();
  }
});