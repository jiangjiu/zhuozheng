$(function () {
  var $nav = $('.nav'),
    $container = $('.container'),
    $headerNav = $('.header-nav');

  $headerNav.on('click', function () {
    if(!$(this).hasClass('complete')){
      $nav.css({transform: 'translate(4.12rem,0)'});
      $container.css({transform: 'translate(4.12rem,0)'});
      $headerNav.addClass('complete');
    }else {
      $nav.css({transform: 'translate(0,0)'});
      $container.css({transform: 'translate(0,0)'});
      $(this).removeClass('complete');
    }
  });
});