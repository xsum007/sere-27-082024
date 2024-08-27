$(document).ready(function()
{
   $("a[href*='#header']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_header').offset().top }, 600, 'easeOutCirc');
   });
   $("#PhotoCollage1").photocollage({ effect: 'scale', duration: 600, padding: 15, matrix: '1,2,0,1,0,0,1,1,1' });
});
